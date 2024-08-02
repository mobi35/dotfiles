#!/bin/bash

param_project_name=""
param_website_link=""
param_prefix="wp_"

# Parse options
while getopts ":p:w:pr:" opt; do
  case ${opt} in
    p)
      param_project_name="$OPTARG"
      ;;
    w)
      param_website_link="$OPTARG"
      ;;
    pr)
      param_prefix="$OPTARG"
      ;;
    \?)
      echo "Invalid option: -$OPTARG" >&2
      exit 1
      ;;
    :)
      echo "Option -$OPTARG requires an argument." >&2
      exit 1
      ;;
  esac
done

# Shift to remove options from positional parameters
shift $((OPTIND -1))

# Main script logic using parameters
echo "Parameter a: $param_project_name";
echo "Parameter b: $param_website_link";

project_dir="/home/adichan/dev/www/wordpress_sites/$param_project_name"

if [ -d "$project_dir" ]; then
  echo "Directory $project_dir already exists. Exiting."
  exit 1
else
  mkdir $project_dir && cd $project_dir;
fi

docker exec -it -u $(id -u):$(id -g) wpcli wp --allow-root core download --path="/www/$param_project_name";
docker exec -it -u $(id -u):$(id -g) wpcli wp --allow-root core config --dbname=$param_project_name --dbuser=root --dbpass=root --dbhost=mariadb --dbprefix=$param_prefix --path="/www/$param_project_name";
docker exec -it -u $(id -u):$(id -g) wpcli wp --allow-root db create
docker exec -it -u $(id -u):$(id -g) wpcli wp --allow-root core install --url=http://$param_website_link --title=$param_project_name --admin_user=admin --admin_password=admin --admin_email=mobistyle35@gmail.com --path="/www/$param_project_name" && echo "127.0.0.1      $param_website_link" >> /etc/hosts;

nginx_filename="/home/adichan/dev/nginx-configs/$param_project_name.conf";


chown -R adichan:adichan $project_dir;

touch $nginx_filename;
chown adichan:adichan $nginx_filename;

cat <<EOL > $nginx_filename
server {
    listen 80;
    server_name $param_website_link;

    client_max_body_size 108M;

    access_log /var/log/nginx/application.access.log;

    root /www/wordpress_sites/$param_project_name;
    index index.php;

    location / {
        try_files \$uri /index.php\$is_args\$args;
    }

    if (!-e \$request_filename) {
        rewrite ^.*\$ /index.php last;
    }

    location ~ \.php\$ {
        fastcgi_pass php-fpm:9000;
        fastcgi_index index.php;
        fastcgi_param SCRIPT_FILENAME \$document_root\$fastcgi_script_name;
        fastcgi_param PHP_VALUE "error_log=/var/log/nginx/application_php_errors.log";
        fastcgi_buffers 16 16k;
        fastcgi_buffer_size 32k;
        include fastcgi_params;
    }
}
EOL


if [ $# -gt 0 ]; then
  echo "Remaining arguments:"
  for arg in "$@"; do
    echo "$arg"
  done
fi
