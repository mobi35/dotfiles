require("mason").setup()
require("mason-lspconfig").setup()

local lspconfig = require("lspconfig")

lspconfig.tsserver.setup({
	on_attach = on_attach,
})

lspconfig.lua_ls.setup({
	on_attach = on_attach,
})

lspconfig.phpactor.setup({
	on_attach = on_attach,
})

lspconfig.terraformls.setup({
	on_attach = on_attach,
})

lspconfig.csharp_ls.setup({
	on_attach = on_attach,
})

local capabilities = require("cmp_nvim_lsp").default_capabilities()

lspconfig.cssls.setup({
	capabilities = capabilities,
})

---------- TreeSitter
--
--

require("nvim-treesitter.configs").setup({
	ensure_installed = { "c", "lua", "php", "typescript", "query" },
	highlight = {
		enable = true,
	},
})

vim.api.nvim_create_autocmd("FileType", {
	pattern = "php",
	callback = function()
		require("nvim-treesitter.configs").setup({
			indent = {
				enable = true,
			},
		})
	end,
})
