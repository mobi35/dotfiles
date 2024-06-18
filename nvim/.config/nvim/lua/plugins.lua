local plugins = {
{ "ellisonleao/gruvbox.nvim", config = true },

{
    'nvim-lualine/lualine.nvim',
    dependencies = { 'nvim-tree/nvim-web-devicons' }
},
{
	"nvim-pack/nvim-spectre",
	    dependencies = { 'nvim-lua/plenary.nvim' }
},

{ "folke/which-key.nvim" },
{ "windwp/nvim-autopairs" },
{ "tpope/vim-commentary" },
{ "tpope/vim-abolish" },
{ "tpope/vim-sleuth" },
{ "zefei/vim-colortuner" },
{ "tommcdo/vim-lion" },
{ 'nvim-treesitter/nvim-treesitter', tag = 'v0.9.2' },
-- { "ntpeters/vim-better-whitespace" },
{ "stevearc/oil.nvim" },
{ "lewis6991/gitsigns.nvim" },
{ "kdheepak/lazygit.nvim" },
{
'nvim-telescope/telescope.nvim', tag = '0.1.6',
dependencies = { 'nvim-lua/plenary.nvim' }

},
{
    "kylechui/nvim-surround",
    version = "*", -- Use for stability; omit to use `main` branch for the latest features
    event = "VeryLazy",
    config = function()
        require("nvim-surround").setup({
            -- Configuration here, or leave empty to use defaults
        })
    end
},

--- CODE COMPLETION
--
--
--
{ "neovim/nvim-lspconfig"},
{ "williamboman/mason.nvim"},
{ "williamboman/mason-lspconfig.nvim"},

{ "hrsh7th/cmp-nvim-lsp"},
{ "hrsh7th/cmp-buffer"},
{ "hrsh7th/cmp-path"},
{ "hrsh7th/cmp-cmdline"},
{ "hrsh7th/nvim-cmp",
dependencies = {
       "saadparwaiz1/cmp_luasnip",
       "rafamadriz/friendly-snippets" ,
 }
},
{ "hrsh7th/vim-vsnip",
 run = "make install_jsregexp"
},
{ "SirVer/ultisnips"},
{ "quangnguyen30192/cmp-nvim-ultisnips"},
{ "windwp/nvim-ts-autotag"},
{'kevinhwang91/nvim-ufo', requires = 'kevinhwang91/promise-async'}
}


return plugins

