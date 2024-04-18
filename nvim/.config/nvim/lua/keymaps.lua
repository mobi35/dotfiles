local wk = require("which-key")

local function map(mode, lhs, rhs, opts)
  local options = { noremap=true, silent=true }
  if opts then
    options = vim.tbl_extend('force', options, opts)
  end
  vim.api.nvim_set_keymap(mode, lhs, rhs, options)
end

map('i', 'jk', '<Esc>')

wk.register({
   g = {
    name = "git",
    g = { "<cmd>LazyGit<cr>", "Git" }, 
   },
   

  f = {
    name = "file",
    f = { "<cmd>Telescope find_files<cr>", "Find File" }, 
    g = { "<cmd>Telescope live_grep<cr>", "Grep" } 
   }, { prefix = "<leader>" }

   })

vim.keymap.set("n", "-", "<CMD>Oil<CR>", { desc = "Open parent directory" })

vim.keymap.set("n", "<S-h>", ":tabprevious<cr>", {desc = "Previous tab"})
vim.keymap.set("n", "<S-l>", ":tabnext<cr>", {desc = "Next tab"})

local bufopts = { noremap=true, silent=true, buffer=bufnr }
vim.keymap.set('n', 'gd', vim.lsp.buf.definition, bufopts)
vim.keymap.set("n", "gt", ":vsplit | lua vim.lsp.buf.definition()<CR>")
vim.keymap.set('n', '<Esc>', '<CMD>nohlsearch<CR>')

vim.keymap.set("n", "<C-k>", "/")




