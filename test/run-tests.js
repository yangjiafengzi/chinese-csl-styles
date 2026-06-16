const fs = require('fs');
const path = require('path');

console.log('='.repeat(50));
console.log('CSL自动化测试开始');
console.log('='.repeat(50));
console.log('');

let allPassed = true;

// 1. 运行CSL Schema验证
console.log('1. CSL Schema验证');
console.log('-'.repeat(30));
try {
  const validate = require('./validate.js');
  if (validate.failed > 0) {
    allPassed = false;
  }
} catch (error) {
  console.log('验证脚本运行失败:', error.message);
  allPassed = false;
}
console.log('');

// 2. 生成引文输出（可选）
console.log('2. 引文输出生成');
console.log('-'.repeat(30));
console.log('注意：由于CSL文件使用多个layout元素，Pandoc无法处理。');
console.log('跳过引文输出生成步骤。');
console.log('');

// 3. 输出对比验证（可选）
console.log('3. 输出对比验证');
console.log('-'.repeat(30));
console.log('注意：由于跳过输出生成，也跳过输出对比验证。');
console.log('');

// 4. 生成测试报告
console.log('4. 测试报告');
console.log('='.repeat(50));

if (allPassed) {
  console.log('✓ CSL Schema验证通过！');
  console.log('');
  console.log('注意：引文输出验证需要Zotero或其他支持多个layout元素的CSL处理器。');
  process.exit(0);
} else {
  console.log('✗ CSL Schema验证失败');
  process.exit(1);
}