#!/usr/bin/env node

/**
 * File Size Checker - Prevents timeout issues by checking file sizes before reading
 * Usage: node scripts/check-file-size.js <filepath>
 */

const fs = require('fs');
const path = require('path');

function getFileInfo(filePath) {
  try {
    const stats = fs.statSync(filePath);
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n').length;
    const sizeKB = Math.round(stats.size / 1024);
    
    return {
      path: filePath,
      size: stats.size,
      sizeKB,
      lines,
      isLarge: lines > 1000,
      isVeryLarge: lines > 3000
    };
  } catch (error) {
    return {
      path: filePath,
      error: error.message
    };
  }
}

function getReadingStrategy(fileInfo) {
  if (fileInfo.error) return 'error';
  if (fileInfo.isVeryLarge) return 'search';
  if (fileInfo.isLarge) return 'chunked';
  return 'full';
}

function getRecommendations(fileInfo) {
  const strategy = getReadingStrategy(fileInfo);
  
  switch (strategy) {
    case 'search':
      return {
        strategy: 'Use semantic search',
        reason: `File is very large (${fileInfo.lines} lines, ${fileInfo.sizeKB}KB)`,
        alternatives: [
          'codebase_search("your query", [])',
          'grep_search("exact text", "filename")',
          'read_file("filename", false, startLine, endLine)'
        ]
      };
    case 'chunked':
      return {
        strategy: 'Use chunked reading',
        reason: `File is large (${fileInfo.lines} lines, ${fileInfo.sizeKB}KB)`,
        alternatives: [
          'read_file("filename", false, 1, 200)',
          'read_file("filename", false, 201, 400)',
          'codebase_search("specific content", [])'
        ]
      };
    case 'full':
      return {
        strategy: 'Safe to read entirely',
        reason: `File is manageable (${fileInfo.lines} lines, ${fileInfo.sizeKB}KB)`,
        alternatives: [
          'read_file("filename", true)',
          'read_file("filename", false, startLine, endLine)'
        ]
      };
    case 'error':
      return {
        strategy: 'File not found or error',
        reason: fileInfo.error,
        alternatives: [
          'Check file path',
          'Use file_search("filename")',
          'Use list_dir("directory")'
        ]
      };
  }
}

function main() {
  const filePath = process.argv[2];
  
  if (!filePath) {
    console.log('Usage: node scripts/check-file-size.js <filepath>');
    console.log('Example: node scripts/check-file-size.js package-lock.json');
    process.exit(1);
  }
  
  const fileInfo = getFileInfo(filePath);
  const recommendations = getRecommendations(fileInfo);
  
  console.log('\n📁 File Analysis Report');
  console.log('='.repeat(50));
  
  if (fileInfo.error) {
    console.log(`❌ Error: ${fileInfo.error}`);
  } else {
    console.log(`📄 File: ${fileInfo.path}`);
    console.log(`📊 Size: ${fileInfo.sizeKB}KB (${fileInfo.size} bytes)`);
    console.log(`📝 Lines: ${fileInfo.lines}`);
    console.log(`⚠️  Large: ${fileInfo.isLarge ? 'Yes' : 'No'}`);
    console.log(`🚨 Very Large: ${fileInfo.isVeryLarge ? 'Yes' : 'No'}`);
  }
  
  console.log('\n💡 Recommendation');
  console.log('-'.repeat(30));
  console.log(`Strategy: ${recommendations.strategy}`);
  console.log(`Reason: ${recommendations.reason}`);
  
  console.log('\n🛠️  Alternatives:');
  recommendations.alternatives.forEach((alt, index) => {
    console.log(`  ${index + 1}. ${alt}`);
  });
  
  console.log('\n📚 Quick Reference:');
  console.log('-'.repeat(30));
  console.log('• < 500 lines: Safe to read entirely');
  console.log('• 500-1000 lines: Use chunked reading');
  console.log('• > 1000 lines: Use semantic search');
  console.log('• > 3000 lines: Avoid reading entirely');
}

if (require.main === module) {
  main();
}

module.exports = { getFileInfo, getReadingStrategy, getRecommendations }; 