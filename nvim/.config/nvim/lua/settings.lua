vim.o.timeout = true
vim.o.timeoutlen = 200

vim.cmd[[
augroup highlight_yank
autocmd!
au TextYankPost * silent! lua vim.highlight.on_yank({higroup="Visual", timeout=150})
augroup END
]]


