const fs = require('fs');
const path = require('path');
const xml2js = require('xml2js');

// 获取所有CSL文件
const cslFiles = fs.readdirSync('.')
  .filter(file => file.endsWith('.csl'))
  .map(file => path.basename(file));

console.log('CSL Schema验证开始...\n');

let passed = 0;
let failed = 0;
const results = [];

// 验证每个CSL文件
cslFiles.forEach(file => {
  try {
    const content = fs.readFileSync(file, 'utf-8');
    
    // 使用xml2js解析XML
    const parser = new xml2js.Parser();
    parser.parseString(content, (err, result) => {
      if (err) {
        console.log(`✗ ${file}: 失败`);
        console.log(`  错误: XML解析失败 - ${err.message}`);
        results.push({ file, status: '失败', message: `XML解析失败: ${err.message}` });
        failed++;
      } else {
        // 检查是否是有效的CSL文件
        if (result.style && result.style.$ && result.style.$.xmlns === 'http://purl.org/net/xbiblio/csl') {
          console.log(`✓ ${file}: 通过`);
          results.push({ file, status: '通过', message: '' });
          passed++;
        } else {
          console.log(`✗ ${file}: 失败`);
          console.log(`  错误: 不是有效的CSL文件`);
          results.push({ file, status: '失败', message: '不是有效的CSL文件' });
          failed++;
        }
      }
    });
  } catch (error) {
    console.log(`✗ ${file}: 失败`);
    console.log(`  错误: ${error.message}`);
    results.push({ file, status: '失败', message: error.message });
    failed++;
  }
});

// 输出总结
console.log('\n验证总结:');
console.log(`  总计: ${cslFiles.length} 个文件`);
console.log(`  通过: ${passed} 个`);
console.log(`  失败: ${failed} 个`);

// 返回结果
module.exports = { results, passed, failed };