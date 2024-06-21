vim.g.mapleader = ","

local lazypath = vim.fn.stdpath("data") .. "/lazy/lazy.nvim"
if not (vim.uv or vim.loop).fs_stat(lazypath) then
	vim.fn.system({
		"git",
		"clone",
		"--filter=blob:none",
		"https://github.com/folke/lazy.nvim.git",
		"--branch=stable", -- latest stable release
		lazypath,
	})
end
vim.opt.rtp:prepend(lazypath)

local plugins = require("plugins")
require("lazy").setup(plugins, opts)
require("plugin_configs")
require("settings")
require("keymaps")
require("codecompletion")
require("languageserver")
require("linter")
require("snippets")

vim.cmd([[
so ~/.config/nvim/main.vim
]])

vim.cmd([[colorscheme gruvbox]])
