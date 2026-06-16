/**
 * 输出对比验证脚本
 * 
 * 状态：当前不可用
 * 
 * 原因：依赖generate-output.js生成实际输出，
 * 而该脚本因CSL文件使用多个layout元素而无法工作。
 * 
 * 替代方案：使用Zotero手动测试，并与expected-output/中的样本对比
 * 
 * 未来改进：可考虑使用其他CSL处理器（如citeproc-js）
 */

const fs = require('fs');
const path = require('path');

console.log('此脚本当前不可用');
console.log('');
console.log('原因：依赖generate-output.js生成实际输出，');
console.log('而该脚本因CSL文件使用多个layout元素而无法工作。');
console.log('');
console.log('替代方案：');
console.log('1. 使用Zotero手动测试引文输出');
console.log('2. 将输出与test/expected-output/中的样本对比');
console.log('3. 参考test/README.md中的手动测试说明');

// 保留原始代码以供未来参考
/*
const stylesToCompare = ['社会学研究', '开放时代', '武汉大学学报（哲学社会科学版）'];

console.log('输出对比验证开始...\n');

let totalPassed = 0;
let totalFailed = 0;
const results = [];

stylesToCompare.forEach(styleName => {
  const expectedFile = `test/expected-output/${styleName}样式预期输出.txt`;
  const actualFile = `test/actual-output/${styleName}.txt`;
  
  console.log(`比对 ${styleName} 样式...`);
  
  if (!fs.existsSync(expectedFile)) {
    console.log(`  ✗ 预期输出文件不存在: ${expectedFile}`);
    results.push({ style: styleName, status: '失败', message: '预期输出文件不存在' });
    totalFailed++;
    return;
  }
  
  if (!fs.existsSync(actualFile)) {
    console.log(`  ✗ 实际输出文件不存在: ${actualFile}`);
    results.push({ style: styleName, status: '失败', message: '实际输出文件不存在' });
    totalFailed++;
    return;
  }
  
  const expected = fs.readFileSync(expectedFile, 'utf-8').trim();
  const actual = fs.readFileSync(actualFile, 'utf-8').trim();
  
  if (expected === actual) {
    console.log(`  ✓ ${styleName}: 输出一致`);
    results.push({ style: styleName, status: '通过', message: '' });
    totalPassed++;
  } else {
    console.log(`  ✗ ${styleName}: 输出不一致`);
    const expectedLines = expected.split('\n');
    const actualLines = actual.split('\n');
    const diffLines = [];
    
    for (let i = 0; i < Math.max(expectedLines.length, actualLines.length); i++) {
      if (expectedLines[i] !== actualLines[i]) {
        diffLines.push({
          line: i + 1,
          expected: expectedLines[i] || '(无)',
          actual: actualLines[i] || '(无)'
        });
      }
    }
    
    console.log(`    差异行数: ${diffLines.length}`);
    results.push({ 
      style: styleName, 
      status: '失败', 
      message: `输出不一致，${diffLines.length}行差异`,
      diff: diffLines 
    });
    totalFailed++;
  }
});

console.log('\n对比验证总结:');
console.log(`  总计: ${stylesToCompare.length} 个样式`);
console.log(`  通过: ${totalPassed} 个`);
console.log(`  失败: ${totalFailed} 个`);

module.exports = { results, totalPassed, totalFailed };
*/