const fs = require('fs');
const path = require('path');
const Parser = require('rss-parser');

const CONFIG = {
  weiboUid: '7901094930',
  
  biliUid: '276559140', 
  
  dataPath: path.join(__dirname, '../data/updates.json'),
  
  maxItems: 200,
};

const parser = new Parser({
  customFields: {
    item: [
      ['media:content', 'mediaContent'],
      ['description', 'description'],
    ]
  }
});

async function fetchWeibo() {
  try {
    const url = `https://rsshub.app/weibo/user/${CONFIG.weiboUid}`;
    console.log(`抓取微博: ${url}`);
    
    const feed = await parser.parseURL(url);
    
    return feed.items.map(item => ({
      id: item.guid || item.link,
      platform: 'weibo',
      title: item.title || '微博更新',
      link: item.link || '#',
      pubDate: item.pubDate || new Date().toISOString(),
      content: item.content || item.description || '',
      media: item.mediaContent || [],
    }));
  } catch (error) {
    console.error('微博抓取失败:', error.message);
    return [];
  }
}

async function fetchBilibili() {
  try {
    if (CONFIG.biliUid === 'YOUR_BILI_UID') {
      console.log('B站UID未配置，跳过');
      return [];
    }
    
    const url = `https://rsshub.app/bilibili/user/video/${CONFIG.biliUid}`;
    console.log(`抓取B站: ${url}`);
    
    const feed = await parser.parseURL(url);
    
    return feed.items.map(item => ({
      id: item.guid || item.link,
      platform: 'bilibili',
      title: item.title || 'B站更新',
      link: item.link || '#',
      pubDate: item.pubDate || new Date().toISOString(),
      content: item.description || '',
      media: [],
    }));
  } catch (error) {
    console.error('B站抓取失败:', error.message);
    return [];
  }
}

function saveData(allUpdates) {
  const dataPath = CONFIG.dataPath;
  
  // 读取现有数据
  let existing = { weibo: [], bilibili: [], lastUpdated: '' };
  try {
    if (fs.existsSync(dataPath)) {
      existing = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
    }
  } catch (error) {
    console.warn('读取现有数据失败，将创建新文件');
  }
  
  const platforms = ['weibo', 'bilibili'];
  let hasNew = false;
  
  platforms.forEach(platform => {
    const newItems = allUpdates[platform] || [];
    const existingItems = existing[platform] || [];
    
    const existingIds = new Set(existingItems.map(item => item.id));
    const addedItems = newItems.filter(item => !existingIds.has(item.id));
    
    if (addedItems.length > 0) {
      hasNew = true;
      existing[platform] = [...addedItems, ...existingItems];
      
      if (existing[platform].length > CONFIG.maxItems) {
        existing[platform] = existing[platform].slice(0, CONFIG.maxItems);
      }
      
      console.log(`${platform} 新增 ${addedItems.length} 条`);
      addedItems.forEach(item => {
        console.log(`   ${item.title.substring(0, 30)}...`);
      });
    } else {
      console.log(`⏸${platform} 无新内容`);
    }
  });
  
  // 如果有更新才保存
  if (hasNew) {
    existing.lastUpdated = new Date().toISOString();
    fs.writeFileSync(dataPath, JSON.stringify(existing, null, 2), 'utf-8');
    console.log(`数据已保存: ${dataPath}`);
    return true;
  }
  
  console.log('⏸没有新内容，无需保存');
  return false;
}

// ===== 主函数 =====
async function main() {
  console.log('开始同步各平台更新...');
  console.log(`${new Date().toLocaleString()}`);
  console.log('━'.repeat(50));
  
  // 抓取所有平台
  const [weiboItems, biliItems] = await Promise.all([
    fetchWeibo(),
    fetchBilibili(),
  ]);
  
  const allUpdates = {
    weibo: weiboItems,
    bilibili: biliItems,
  };
  
  console.log('━'.repeat(50));
  console.log(`微博: ${weiboItems.length} 条, B站: ${biliItems.length} 条`);
  
  // 保存数据
  const saved = saveData(allUpdates);
  
  if (saved) {
    console.log('同步完成！');
  } else {
    console.log('已是最新，无需更新');
  }
}

// ===== 执行 =====
main().catch(error => {
  console.error('同步失败:', error);
  process.exit(1);
});