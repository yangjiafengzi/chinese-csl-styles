/**
 * 引文输出生成脚本
 * 
 * 状态：当前不可用
 * 
 * 原因：CSL文件使用多个layout元素（用于中英文切换），
 * Pandoc的citeproc无法处理这种格式。
 * 
 * 替代方案：使用Zotero手动测试引文输出
 * 
 * 未来改进：可考虑使用其他CSL处理器（如citeproc-js）
 */

const fs = require('fs');
const path = require('path');

console.log('此脚本当前不可用');
console.log('');
console.log('原因：CSL文件使用多个layout元素（用于中英文切换），');
console.log('Pandoc的citeproc无法处理这种格式。');
console.log('');
console.log('替代方案：');
console.log('1. 使用Zotero手动测试引文输出');
console.log('2. 参考 test/README.md 中的手动测试说明');

// 保留原始代码以供未来参考
/*
const { execSync } = require('child_process');

const cslFiles = fs.readdirSync('.')
  .filter(file => file.endsWith('.csl'))
  .map(file => path.basename(file, '.csl'));

const outputDir = 'test/actual-output';
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

console.log('引文输出生成开始...\n');

cslFiles.forEach(styleName => {
  try {
    console.log(`生成 ${styleName} 样式输出...`);
    const command = `pandoc test/test-document.md --citeproc --csl="${styleName}.csl" -o "${outputDir}/${styleName}.txt" --to=plain`;
    execSync(command, { encoding: 'utf-8' });
    console.log(`✓ ${styleName}: 输出已生成`);
  } catch (error) {
    console.log(`✗ ${styleName}: 生成失败`);
    console.log(`  错误: ${error.message}`);
  }
});

console.log('\n输出生成完成！');
console.log(`输出文件保存在: ${outputDir}/`);
*/