# Introduction
Remove all codes that new and delete operator which cause 
failure of compile to wasm.

tree-sitter not recognize scanner.cc as source file, so have to fork a tree-sitter.

# Command to build WASM
``` bash
tree-sitter generate --abi 14
tree-sitter build --wasm
```
