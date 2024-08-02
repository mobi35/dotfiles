set updatetime=100
set nohidden
set autoread
set number
set ruler
let g:AutoPairsFlyMode = 0
    		

set scrolloff=8

set visualbell
set foldlevelstart=99
syntax on
set encoding=utf-8
set wrap
set autoindent
set mouse=a
set tabstop=4
set shiftwidth=4

set nobackup
set nowritebackup
set noswapfile
set cursorline
set relativenumber
set smartindent

set foldmethod=expr
set foldexpr=nvim_treesitter#foldexpr()
set nofoldenable                     " Disable folding at startup.

" press <Tab> to expand or jump in a snippet. These can also be mapped separately
" via <Plug>luasnip-expand-snippet and <Plug>luasnip-jump-next.
imap <silent><expr> <Tab> luasnip#expand_or_jumpable() ? '<Plug>luasnip-expand-or-jump' : '<Tab>' 
" -1 for jumping backwards.
inoremap <silent> <S-Tab> <cmd>lua require'luasnip'.jump(-1)<Cr>

snoremap <silent> <Tab> <cmd>lua require('luasnip').jump(1)<Cr>
snoremap <silent> <S-Tab> <cmd>lua require('luasnip').jump(-1)<Cr>

" For changing choices in choiceNodes (not strictly necessary for a basic setup).
imap <silent><expr> <C-E> luasnip#choice_active() ? '<Plug>luasnip-next-choice' : '<C-E>'
smap <silent><expr> <C-E> luasnip#choice_active() ? '<Plug>luasnip-next-choice' : '<C-E>'


autocmd FileType css setlocal tabstop=4 shiftwidth=4
