require("mason").setup();
require("mason-lspconfig").setup();

local lspconfig = require('lspconfig')

lspconfig.tsserver.setup{
  on_attach = on_attach
}

lspconfig.lua_ls.setup{
  on_attach = on_attach,
}

lspconfig.phpactor.setup{
  on_attach = on_attach,
}

---------- TreeSitter
--
--

require('nvim-treesitter.configs').setup {
  ensure_installed = { "c", "lua", "php", "typescript", "query" },
  highlight = {
	  enable = true
  },
  indent = {
	  enable = true,
  }
}
