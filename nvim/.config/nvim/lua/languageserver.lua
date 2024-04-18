local lspconfig = require('lspconfig')

lspconfig.tsserver.setup{
  on_attach = on_attach
}

lspconfig.lua_ls.setup{
  on_attach = on_attach,
}

lspconfig.intelephense.setup(
	{
  on_attach = function(client, bufnr)
    on_attach(client, bufnr)
    client.server_capabilities.documentFormattingProvider      = false
    client.server_capabilities.documentRangeFormattingProvider = false
  end,
  capabilities = capabilities,
	}
	)

---------- TreeSitter
--
--

require('nvim-treesitter.configs').setup {
  ensure_installed = { "c", "lua", "php", "typescript", "query" },
  highlight = {
	  enable = true
  }
}
