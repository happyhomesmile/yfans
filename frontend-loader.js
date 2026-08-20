// ===== 前端自动加载器 =====
// 用法：在你的 HTML 中引入此脚本，自动读取 data/updates.json 并渲染

class PlatformUpdater {
  constructor(options = {}) {
    this.dataUrl = options.dataUrl || 'data/updates.json?t=' + Date.now();
    this.container = options.container || document.getElementById('weiboFeed');
    this.onUpdate = options.onUpdate || null;
    this.items = [];
  }

  // 加载数据
  async load() {
    try {
      const response = await fetch(this.dataUrl);
      if (!response.ok) throw new Error('网络请求失败');
      const data = await response.json();
      this.items = data.weibo || [];
      console.log(`📦 加载了 ${this.items.length} 条微博数据`);
      return data;
    } catch (error) {
      console.error('❌ 加载数据失败:', error.message);
      return null;
    }
  }

  // 渲染微博卡片
  renderWeiboCard(item) {
    const date = new Date(item.pubDate);
    const dateStr = date.toLocaleString('zh-CN', {
      year: 'numeric', month: '2-digit', day: '2-digit',
      hour: '2-digit', minute: '2-digit'
    }).replace(/\//g, '-');
    
    const card = document.createElement('div');
    card.className = 'weibo-card';
    card.dataset.platform = 'weibo';
    card.dataset.month = date.toISOString().slice(0, 7);
    card.dataset.day = date.getDate().toString().padStart(2, '0');
    
    card.innerHTML = `
      <div class="weibo-time">
        <span class="platform-tag weibo">微博</span>
        ${dateStr}
      </div>
      <div class="weibo-text">
        <span class="line">${this.escapeHtml(item.title)}</span>
      </div>
      <a href="${item.link}" target="_blank" class="weibo-link-button">点击跳转查看原微博</a>
    `;
    
    return card;
  }

  // 简单防XSS
  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  // 渲染所有卡片
  render(data) {
    if (!data || !data.weibo) {
      console.warn('⚠️ 没有数据可渲染');
      return;
    }

    const container = this.container;
    if (!container) {
      console.warn('⚠️ 容器未找到，请设置 container 选项');
      return;
    }

    // 清空容器，保留可能的占位元素
    container.innerHTML = '';

    // 取最近50条
    const items = data.weibo.slice(0, 50);
    
    if (items.length === 0) {
      container.innerHTML = '<div class="empty-state">暂无更新</div>';
      return;
    }

    // 按时间排序（最新的在前）
    items.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));

    // 渲染
    const fragment = document.createDocumentFragment();
    items.forEach(item => {
      const card = this.renderWeiboCard(item);
      fragment.appendChild(card);
    });
    container.appendChild(fragment);

    console.log(`✅ 渲染了 ${items.length} 条微博`);
    
    // 触发回调
    if (this.onUpdate) {
      this.onUpdate(items);
    }
  }

  // 一键执行：加载+渲染
  async refresh() {
    const data = await this.load();
    if (data) {
      this.render(data);
    }
    return data;
  }
}

// ===== 使用示例 =====
document.addEventListener('DOMContentLoaded', async function() {
  // 初始化
  const updater = new PlatformUpdater({
    container: document.getElementById('weiboFeed'),
    dataUrl: 'data/updates.json?t=' + Date.now(),
    onUpdate: (items) => {
      console.log('🎉 更新完成，共', items.length, '条');
    }
  });
  
  // 加载并渲染
  await updater.refresh();
  
  // 暴露到全局，方便调试
  window.platformUpdater = updater;
});

// ===== 手动刷新函数（可在浏览器控制台调用） =====
window.refreshPlatform = async function() {
  if (window.platformUpdater) {
    await window.platformUpdater.refresh();
  } else {
    console.error('请先加载页面');
  }
};