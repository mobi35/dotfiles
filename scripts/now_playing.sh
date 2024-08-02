#!/usr/bin/env bash

playerctlstatus=$(playerctl status 2> /dev/null)

if [[ $playerctlstatus ==  "" ]]; then
    echo ""
    
elif [[ $playerctlstatus =~ "Playing" ]]; then
	name=$(playerctl metadata title)
    echo "󰝚 $name"
    
else
    echo ""
fi

