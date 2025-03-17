import Parser from 'web-tree-sitter';
import { readFileSync } from 'fs';

async function main() {
  await Parser.init();
  const WGSL = await Parser.Language.load("./tree-sitter-wgsl.wasm");

  const parser = new Parser();
  parser.setLanguage(WGSL);
  const t0 = performance.now();
  const sourceCode = readFileSync("./huge.wgsl", {encoding: 'utf8', flag: 'r'});
  console.log(sourceCode);
  const tree = parser.parse(sourceCode);
  console.log(tree.rootNode.toString());
  console.log(`Elapsed: ${performance.now() - t0} ms`);
}

main();
