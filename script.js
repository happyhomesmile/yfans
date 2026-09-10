
// ===== 农历节日数据 (2020-2030) - 硬编码公历日期 =====
const lunarFestivalData = {
  // 春节
  'spring': { name: '春节', dates: {
    2020: '01-25', 2021: '02-12', 2022: '02-01', 2023: '01-22', 2024: '02-10',
    2025: '01-29', 2026: '02-17', 2027: '02-06', 2028: '01-26', 2029: '02-13', 2030: '02-03'
  }},
  // 元宵节
  'lantern': { name: '元宵节', dates: {
    2020: '02-08', 2021: '02-26', 2022: '02-15', 2023: '02-05', 2024: '02-24',
    2025: '02-12', 2026: '03-03', 2027: '02-20', 2028: '02-09', 2029: '02-27', 2030: '02-17'
  }},
  // 端午节
  'dragon': { name: '端午节', dates: {
    2020: '06-25', 2021: '06-14', 2022: '06-03', 2023: '06-22', 2024: '06-10',
    2025: '05-31', 2026: '06-19', 2027: '06-09', 2028: '05-28', 2029: '06-16', 2030: '06-05'
  }},
  // 七夕
  'qixi': { name: '七夕', dates: {
    2020: '08-25', 2021: '08-14', 2022: '08-04', 2023: '08-22', 2024: '08-10',
    2025: '08-29', 2026: '08-19', 2027: '08-08', 2028: '07-26', 2029: '08-16', 2030: '08-04'
  }},
  // 中元节
  'zhongyuan': { name: '中元节', dates: {
    2020: '09-02', 2021: '08-22', 2022: '08-12', 2023: '08-30', 2024: '08-18',
    2025: '09-06', 2026: '08-27', 2027: '08-15', 2028: '08-04', 2029: '08-23', 2030: '08-12'
  }},
  // 中秋节
  'midautumn': { name: '中秋节', dates: {
    2020: '10-01', 2021: '09-21', 2022: '09-10', 2023: '09-29', 2024: '09-17',
    2025: '10-06', 2026: '09-25', 2027: '09-15', 2028: '10-03', 2029: '09-22', 2030: '09-12'
  }},
  // 重阳节
  'chongyang': { name: '重阳节', dates: {
    2020: '10-25', 2021: '10-14', 2022: '10-04', 2023: '10-23', 2024: '10-11',
    2025: '10-29', 2026: '10-18', 2027: '10-08', 2028: '09-21', 2029: '10-16', 2030: '10-05'
  }},
  // 腊八节
  'laba': { name: '腊八节', dates: {
    2020: '01-02', 2021: '01-20', 2022: '01-10', 2023: '12-30', 2024: '01-18',
    2025: '01-07', 2026: '01-26', 2027: '01-15', 2028: '01-04', 2029: '01-22', 2030: '01-10'
  }},
  // 小年
  'xiaonian': { name: '小年', dates: {
    2020: '01-17', 2021: '02-04', 2022: '01-25', 2023: '01-14', 2024: '02-02',
    2025: '01-22', 2026: '02-10', 2027: '01-30', 2028: '01-19', 2029: '02-06', 2030: '01-26'
  }},
  // 除夕
  'chuxi': { name: '除夕', dates: {
    2020: '01-24', 2021: '02-11', 2022: '01-31', 2023: '01-21', 2024: '02-09',
    2025: '01-28', 2026: '02-16', 2027: '02-05', 2028: '01-25', 2029: '02-12', 2030: '02-02'
  }}
};

// 公历节日
const solarFestivals = {
  '01-01': '元旦', '02-14': '情人节', '03-08': '妇女节', '03-12': '植树节',
  '04-01': '愚人节', '05-01': '劳动节', '05-04': '青年节', '06-01': '儿童节',
  '07-01': '建党节', '08-01': '建军节', '09-10': '教师节', '10-01': '国庆节',
  '10-31': '万圣夜', '12-24': '平安夜', '12-25': '圣诞节',
};

// 获取节日
function getFestival(year, month, day) {
  const solarKey = String(month).padStart(2, '0') + '-' + String(day).padStart(2, '0');
  if (solarFestivals[solarKey]) return solarFestivals[solarKey];
  
  // 查农历节日
  for (const key in lunarFestivalData) {
    const festival = lunarFestivalData[key];
    if (festival.dates[year] === solarKey) {
      return festival.name;
    }
  }
  
  return null;
}

// 获取两个字的节日名称（去掉"节"字）
function getShortFestival(year, month, day) {
  const name = getFestival(year, month, day);
  if (!name) return null;
  // 去掉结尾的"节"或"夜"字，变成两个字
  if (name.endsWith('节')) return name.substring(0, name.length - 1);
  if (name.endsWith('夜')) return name.substring(0, name.length - 1);
  return name;
}

// ===== 里程时间线（历年公式照下方） =====
// 数据来源：时间线.json 的 timeline.nodes（左右交错排版）
const mileageTimelineNodes = [
  { date: '2023年9月30日', summary: '十九期生亮相新生公演《命运的X号》', tags: ['出道'], importance: 'critical' },
  { date: '2023年11月25日', summary: '首次代役SNH48 Team NII《应许之地》', tags: ['代役'], importance: 'normal' },
  { date: '2024年2月2日', summary: '正式升格为SNH48 Team NII的成员', tags: ['升格'], importance: 'critical' },
  { date: '2024年8月3日', summary: '第十一届青春盛典取得年度新人潜力奖第4名', tags: ['青春盛典'], importance: 'important' },
  { date: '2025年8月2日', summary: '第十二届青春盛典取得年度梦想成员奖第38名', tags: ['青春盛典'], importance: 'important' },
  { date: '2026年8月8日', summary: '第十三届青春盛典取得年度梦想成员奖第45名', tags: ['青春盛典'], importance: 'important' }
];
function renderMileageTimeline() {
  const wrap = document.getElementById('mileageTimeline');
  if (!wrap) return;
  const badgeMap = {
    critical: '\u25c6 KEY EVENT / \u5173\u952e\u4e8b\u4ef6',
    important: '\u25cf IMPORTANT / \u91cd\u8981\u4e8b\u4ef6'
  };
  let html = '';
  mileageTimelineNodes.forEach(function(node, idx) {
    const rowClass = (idx % 2 === 0) ? 'left-date' : 'right-date';
    const badge = badgeMap[node.importance] || '';
    const badgeHtml = badge ? '<div class="mt-badge ' + (node.importance || 'normal') + '">' + badge + '</div>' : '';
    const tagHtml = (node.tags && node.tags.length) ? node.tags.map(function(t) {
      return '<span class="mt-tag">' + t + '</span>';
    }).join('') : '';
    const contentHtml = node.content ? '<div class="mt-content">' + node.content + '</div>' : '';
    const imageHtml = node.image ? '<img class="mt-image" decoding="async" src="' + node.image + '" alt="" />' : '';
    html += '<div class="mt-row ' + rowClass + '">' +
      '<div class="mt-date">' + node.date + '</div>' +
      '<div class="mt-card">' +
        badgeHtml +
        '<div class="mt-summary">' + node.summary + '</div>' +
        contentHtml + imageHtml +
        (tagHtml ? '<div class="mt-tags">' + tagHtml + '</div>' : '') +
      '</div>' +
    '</div>';
  });
  wrap.innerHTML = html;
}
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderMileageTimeline);
} else {
  renderMileageTimeline();
}

// ===== 大日历状态 =====
let bigCalYear = 2026;
let bigCalMonth = 7; // 0-indexed, 7=8月
let bigCalSelectedDate = null;

function renderBigCalendar() {
  const grid = document.getElementById('bigCalGrid');
  const title = document.getElementById('bigCalTitle');
  if (!grid || !title) return;
  
  title.textContent = bigCalYear + '年' + (bigCalMonth + 1) + '月';
  
  const firstDay = new Date(bigCalYear, bigCalMonth, 1).getDay();
  const daysInMonth = new Date(bigCalYear, bigCalMonth + 1, 0).getDate();
  const prevMonthDays = new Date(bigCalYear, bigCalMonth, 0).getDate();
  const today = new Date();
  const todayStr = today.getFullYear() + '-' + String(today.getMonth()+1).padStart(2,'0') + '-' + String(today.getDate()).padStart(2,'0');
  
  let html = '';
  
  // 上个月
  for (let i = firstDay - 1; i >= 0; i--) {
    const d = prevMonthDays - i;
    let prevY = bigCalYear, prevM = bigCalMonth;
    if (prevM === 0) { prevM = 11; prevY--; } else { prevM--; }
    const prevFestival = getShortFestival(prevY, prevM + 1, d);
    html += `<div class="big-cal-cell other-month" data-date="${prevY}-${String(prevM+1).padStart(2,'0')}-${String(d).padStart(2,'0')}">
      <div class="big-cal-date-num">${d}</div>
      ${prevFestival ? `<div class="big-cal-festival">${prevFestival}</div>` : ''}
    </div>`;
  }
  
  // 当月
  for (let d = 1; d <= daysInMonth; d++) {
    const dateStr = bigCalYear + '-' + String(bigCalMonth+1).padStart(2,'0') + '-' + String(d).padStart(2,'0');
    const isToday = dateStr === todayStr ? 'today' : '';
    const isSelected = bigCalSelectedDate === dateStr ? 'selected' : '';
    const festival = getShortFestival(bigCalYear, bigCalMonth + 1, d);
    // 获取当日公演行程
    const scheduleDateKey = `${bigCalYear}.${String(bigCalMonth+1).padStart(2,'0')}.${String(d).padStart(2,'0')}`;
    const daySchedules = performanceSchedule.filter(s => s.date === scheduleDateKey);
    const isMobile = window.innerWidth <= 768;
    
    // 获取当日更新事件
    let eventHtml = '';
    if (daySchedules.length > 0) {
      // 多场公演显示多个标签
      eventHtml = '<div class="big-cal-schedule-wrap">';
      daySchedules.forEach((sch, idx) => {
        if (idx < 2) { // 最多显示2个标签
          let title = sch.title || '公演';
          
          if (isMobile) {
            // 移动端：判断是否是金曲大赏演唱会
            const isJinQu = sch.title.includes('金曲') || sch.title.includes('演唱会');
            let displayTitle, bgColor;
            if (isJinQu) {
              displayTitle = '金曲';
              bgColor = '#9b59b6'; // 紫色，区别于蓝色和橙色
            } else {
              displayTitle = '公演';
              const isNII = sch.title.includes('NII') || sch.title.includes('Team NII') || sch.title.includes('TEAM NII');
              bgColor = isNII ? '#4a90d9' : '#e8a84a';
            }
            eventHtml += `<div class="big-cal-event big-cal-schedule" style="background:${bgColor};color:#fff;">${displayTitle}</div>`;
          } else {
            // 电脑端：显示团队名和公演名，加上颜色判断
            const teamMatch = title.match(/(TEAM\s+\w+|SNH48)/i);
            const showMatch = title.match(/《([^》]+)》/);
            if (teamMatch && showMatch) {
              title = teamMatch[1].toUpperCase() + ' 《' + showMatch[1] + '》';
            } else if (showMatch) {
              title = '《' + showMatch[1] + '》';
            } else {
              if (title.length > 10) title = title.substring(0, 10) + '…';
            }
            // 颜色判断：金曲大赏演唱会紫色，NII队蓝色，其他队橙色
            const isJinQu = sch.title.includes('金曲') || sch.title.includes('演唱会');
            const isNII = sch.title.includes('NII') || sch.title.includes('Team NII') || sch.title.includes('TEAM NII');
            let bgStyle = '';
            if (isJinQu) {
              bgStyle = ' style="background:linear-gradient(135deg,#9b59b6,#8e44ad);color:#fff;"';
            } else if (!isNII) {
              bgStyle = ' style="background:linear-gradient(135deg,#e8a84a,#d4923a);color:#fff;"';
            }
            eventHtml += `<div class="big-cal-event big-cal-schedule"${bgStyle}>${title}</div>`;
          }
        }
      });
      if (daySchedules.length > 2) {
        if (isMobile) {
          eventHtml += `<div class="big-cal-event big-cal-schedule more" style="background:#666;color:#fff;">+${daySchedules.length - 2}场</div>`;
        } else {
          eventHtml += `<div class="big-cal-event big-cal-schedule more">+${daySchedules.length - 2}场</div>`;
        }
      }
      eventHtml += '</div>';
    } else if (typeof getDayUpdates === 'function') {
      const updates = getDayUpdates(bigCalYear, bigCalMonth + 1, d);
      if (updates && updates.length > 0) {
        eventHtml = `<div class="big-cal-event">${updates[0].title || updates[0].type || '有更新'}</div>`;
      }
    }
    
    html += `<div class="big-cal-cell ${isToday} ${isSelected} ${daySchedules.length > 0 ? 'has-schedule' : ''}" data-date="${dateStr}">
      <div class="big-cal-date-num">${d}</div>
      ${festival ? `<div class="big-cal-festival">${festival}</div>` : ''}
      ${eventHtml}
    </div>`;
  }
  
  // 下个月
  const totalCells = firstDay + daysInMonth;
  const remaining = (7 - totalCells % 7) % 7;
  for (let d = 1; d <= remaining; d++) {
    let nextY = bigCalYear, nextM = bigCalMonth;
    if (nextM === 11) { nextM = 0; nextY++; } else { nextM++; }
    const nextFestival = getShortFestival(nextY, nextM + 1, d);
    html += `<div class="big-cal-cell other-month" data-date="${nextY}-${String(nextM+1).padStart(2,'0')}-${String(d).padStart(2,'0')}">
      <div class="big-cal-date-num">${d}</div>
      ${nextFestival ? `<div class="big-cal-festival">${nextFestival}</div>` : ''}
    </div>`;
  }
  
  grid.innerHTML = html;
  
  // 点击日期
  grid.querySelectorAll('.big-cal-cell').forEach(cell => {
    cell.addEventListener('click', function() {
      bigCalSelectedDate = this.dataset.date;
      renderBigCalendar();
      renderTodaySchedule(bigCalSelectedDate);
    });
  });
}

function renderTodaySchedule(dateStr) {
  const list = document.getElementById('todayScheduleList');
  const dateEl = document.getElementById('todayScheduleDate');
  if (!list || !dateEl) return;
  
  const today = dateStr ? new Date(dateStr) : new Date();
  const y = today.getFullYear();
  const m = today.getMonth() + 1;
  const d = today.getDate();
  const weekDays = ['日','一','二','三','四','五','六'];
  dateEl.textContent = `${y}年${m}月${d}日 周${weekDays[today.getDay()]}`;
  
  // 获取当日更新
  let schedules = [];
  if (typeof getDayUpdates === 'function') {
    schedules = getDayUpdates(y, m, d) || [];
  }
  
  // 加入公演行程
  const scheduleDateKey = `${y}.${String(m).padStart(2,'0')}.${String(d).padStart(2,'0')}`;
  const dayPerformances = performanceSchedule.filter(s => s.date === scheduleDateKey);
  dayPerformances.forEach(sch => {
    schedules.push({
      time: sch.time || '全天',
      title: sch.title,
      type: '公演',
      isPerformance: true
    });
  });
  
  if (schedules.length === 0) {
    list.innerHTML = '<div class="today-schedule-empty">暂无日程</div>';
    return;
  }
  
  let html = '';
  schedules.forEach(item => {
    const perfClass = item.isPerformance ? ' performance-item' : '';
    html += `<div class="today-schedule-item${perfClass}">
      <div class="today-schedule-time">${item.time || '全天'}</div>
      <div class="today-schedule-content">${item.title || item.type || '更新'}</div>
    </div>`;
  });
  list.innerHTML = html;
}

// 获取当日更新（如果不存在则定义空函数）
if (typeof getDayUpdates !== 'function') {
  function getDayUpdates(year, month, day) {
    return [];
  }
}

  

  
  
  document.addEventListener('DOMContentLoaded', function() {
    // 加载微博数据
    if (typeof loadWeiboPosts === 'function') loadWeiboPosts();
    if (typeof loadDouyinPosts === 'function') loadDouyinPosts();
    if (typeof loadXiaohongshuPosts === 'function') loadXiaohongshuPosts();
    if (typeof loadBilibiliPosts === 'function') loadBilibiliPosts();
    
    document.querySelectorAll('[data-drink]').forEach(item => {
      item.addEventListener('click', function() {
        const key = this.dataset.drink;
        const data = drinkData[key];
        if (!data) return;

        document.getElementById('popupTitle').textContent = data.title;
        document.getElementById('popupTags').innerHTML = data.tags.map(t =>
          `<span style="background:rgba(255,255,255,calc(var(--card-opacity,0.72)*0.95));padding:2px 10px;border-radius:10px;font-size:12px;font-weight:500;color:#000000;border:1px solid rgba(255,255,255,0.08);box-shadow:0 0 0 1px hsla(var(--theme-hue),80%,55%,0.1);">${t}</span>`
        ).join('');
        document.getElementById('popupImage').innerHTML = `<img decoding="async" src="${data.image}" style="width:100%;height:auto;display:block;border-radius:12px;cursor:pointer;" onclick="previewImage('${data.image}')" />`;
        document.getElementById('popupMessages').innerHTML = data.messages.map(m =>
          `<div style="display:flex;justify-content:flex-start;align-items:flex-end;gap:6px;">
            <div style="background:#ffffff;padding:5px 12px;border-radius:4px 12px 12px 12px;font-size:14px;font-weight:400;color:#1a1a1a;max-width:fit-content;border:1px solid #e5e5e5;box-shadow:0 1px 2px rgba(0,0,0,0.04);">${m.text}</div>
            <span style="font-size:9px;color:#b0b0b0;flex-shrink:0;padding-bottom:2px;">${m.time}</span>
          </div>`
        ).join('');

        document.getElementById('popupOverlay').classList.add('open');
        document.body.style.overflow = 'hidden';
      });
    });

    document.getElementById('popupClose').addEventListener('click', function() {
      document.getElementById('popupOverlay').classList.remove('open');
      document.body.style.overflow = '';
    });

    document.getElementById('popupOverlay').addEventListener('click', function(e) {
      if (e.target === this) {
        this.classList.remove('open');
        document.body.style.overflow = '';
      }
    });

    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        document.querySelectorAll('.popup-overlay.open').forEach(p => {
          p.classList.remove('open');
          document.body.style.overflow = '';
        });
      }
    });
  });


function openDailyRecord(type) {
  const overlay = document.getElementById('mobileOverlay');
  const sideMenu = document.getElementById('mobileSideMenu');
  if (overlay) overlay.classList.remove('open');
  if (sideMenu) sideMenu.classList.remove('open');
  document.body.style.overflow = '';
  
  if (type === 'kaomoji' && !isKaomojiMode) {
    isKaomojiMode = true;
    if (cardTitle) cardTitle.textContent = '颜文字大全';
    if (cardBadge) cardBadge.textContent = 'EMOJI';
    if (cardBtnText) cardBtnText.textContent = '今天用什么';
    if (switchBtn) switchBtn.textContent = '⏺ 切换到每日一杯';
  } else if (type === 'drink' && isKaomojiMode) {
    isKaomojiMode = false;
    if (cardTitle) cardTitle.textContent = '每日一杯';
    if (cardBadge) cardBadge.textContent = 'RANDOM';
    if (cardBtnText) cardBtnText.textContent = '今天喝什么';
    if (switchBtn) switchBtn.textContent = '⏺ 切换到颜文字';
  }
  
  setTimeout(() => {
    if (randomDrinkBtn) randomDrinkBtn.click();
  }, 200);
}

// 卡片模式数组
const cardModes = [
  { id: 'drink', title: '每日一杯', badge: 'RANDOM', btnText: '今天喝什么' },
  { id: 'kaomoji', title: '颜文字大全', badge: 'EMOJI', btnText: '今天用什么' },
  { id: 'stage', title: '随机舞台', badge: 'STAGE', btnText: '今天看什么' },
  { id: 'fancam', title: '随机平台更新', badge: 'FANCAM', btnText: '今天看什么' },
];
let currentModeIndex = 0;

const cardTitle = document.getElementById('cardTitle');
const cardBadge = document.getElementById('cardBadge');
const cardBtnText = document.getElementById('cardBtnText');
const prevBtn = document.getElementById('cardPrevBtn');
const nextBtn = document.getElementById('cardNextBtn');
const randomDrinkBtn = document.getElementById('randomDrinkBtn');

function updateCardMode() {
  const mode = cardModes[currentModeIndex];
  if (cardTitle) cardTitle.textContent = mode.title;
  if (cardBadge) cardBadge.textContent = mode.badge;
  if (cardBtnText) cardBtnText.textContent = mode.btnText;
}

prevBtn?.addEventListener('click', function() {
  currentModeIndex = (currentModeIndex - 1 + cardModes.length) % cardModes.length;
  updateCardMode();
});

nextBtn?.addEventListener('click', function() {
  currentModeIndex = (currentModeIndex + 1) % cardModes.length;
  updateCardMode();
});

function getRandomKaomoji() {
  return kaomojiList[Math.floor(Math.random() * kaomojiList.length)];
}

function showKaomojiPopup() {
  const kaomoji = getRandomKaomoji();
  
  const existingPopup = document.getElementById('kaomojiPopup');
  if (existingPopup) {
    existingPopup.remove();
  }
  
  const overlay = document.createElement('div');
  overlay.className = 'popup-overlay open';
  overlay.id = 'kaomojiPopup';
  overlay.style.display = 'flex';
  overlay.innerHTML = `
    <div class="popup-box" style="max-width:420px; padding:40px 30px 30px; border-radius:20px; text-align:center; background:#ffffff; box-shadow:0 20px 60px rgba(0,0,0,0.15);">
      <button class="popup-close" style="position:absolute; top:12px; right:16px; font-size:22px; background:none; border:none; cursor:pointer; color:#bbb; transition:color 0.2s;" onmouseover="this.style.color='#666'" onmouseout="this.style.color='#bbb'">✕</button>
      <div style="font-size:24px; padding:16px 0 8px; line-height:1.8; word-break:break-all; min-height:50px; display:flex; align-items:center; justify-content:center; color:#1a1a2e; font-weight:400; letter-spacing:1px;">${kaomoji}</div>
      <div style="font-size:12px; color:#ccc; margin-top:16px; letter-spacing:1px;">点击空白处或按 ESC 关闭</div>
    </div>
  `;
  document.body.appendChild(overlay);
  document.body.style.overflow = 'hidden';
  
  overlay.querySelector('.popup-close').addEventListener('click', function(e) {
    e.stopPropagation();
    closeKaomojiPopup();
  });
  
  overlay.addEventListener('click', function(e) {
    if (e.target === this) {
      closeKaomojiPopup();
    }
  });
  
  document.addEventListener('keydown', function handler(e) {
    if (e.key === 'Escape') {
      closeKaomojiPopup();
      document.removeEventListener('keydown', handler);
    }
  });
}

function closeKaomojiPopup() {
  const popup = document.getElementById('kaomojiPopup');
  if (popup) {
    popup.remove();
    document.body.style.overflow = '';
  }
}

randomDrinkBtn?.addEventListener('click', function() {
  const mode = cardModes[currentModeIndex];
  if (mode.id === 'kaomoji') {
    showKaomojiPopup();
  } else if (mode.id === 'stage') {
    randomJump('stage');
  } else if (mode.id === 'fancam') {
    randomJump('fancam');
  } else {
    const keys = Object.keys(drinkData);
    if (keys.length === 0) return;
    
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    const data = drinkData[randomKey];
    if (!data) return;

    document.getElementById('popupTitle').textContent = data.title;
    document.getElementById('popupTags').innerHTML = data.tags.map(t =>
      `<span style="background:rgba(255,255,255,calc(var(--card-opacity,0.72)*0.95));padding:2px 10px;border-radius:10px;font-size:12px;font-weight:500;color:#000000;border:1px solid rgba(255,255,255,0.08);box-shadow:0 0 0 1px hsla(var(--theme-hue),80%,55%,0.1);">${t}</span>`
    ).join('');
    document.getElementById('popupImage').innerHTML = `<img decoding="async" src="${data.image}" style="width:100%;height:auto;display:block;border-radius:12px;cursor:pointer;" onclick="previewImage('${data.image}')" />`;
    document.getElementById('popupMessages').innerHTML = data.messages.map(m =>
      `<div style="display:flex;justify-content:flex-start;align-items:flex-end;gap:6px;">
        <div style="background:#ffffff;padding:5px 12px;border-radius:4px 12px 12px 12px;font-size:14px;font-weight:400;color:#1a1a1a;max-width:fit-content;border:1px solid #e5e5e5;box-shadow:0 1px 2px rgba(0,0,0,0.04);">${m.text}</div>
        <span style="font-size:9px;color:#b0b0b0;flex-shrink:0;padding-bottom:2px;">${m.time}</span>
      </div>`
    ).join('');

    document.getElementById('popupOverlay').classList.add('open');
    document.body.style.overflow = 'hidden';
  }
});

  (function() {
    const headerConfig = {
      home: {
        subtitle: 'Welcome!',
        title: '暂停更新，调整板块内容，不影响网站功能使用',
        extra: '<div class="sub">椰丝之家：933624308</div><div class="links"><a href="https://m.weibo.cn/p/100808a0c51c684e7bc96f54000cf4d755d74b" target="_blank">饭之超话</a><a href="https://weibo.com/u/7874648338" target="_blank">超星系集团</a><a href="https://b23.tv/sCndNaE" target="_blank">星系放映厅</a></div>',
        desc: '想要了解叶凡？这里是介绍区~'
      },
      stage: { subtitle: 'STAGE', title: '舞台', desc: '收录舞台切片' },
      bobo: { subtitle: 'LIVE', title: '直播', desc: '收录直播回放' },
      gongyan: { subtitle: 'PERFORM', title: '公演', desc: '收录公演回放' },
      fancam: { subtitle: 'PHOTO', title: '平台更新', desc: '收录平台更新内容' },
      travel: { subtitle: 'SELFIE', title: '口袋图集', desc: '收录口袋房间自拍' },
      words: { subtitle: 'WORDS', title: '演讲', desc: '收录演讲文字版' },
      wait: { subtitle: 'ABOUT', title: '关于本站', desc: '' }
    };

    function renderWelcomeHeader(pageId) {
      const config = headerConfig[pageId];
      if (!config) return;

      document.querySelectorAll(`.welcome-header[data-page="${pageId}"]`).forEach(header => {
        header.innerHTML = '';

        if (config.subtitle) {
          const sub = document.createElement('div');
          sub.className = 'welcome-subtitle';
          sub.textContent = config.subtitle;
          header.appendChild(sub);
        }

        const h1 = document.createElement('h1');
        if (pageId === 'home') {
          h1.innerHTML = `
          <img decoding="async" src="https://huggingface.co/datasets/156816SAFE/image-bed/resolve/main/icon_bip5uayjrmg/592663db-cf03-40c6-b164-5f3a907bbb3f_1789006822967_fuzhushuxian.webp"
            alt="图标"
            style="width:28px; height:45px; display:inline-block; vertical-align:middle; margin-right:-12px; margin-left:-25px; transform:translateY(-2px); filter:brightness(0) saturate(100%) invert(32%) sepia(98%) saturate(2000%) hue-rotate(calc(var(--theme-hue) * 1deg)); opacity:0.5;" />
               ${config.title}
          `;
        } else {
          h1.textContent = config.title;
        }
        header.appendChild(h1);

        if (config.extra) {
          const extraDiv = document.createElement('div');
          extraDiv.innerHTML = config.extra;
          header.appendChild(extraDiv);
        }

        const divider = document.createElement('div');
        divider.className = 'header-divider';
        header.appendChild(divider);

        if (config.desc) {
          const desc = document.createElement('div');
          desc.className = 'intro-text';
          desc.textContent = config.desc;
          header.appendChild(desc);
        }
      });
    }

    document.addEventListener('DOMContentLoaded', function() {
      document.querySelectorAll('.welcome-header[data-page]').forEach(header => {
        renderWelcomeHeader(header.dataset.page);
      });
    });

    const origSwitchPage = window.switchPage;
    window.switchPage = function(pageId) {
      if (origSwitchPage) origSwitchPage(pageId);
      setTimeout(() => {
        document.querySelectorAll('.page-box.active .welcome-header[data-page]').forEach(header => {
          renderWelcomeHeader(header.dataset.page);
        });
      if (pageId === 'words') {
        renderWordsCards();
      }
      if (pageId === 'gongyan' && window.initGongyanPage) {
        window.initGongyanPage();
      }

    }, 10);
  }
  })();

  // ===== 前端路由：页面 ID 与 URL 路径映射 =====
  var PAGE_ROUTES = {
    'home': '/',
    'stage': '/stage',
    'bobo': '/bobo',
    'gongyan': '/gongyan',
    'fancam': '/fancam',
    'travel': '/travel',
    'words': '/words',
    'calendar': '/calendar',
    'archive': '/archive',
    'music': '/music',
    'fan-rec': '/fan-rec',
    'card-collection': '/card-collection',
    'wait': '/about'
  };
  var PATH_TO_PAGE = {};
  Object.keys(PAGE_ROUTES).forEach(function(pid) { PATH_TO_PAGE[PAGE_ROUTES[pid]] = pid; });
  var __isPoppingState = false;
  function getPageFromUrl() {
    var p = window.location.pathname;
    if (p.length > 1 && p.charAt(p.length - 1) === '/') p = p.slice(0, -1);
    return PATH_TO_PAGE[p] || 'home';
  }

  let showStageMarkers = false;
  let currentYear = new Date().getFullYear();
  let currentMonth = new Date().getMonth();

  function switchPage(pageId) {
    // 同步更新浏览器地址栏（用户点击导航时写入历史记录）
    if (!__isPoppingState && PAGE_ROUTES[pageId]) {
      var targetPath = PAGE_ROUTES[pageId];
      if (window.location.pathname !== targetPath) {
        try {
          history.pushState({ page: pageId }, '', targetPath);
        } catch (e) {
          try { window.location.hash = '#' + pageId; } catch (e2) {}
        }
      }
    }
    document.querySelectorAll('.page-box').forEach(p => p.classList.remove('active'));
    
    const target = document.getElementById(pageId);
    if (target) {
      target.classList.add('active');
      
      const contentArea = document.querySelector('.content-area');
      if (contentArea) {
          contentArea.scrollTo({ top: 0, behavior: 'instant' });
      }
      window.scrollTo(0, 0);
    } else {
      console.warn('Page not found:', pageId);
      return;
    }

    const foodWorksPages = ['stage', 'fancam', 'gongyan','bobo'];
    const foodNotesPages = ['travel', 'words'];
    const recordsPages = ['calendar', 'archive', 'music', 'fan-rec', 'card-collection'];
    
    // calendar页面全屏
    if (pageId === 'calendar') {
      document.body.classList.add('calendar-page');
    } else {
      document.body.classList.remove('calendar-page');
    }
    
    let navPageId = pageId;
    if (foodWorksPages.includes(pageId)) navPageId = 'stage';
    else if (foodNotesPages.includes(pageId)) navPageId = 'travel';
    else if (recordsPages.includes(pageId)) navPageId = 'calendar';
    
    window.activePage = navPageId;

    document.querySelectorAll('.top-nav .menu-item[data-page]').forEach(m => m.classList.remove('active'));
    const targetItem = document.querySelector(`.top-nav .menu-item[data-page="${navPageId}"]`);
    if (targetItem) targetItem.classList.add('active');

    const showMarkers = pageId === 'stage' || pageId === 'bobo' || pageId === 'fancam' || pageId === 'gongyan';
    if (typeof showStageMarkers !== 'undefined') {
      showStageMarkers = showMarkers;
    }
    
    if (pageId === 'stage') {
      if (stageDataLoaded) {
        // 数据已加载，直接渲染
        currentCategory = 'all';
        currentPage = 1;
        const keyword = document.getElementById('stageSearch')?.value || '';
        renderCards('all', keyword);
      } else {
        // 数据还在加载，等加载完再渲染
        loadStageData().then(() => {
          const stagePage = document.getElementById('stage');
          if (stagePage && stagePage.classList.contains('active')) {
            currentCategory = 'all';
            currentPage = 1;
            const keyword = document.getElementById('stageSearch')?.value || '';
            renderCards('all', keyword);
          }
        });
      }
    }
    if (pageId === 'archive') {
      if (typeof renderArchiveSections === 'function') renderArchiveSections();
    }
    if (pageId === 'gongyan') {
      if (typeof initGongyanPage === 'function') {
        initGongyanPage();
      } else if (typeof window.initGongyanPage === 'function') {
        window.initGongyanPage();
      }
    }
    if (pageId === 'bobo' && !pagesRendered.bobo) {
      renderBoboCards('all', '');
      pagesRendered.bobo = true;
    }
    if (pageId === 'fancam' && !pagesRendered.fancam) {
      filterWeiboFeed();
      pagesRendered.fancam = true;
    }
    if (typeof currentYear !== 'undefined' && typeof currentMonth !== 'undefined') {
      calCurrentPage = pageId || 'home';
      calSelectedDate = null;
      renderCalendar(currentYear, currentMonth);
      renderUpdateList(currentYear, currentMonth, null, calCurrentPage);
    }

    const event = new Event('navUpdate');
    event.targetPage = navPageId;
    document.dispatchEvent(event);
    
    setTimeout(() => {
      if (window.updateNavIndicator) {
        window.updateNavIndicator('stageNav', 'stageNavIndicator');
        window.updateNavIndicator('boboNav', 'boboNavIndicator');
        window.updateNavIndicator('platformNav', 'platformNavIndicator');
        window.updateNavIndicator('gongyanNav', 'gongyanNavIndicator');
      }
      
      document.querySelectorAll('.page-box.active .welcome-header[data-page]').forEach(header => {
        const pageId = header.dataset.page;
        const headerConfig = {
              home: { subtitle: 'Welcome!', title: '欢迎使用椰饭饲养指南', extra: '<div class="sub">椰丝之家：933624308</div><div class="links"><a href="https://m.weibo.cn/p/100808a0c51c684e7bc96f54000cf4d755d74b" target="_blank">饭之超话</a><a href="https://weibo.com/u/7874648338" target="_blank">超星系集团</a><a href="https://b23.tv/sCndNaE" target="_blank">星系放映厅</a></div>', desc: '想要了解叶凡？这里是介绍区~' },
              calendar: { subtitle: 'CALENDAR', title: '日历', desc: '收录行程排期' },
              archive: { subtitle: 'ARCHIVE', title: '归档', desc: '记录' },
              music: { subtitle: 'FOOTPRINT', title: '足迹', desc: '' },
              'fan-rec': { subtitle: 'FAN REC', title: '粉丝安利', desc: '' },
              'card-collection': { subtitle: 'CARDS', title: '小卡合集', desc: '' }
          };
          
          const config = headerConfig[pageId];
          if (!config) return;

          header.innerHTML = '';
          if (config.subtitle) {
              const sub = document.createElement('div');
              sub.className = 'welcome-subtitle';
              sub.textContent = config.subtitle;
              header.appendChild(sub);
          }
          const h1 = document.createElement('h1');
          if (pageId === 'home') {
              h1.innerHTML = `<img decoding="async" src="https://huggingface.co/datasets/156816SAFE/image-bed/resolve/main/icon_bip5uayjrmg/592663db-cf03-40c6-b164-5f3a907bbb3f_1789006822967_fuzhushuxian.webp" alt="图标" style="width:28px; height:45px; display:inline-block; vertical-align:middle; margin-right:-12px; margin-left:-25px; transform:translateY(-2px); filter:brightness(0) saturate(100%) invert(32%) sepia(98%) saturate(2000%) hue-rotate(calc(var(--theme-hue) * 1deg)); opacity:0.5;" /> ${config.title}`;
          } else {
              h1.textContent = config.title;
          }
          header.appendChild(h1);
          if (config.extra) {
              const extraDiv = document.createElement('div');
              extraDiv.innerHTML = config.extra;
              header.appendChild(extraDiv);
          }
          const divider = document.createElement('div');
          divider.className = 'header-divider';
          header.appendChild(divider);
          if (config.desc) {
              const desc = document.createElement('div');
              desc.className = 'intro-text';
              desc.textContent = config.desc;
              header.appendChild(desc);
          }
      });
    }, 10);
  }

  document.querySelectorAll('.top-nav .menu-item[data-page]').forEach(item => {
    item.addEventListener('click', function(e) {
      e.stopPropagation();
      switchPage(this.dataset.page);
    });
  });

  document.querySelectorAll('.nav-dropdown-item').forEach(item => {
    item.addEventListener('click', function(e) {
      e.stopPropagation();
      switchPage(this.dataset.page);
      document.querySelectorAll('.nav-dropdown').forEach(d => d.classList.remove('open'));
    });
  });

  (function() {
    const foodNotesBtn = document.getElementById('foodNotesBtn');
    const foodWorksBtn = document.getElementById('foodWorksBtn');
    const foodNotesDropdown = document.getElementById('foodNotesDropdown');
    const foodWorksDropdown = document.getElementById('foodWorksDropdown');
    let closeTimer = null;

    function closeAllDropdowns() {
      clearTimeout(closeTimer);
      document.querySelectorAll('.nav-dropdown').forEach(d => d.classList.remove('open'));
    }

    function openDropdown(btn, dropdown) {
      clearTimeout(closeTimer);
      const rect = btn.getBoundingClientRect();
      dropdown.style.position = 'fixed';
      dropdown.style.top = (rect.bottom + 12) + 'px';
      dropdown.style.left = (rect.left + rect.width / 2 - 70) + 'px';
      dropdown.classList.add('open');
    }

    function isHovering(btn, dropdown) {
      return btn.matches(':hover') || dropdown.matches(':hover');
    }

    if (foodNotesBtn && foodNotesDropdown) {
      foodNotesBtn.addEventListener('mouseenter', function() {
        closeAllDropdowns();
        openDropdown(this, foodNotesDropdown);
      });
      foodNotesBtn.addEventListener('mouseleave', function() {
        closeTimer = setTimeout(() => {
          if (!isHovering(foodNotesBtn, foodNotesDropdown)) closeAllDropdowns();
        }, 100);
      });
      foodNotesDropdown.addEventListener('mouseenter', () => clearTimeout(closeTimer));
      foodNotesDropdown.addEventListener('mouseleave', function() {
        closeTimer = setTimeout(() => {
          if (!isHovering(foodNotesBtn, foodNotesDropdown)) closeAllDropdowns();
        }, 100);
      });
    }

    if (foodWorksBtn && foodWorksDropdown) {
      foodWorksBtn.addEventListener('mouseenter', function() {
        closeAllDropdowns();
        openDropdown(this, foodWorksDropdown);
      });
      foodWorksBtn.addEventListener('mouseleave', function() {
        closeTimer = setTimeout(() => {
          if (!isHovering(foodWorksBtn, foodWorksDropdown)) closeAllDropdowns();
        }, 100);
      });
      foodWorksDropdown.addEventListener('mouseenter', () => clearTimeout(closeTimer));
      foodWorksDropdown.addEventListener('mouseleave', function() {
        closeTimer = setTimeout(() => {
          if (!isHovering(foodWorksBtn, foodWorksDropdown)) closeAllDropdowns();
        }, 100);
      });
    }

    const recordsBtn = document.getElementById('recordsBtn');
    const recordsDropdown = document.getElementById('recordsDropdown');
    if (recordsBtn && recordsDropdown) {
      recordsBtn.addEventListener('mouseenter', function() {
        closeAllDropdowns();
        openDropdown(this, recordsDropdown);
      });
      recordsBtn.addEventListener('mouseleave', function() {
        closeTimer = setTimeout(() => {
          if (!isHovering(recordsBtn, recordsDropdown)) closeAllDropdowns();
        }, 100);
      });
      recordsDropdown.addEventListener('mouseenter', () => clearTimeout(closeTimer));
      recordsDropdown.addEventListener('mouseleave', function() {
        closeTimer = setTimeout(() => {
          if (!isHovering(recordsBtn, recordsDropdown)) closeAllDropdowns();
        }, 100);
      });
    }

    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeAllDropdowns(); });
  })();

  (function() {
    const backBtn = document.getElementById('backToTop');

    if (backBtn) {
      let btTicking = false;
      window.addEventListener('scroll', function() {
        if (!btTicking) {
          window.requestAnimationFrame(function() {
            if (window.scrollY > 300) {
              backBtn.classList.add('visible');
            } else {
              backBtn.classList.remove('visible');
            }
            btTicking = false;
          });
          btTicking = true;
        }
      }, { passive: true });

      backBtn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  })();

  (function() {
    const nav = document.querySelector('.top-nav');
    const menuItems = nav.querySelectorAll('.menu-item[data-page]');
    let activePage = 'home';

    const slider = document.createElement('div');
    slider.className = 'nav-slider';
    slider.style.cssText = `
      position: absolute;
      top: 5px;
      height: calc(100% - 10px);
      border-radius: 30px;
      background: rgba(0, 0, 0, 0.12);
      transition: left 0.3s ease, width 0.3s ease;
      pointer-events: none;
      z-index: 0;
    `;
    nav.style.position = 'relative';
    nav.insertBefore(slider, nav.firstChild);

    function moveSliderToItem(item, animate = true) {
      if (!item) return;
      const rect = item.getBoundingClientRect();
      const navRect = nav.getBoundingClientRect();
      slider.style.left = (rect.left - navRect.left + 0) + 'px';
      slider.style.width = (rect.width - 2) + 'px';
      slider.style.transition = animate ? 'left 0.3s ease, width 0.3s ease' : 'none';
    }

    function returnToActive() {
      const activeItem = nav.querySelector(`.menu-item[data-page="${activePage}"]`);
      if (activeItem) moveSliderToItem(activeItem, true);
    }

    function initSlider() {
      const activeItem = nav.querySelector('.menu-item.active');
      if (activeItem) {
        activePage = activeItem.dataset.page;
        moveSliderToItem(activeItem, false);
      }
    }

    document.addEventListener('navUpdate', function(e) {
      const targetPage = e.targetPage || 'home';
      const targetItem = nav.querySelector(`.menu-item[data-page="${targetPage}"]`);
      if (targetItem) {
        activePage = targetPage;
        moveSliderToItem(targetItem, true);
      }
    });

    menuItems.forEach(item => {
      item.addEventListener('mouseenter', function() {
        clearTimeout(window.slideTimer);
        moveSliderToItem(this, true);
      });
      item.addEventListener('click', function() {
        const page = this.dataset.page;
        if (page) {
          switchPage(page);
          const targetPage = window.activePage || page;
          const targetItem = nav.querySelector(`.menu-item[data-page="${targetPage}"]`);
          if (targetItem) {
            activePage = targetPage;
            menuItems.forEach(m => m.classList.remove('active'));
            targetItem.classList.add('active');
            moveSliderToItem(targetItem, true);
          }
        }
      });
    });

    nav.addEventListener('mouseleave', function() {
      window.slideTimer = setTimeout(returnToActive, 80);
    });

    document.querySelectorAll('.nav-dropdown').forEach(dropdown => {
      dropdown.addEventListener('mouseenter', () => clearTimeout(window.slideTimer));
      dropdown.addEventListener('mouseleave', () => {
        window.slideTimer = setTimeout(returnToActive, 80);
      });
    });

    initSlider();
  })();

    // 舞台数据（由外部JSON加载）
  let unitData = [];
  let specialData = [];
  let assistData = [];
  let substituteData = [];

  // 将JSON视频数据转换成舞台格式
  function convertToStageFormat(videos) {
    const result = [];
    videos.forEach(v => {
      let date = (v.date || v.pubdate || '').replace(/-/g, '.');
      let title = v.unitName || v.title || '';
      let show = v.stageName || v.title || '';
      let cover = v.cover || v.pic || '';
      let url = v.url || '';
      let length = v.length || '';
      result.push({ date, title, url, cover, show, length, rawTitle: v.title });
    });
    result.sort((a, b) => b.date.localeCompare(a.date));
    return result;
  }

  // 更新舞台缓存和计数
  function updateStageCache() {
    stageCategoryCache.all = [...unitData, ...specialData, ...assistData, ...substituteData].sort((a, b) => b.date.localeCompare(a.date));
    stageCategoryCache.unit = [...unitData].sort((a, b) => b.date.localeCompare(a.date));
    stageCategoryCache.special = [...specialData].sort((a, b) => b.date.localeCompare(a.date));
    stageCategoryCache.assist = [...assistData].sort((a, b) => b.date.localeCompare(a.date));
    stageCategoryCache.substitute = [...substituteData].sort((a, b) => b.date.localeCompare(a.date));

    stageCategoryCounts.all = stageCategoryCache.all.length;
    stageCategoryCounts.unit = stageCategoryCache.unit.length;
    stageCategoryCounts.special = stageCategoryCache.special.length;
    stageCategoryCounts.assist = stageCategoryCache.assist.length;
    stageCategoryCounts.substitute = stageCategoryCache.substitute.length;

    // 更新stageTypeMap
    stageTypeMap.clear();
    [['unit', unitData], ['special', specialData], ['assist', assistData], ['substitute', substituteData]].forEach(([type, arr]) => {
      arr.forEach(d => {
        const key = d.date + '|' + d.title;
        if (!stageTypeMap.has(key)) stageTypeMap.set(key, type);
      });
    });

    // 更新页面上的计数显示
    const totalEl = document.getElementById('stageTotalCount');
    const unitEl = document.getElementById('stageUnitCount');
    const specialEl = document.getElementById('stageSpecialCount');
    const assistEl = document.getElementById('stageAssistCount');
    const subEl = document.getElementById('stageSubstituteCount');
    if (totalEl) totalEl.textContent = stageCategoryCounts.all;
    if (unitEl) unitEl.textContent = stageCategoryCounts.unit;
    if (specialEl) specialEl.textContent = stageCategoryCounts.special;
    if (assistEl) assistEl.textContent = stageCategoryCounts.assist;
    if (subEl) subEl.textContent = stageCategoryCounts.substitute;
  }

  // 加载舞台数据（从外部JSON文件）
  async function loadStageData() {
    try {
      console.log('正在加载舞台数据...');
      const [unitRes, specialRes, assistRes, substituteRes] = await Promise.all([
        fetch('bilibili_unit.json?_=' + Date.now()),
        fetch('bilibili_special.json?_=' + Date.now()),
        fetch('bilibili_assist.json?_=' + Date.now()),
        fetch('bilibili_substitute.json?_=' + Date.now())
      ]);

      const [unitJson, specialJson, assistJson, substituteJson] = await Promise.all([
        unitRes.json(),
        specialRes.json(),
        assistRes.json(),
        substituteRes.json()
      ]);

      unitData = convertToStageFormat(unitJson.videos || []);
      specialData = convertToStageFormat(specialJson.videos || []);
      assistData = convertToStageFormat(assistJson.videos || []);
      substituteData = convertToStageFormat(substituteJson.videos || []);

      updateStageCache();

      console.log('舞台数据加载完成:', {
        unit: unitData.length,
        special: specialData.length,
        assist: assistData.length,
        substitute: substituteData.length,
        total: stageCategoryCache.all.length
      });

      // 数据加载完成后刷新右侧更新列表
      if (typeof currentYear !== 'undefined' && typeof currentMonth !== 'undefined') {
        const activePage = document.querySelector('.page-box.active')?.id || 'home';
        renderCalendar(currentYear, currentMonth);
        renderUpdateList(currentYear, currentMonth, null, activePage);
      }

      return true;
    } catch (e) {
      console.error('舞台数据加载失败:', e);
      return false;
    }
  }

  let stageTypeMap = new Map();
  let stageCategoryCache = {
    all: [...unitData, ...specialData, ...assistData, ...substituteData].sort((a, b) => b.date.localeCompare(a.date)),
    unit: [...unitData].sort((a, b) => b.date.localeCompare(a.date)),
    special: [...specialData].sort((a, b) => b.date.localeCompare(a.date)),
    assist: [...assistData].sort((a, b) => b.date.localeCompare(a.date)),
    substitute: [...substituteData].sort((a, b) => b.date.localeCompare(a.date)),
  };
  let stageCategoryCounts = {
    all: stageCategoryCache.all.length,
    unit: stageCategoryCache.unit.length,
    special: stageCategoryCache.special.length,
    assist: stageCategoryCache.assist.length,
    substitute: stageCategoryCache.substitute.length,
  };
  let currentCategory = 'all';
  let currentLayoutMode = 'grid';
  let currentPage = 1;
  const pageSize = 20;
  let isPaginationClick = false;

  function getDataByCategory(category) {
    return stageCategoryCache[category] || stageCategoryCache.all;
  }

  let currentFilterPage = 'stage';

  function openFilterPanel(page) {
    currentFilterPage = page;
    const overlay = document.getElementById('mobileFilterOverlay');
    const panel = document.getElementById('mobileFilterPanel');
    const yearSel = document.getElementById('filterYear');
    const monthSel = document.getElementById('filterMonth');
    const daySel = document.getElementById('filterDay');
    
    if (calFilteredDay) {
      const parts = calFilteredDay.split('.');
      yearSel.value = parts[0];
      monthSel.value = parseInt(parts[1]).toString();
      updateFilterDays();
      daySel.value = parseInt(parts[2]).toString();
    } else if (calFilteredMonth) {
      yearSel.value = calFilteredMonth.year.toString();
      monthSel.value = calFilteredMonth.month.toString();
      updateFilterDays();
      daySel.value = '';
    } else {
      yearSel.value = '';
      monthSel.value = '';
      daySel.value = '';
      updateFilterDays();
    }
    
    updateFilterTip();
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeFilterPanel(e) {
    if (e && e.target !== e.currentTarget) return;
    const overlay = document.getElementById('mobileFilterOverlay');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  function updateFilterDays() {
    const yearSel = document.getElementById('filterYear');
    const monthSel = document.getElementById('filterMonth');
    const daySel = document.getElementById('filterDay');
    const currentDay = daySel.value;
    
    let maxDay = 31;
    if (yearSel.value && monthSel.value) {
      maxDay = new Date(parseInt(yearSel.value), parseInt(monthSel.value), 0).getDate();
    }
    
    let html = '<option value="">全部</option>';
    for (let d = 1; d <= maxDay; d++) {
      html += `<option value="${d}">${d}日</option>`;
    }
    daySel.innerHTML = html;
    if (currentDay && parseInt(currentDay) <= maxDay) {
      daySel.value = currentDay;
    }
  }

  function updateFilterTip() {
    const yearSel = document.getElementById('filterYear');
    const monthSel = document.getElementById('filterMonth');
    const daySel = document.getElementById('filterDay');
    const tip = document.getElementById('filterTip');
    
    if (daySel.value && yearSel.value && monthSel.value) {
      tip.textContent = '已选：' + yearSel.value + '年' + monthSel.value + '月' + daySel.value + '日';
      tip.style.color = 'var(--theme-color)';
    } else if (monthSel.value && yearSel.value) {
      tip.textContent = '已选：' + yearSel.value + '年' + monthSel.value + '月';
      tip.style.color = 'var(--theme-color)';
    } else if (yearSel.value) {
      tip.textContent = '已选：' + yearSel.value + '年（全年）';
      tip.style.color = 'var(--theme-color)';
    } else {
      tip.textContent = '选择年份、月份或日期进行筛选';
      tip.style.color = '#999';
    }
  }

  function applyFilter() {
    const yearSel = document.getElementById('filterYear');
    const monthSel = document.getElementById('filterMonth');
    const daySel = document.getElementById('filterDay');
    
    const year = yearSel.value ? parseInt(yearSel.value) : null;
    const month = monthSel.value ? parseInt(monthSel.value) : null;
    const day = daySel.value ? parseInt(daySel.value) : null;
    
    calFilteredMonth = null;
    calFilteredDay = null;
    calSelectedDate = null;
    calFilteredYear = null;
    
    if (year && month && day) {
      const dayStr = year + '.' + String(month).padStart(2, '0') + '.' + String(day).padStart(2, '0');
      calFilteredDay = dayStr;
      calSelectedDate = year + '.' + month + '.' + day;
    } else if (year && month) {
      calFilteredMonth = { year, month };
    } else if (year) {
      calFilteredYear = year;
    }
    
    if (currentFilterPage === 'stage') {
      renderCards(currentCategory, document.getElementById('stageSearch')?.value || '');
    } else if (currentFilterPage === 'bobo') {
      renderBoboCards(currentBoboCategory, document.getElementById('boboSearch')?.value || '');
    } else if (currentFilterPage === 'fancam') {
      filterWeiboFeed();
    }
    
    closeFilterPanel();
  }

  document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('filterYear')?.addEventListener('change', function() {
      updateFilterDays();
      updateFilterTip();
    });
    document.getElementById('filterMonth')?.addEventListener('change', function() {
      updateFilterDays();
      updateFilterTip();
    });
    document.getElementById('filterDay')?.addEventListener('change', updateFilterTip);
  });

  let calFilteredMonth = null;
  let calFilteredDay = null;
  let calFilteredYear = null;

  function renderCards(category = currentCategory, keyword = '') {
    const grid = document.getElementById('stageGrid');
    if (!grid) return;

    if (!isPaginationClick) currentPage = 1;
    isPaginationClick = false;

    const navBtns = document.querySelectorAll('#stageNav .stage-nav-item');
    navBtns.forEach(btn => btn.classList.remove('active'));
    let targetBtn = document.querySelector(`#stageNav .stage-nav-item[data-category="${category}"]`);
    if (!targetBtn) { targetBtn = document.querySelector('#stageNav .stage-nav-item[data-category="all"]'); category = 'all'; }
    if (targetBtn) targetBtn.classList.add('active');
    currentCategory = category;
    if (window.updateNavIndicator) window.updateNavIndicator('stageNav', 'stageNavIndicator');

    const data = getDataByCategory(category);
    let filtered = data.filter(item => {
      const k = keyword.trim().toLowerCase();
      return k === '' || item.title.toLowerCase().includes(k) || (item.date && item.date.includes(keyword));
    });

    if (calFilteredMonth) {
      const y = calFilteredMonth.year;
      const m = calFilteredMonth.month;
      filtered = filtered.filter(item => {
        if (!item.date) return false;
        const match = item.date.match(/(\d{4})\.(\d{1,2})/);
        if (!match) return false;
        return parseInt(match[1]) === y && parseInt(match[2]) === m;
      });
    }

    if (calFilteredYear) {
      filtered = filtered.filter(item => {
        if (!item.date) return false;
        const match = item.date.match(/(\d{4})/);
        if (!match) return false;
        return parseInt(match[1]) === calFilteredYear;
      });
    }

    if (calFilteredDay) {
      const parts = calFilteredDay.split('.');
      const formattedDay = parts[0] + '.' + parts[1].padStart(2, '0') + '.' + parts[2].padStart(2, '0');
      filtered = filtered.filter(item => item.date && item.date.startsWith(formattedDay));
    }

    if (filtered.length === 0) {
      const searchKeyword = keyword.trim() || '空';
      grid.innerHTML = `<div style="grid-column:1/-1; text-align:center; padding:24px 0; color:#4a779e; font-size:13px;">没有找到任何关于“${searchKeyword}”的视频 </div>`;
      return;
    }

    const skipPagination = calFilteredMonth || calFilteredDay;
    const pageData = skipPagination ? filtered : filtered.slice((currentPage - 1) * pageSize, currentPage * pageSize);

    let html = '';
    for (const item of pageData) {
      let tagText = 'UNIT', tagColor = '#7fb5d0';
      if (category === 'all') {
        const itemType = stageTypeMap.get(item.date + '|' + item.title);
        if (itemType === 'special') { tagText = '特殊舞台'; tagColor = '#e8b88a'; }
        else if (itemType === 'assist') { tagText = '助演'; tagColor = '#e8d48a'; }
        else if (itemType === 'substitute') { tagText = '代役'; tagColor = '#a8d4c8'; }
      } else {
        if (category === 'unit') { tagText = 'UNIT'; tagColor = '#7fb5d0'; }
        else if (category === 'special') { tagText = '特殊舞台'; tagColor = '#e8b88a'; }
        else if (category === 'assist') { tagText = '助演'; tagColor = '#e8d48a'; }
        else if (category === 'substitute') { tagText = '代役'; tagColor = '#a8d4c8'; }
      }

      let coverHtml = '';
      if (item.cover) {
        coverHtml = `<img decoding="async" src="${item.cover}" alt="${item.title}" loading="lazy" fetchpriority="low" style="opacity:1;" />`;
      } else {
        coverHtml = `<div class="cover-fallback" style="background:linear-gradient(135deg,#b8d4e8,#8ab3d0);"><div class="video-icon">🎬</div><div class="video-tip" style="color:#fff;">加载中...</div></div>`;
      }

      const dateMatch = item.date ? item.date.match(/(\d{4})\.(\d{1,2})\.(\d{1,2})/) : null;
      const dataMonth = dateMatch ? `${dateMatch[1]}-${dateMatch[2].padStart(2,'0')}` : '';
      const dataDay = dateMatch ? dateMatch[3].padStart(2,'0') : '';

      html += `
        <div class="video-card" data-url="${item.url}" data-month="${dataMonth}" data-day="${dataDay}" onclick="window.open('${item.url || '#'}','_blank')">
          <div class="video-cover-box">
            ${coverHtml}
            ${item.length ? `<span class="video-duration-badge">${item.length}</span>` : ''}
          </div>
          <div class="video-info">
            <div class="video-name">${cleanUnitName(item.title)}</div>
            ${stageFullTitle(item) ? `<div class="video-show">${stageFullTitle(item)}</div>` : (item.show ? `<div class="video-show">${item.show}</div>` : '')}
            ${item.date ? `<div class="video-date">${item.date}</div>` : ''}
            <div class="video-tag-bottom" style="background:${tagColor};">${tagText}</div>
          </div>
        </div>
      `;
    }

    grid.className = 'stage-grid' + (currentLayoutMode === 'list' ? ' list-mode' : '');
    grid.innerHTML = html;

    const totalEl = document.getElementById('stageTotalCount');
    if (totalEl) totalEl.textContent = stageCategoryCounts.all;
    const unitEl = document.getElementById('stageUnitCount');
    if (unitEl) unitEl.textContent = stageCategoryCounts.unit;
    const specialEl = document.getElementById('stageSpecialCount');
    if (specialEl) specialEl.textContent = stageCategoryCounts.special;
    const assistEl = document.getElementById('stageAssistCount');
    if (assistEl) assistEl.textContent = stageCategoryCounts.assist;
    const subEl = document.getElementById('stageSubstituteCount');
    if (subEl) subEl.textContent = stageCategoryCounts.substitute;

    // 更新归档页面的统计信息
    // 计算天数函数
    function calcDaysFromDate(dateStr) {
      const parts = dateStr.split('.');
      const target = new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2]));
      const now = new Date();
      const diff = Math.floor((now - target) / (1000 * 60 * 60 * 24));
      return diff;
    }
    
    // 出道天数（2023.09.30）
    const debutDaysEl = document.getElementById("archiveDebutDays");
    if (debutDaysEl) debutDaysEl.textContent = calcDaysFromDate('2023.09.30') + '天';
    
    // 升格天数（2024.02.02）
    const promotionDaysEl = document.getElementById("archivePromotionDays");
    if (promotionDaysEl) promotionDaysEl.textContent = calcDaysFromDate('2024.02.02') + '天';
    
    // 破壳天数（2002.07.23）
    const birthDaysEl = document.getElementById("archiveBirthDays");
    if (birthDaysEl) birthDaysEl.textContent = calcDaysFromDate('2002.07.23') + '天';
    
    // 公演数（只算公演数据，按《》标题 + 规则归并）
    const showCountEl = document.getElementById("archiveShowCount");
    if (showCountEl) {
      const applyShow = function(arr) {
        const st = computeShowStats((arr || []).filter(function(v) { return v && v.pubdate && v.pubdate !== ''; }));
        showCountEl.textContent = st.showCount + '套';
      };
      if (window.gongyanData && window.gongyanData.length) {
        applyShow(window.gongyanData);
      } else {
        try {
          fetch('bilibili_nii_videos.json?_=' + Date.now())
            .then(function(res) { return res.json(); })
            .then(function(data) { applyShow(data.videos || []); })
            .catch(function() {});
        } catch (e) {}
      }
    }
    
    // 网站相关统计
    const siteDaysEl = document.getElementById("siteDays");
    if (siteDaysEl) siteDaysEl.textContent = calcDaysFromDate('2026.01.01') + '天';
    
    const siteStageTotalEl = document.getElementById("siteStageTotal");
    if (siteStageTotalEl) {
      const stageTotal = (unitData ? unitData.length : 0) + (specialData ? specialData.length : 0) + (assistData ? assistData.length : 0) + (substituteData ? substituteData.length : 0);
      siteStageTotalEl.textContent = stageTotal + '场';
    }
    
    const siteLiveTotalEl = document.getElementById("siteLiveTotal");
    if (siteLiveTotalEl) siteLiveTotalEl.textContent = (boboData ? boboData.length : 0) + '场';
    
    const sitePostTotalEl = document.getElementById("sitePostTotal");
    if (sitePostTotalEl) {
      const postTotal = (weiboPostsData ? weiboPostsData.length : 0) + (xiaohongshuPostsData ? xiaohongshuPostsData.length : 0) + (douyinPostsData ? douyinPostsData.length : 0) + (bilibiliPostsData ? bilibiliPostsData.length : 0);
      sitePostTotalEl.textContent = postTotal + '条';
    }
    
    const sitePocketTotalEl = document.getElementById("sitePocketTotal");
    if (sitePocketTotalEl) sitePocketTotalEl.textContent = (pocketLivesData ? pocketLivesData.length : 0) + '组';
    
    // 公演场次：公演总数（只算 NII 队公演，不含代役/特殊舞台/助演，数据源 bilibili_nii_videos.json）
    (function updateArchiveStageCount() {
      const archiveStageEl = document.getElementById("archiveStageCount");
      if (!archiveStageEl) return;
      const isGongyanItem = function(item) { return item && item.pubdate && item.pubdate !== ''; };
      const apply = function(arr) {
        const n = Array.isArray(arr) ? arr.filter(isGongyanItem).length : 0;
        archiveStageEl.textContent = n + '场';
      };
      if (window.gongyanData && window.gongyanData.length) {
        apply(window.gongyanData);
        return;
      }
      try {
        fetch('bilibili_nii_videos.json?_=' + Date.now())
          .then(function(res) { return res.json(); })
          .then(function(data) { apply(data.videos || []); })
          .catch(function() {});
      } catch (e) {}
    })();
    
    // unit数：所有舞台总和的不重复数据（按unit曲名去重，排除今日之星/含&）
    const archiveUnitEl = document.getElementById("archiveUnitCount");
    if (archiveUnitEl) {
      const uu = (typeof getUnitStats === 'function') ? getUnitStats() : { uniqueCount: 0 };
      archiveUnitEl.textContent = uu.uniqueCount + '首';
    }

    if (calFilteredMonth || calFilteredDay) {
      const controls = document.getElementById('paginationControls');
      if (controls) controls.style.display = 'none';
    } else {
      updatePaginationUI(filtered.length);
    }
  }

  function updatePaginationUI(totalCount) {
    const controls = document.getElementById('paginationControls');
    const prevBtn = document.getElementById('prevPageBtn');
    const nextBtn = document.getElementById('nextPageBtn');
    const pageInfo = document.getElementById('pageInfo');
    if (!controls) return;

    const totalPages = Math.ceil(totalCount / pageSize);
    if (totalPages <= 1) { controls.style.display = 'none'; return; }

    controls.style.display = 'flex';
    pageInfo.textContent = `${currentPage} / ${totalPages}`;
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;
    prevBtn.style.opacity = currentPage === 1 ? '0.4' : '1';
    nextBtn.style.opacity = currentPage === totalPages ? '0.4' : '1';
  }

  function changePage(delta) {
    const keyword = document.getElementById('stageSearch').value;
    const filtered = getDataByCategory(currentCategory).filter(item => {
      const k = keyword.trim().toLowerCase();
      return k === '' || item.title.toLowerCase().includes(k) || (item.date && item.date.includes(keyword));
    });
    const totalPages = Math.ceil(filtered.length / pageSize);
    const newPage = currentPage + delta;
    if (newPage >= 1 && newPage <= totalPages) {
      currentPage = newPage;
      isPaginationClick = true;
      renderCards(currentCategory, keyword);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      const contentArea = document.querySelector('.content-area');
      if (contentArea) {
        contentArea.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  }

  document.querySelectorAll('#stageNav .stage-nav-item').forEach(btn => {
    btn.addEventListener('click', function() {
      document.getElementById('stageSearch').value = '';
      renderCards(this.dataset.category, '');
    });
  });

  let stageSearchTimer;
  document.getElementById('stageSearch')?.addEventListener('input', function() {
    clearTimeout(stageSearchTimer);
    const val = this.value;
    stageSearchTimer = setTimeout(() => renderCards(currentCategory, val), 200);
  });

  const boboData = [];

  let currentBoboCategory = 'all';
  let pocketLivesData = [];
  let pocketCurrentHls = null;
  let pocketDanmakuTimer = null;
  let pocketDanmakuList = [];

  // 加载口袋回放数据
  async function loadPocketLives() {
    try {
      const res = await fetch('pocket_lives.json?_=' + Date.now());
      if (!res.ok) return;
      const data = await res.json();
      pocketLivesData = (data.lives || []).map(item => ({
        date: item.date,
        title: item.title,
        category: 'pocket',
        cover: item.cover,
        m3u8: item.m3u8,
        danmaku: item.danmaku,
        duration: item.duration,
        type: item.type,
        viewers: item.viewers,
        plays: item.plays,
        timestamp: item.timestamp,
        liveId: item.liveId
      }));
      // 更新计数
      const totalCount = pocketLivesData.length;
      const videoCount = pocketLivesData.filter(item => item.type === '直播').length;
      const radioCount = pocketLivesData.filter(item => item.type === '电台').length;
      const totalCountEl = document.getElementById('boboTotalCount');
      const videoCountEl = document.getElementById('boboVideoCount');
      const radioCountEl = document.getElementById('boboRadioCount');
      if (totalCountEl) totalCountEl.textContent = totalCount;
      if (videoCountEl) videoCountEl.textContent = videoCount;
      if (radioCountEl) radioCountEl.textContent = radioCount;
      
      // 数据加载完成后刷新右侧更新列表
      if (typeof currentYear !== 'undefined' && typeof currentMonth !== 'undefined') {
        const activePage = document.querySelector('.page-box.active')?.id || 'home';
        renderCalendar(currentYear, currentMonth);
        renderUpdateList(currentYear, currentMonth, null, activePage);
      }
    } catch (e) {
      console.log('口袋回放数据加载失败:', e.message);
    }
  }
  loadPocketLives();

  function sortByDateDesc(a, b) {
    const dateA = (a.date || '').replace(/[凌晨|晚|早|下午|中午].*$/, '');
    const dateB = (b.date || '').replace(/[凌晨|晚|早|下午|中午].*$/, '');
    return dateB.localeCompare(dateA);
  }

  function getBoboCategoryCache() {
    return {
      all: pocketLivesData.sort(sortByDateDesc),
      video: pocketLivesData.filter(item => item.type === '直播').sort(sortByDateDesc),
      radio: pocketLivesData.filter(item => item.type === '电台').sort(sortByDateDesc),
    };
  }

  function getBoboDataByCategory(category) {
    const cache = getBoboCategoryCache();
    return cache[category] || cache.all;
  }

  // 直播分页
  let currentBoboPage = 1;
  const boboPageSize = 20;
  let isBoboPaginationClick = false;

  function updateBoboPaginationUI(totalCount) {
    const controls = document.getElementById('boboPaginationControls');
    const prevBtn = document.getElementById('boboPrevBtn');
    const nextBtn = document.getElementById('boboNextBtn');
    const pageInfo = document.getElementById('boboPageInfo');
    if (!controls) return;

    const totalPages = Math.ceil(totalCount / boboPageSize);
    if (totalPages <= 1) { controls.style.display = 'none'; return; }

    controls.style.display = 'flex';
    pageInfo.textContent = `第 ${currentBoboPage} / ${totalPages} 页`;
    prevBtn.disabled = currentBoboPage === 1;
    nextBtn.disabled = currentBoboPage === totalPages;
    prevBtn.style.opacity = currentBoboPage === 1 ? '0.4' : '1';
    nextBtn.style.opacity = currentBoboPage === totalPages ? '0.4' : '1';
  }

  function changeBoboPage(delta) {
    const keyword = document.getElementById('boboSearch')?.value || '';
    const data = getBoboDataByCategory(currentBoboCategory);
    const filtered = data.filter(item => {
      const k = keyword.trim().toLowerCase();
      return k === '' || item.title.toLowerCase().includes(k) || (item.date && item.date.includes(keyword));
    });
    const totalPages = Math.ceil(filtered.length / boboPageSize);
    const newPage = currentBoboPage + delta;
    if (newPage >= 1 && newPage <= totalPages) {
      currentBoboPage = newPage;
      isBoboPaginationClick = true;
      renderBoboCards(currentBoboCategory, keyword);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  function renderBoboCards(category = currentBoboCategory, keyword = '') {
    const grid = document.getElementById('boboGrid');
    if (!grid) return;

    const navBtns = document.querySelectorAll('#boboNav .stage-nav-item');
    navBtns.forEach(btn => btn.classList.remove('active'));
    let targetBtn = document.querySelector(`#boboNav .stage-nav-item[data-category="${category}"]`);
    if (!targetBtn) { targetBtn = document.querySelector('#boboNav .stage-nav-item[data-category="all"]'); category = 'all'; }
    if (targetBtn) targetBtn.classList.add('active');
    currentBoboCategory = category;
    if (window.updateNavIndicator) window.updateNavIndicator('boboNav', 'boboNavIndicator');

    const data = getBoboDataByCategory(category);
    let filtered = data.filter(item => {
      const k = keyword.trim().toLowerCase();
      return k === '' || item.title.toLowerCase().includes(k) || (item.date && item.date.includes(keyword));
    });

    if (calFilteredYear) {
      filtered = filtered.filter(item => {
        if (!item.date) return false;
        const match = item.date.match(/(\d{4})/);
        if (!match) return false;
        return parseInt(match[1]) === calFilteredYear;
      });
    }

    if (calFilteredMonth) {
      const y = calFilteredMonth.year;
      const m = calFilteredMonth.month;
      filtered = filtered.filter(item => {
        if (!item.date) return false;
        const match = item.date.match(/(\d{4})\.(\d{1,2})/);
        if (!match) return false;
        return parseInt(match[1]) === y && parseInt(match[2]) === m;
      });
    }

    if (calFilteredDay) {
      const parts = calFilteredDay.split('.');
      const formattedDay = parts[0] + '.' + parts[1].padStart(2, '0') + '.' + parts[2].padStart(2, '0');
      filtered = filtered.filter(item => item.date && item.date.startsWith(formattedDay));
    }

    const cache = getBoboCategoryCache();
    const boboTotalEl = document.getElementById('boboTotalCount');
    if (boboTotalEl) boboTotalEl.textContent = cache.all.length;
    const boboSpecialEl = document.getElementById('boboSpecialCount');
    if (boboSpecialEl) boboSpecialEl.textContent = cache.special.length;
    const boboPocketEl = document.getElementById('boboPocketCount');
    if (boboPocketEl) boboPocketEl.textContent = cache.pocket.length;

    if (filtered.length === 0) {
      const searchKeyword = keyword.trim() || '空';
      grid.innerHTML = `<div style="grid-column:1/-1; text-align:center; padding:40px 0; color:#4a779e; font-size:14px;">没有找到任何关于“${searchKeyword}”的视频 </div>`;
      const controls = document.getElementById('boboPaginationControls');
      if (controls) controls.style.display = 'none';
      return;
    }

    // 分页
    if (!isBoboPaginationClick) currentBoboPage = 1;
    isBoboPaginationClick = false;
    const pageData = filtered.slice((currentBoboPage - 1) * boboPageSize, currentBoboPage * boboPageSize);

    let html = '';
    for (const item of pageData) {
      const isPocket = item.category === 'pocket';
      let tagText = '视频', tagColor = '#f0a0a0';
      if (item.type === '电台') { tagText = '电台'; tagColor = '#d4b0b8'; }

      let coverHtml = item.cover ?
        `<img decoding="async" src="${item.cover}" alt="${item.title}" loading="lazy" fetchpriority="low" />` :
        `<div class="cover-fallback" style="background:linear-gradient(135deg,#b8d4e8,#8ab3d0);"><div class="video-icon">🎬</div><div class="video-tip" style="color:#fff;">暂无封面</div></div>`;

      const dateMatch = item.date ? item.date.match(/(\d{4})\.(\d{1,2})\.(\d{1,2})/) : null;
      const dataMonth = dateMatch ? `${dateMatch[1]}-${dateMatch[2].padStart(2,'0')}` : '';
      const dataDay = dateMatch ? dateMatch[3].padStart(2,'0') : '';

      const clickHandler = isPocket
        ? `openPocketPlayer('${item.liveId}')`
        : `window.open('${item.url || '#'}','_blank')`;

      html += `
        <div class="video-card ${isPocket ? 'pocket-card' : ''}" data-month="${dataMonth}" data-day="${dataDay}" onclick="${clickHandler}">
          <div class="video-cover-box">
            ${coverHtml}
            ${item.duration ? `<span class="video-duration-badge">${item.duration}</span>` : ''}
          </div>
          <div class="video-info">
            <div class="video-name">${item.title}</div>
            <div class="video-date">${item.date || ''}</div>
            <div class="video-tag-bottom" style="background:${tagColor};">${tagText}</div>
          </div>
        </div>
      `;
    }

    grid.className = 'stage-grid' + (currentLayoutMode === 'list' ? ' list-mode' : '');
    grid.innerHTML = html;
    // 根据当前布局模式设置样式
    if (typeof currentLayoutMode !== 'undefined' && currentLayoutMode === 'list') {
      grid.className = 'stage-grid list-mode';
    } else {
      grid.className = 'stage-grid';
    }

    updateBoboPaginationUI(filtered.length);
  }

  document.querySelectorAll('#boboNav .stage-nav-item').forEach(btn => {
    btn.addEventListener('click', function() {
      document.getElementById('boboSearch').value = '';
      renderBoboCards(this.dataset.category, '');
    });
  });

  let boboSearchTimer;
  document.getElementById('boboSearch')?.addEventListener('input', function() {
    clearTimeout(boboSearchTimer);
    const val = this.value;
    boboSearchTimer = setTimeout(() => renderBoboCards(currentBoboCategory, val), 200);
  });

  // ===== 微博数据加载与渲染 =====
  let weiboPostsData = [];
  let douyinPostsData = [];
  let xiaohongshuPostsData = [];
  let bilibiliPostsData = [];
  async function loadWeiboPosts() {
    try {
      const res = await fetch('weibo_posts.json?_=' + Date.now());
      if (!res.ok) return;
      const data = await res.json();
      weiboPostsData = data.posts || [];
      renderWeiboPosts();
    } catch (e) {
      console.log('微博数据加载失败:', e.message);
    }
  }

  async function loadDouyinPosts() {
    try {
      const res = await fetch('douyin_posts.json?_=' + Date.now());
      if (!res.ok) return;
      const data = await res.json();
      douyinPostsData = data.posts || [];
      console.log('抖音数据加载成功:', douyinPostsData.length, '条');
      // 延迟一下，等微博渲染完成后再渲染抖音（避免被覆盖）
      setTimeout(() => {
        if (typeof renderDouyinPosts === 'function') renderDouyinPosts();
      }, 300);
    } catch (e) {
      console.log('抖音数据加载失败:', e.message);
    }
  }

  async function loadXiaohongshuPosts() {
    try {
      const res = await fetch('xiaohongshu_posts.json?_=' + Date.now());
      if (!res.ok) return;
      const data = await res.json();
      xiaohongshuPostsData = data.posts || [];
      console.log('小红书数据加载成功:', xiaohongshuPostsData.length, '条');
      setTimeout(() => {
        if (typeof renderXiaohongshuPosts === 'function') renderXiaohongshuPosts();
      }, 500);
    } catch (e) {
      console.log('小红书数据加载失败:', e.message);
    }
  }


  async function loadBilibiliPosts() {
    try {
      const res = await fetch('bilibili_posts.json?_=' + Date.now());
      if (!res.ok) return;
      const data = await res.json();
      bilibiliPostsData = data.posts || [];
      console.log('B站数据加载成功:', bilibiliPostsData.length, '条');
      setTimeout(() => {
        if (typeof renderBilibiliPosts === 'function') renderBilibiliPosts();
        // B站渲染完成后，所有平台按日期统一排序
        setTimeout(sortAllCardsByDate, 200);
      }, 700);
    } catch (e) {
      console.log('B站数据加载失败:', e.message);
    }
  }

  function renderDouyinPosts() {
    const feed = document.getElementById('weiboFeed');
    if (!feed || douyinPostsData.length === 0) return;

    // 收集已有的抖音作品ID（去重）
    const existingIds = new Set();
    feed.querySelectorAll('[data-platform="douyin"]').forEach(card => {
      // 从data-id属性提取ID
      const id = card.getAttribute('data-id');
      if (id) existingIds.add(id);
    });

    console.log('抖音渲染: 已有', existingIds.size, '条, 待渲染', douyinPostsData.length, '条');

    let html = '';
    let rendered = 0;
    douyinPostsData.forEach(post => {
      if (existingIds.has(post.id)) return;

      const dateMatch = post.formattedTime ? post.formattedTime.match(/(\d{4})-(\d{2})-(\d{2})/) : null;
      const month = dateMatch ? dateMatch[1] + '-' + dateMatch[2] : '';
      const day = dateMatch ? dateMatch[3] : '';
      const timeStr = post.formattedTime || '';
      const searchText = (post.text || '').replace(/"/g, '&quot;');

      // 判断是视频还是图文
      const isNote = post.type === 'note' || (post.url && post.url.includes('/note/'));
      const typeLabel = isNote ? '图文' : '视频';
      
      html += `<div class="weibo-card" data-platform="douyin" data-id="${post.id}" data-month="${month}" data-day="${day}" data-search-text="${searchText}">
        <div class="weibo-time">
          <span class="platform-tag douyin">抖音</span>
          <span class="video-tag-label">${typeLabel}</span>
          ${timeStr}
        </div>
        <a href="${post.url}" target="_blank" class="video-desc-box">
          <span class="text">${post.text || ''}</span>
          <span class="arrow">→</span>
        </a>
      </div>`;
      rendered++;
    });

    console.log('抖音渲染: 实际渲染', rendered, '条新卡片');

    if (html && rendered > 0) {
      // 找到最后一个微博卡片，插入到它后面
      const weiboCards = feed.querySelectorAll('[data-platform="weibo"]');
      if (weiboCards.length > 0) {
        const lastWeibo = weiboCards[weiboCards.length - 1];
        lastWeibo.insertAdjacentHTML('afterend', html);
      } else {
        feed.insertAdjacentHTML('afterbegin', html);
      }
      filterWeiboFeed();
      console.log('抖音渲染: 插入完成');
      // 抖音渲染完成后重新渲染最近更新
      setTimeout(() => { renderRecentUpdates(); }, 500);
    }
  }

  function renderXiaohongshuPosts() {
    const feed = document.getElementById('weiboFeed');
    if (!feed || xiaohongshuPostsData.length === 0) return;

    // 收集已有的小红书作品ID（去重）
    const existingIds = new Set();
    feed.querySelectorAll('[data-platform="xiaohongshu"]').forEach(card => {
      const link = card.querySelector('a[href*="xiaohongshu.com"]');
      const href = link ? link.href : '';
      const match = href.match(/\/explore\/([a-f0-9]+)/i) || href.match(/\/item\/([a-f0-9]+)/i);
      if (match) existingIds.add(match[1]);
    });

    console.log('小红书渲染: 已有', existingIds.size, '条, 待渲染', xiaohongshuPostsData.length, '条');

    let html = '';
    let rendered = 0;
    xiaohongshuPostsData.forEach((post, index) => {
      if (existingIds.has(post.id)) return;

      const dateMatch = post.formattedTime ? post.formattedTime.match(/(\d{4})-(\d{2})-(\d{2})/) : null;
      const month = dateMatch ? dateMatch[1] + '-' + dateMatch[2] : '';
      const day = dateMatch ? dateMatch[3] : '';
      const timeStr = post.formattedTime || '';
      const searchText = (post.text || '').replace(/"/g, '&quot;');
      const hasImages = post.images && post.images.length > 0;

      if (hasImages) {
        // 有图片：用微博卡片样式，显示图片网格
        const setId = 'xhsSlider' + index;
        if (typeof imageSets !== 'undefined') {
          imageSets[setId] = post.images;
        }
        const cols = post.images.length === 1 ? 'cols-1' : post.images.length === 2 || post.images.length === 4 ? 'cols-2' : 'cols-3';
        let mediaHtml = `<div class="weibo-media-grid ${cols}">`;
        post.images.forEach((img, imgIndex) => {
          mediaHtml += `<div class="media-item" onclick="openModalWithImages('${setId}', ${imgIndex})">
            <img decoding="async" src="${img}" alt="配图${imgIndex+1}" loading="lazy" referrerpolicy="no-referrer" onerror="this.style.display='none';this.parentElement.innerHTML='<div class=\\'img-placeholder\\'>图片加载失败</div>'" />
          </div>`;
        });
        mediaHtml += `</div>`;

        html += `<div class="weibo-card" data-platform="xiaohongshu" data-id="${post.id}" data-month="${month}" data-day="${day}" data-search-text="${searchText}">
          <div class="weibo-time">
            <span class="platform-tag xiaohongshu">小红书</span>
            <span class="video-tag-label">图文</span>
            ${timeStr}
          </div>
          <div class="weibo-text"><span class="line">${post.text || ''}</span></div>
          ${mediaHtml}
          <a href="${post.url || ('https://www.xiaohongshu.com/explore/' + post.id)}" target="_blank" class="weibo-link-button">点击跳转查看原文</a>
        </div>`;
      } else {
        // 没有图片：用视频卡片样式
        html += `<div class="weibo-card" data-platform="xiaohongshu" data-id="${post.id}" data-month="${month}" data-day="${day}" data-search-text="${searchText}">
          <div class="weibo-time">
            <span class="platform-tag xiaohongshu">小红书</span>
            <span class="video-tag-label">图文</span>
            ${timeStr}
          </div>
          <a href="${post.url || ('https://www.xiaohongshu.com/explore/' + post.id)}" target="_blank" class="video-desc-box">
            <span class="text">${post.text || ''}</span>
            <span class="arrow">→</span>
          </a>
        </div>`;
      }
      rendered++;
    });

    console.log('小红书渲染: 实际渲染', rendered, '条新卡片');

    if (html && rendered > 0) {
      // 找到最后一个抖音卡片，插入到它后面
      const douyinCards = feed.querySelectorAll('[data-platform="douyin"]');
      if (douyinCards.length > 0) {
        const lastDouyin = douyinCards[douyinCards.length - 1];
        lastDouyin.insertAdjacentHTML('afterend', html);
      } else {
        // 找到最后一个微博卡片，插入到它后面
        const weiboCards = feed.querySelectorAll('[data-platform="weibo"]');
        if (weiboCards.length > 0) {
          const lastWeibo = weiboCards[weiboCards.length - 1];
          lastWeibo.insertAdjacentHTML('afterend', html);
        } else {
          feed.insertAdjacentHTML('afterbegin', html);
        }
      }
      filterWeiboFeed();
      console.log('小红书渲染: 插入完成');
    }
  }

  function renderWeiboPosts() {
    const feed = document.getElementById('weiboFeed');
    if (!feed || weiboPostsData.length === 0) return;

    // 保存非微博卡片（小红书、抖音、B站）
    const otherCards = Array.from(feed.children).filter(el => 
      el.classList && !el.classList.contains('weibo-card') && el.tagName === 'DIV'
    );
    const otherHtml = otherCards.map(el => el.outerHTML).join('\n');

    let html = '';
    weiboPostsData.forEach((post, index) => {
      const dateMatch = post.formattedTime ? post.formattedTime.match(/(\d{4})-(\d{2})-(\d{2})/) : null;
      const month = dateMatch ? dateMatch[1] + '-' + dateMatch[2] : '';
      const day = dateMatch ? dateMatch[3] : '';
      const timeStr = post.formattedTime || '';
      
      // 处理转发
      let retweetHtml = '';
      if (post.isRetweet && post.retweetedText) {
        retweetHtml = `<div class="weibo-retweet">
          <div class="weibo-retweet-user">@${post.retweetedUser || '微博'}</div>
          <div class="weibo-retweet-text">${post.retweetedText.substring(0, 200)}</div>
        </div>`;
      }

      // 处理图片
      let mediaHtml = '';
      if (post.images && post.images.length > 0) {
        const setId = 'weiboSlider' + index;
        // 注册到全局imageSets，复用现有图片modal
        if (typeof imageSets !== 'undefined') {
          imageSets[setId] = post.images;
        }
        const cols = post.images.length === 1 ? 'cols-1' : post.images.length === 2 || post.images.length === 4 ? 'cols-2' : 'cols-3';
        mediaHtml = `<div class="weibo-media-grid ${cols}">`;
        post.images.forEach((img, imgIndex) => {
          mediaHtml += `<div class="media-item" onclick="openModalWithImages('${setId}', ${imgIndex})">
            <img decoding="async" src="${img}" alt="配图${imgIndex+1}" loading="lazy" referrerpolicy="no-referrer" onerror="this.style.display='none';this.parentElement.innerHTML='<div class=\'img-placeholder\'>图片加载失败</div>'" />
          </div>`;
        });
        mediaHtml += `</div>`;
      }

      // 互动数据
      const statsHtml = `<div class="weibo-stats">
        <span>转发 ${post.repostsCount || 0}</span>
        <span>评论 ${post.commentsCount || 0}</span>
        <span>点赞 ${post.attitudesCount || 0}</span>
      </div>`;

      html += `
        <div class="weibo-card" data-platform="weibo" data-month="${month}" data-day="${day}" data-search-text="${(post.text + ' ' + (post.retweetedText || '')).toLowerCase()}">
          <div class="weibo-time">
            <span class="platform-tag weibo">微博</span>
            ${timeStr}
          </div>
          <div class="weibo-text"><span class="line">${post.text || ''}</span></div>
          ${retweetHtml}
          ${mediaHtml}
          ${statsHtml}
          <a href="${post.url}" target="_blank" class="weibo-link-button">点击跳转查看原微博</a>
        </div>
      `;
    });

    // 把微博卡片和其他平台卡片合并
    feed.innerHTML = html + '\n' + otherHtml;
    filterWeiboFeed();
    // 渲染动态抖音卡片
    if (typeof renderDouyinPosts === 'function') renderDouyinPosts();
    // 渲染动态小红书卡片
    if (typeof renderXiaohongshuPosts === 'function') renderXiaohongshuPosts();
    if (typeof renderBilibiliPosts === 'function') renderBilibiliPosts();
    
  }


  function renderBilibiliPosts() {
    const feed = document.getElementById('weiboFeed');
    if (!feed || bilibiliPostsData.length === 0) return;

    // 收集已有的B站作品ID（去重）
    const existingIds = new Set();
    feed.querySelectorAll('[data-platform="bilibili"]').forEach(card => {
      const link = card.querySelector('a[href*="bilibili.com"]');
      const href = link ? link.href : '';
      const match = href.match(/video\/([BVbv0-9A-Za-z]+)/);
      if (match) existingIds.add(match[1]);
    });

    console.log('B站渲染: 已有', existingIds.size, '条, 待渲染', bilibiliPostsData.length, '条');

    let html = '';
    let rendered = 0;
    bilibiliPostsData.forEach(post => {
      if (existingIds.has(post.id)) return;

      const dateMatch = post.formattedTime ? post.formattedTime.match(/(\d{4})-(\d{2})-(\d{2})/) : null;
      const month = dateMatch ? dateMatch[1] + '-' + dateMatch[2] : '';
      const day = dateMatch ? dateMatch[3] : '';
      const timeStr = post.formattedTime || '';
      const searchText = (post.text || '').replace(/"/g, '&quot;');

      html += `<div class="weibo-card" data-platform="bilibili" data-month="${month}" data-day="${day}" data-search-text="${searchText}">
        <div class="weibo-time">
          <span class="platform-tag bilibili">B站</span>
          <span class="video-tag-label">视频</span>
          ${timeStr}
        </div>
        <a href="${post.url}" target="_blank" class="video-desc-box">
          <span class="text">${post.text || ''}</span>
          <span class="arrow">→</span>
        </a>
      </div>`;
      rendered++;
    });

    console.log('B站渲染: 实际渲染', rendered, '条新卡片');

    if (html && rendered > 0) {
      // 插入到最后一个小红书卡片后面
      const xhsCards = feed.querySelectorAll('[data-platform="xiaohongshu"]');
      if (xhsCards.length > 0) {
        const lastXhs = xhsCards[xhsCards.length - 1];
        lastXhs.insertAdjacentHTML('afterend', html);
      } else {
        // 没有小红书卡片，插入到最后一个抖音卡片后面
        const douyinCards = feed.querySelectorAll('[data-platform="douyin"]');
        if (douyinCards.length > 0) {
          const lastDouyin = douyinCards[douyinCards.length - 1];
          lastDouyin.insertAdjacentHTML('afterend', html);
        } else {
          feed.insertAdjacentHTML('beforeend', html);
        }
      }
      filterWeiboFeed();
      console.log('B站渲染: 插入完成');
    }
  }

  // 所有平台卡片按日期统一排序
  function sortAllCardsByDate() {
    const feed = document.getElementById('weiboFeed');
    if (!feed) return;
    
    // 收集所有有data-platform属性的非置顶卡片（包括微博、抖音、小红书、B站）
    const allCards = Array.from(feed.querySelectorAll('[data-platform]')).filter(el => 
      !el.classList.contains('pinned')
    );
    
    if (allCards.length <= 1) {
      console.log('排序跳过，卡片数量不足:', allCards.length);
      return;
    }
    
    // 统计各平台数量
    const platformCount = {};
    allCards.forEach(card => {
      const p = card.dataset.platform || 'unknown';
      platformCount[p] = (platformCount[p] || 0) + 1;
    });
    console.log('排序前各平台数量:', platformCount, '总计:', allCards.length);
    
    // 按日期降序排序（最新的在前面）
    allCards.sort((a, b) => {
      const dateA = (a.dataset.month || '') + '-' + (a.dataset.day || '00');
      const dateB = (b.dataset.month || '') + '-' + (b.dataset.day || '00');
      if (dateA === dateB) return 0;
      return dateB.localeCompare(dateA);
    });
    
    // 可靠的插入方式：用DocumentFragment，把排序后的卡片依次添加，然后一次性插入到feed
    const fragment = document.createDocumentFragment();
    allCards.forEach(card => {
      fragment.appendChild(card);
    });
    
    // 找到插入位置：最后一个置顶卡片的后面，或者feed开头
    const pinnedCards = Array.from(feed.querySelectorAll('[data-platform].pinned'));
    let insertBeforeNode = null;
    if (pinnedCards.length > 0) {
      const lastPinned = pinnedCards[pinnedCards.length - 1];
      insertBeforeNode = lastPinned.nextSibling;
    } else {
      insertBeforeNode = feed.firstChild;
    }
    
    // 把fragment一次性插入到指定位置（不会反转顺序）
    feed.insertBefore(fragment, insertBeforeNode);
    
    console.log('卡片按日期排序完成，共', allCards.length, '条');
    
    // 平台数据排序完成后刷新右侧更新列表
    if (typeof currentYear !== 'undefined' && typeof currentMonth !== 'undefined') {
      const activePage = document.querySelector('.page-box.active')?.id || 'home';
      renderCalendar(currentYear, currentMonth);
      renderUpdateList(currentYear, currentMonth, null, activePage);
    }
  }
  
  function filterWeiboFeed() {
  const allCards = document.querySelectorAll('#weiboFeed .weibo-card, #weiboFeed .xiaohongshu-card');
  const nonPinned = Array.from(allCards);
  const weiboData = nonPinned.filter(c => c.dataset.platform === 'weibo');
  const xiaohongshuData = nonPinned.filter(c => c.dataset.platform === 'xiaohongshu');
  const douyinData = nonPinned.filter(c => c.dataset.platform === 'douyin');
  const bilibiliData = nonPinned.filter(c => c.dataset.platform === 'bilibili');

  const totalEl = document.getElementById('platformTotalCount');
  if (totalEl) totalEl.textContent = nonPinned.length;
  const wbEl = document.getElementById('platformWeiboCount');
  if (wbEl) wbEl.textContent = weiboData.length;
  const xhsEl = document.getElementById('platformXiaohongshuCount');
  if (xhsEl) xhsEl.textContent = xiaohongshuData.length;
  const dyEl = document.getElementById('platformDouyinCount');
  if (dyEl) dyEl.textContent = douyinData.length;
  const blEl = document.getElementById('platformBilibiliCount');
  if (blEl) blEl.textContent = bilibiliData.length;

  const activePlatform = document.querySelector('#platformNav .stage-nav-item.active');
  const currentPlatform = activePlatform ? activePlatform.dataset.platform : 'all';
  const keyword = document.getElementById('weiboSearch').value.trim().toLowerCase();

  let visibleCount = 0;
  allCards.forEach(card => {
    const cardPlatform = card.dataset.platform || 'weibo';
    const isPinned = card.classList.contains('pinned');
    const platformMatch = currentPlatform === 'all' || cardPlatform === currentPlatform;
    if (!card.dataset.searchText) {
      card.dataset.searchText = card.textContent.toLowerCase();
    }
    const textMatch = keyword === '' || card.dataset.searchText.includes(keyword);

    let monthMatch = true;
    if (calFilteredMonth && !isPinned) {
      const cardMonth = card.dataset?.month;
      if (!cardMonth) { monthMatch = false; }
      else {
        const my = cardMonth.split('-');
        monthMatch = parseInt(my[0]) === calFilteredMonth.year && parseInt(my[1]) === calFilteredMonth.month;
      }
    }

    let dayMatch = true;
    if (calFilteredDay && !isPinned) {
      const cardDay = card.dataset?.day;
      const cardMonth = card.dataset?.month;
      if (!cardDay || !cardMonth) { dayMatch = false; }
      else {
        const my = cardMonth.split('-');
        const cardDateStr = my[0] + '.' + my[1] + '.' + cardDay;
        dayMatch = cardDateStr === calFilteredDay;
      }
    }

    let yearMatch = true;
    if (calFilteredYear && !isPinned) {
      const cardMonth = card.dataset?.month;
      if (!cardMonth) { yearMatch = false; }
      else {
        const year = parseInt(cardMonth.split('-')[0]);
        yearMatch = year === calFilteredYear;
      }
    }

    if (isPinned) {
      card.style.display = 'none';
    } else {
      card.style.display = (platformMatch && textMatch && monthMatch && dayMatch && yearMatch) ? '' : 'none';
      if (card.style.display !== 'none') visibleCount++;
    }
  });

  let oldEmpty = document.getElementById('emptyStateMessage');
  if (oldEmpty) oldEmpty.remove();

  if (visibleCount === 0) {
    const feed = document.getElementById('weiboFeed');
    const emptyMsg = document.createElement('div');
    emptyMsg.id = 'emptyStateMessage';
    emptyMsg.style.cssText = 'text-align:center; padding:40px 0; color:#4a779e; font-size:14px;';
    const searchKeyword = keyword || '空';
    emptyMsg.textContent = '没有找到任何关于"' + searchKeyword + '"的内容 ';
    feed.appendChild(emptyMsg);
  }
}

  document.querySelectorAll('#platformNav .stage-nav-item').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('#platformNav .stage-nav-item').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      filterWeiboFeed();
      if (window.updateNavIndicator) window.updateNavIndicator('platformNav', 'platformNavIndicator');
    });
  });

  let weiboSearchTimer;
  document.getElementById('weiboSearch')?.addEventListener('input', function() {
    clearTimeout(weiboSearchTimer);
    weiboSearchTimer = setTimeout(filterWeiboFeed, 200);
  });

  const imageSets = {};  // 图片集合：运行时由微博/小红书帖子数据动态写入

  let currentSetId = 'slider1';
  let currentIndex = 0;
  let currentImages = [];

  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImage');
  const modalDots = document.getElementById('modalDots');

  window.openModalWithImages = function(setId, index) {
    var images = imageSets[setId];
    if (!images || images.length === 0) return;
    
    currentSetId = setId;
    currentImages = images;
    currentIndex = index;
    updateModal();
    
    var modal = document.getElementById('imageModal');
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    
    modal.addEventListener('touchmove', function(e) {
      e.preventDefault();
    }, { passive: false });
  };

      window.previewImage = function(src) {
          var modal = document.getElementById('imageModal');
          var modalImg = document.getElementById('modalImage');
          if (modal && modalImg) {
              modalImg.src = src;
              modal.classList.add('open');
              document.body.style.overflow = 'hidden';
              document.getElementById('modalPrev').style.display = 'none';
              document.getElementById('modalNext').style.display = 'none';
              document.getElementById('modalDots').innerHTML = '';
              
              modal.onclick = function(e) {
                  if (e.target === modal) {
                      closeModal();
                  }
              };
          }
      
    // 平台数据渲染完成后，重新渲染右侧日历
    if (typeof currentYear !== 'undefined' && typeof currentMonth !== 'undefined') {
      calCurrentPage = 'fancam';
      renderCalendar(currentYear, currentMonth);
      renderUpdateList(currentYear, currentMonth, null, 'fancam');
    }
};

  function clearFilter() {
    calFilteredMonth = null;
    calFilteredDay = null;
    calSelectedDate = null;
    calFilteredYear = null;
    currentPage = 1;
    
    document.getElementById('filterYear').value = '';
    document.getElementById('filterMonth').value = '';
    document.getElementById('filterDay').value = '';
    updateFilterDays();
    updateFilterTip();
    
    if (currentFilterPage === 'stage') {
      renderCards(currentCategory, document.getElementById('stageSearch')?.value || '');
    } else if (currentFilterPage === 'bobo') {
      renderBoboCards(currentBoboCategory, document.getElementById('boboSearch')?.value || '');
    } else if (currentFilterPage === 'fancam') {
      filterWeiboFeed();
    }
    
    closeFilterPanel();
  }

  function closeModal() {
      var modal = document.getElementById('imageModal');
      modal.classList.remove('open');
      document.body.style.overflow = '';
  }
  document.getElementById('imageModal')?.addEventListener('click', function(e) {
    if (e.target === this) {
      closeModal();
    }
  });

  function goToPrev() {
      if (currentImages.length <= 1) return;
      currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
      updateModal();
  }

  function goToNext() {
      if (currentImages.length <= 1) return;
      currentIndex = (currentIndex + 1) % currentImages.length;
      updateModal();
  }

  function updateModal() {
    if (!currentImages.length) return;
    var modalImg = document.getElementById('modalImage');
    var modalDots = document.getElementById('modalDots');
    var prevBtn = document.getElementById('modalPrev');
    var nextBtn = document.getElementById('modalNext');
    
    modalImg.src = currentImages[currentIndex];
    modalDots.innerHTML = '';
    currentImages.forEach(function(_, i) {
      var dot = document.createElement('button');
      dot.className = 'modal-dot' + (i === currentIndex ? ' active' : '');
      dot.addEventListener('click', function(e) {
        e.stopPropagation();
        currentIndex = i;
        updateModal();
      });
      modalDots.appendChild(dot);
    });
    prevBtn.style.display = currentImages.length > 1 ? 'flex' : 'none';
    nextBtn.style.display = currentImages.length > 1 ? 'flex' : 'none';
    
    prevBtn.onclick = function(e) {
      e.stopPropagation();
      goToPrev();
    };
    nextBtn.onclick = function(e) {
      e.stopPropagation();
      goToNext();
    };
  }

  (function() {
    
    // ===== 从 Hugging Face 动态加载口袋图集 =====
    const HF_DATASET = '156816SAFE/image-bed';
    const HF_BASE_PATH = 'pocketphoto';
    const HF_API_BASE = 'https://huggingface.co/api/datasets/' + HF_DATASET + '/tree/main/' + HF_BASE_PATH;
    const HF_RESOLVE_BASE = 'https://huggingface.co/datasets/' + HF_DATASET + '/resolve/main/' + HF_BASE_PATH;

    function extractDateFromFilename(filename) {
      var m = filename.match(/_(\d{4}-\d{2}-\d{2})_/);
      if (m) return m[1].replace(/-/g, '.');
      return null;
    }

    async function fetchImagesInFolder(folderName) {
      try {
        var resp = await fetch(HF_API_BASE + '/' + folderName);
        if (!resp.ok) return [];
        var files = await resp.json();
        return files
          .filter(function(f) { return f.type === 'file' && /\.(webp|jpg|jpeg|png|gif)$/i.test(f.path); })
          .map(function(f) {
            var filename = f.path.split('/').pop();
            var date = extractDateFromFilename(filename) || folderName.replace('-', '.') + '.01';
            return { date: date, url: HF_RESOLVE_BASE + '/' + folderName + '/' + filename };
          })
          .sort(function(a, b) { return a.date.localeCompare(b.date); });
      } catch (e) {
        console.error('获取文件夹失败:', folderName, e);
        return [];
      }
    }

    async function loadPocketPhotosFromHF() {
      var grid = document.querySelector('.miracle-card-grid');
      if (!grid) return;
      grid.innerHTML = '<div style="text-align:center;padding:40px 0;color:#7a9ab0;font-size:14px;">加载中...</div>';
      try {
        var resp = await fetch(HF_API_BASE);
        if (!resp.ok) throw new Error('API请求失败');
        var folders = await resp.json();
        var monthFolders = folders
          .filter(function(f) { return f.type === 'directory' && /^\d{4}-\d{2}$/.test(f.path.split('/').pop()); })
          .map(function(f) { return f.path.split('/').pop(); })
          .sort(function(a, b) { return b.localeCompare(a); });
        
        if (monthFolders.length === 0) {
          grid.innerHTML = '<div style="text-align:center;padding:40px 0;color:#7a9ab0;font-size:14px;">暂无图片</div>';
          return;
        }

        var results = await Promise.all(monthFolders.map(function(m) { return fetchImagesInFolder(m); }));
        var newMonthImages = {};
        monthFolders.forEach(function(m, i) {
          if (results[i].length > 0) newMonthImages[m] = results[i];
        });
        
        if (typeof monthImages !== 'undefined') {
          Object.keys(newMonthImages).forEach(function(k) { monthImages[k] = newMonthImages[k]; });
        } else {
          window.monthImages = newMonthImages;
        }

        grid.innerHTML = monthFolders
          .filter(function(m) { return newMonthImages[m] && newMonthImages[m].length > 0; })
          .map(function(m) {
            var monthNum = parseInt(m.substring(5, 7));
            var yearMonth = m.replace('-', '.');
            var coverUrl = newMonthImages[m][0].url;
            return '              <div class="miracle-card" data-month="' + m + '">' +
              '                <div class="cover-image">' +
              '                  <img decoding="async" src="' + coverUrl + '" alt="' + yearMonth + '" loading="lazy" />' +
              '                  <div class="cover-badge">' + newMonthImages[m].length + '张</div>' +
              '                </div>' +
              '                <div class="card-footer">' + yearMonth + '</div>' +
              '              </div>';
          })
          .join('');

        console.log('口袋图集加载完成：' + Object.keys(newMonthImages).length + '个月，共' + results.reduce(function(s, r) { return s + r.length; }, 0) + '张图片');
      } catch (e) {
        console.error('加载口袋图集失败:', e);
        grid.innerHTML = '<div style="text-align:center;padding:40px 0;color:#7a9ab0;font-size:14px;">加载失败，请刷新重试</div>';
      }
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', loadPocketPhotosFromHF);
    } else {
      loadPocketPhotosFromHF();
    }

    const popup = document.getElementById('popupOverlayMiracle');
    const popupTitle = document.getElementById('miraclePopupTitle');
    const popupGrid = document.getElementById('miraclePopupGrid');
    const popupClose = document.getElementById('miraclePopupClose');

    function openMiraclePopup(month) {
      const images = monthImages[month] || [];
      popupTitle.textContent = month.replace('-', '年') + '月';
      
      popupGrid.style.display = 'flex';
      popupGrid.style.flexWrap = 'wrap';
      popupGrid.style.gap = '10px';
      popupGrid.style.justifyContent = 'flex-start';
      
      popupGrid.innerHTML = images.length ? images.map(item =>
        `<div style="width:calc(25% - 10px); aspect-ratio:1/1; border-radius:6px; overflow:hidden; position:relative; cursor:pointer;" onclick="window.previewImage && window.previewImage('${item.url}')">
          <img decoding="async" src="${item.url}" loading="lazy" style="width:100%;height:100%;object-fit:cover;display:block;" />
          <div style="position:absolute;bottom:0;left:0;right:0;background:linear-gradient(transparent,rgba(0,0,0,0.6));color:#fff;font-size:10px;font-weight:600;padding:16px 8px 6px;text-align:center;">${item.date}</div>
        </div>`
      ).join('') : `<div style="text-align:center;padding:40px 0;color:#7a9ab0;font-size:14px;width:100%;">暂无图片</div>`;
      
      popup.classList.add('open');
      document.body.style.overflow = 'hidden';
    }

    document.querySelector('.miracle-card-grid')?.addEventListener('click', function(e) {
      const card = e.target.closest('.miracle-card');
      if (card && card.dataset.month && monthImages[card.dataset.month]?.length) {
        openMiraclePopup(card.dataset.month);
      }
    });

    popupClose?.addEventListener('click', () => { popup.classList.remove('open'); document.body.style.overflow = ''; });
    popup?.addEventListener('click', function(e) { if (e.target === this) { this.classList.remove('open'); document.body.style.overflow = ''; } });
  })();

  (function() {
    const root = document.documentElement;
    const paletteToggle = document.getElementById('paletteToggle');
    const settingsPanel = document.getElementById('settingsPanel');
    let panelOpen = false;

    if (paletteToggle && settingsPanel) {
      paletteToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        panelOpen = !panelOpen;
        this.classList.toggle('active', panelOpen);
        settingsPanel.classList.toggle('open', panelOpen);
      });
      document.addEventListener('click', function(e) {
        if (panelOpen && !settingsPanel.contains(e.target) && !paletteToggle.contains(e.target)) {
          panelOpen = false;
          paletteToggle.classList.remove('active');
          settingsPanel.classList.remove('open');
        }
      });
    }

    const hueTrack = document.getElementById('hueTrack');
    const hueThumb = document.getElementById('hueThumb');
    const hueDisplay = document.getElementById('hueDisplay');
    let isDragging = false;

    function getHueFromClick(e) {
      if (!hueTrack) return 265;
      const rect = hueTrack.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      return Math.round(Math.max(0, Math.min(1, x)) * 360);
    }

    function setHue(hue) {
      const clamped = Math.max(0, Math.min(360, hue));
      const pct = (clamped / 360) * 100;
      if (hueThumb) hueThumb.style.left = pct + '%';
      if (hueDisplay) {
        hueDisplay.textContent = clamped + '°';
        hueDisplay.style.color = 'hsl(' + clamped + ', 80%, 55%)';
      }
      root.style.setProperty('--theme-hue', clamped);
    }

    if (hueTrack) {
      hueTrack.addEventListener('mousedown', function(e) { isDragging = true; setHue(getHueFromClick(e)); });
      document.addEventListener('mousemove', function(e) { if (isDragging) setHue(getHueFromClick(e)); });
      document.addEventListener('mouseup', function() { isDragging = false; });
      hueTrack.addEventListener('touchstart', function(e) { e.preventDefault(); setHue(getHueFromClick(e.touches[0])); }, { passive: false });
      hueTrack.addEventListener('touchmove', function(e) { e.preventDefault(); setHue(getHueFromClick(e.touches[0])); }, { passive: false });
    }

    const wallpaperBtns = document.querySelectorAll('#wallpaperBtns .btn-sm');
    const contentArea = document.querySelector('.content-area');

    function setWallpaper(mode) {
      if (!contentArea) return;
      if (mode === 'full') {
        document.body.classList.remove('pure-mode');
        const bgSlider = document.getElementById('bgOpacity');
        root.style.setProperty('--bg-opacity', bgSlider ? bgSlider.value / 100 : 0.8);
        const blurSlider = document.getElementById('blurAmount');
        root.style.setProperty('--blur-amount', blurSlider ? blurSlider.value + 'px' : '0px');
        contentArea.style.backgroundColor = 'transparent';
        document.body.style.background = '';
        document.documentElement.style.background = '';
      } else if (mode === 'solid') {
        document.body.classList.add('pure-mode');
        const isDark = document.body.classList.contains('dark-mode');
        const color = isDark ? '#000000' : '#ffffff';
        contentArea.style.backgroundColor = 'transparent';
        document.body.style.background = color;
        document.documentElement.style.background = color;
        root.style.setProperty('--bg-opacity', 0);
        root.style.setProperty('--blur-amount', '0px');
      }
      wallpaperBtns.forEach(btn => btn.classList.toggle('active', btn.dataset.mode === mode));
    }

    wallpaperBtns.forEach(btn => btn.addEventListener('click', function() { setWallpaper(this.dataset.mode); }));

    const bgOpacity = document.getElementById('bgOpacity');
    const bgOpacityVal = document.getElementById('bgOpacityVal');
    const blurAmount = document.getElementById('blurAmount');
    const blurVal = document.getElementById('blurVal');

    if (bgOpacity) {
      bgOpacity.value = 80;
      bgOpacityVal.textContent = '80%';
      root.style.setProperty('--bg-opacity', 0.8);
      bgOpacity.addEventListener('input', function() {
        const val = this.value / 100;
        bgOpacityVal.textContent = this.value + '%';
        root.style.setProperty('--bg-opacity', val);
      });
    }

    if (blurAmount) {
      blurAmount.value = 0;
      blurVal.textContent = '0px';
      root.style.setProperty('--blur-amount', '0px');
      blurAmount.addEventListener('input', function() {
        const val = this.value + 'px';
        blurVal.textContent = val;
        root.style.setProperty('--blur-amount', val);
      });
    }

    const cardOpacity = document.getElementById('cardOpacity');
    const cardOpacityVal = document.getElementById('cardOpacityVal');

    if (cardOpacity) {
      cardOpacity.value = 80;
      cardOpacityVal.textContent = '80%';
      document.documentElement.style.setProperty('--card-opacity', 0.8);
      cardOpacity.addEventListener('input', function() {
        const val = this.value / 100;
        cardOpacityVal.textContent = this.value + '%';
        document.documentElement.style.setProperty('--card-opacity', val);
      });
    }

    const layoutBtns = document.querySelectorAll('#layoutBtns .btn-sm');

    function setLayout(mode) {
      currentLayoutMode = mode;
      ['stageGrid', 'boboGrid', 'gongyanGrid'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.className = 'stage-grid' + (mode === 'list' ? ' list-mode' : '');
      });
      layoutBtns.forEach(btn => btn.classList.toggle('active', btn.dataset.layout === mode));
    }

    layoutBtns.forEach(btn => btn.addEventListener('click', function() { setLayout(this.dataset.layout); }));

    setLayout('list');
    setHue(210);
    setWallpaper('full');
  })();

  (function() {
    const darkToggle = document.getElementById('darkToggle');
    const darkIcon = document.getElementById('darkIcon');
    const lightIcon = 'https://huggingface.co/datasets/156816SAFE/image-bed/resolve/main/icon_bip5uayjrmg/5ecf3cc9-50bd-4348-97e2-90b5560baf51_1789006828553_taiyangtianqi.webp';
    const darkIconUrl = 'https://huggingface.co/datasets/156816SAFE/image-bed/resolve/main/icon_bip5uayjrmg/4201ec23-44a4-4802-9a45-6134e40578ab_1789006835993_taiyang.webp';

    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'dark') {
      document.body.classList.add('dark-mode');
      if (darkIcon) darkIcon.src = darkIconUrl;
    }

    if (darkToggle && darkIcon) {
      darkToggle.addEventListener('click', function() {
        const isDark = document.body.classList.toggle('dark-mode');
        darkIcon.src = isDark ? darkIconUrl : lightIcon;
        localStorage.setItem('darkMode', isDark ? 'dark' : 'light');
        syncMobileDarkUI();
        if (window.updateNavIndicator) {
          setTimeout(() => {
            window.updateNavIndicator('stageNav', 'stageNavIndicator');
            window.updateNavIndicator('boboNav', 'boboNavIndicator');
            window.updateNavIndicator('platformNav', 'platformNavIndicator');
          }, 50);
        }
      });
    }
  })();

  let pagesRendered = { stage: false, bobo: false, fancam: false };
  let stageDataLoaded = false;

  // 确保DOM加载完成后再初始化舞台
  function initStage() {
    // 绑定分页按钮点击事件
    const prevBtn = document.getElementById('prevPageBtn');
    const nextBtn = document.getElementById('nextPageBtn');
    if (prevBtn) prevBtn.addEventListener('click', () => changePage(-1));
    if (nextBtn) nextBtn.addEventListener('click', () => changePage(1));

    // 加载舞台数据，完成后一定渲染（不检查active，因为DOM总是存在的）
    loadStageData().then(() => {
      stageDataLoaded = true;
      pagesRendered.stage = true;
      console.log('舞台数据加载完成，开始渲染，总条数:', stageCategoryCache.all.length);
      renderCards('all', '');
    }).catch(err => {
      console.error('舞台数据加载失败:', err);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initStage);
  } else {
    initStage();
  }
  
  if (window.requestIdleCallback) {
    requestIdleCallback(function() {
      if (!pagesRendered.bobo) { renderBoboCards('all', ''); pagesRendered.bobo = true; }
      if (!pagesRendered.fancam) { filterWeiboFeed(); pagesRendered.fancam = true; }
    }, { timeout: 2000 });
  } else {
    setTimeout(function() {
      if (!pagesRendered.bobo) { renderBoboCards('all', ''); pagesRendered.bobo = true; }
      if (!pagesRendered.fancam) { filterWeiboFeed(); pagesRendered.fancam = true; }
    }, 500);
  }

  setTimeout(function() {
      updateNavIndicator('stageNav', 'stageNavIndicator');
      updateNavIndicator('boboNav', 'boboNavIndicator');
      updateNavIndicator('platformNav', 'platformNavIndicator');
    }, 100);

  function getStageDateColors() {
    const dateMap = new Map();
    
    const categoryColors = {
      unit: '#7fb5d0',
      special: '#e8b88a',
      assist: '#e8d48a',
      substitute: '#a8d4c8'
    };
    
    const allStageData = [
      ...unitData.map(d => ({ ...d, category: 'unit' })),
      ...specialData.map(d => ({ ...d, category: 'special' })),
      ...assistData.map(d => ({ ...d, category: 'assist' })),
      ...substituteData.map(d => ({ ...d, category: 'substitute' }))
    ];
    
    allStageData.forEach(item => {
      if (!item.date) return;
      const dateKey = item.date;
      if (!dateMap.has(dateKey)) {
        dateMap.set(dateKey, []);
      }
      dateMap.get(dateKey).push(categoryColors[item.category] || '#888');
    });
    
    return dateMap;
  }

  function getGongyanDateColors() {
    const dateMap = new Map();

    const typeColors = {
      'gongyan': '#6bb8e8',
      'other': '#f5a0b8'
    };

    const gongyanDataRef = window.gongyanData || (typeof gongyanData !== 'undefined' ? gongyanData : []);
    if (!gongyanDataRef || gongyanDataRef.length === 0) return dateMap;

    gongyanDataRef.forEach(item => {
      if (!item.pubdate) return;
      const dateStr = item.pubdate.replace(/-/g, '.');
      const pureDate = dateStr.replace(/[凌晨|晚|早|下午|中午].*$/, '').trim();
      if (!dateMap.has(pureDate)) {
        dateMap.set(pureDate, []);
      }
      const isGongyanItem = item.pubdate && item.pubdate !== '';
      const type = isGongyanItem ? 'gongyan' : 'other';
      dateMap.get(pureDate).push(typeColors[type] || '#888');
    });

    return dateMap;
  }

function getBoboDateColors() {
    const dateMap = new Map();

    const typeColors = {
      '直播': '#f0a0a0',
      '电台': '#d4b0b8'
    };

    const allBoboItems = [...boboData, ...pocketLivesData];
    allBoboItems.forEach(item => {
      if (!item.date) return;
      const pureDate = item.date.replace(/[凌晨|晚|早|下午|中午].*$/, '').trim();
      if (!dateMap.has(pureDate)) {
        dateMap.set(pureDate, []);
      }
      dateMap.get(pureDate).push(typeColors[item.type] || '#888');
    });
    
    return dateMap;
  }

  function getFancamDateColors() {
    const dateMap = new Map();
    
    const platformColors = {
      weibo: '#d4b8a8',
      xiaohongshu: '#f5b8a0',
      douyin: '#c0b8d0',
      bilibili: '#b0c8b8'
    };
    
    const cards = document.querySelectorAll('#weiboFeed .weibo-card, #weiboFeed .xiaohongshu-card, #weiboFeed .douyin-card, #weiboFeed .bilibili-card');
    cards.forEach(card => {
      const platform = card.dataset.platform;
      const month = card.dataset.month;
      const day = card.dataset.day;
      if (platform && month && day) {
        const dateKey = month.replace('-', '.') + '.' + day;
        if (!dateMap.has(dateKey)) {
          dateMap.set(dateKey, []);
        }
        const color = platformColors[platform] || '#888';
        dateMap.get(dateKey).push(color);
      }
    });
    
    return dateMap;
  }

  function mixColors(colors) {
    if (colors.length === 0) return '#888';
    if (colors.length === 1) return colors[0];
    
    const rgbs = colors.map(color => {
      const hex = color.replace('#', '');
      return {
        r: parseInt(hex.substring(0, 2), 16),
        g: parseInt(hex.substring(2, 4), 16),
        b: parseInt(hex.substring(4, 6), 16)
      };
    });
    
    const avg = rgbs.reduce((acc, cur) => {
      acc.r += cur.r;
      acc.g += cur.g;
      acc.b += cur.b;
      return acc;
    }, { r: 0, g: 0, b: 0 });
    
    avg.r = Math.round(avg.r / rgbs.length);
    avg.g = Math.round(avg.g / rgbs.length);
    avg.b = Math.round(avg.b / rgbs.length);
    
    return `#${avg.r.toString(16).padStart(2, '0')}${avg.g.toString(16).padStart(2, '0')}${avg.b.toString(16).padStart(2, '0')}`;
  }


  // ===== 公演行程数据 =====
  

  function getUpdateTypesForPage(pageId) {
    const typeMap = {
      'home': ['stage', 'bobo', 'fancam', 'gongyan'],
      'wait': ['stage', 'bobo', 'fancam', 'gongyan'], 
      'stage': ['stage'],
      'bobo': ['bobo'],
      'fancam': ['fancam'],
      'gongyan': ['gongyan']
    };
    return typeMap[pageId] || [];
  }

  function getMonthUpdates(year, month, types) {
    const monthStr = String(month + 1).padStart(2, '0');
    const datePrefix = `${year}.${monthStr}.`;
    const results = [];
    const typeFilter = types || ['stage', 'bobo', 'fancam'];

    if (typeFilter.includes('stage')) {
      const allStageData = [
        ...unitData.map(d => ({ ...d, category: 'unit' })),
        ...specialData.map(d => ({ ...d, category: 'special' })),
        ...assistData.map(d => ({ ...d, category: 'assist' })),
        ...substituteData.map(d => ({ ...d, category: 'substitute' }))
      ];
      const stageTypeLabels = { unit: 'UNIT', special: '特殊舞台', assist: '助演', substitute: '代役' };
      allStageData.forEach(item => {
        if (item.date && item.date.startsWith(datePrefix)) {
          const day = parseInt(item.date.substring(datePrefix.length));
          results.push({
            dateKey: item.date,
            day: day,
            type: 'stage',
            typeClass: item.category,
            typeLabel: stageTypeLabels[item.category] || '舞台',
            subType: item.category,
            title: item.title,
            subtitle: '',
            url: item.url || '',
            cover: item.cover || '',
            displayDate: `${monthStr}月${String(day).padStart(2,'0')}日`
          });
        }
      });
    }

    if (typeFilter.includes('bobo')) {
      const boboTypeLabels = { '直播': '视频', '电台': '电台' };
      const allBoboItems = [...boboData, ...pocketLivesData];
      allBoboItems.forEach(item => {
        if (item.date) {
          const pureDate = item.date.replace(/[凌晨|晚|早|下午|中午].*$/, '');
          if (pureDate.startsWith(datePrefix)) {
            const day = parseInt(pureDate.substring(datePrefix.length));
            const timeSuffix = item.date.substring(pureDate.length);
            const subType = item.type || '直播';
            results.push({
              dateKey: pureDate,
              day: day,
              type: 'bobo',
              typeClass: 'bobo-' + subType,
              typeLabel: boboTypeLabels[subType] || '视频',
              subType: subType,
              title: item.title,
              subtitle: timeSuffix || '',
              url: item.url || '',
              cover: item.cover || '',
              liveId: item.liveId || '',
              displayDate: `${monthStr}月${String(day).padStart(2,'0')}日`
            });
          }
        }
      });
    }

    if (typeFilter.includes('fancam')) {
      const platformNames = {
        weibo: '微博',
        xiaohongshu: '小红书',
        douyin: '抖音',
        bilibili: 'B站'
      };
      const cards = document.querySelectorAll('#weiboFeed .weibo-card, #weiboFeed .xiaohongshu-card, #weiboFeed .douyin-card, #weiboFeed .bilibili-card');
      cards.forEach(card => {
        const platform = card.dataset.platform;
        const cardMonth = card.dataset.month;
        const cardDay = card.dataset.day;
        if (platform && cardMonth && cardDay) {
          const dateKey = cardMonth.replace('-', '.') + '.' + cardDay;
          if (dateKey.startsWith(datePrefix)) {
            const day = parseInt(cardDay);
            const label = platformNames[platform] || '平台';
            
            let url = '#';
            const descBox = card.querySelector('.video-desc-box');
            if (descBox && descBox.href) {
              url = descBox.href;
            }
            if (!url || url === '#') {
              const linkBtn = card.querySelector('.weibo-link-button');
              if (linkBtn && linkBtn.href) {
                url = linkBtn.href;
              }
            }
            
            results.push({
              dateKey: dateKey,
              day: day,
              type: 'fancam',
              typeClass: platform,
              typeLabel: label,
              subType: platform,
              title: label + '更新',
              subtitle: '',
              url: url,
              cover: '',
              displayDate: `${monthStr}月${cardDay}日`
            });
          }
        }
      });
    }

    if (typeFilter.includes('gongyan')) {
      const gongyanDataRef = window.gongyanData || gongyanData || [];
      gongyanDataRef.forEach(item => {
        if (item.pubdate) {
          // pubdate格式可能是 2025-08-14 或 2025.08.14
          const dateStr = item.pubdate.replace(/-/g, '.');
          if (dateStr.startsWith(datePrefix)) {
            const day = parseInt(dateStr.substring(dateStr.lastIndexOf('.') + 1));
            const isGongyanItem = item.pubdate && item.pubdate !== '';
            results.push({
              dateKey: dateStr,
              day: day,
              type: 'gongyan',
              typeClass: isGongyanItem ? 'gongyan' : 'gongyan-other',
              typeLabel: isGongyanItem ? '公演' : '其他',
              subType: isGongyanItem ? 'gongyan' : 'other',
              title: item.title || '',
              subtitle: '',
              url: item.url || ('https://www.bilibili.com/video/' + (item.bvid || '')),
              cover: item.cover || item.pic || '',
              displayDate: `${monthStr}月${String(day).padStart(2,'0')}日`
            });
          }
        }
      });
    }

    results.sort((a, b) => {
      if (b.day !== a.day) return b.day - a.day;
      const typeOrder = { stage: 0, bobo: 1, fancam: 2, gongyan: 3 };
      return (typeOrder[a.type] || 9) - (typeOrder[b.type] || 9);
    });

    return results;
  }

  let calSelectedDate = null;
  let calCurrentPage = 'home';

  function renderUpdateList(year, month, filterDateKey, pageId) {
    const listEl = document.getElementById('calUpdateList');
    const headerEl = document.getElementById('calUpdateHeader');
    const backBtn = document.getElementById('calUpdateBack');
    const wrapEl = document.getElementById('calUpdateListWrap');
    const types = getUpdateTypesForPage(pageId || calCurrentPage);
    const isNoSummaryPage = (pageId === 'food' || pageId === 'travel' || pageId === 'words' || pageId === 'dream' || pageId === 'murmur' || pageId === 'recommend');

    if (isNoSummaryPage) {
      if (wrapEl) wrapEl.style.display = 'none';
      return;
    }

    if (wrapEl) wrapEl.style.display = '';

    const allUpdates = getMonthUpdates(year, month, types);

    let filteredUpdates = allUpdates;

    if (filterDateKey) {
      filteredUpdates = allUpdates.filter(u => u.dateKey === filterDateKey);
      const dayStr = filterDateKey.substring(filterDateKey.lastIndexOf('.') + 1);
    } else {
      calSelectedDate = null;
    }

    if (filteredUpdates.length === 0) {
      listEl.innerHTML = '<div class="cal-update-empty">暂无更新</div>';
      headerEl.innerHTML = `<span class="update-title">本月更新汇总</span><img decoding="async" id="calResetMonth" class="cal-reset-icon" src="https://huggingface.co/datasets/156816SAFE/image-bed/resolve/main/icon_bip5uayjrmg/f3b5214a-19b2-47e9-8a49-007fd5f1ff55_1789006840023_fanhui.webp" alt="重置" title="恢复到当月" /><span class="update-count">0</span>`;
      return;
    }

    let grouped = [];
    if (!filterDateKey) {
      grouped = [];
      let currentDate = null;
      let currentGroup = null;
      filteredUpdates.forEach(item => {
        if (item.dateKey !== currentDate) {
          if (currentGroup) grouped.push(currentGroup);
          currentDate = item.dateKey;
          currentGroup = { dateKey: item.dateKey, displayDate: item.displayDate, items: [] };
        }
        currentGroup.items.push(item);
      });
      if (currentGroup) grouped.push(currentGroup);
    }

    let html = '';
    if (filterDateKey) {
      filteredUpdates.forEach(item => {
        html += renderUpdateItem(item);
      });
    } else {
      grouped.forEach(group => {
        html += `<div class="cal-group-date">${group.displayDate}</div>`;
        group.items.forEach(item => {
          html += renderUpdateItem(item);
        });
      });
    }

    listEl.innerHTML = html;
    const count = filteredUpdates.length;
    headerEl.innerHTML = `<span class="update-title">本月更新汇总</span><img decoding="async" id="calResetMonth" class="cal-reset-icon" src="https://huggingface.co/datasets/156816SAFE/image-bed/resolve/main/icon_bip5uayjrmg/f3b5214a-19b2-47e9-8a49-007fd5f1ff55_1789006840023_fanhui.webp" alt="重置" title="恢复到当月" /><span class="update-count">${count}</span>`;
    
    // 口袋回放点击弹出播放器
    listEl.querySelectorAll('.pocket-player-item').forEach(el => {
      el.addEventListener('click', function() {
        const liveId = this.dataset.liveId;
        if (liveId && typeof openPocketPlayer === 'function') {
          openPocketPlayer(liveId);
        }
      });
    });
  }

  function renderUpdateItem(item) {
    const typeClass = item.typeClass || item.type;
    const isPlatform = item.type === 'fancam';
    const isPocket = item.subType === 'pocket' && item.liveId;
    const isMobile = window.innerWidth <= 768;
    const isStage = item.type === 'stage';
    
    // 判断队伍：NII队用蓝色，其他队用橙色
    let teamColor = '';
    let teamLabel = '';
    if (isStage) {
      const title = item.title || '';
      if (title.includes('NII') || title.includes('Team NII') || title.includes('TEAM NII')) {
        teamColor = '#4a90d9';
        teamLabel = 'NII';
      } else {
        teamColor = '#e8a84a';
        teamLabel = '其他';
      }
    }
    
    let titleHtml = '';
    if (isPlatform) {
      titleHtml = `<span class="update-title-text platform-only">${item.title}</span>`;
    } else if (isMobile && isStage) {
      // 移动端：舞台只显示"公演"两个字
      const subtitle = item.subtitle ? `<span style="font-size:11px;color:#888;margin-left:4px;">${item.subtitle}</span>` : '';
      titleHtml = `<span class="update-title-text" style="color:${teamColor};font-weight:600;">公演${subtitle}</span>`;
    } else {
      const title = item.title.length > 14 ? item.title.substring(0, 14) + '…' : item.title;
      const subtitle = item.subtitle ? `<span style="font-size:11px;color:#888;margin-left:4px;">${item.subtitle}</span>` : '';
      const fullTitle = item.title + (item.subtitle ? ' ' + item.subtitle : '');
      titleHtml = `<span class="update-title-text" title="${fullTitle}">${title}${subtitle}</span>`;
    }
    
    // 类型标签颜色：和内容区卡片标签一致
    let typeLabelHtml = '';
    let tagColor = '';
    if (item.type === 'bobo') {
      tagColor = item.subType === '电台' ? '#d4b0b8' : '#f0a0a0';
    } else if (item.type === 'gongyan') {
      tagColor = item.subType === 'other' ? '#f5a0b8' : '#6bb8e8';
    }
    if (isMobile && isStage) {
      typeLabelHtml = `<span class="update-type ${typeClass}" style="background:${teamColor};color:#fff;">${teamLabel}</span>`;
    } else if (item.type === 'bobo' || item.type === 'gongyan') {
      typeLabelHtml = `<span class="update-type ${typeClass}" style="background:${tagColor};color:#fff;">${item.typeLabel}</span>`;
    } else {
      typeLabelHtml = `<span class="update-type ${typeClass}">${item.typeLabel}</span>`;
    }
    
    if (isPocket) {
      return `<div class="cal-update-item pocket-player-item" data-live-id="${item.liveId}" data-date="${item.dateKey}">
        ${typeLabelHtml}
        ${titleHtml}
      </div>`;
    }
    return `<a class="cal-update-item${isPlatform ? ' platform-only' : ''}" href="${item.url}" target="_blank" data-date="${item.dateKey}">
      ${typeLabelHtml}
      ${titleHtml}
    </a>`;
  }

  function renderCalendar(year, month) {
    const calDays = document.getElementById('calDays');
    const calMonthYear = document.getElementById('calMonthYear');

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const today = new Date();
    const todayStr = today.getFullYear() + '-' + String(today.getMonth()+1).padStart(2,'0') + '-' + String(today.getDate()).padStart(2,'0');

    calMonthYear.textContent = year + '年' + (month + 1) + '月';
    let html = '';
    const prevMonthDays = new Date(year, month, 0).getDate();

    const activePageId = document.querySelector('.page-box.active')?.id || calCurrentPage;
    const pageTypes = getUpdateTypesForPage(activePageId);
    const allUpdates = getMonthUpdates(year, month, pageTypes);
    const updateDates = new Set(allUpdates.map(u => u.dateKey));

    let dateColorMap = new Map();
    if (showStageMarkers) {
      if (activePageId === 'bobo') {
        dateColorMap = getBoboDateColors();
      } else if (activePageId === 'fancam') {
        dateColorMap = getFancamDateColors();
      } else if (activePageId === 'gongyan') {
        dateColorMap = getGongyanDateColors();
      } else {
        dateColorMap = getStageDateColors();
      }
    }
    


    for (let i = firstDay - 1; i >= 0; i--) {
      html += `<div class="day other-month">${prevMonthDays - i}</div>`;
    }
    for (let d = 1; d <= daysInMonth; d++) {
      const dateStr = year + '-' + String(month+1).padStart(2,'0') + '-' + String(d).padStart(2,'0');
      const dateKey = year + '.' + String(month+1).padStart(2,'0') + '.' + String(d).padStart(2,'0');
      const isToday = dateStr === todayStr ? 'today' : '';
      const hasUpdate = updateDates.has(dateKey);
      
      let stageColor = '';
      let hasStage = false;
      if (showStageMarkers && dateColorMap.has(dateKey)) {
        const colors = dateColorMap.get(dateKey);
        stageColor = mixColors(colors);
        hasStage = true;
      }
      
      let dotHtml = '';
      if (hasStage) {
        const colors = dateColorMap.get(dateKey);
        const mixedColor = mixColors(colors);
        dotHtml = `<span class="stage-dot" style="background:${mixedColor};"></span>`;
      }

      const selectedClass = (calSelectedDate === dateKey) ? 'selected' : '';
      const clickableClass = hasUpdate ? 'clickable' : '';
      const updateDotHtml = !hasStage && hasUpdate ? `<span class="stage-dot" style="background:#4a779e;"></span>` : '';
      
      html += `<div class="day ${isToday} ${hasStage ? 'has-stage' : ''} ${clickableClass} ${selectedClass}" data-date="${dateKey}">${d}${dotHtml || updateDotHtml}</div>`;      
    }

    const totalCells = firstDay + daysInMonth;
    const remaining = (7 - totalCells % 7) % 7;
    for (let d = 1; d <= remaining; d++) {
      html += `<div class="day other-month">${d}</div>`;
    }
    calDays.innerHTML = html;

    calDays.querySelectorAll('.day.clickable').forEach(dayEl => {
      dayEl.addEventListener('click', function() {
        const activePageId = document.querySelector('.page-box.active')?.id || calCurrentPage;
        const dateKey = this.dataset.date;

        const parts = dateKey.split('.');
        const formattedDay = parts[0] + '.' + parts[1].padStart(2, '0') + '.' + parts[2].padStart(2, '0');

        if (activePageId === 'home') {
          if (calSelectedDate === dateKey) {
            calSelectedDate = null;
            calFilteredDay = null;
            calFilteredMonth = null;
          } else {
            calSelectedDate = dateKey;
            calFilteredDay = formattedDay;
            calFilteredMonth = null;
          }
          calDays.querySelectorAll('.day.selected').forEach(el => el.classList.remove('selected'));
          if (calSelectedDate) {
            this.classList.add('selected');
          }
          renderUpdateList(year, month, calSelectedDate, activePageId);
          return;
        }

        if (calSelectedDate === dateKey) {
          calSelectedDate = null;
          calFilteredDay = null;
          calFilteredMonth = null;
          renderUpdateList(year, month, null, activePageId);
        } else {
          calSelectedDate = dateKey;
          calFilteredDay = dateKey;
          calFilteredMonth = null;
          renderUpdateList(year, month, dateKey, activePageId);
        }
        calDays.querySelectorAll('.day.selected').forEach(el => el.classList.remove('selected'));
        if (calSelectedDate) {
          this.classList.add('selected');
        }
        if (activePageId === 'stage') {
          renderCards(currentCategory, document.getElementById('stageSearch')?.value || '');
        } else if (activePageId === 'bobo') {
          renderBoboCards(currentBoboCategory, document.getElementById('boboSearch')?.value || '');
        } else if (activePageId === 'fancam') {
          filterWeiboFeed();
        }
      });
    });
  }

  document.addEventListener('DOMContentLoaded', function() {
    // 确保年月为当前时间
    currentYear = new Date().getFullYear();
    currentMonth = new Date().getMonth();
    renderCalendar(currentYear, currentMonth);
    renderUpdateList(currentYear, currentMonth, null, 'home');
    
    // 大日历初始化
    const now = new Date();
    bigCalYear = now.getFullYear();
    bigCalMonth = now.getMonth();
    if (document.getElementById('bigCalGrid')) {
      renderBigCalendar();
      renderTodaySchedule();
    }
    const bigPrev = document.getElementById('bigCalPrev');
    const bigNext = document.getElementById('bigCalNext');
    if (bigPrev) bigPrev.addEventListener('click', function() {
      bigCalMonth--;
      if (bigCalMonth < 0) { bigCalMonth = 11; bigCalYear--; }
      renderBigCalendar();
    });
    if (bigNext) bigNext.addEventListener('click', function() {
      bigCalMonth++;
      if (bigCalMonth > 11) { bigCalMonth = 0; bigCalYear++; }
      renderBigCalendar();
    });
    const bigToday = document.getElementById('bigCalToday');
    if (bigToday) bigToday.addEventListener('click', function() {
      const now = new Date();
      bigCalYear = now.getFullYear();
      bigCalMonth = now.getMonth();
      bigCalSelectedDate = now.getFullYear() + '-' + String(now.getMonth()+1).padStart(2,'0') + '-' + String(now.getDate()).padStart(2,'0');
      renderBigCalendar();
      renderTodaySchedule(bigCalSelectedDate);
    });
    renderUpdateList(currentYear, currentMonth, null, calCurrentPage);

    document.getElementById('calPrev').addEventListener('click', function() {
      currentMonth--;
      if (currentMonth < 0) { currentMonth = 11; currentYear--; }
      calSelectedDate = null;
      renderCalendar(currentYear, currentMonth);
      renderUpdateList(currentYear, currentMonth, null, calCurrentPage);
    });
    document.getElementById('calNext').addEventListener('click', function() {
      currentMonth++;
      if (currentMonth > 11) { currentMonth = 0; currentYear++; }
      calSelectedDate = null;
      renderCalendar(currentYear, currentMonth);
      renderUpdateList(currentYear, currentMonth, null, calCurrentPage);
    });

    const monthPicker = document.getElementById('monthPicker');
    const monthPickerYear = document.getElementById('monthPickerYear');
    const monthPickerGrid = document.getElementById('monthPickerGrid');
    const calMonthYear = document.getElementById('calMonthYear');
    let pickerYear = currentYear;

    function renderMonthPicker(year) {
      monthPickerYear.textContent = year + '年';
      const months = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
      let html = '';
      for (let i = 0; i < 12; i++) {
        const isActive = (year === currentYear && i === currentMonth);
        html += `<div class="month-picker-item ${isActive ? 'active' : ''}" data-month="${i}">${months[i]}</div>`;
      }
      monthPickerGrid.innerHTML = html;
    }

    function positionMonthPicker() {
      const sidebar = document.querySelector('.sidebar-calendar');
      const rect = sidebar ? sidebar.getBoundingClientRect() : calMonthYear.getBoundingClientRect();
      const pickerRect = monthPicker.getBoundingClientRect();
      let left = rect.left - pickerRect.width + 50; 
      let top = rect.top + 20;
      if (left < 10) left = 10;
      if (left + pickerRect.width > window.innerWidth - 10) {
        left = window.innerWidth - pickerRect.width - 10;
      }
      if (top < 10) top = 10;
      if (top + pickerRect.height > window.innerHeight - 10) {
        top = window.innerHeight - pickerRect.height - 10;
      }
      monthPicker.style.left = left + 'px';
      monthPicker.style.top = top + 'px';
    }

    function openMonthPicker() {
      pickerYear = currentYear;
      renderMonthPicker(pickerYear);
      monthPicker.classList.add('open');
      setTimeout(positionMonthPicker, 0);
    }

    function closeMonthPicker() {
      monthPicker.classList.remove('open');
    }

    function selectMonth(year, month) {
      currentYear = year;
      currentMonth = month;
      calSelectedDate = null;
      calFilteredMonth = null;
      calFilteredDay = null;
      renderCalendar(currentYear, currentMonth);
      renderUpdateList(currentYear, currentMonth, null, calCurrentPage);
      closeMonthPicker();
    }

    calMonthYear.addEventListener('click', function(e) {
      e.stopPropagation();
      if (monthPicker.classList.contains('open')) {
        closeMonthPicker();
      } else {
        openMonthPicker();
      }
    });

    document.addEventListener('click', function(e) {
      if (monthPicker.classList.contains('open') && 
          !monthPicker.contains(e.target) && 
          e.target !== calMonthYear) {
        closeMonthPicker();
      }
    });

    monthPickerGrid.addEventListener('click', function(e) {
      const item = e.target.closest('.month-picker-item');
      if (!item) return;
      const month = parseInt(item.dataset.month);
      selectMonth(pickerYear, month);
    });

    document.getElementById('monthPickerPrev').addEventListener('click', function(e) {
      e.stopPropagation();
      pickerYear--;
      renderMonthPicker(pickerYear);
    });
    document.getElementById('monthPickerNext').addEventListener('click', function(e) {
      e.stopPropagation();
      pickerYear++;
      renderMonthPicker(pickerYear);
    });

    function sortPlatformFeed() {
      const feed = document.getElementById('weiboFeed');
      if (!feed) return;
      const cards = Array.from(feed.children);
      const sorted = cards.sort((a, b) => {
        const aMonth = a.dataset.month || '0000-00';
        const aDay = a.dataset.day || '00';
        const bMonth = b.dataset.month || '0000-00';
        const bDay = b.dataset.day || '00';
        const aDate = aMonth + '.' + aDay;
        const bDate = bMonth + '.' + bDay;
        return bDate.localeCompare(aDate);
      });
      sorted.forEach(card => feed.appendChild(card));
    }
    sortPlatformFeed();

    const calHeader = document.getElementById('calUpdateHeader');
    if (calHeader) {
      calHeader.style.cursor = 'pointer';
      calHeader.style.userSelect = 'none';
      calHeader.addEventListener('click', function(e) {
        if (e.target.classList && e.target.classList.contains('cal-reset-icon')) {
          return;
        }
        const month = currentMonth + 1;
        const year = currentYear;
        const pageId = calCurrentPage;
        if (pageId !== 'stage' && pageId !== 'bobo' && pageId !== 'fancam') return;
        switchPage(pageId);
        calFilteredMonth = { year, month };
        calFilteredDay = null;
        setTimeout(() => {
          if (pageId === 'stage') {
            const keyword = document.getElementById('stageSearch')?.value || '';
            renderCards(currentCategory, keyword);
            const controls = document.getElementById('paginationControls');
            if (controls) controls.style.display = 'none';
          } else if (pageId === 'bobo') {
            const keyword = document.getElementById('boboSearch')?.value || '';
            renderBoboCards(currentBoboCategory, keyword);
          } else if (pageId === 'fancam') {
            filterPlatformByMonth(year, month);
          }
        }, 300);
      });
    }

    function filterPlatformByMonth(year, month) {
      const feed = document.getElementById('weiboFeed');
      if (!feed) return;
      const cards = feed.querySelectorAll('.weibo-card, .xiaohongshu-card');
      cards.forEach(card => {
        if (card.classList.contains('pinned')) {
          card.style.display = '';
          return;
        }
        const cardMonth = card.dataset?.month;
        if (!cardMonth) { card.style.display = 'none'; return; }
        const my = cardMonth.split('-');
        const cy = parseInt(my[0]);
        const cm = parseInt(my[1]);
        card.style.display = (cy === year && cm === month) ? '' : 'none';
      });
    }

    document.getElementById('calUpdateHeader').addEventListener('click', function(e) {
      if (e.target.classList && e.target.classList.contains('cal-reset-icon')) {
        e.stopPropagation();
        const pageId = calCurrentPage;
        calFilteredMonth = null;
        calFilteredDay = null;
        if (pageId === 'stage') {
          currentCategory = 'all';
          const keyword = document.getElementById('stageSearch')?.value || '';
          renderCards('all', keyword);
        } else if (pageId === 'bobo') {
          currentBoboCategory = 'all';
          const keyword = document.getElementById('boboSearch')?.value || '';
          renderBoboCards('all', keyword);
        } else if (pageId === 'fancam') {
          currentPlatform = 'all';
          filterWeiboFeed('');
        }
        currentYear = new Date().getFullYear();
        currentMonth = new Date().getMonth();
        calSelectedDate = null;
        renderCalendar(currentYear, currentMonth);
        renderUpdateList(currentYear, currentMonth, null, calCurrentPage);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  });

  (function() {
    function updateNavIndicator(navId, indicatorId) {
      const nav = document.getElementById(navId);
      const indicator = document.getElementById(indicatorId);
      if (!nav || !indicator) return;

      const activeItem = nav.querySelector('.stage-nav-item.active');
      if (!activeItem) return;

      const navRect = nav.getBoundingClientRect();
      const itemRect = activeItem.getBoundingClientRect();

      const left = itemRect.left - navRect.left;
      const top = itemRect.top - navRect.top;
      const width = itemRect.width;
      const height = itemRect.height;

      indicator.style.left = left + 'px';
      indicator.style.top = top + 'px';
      indicator.style.width = width + 'px';
      indicator.style.height = height + 'px';
      indicator.style.transform = 'none';
      indicator.style.opacity = '1';
      indicator.style.borderRadius = '24px';
    }

    function initNavIndicator(navId, indicatorId) {
      const indicator = document.getElementById(indicatorId);
      if (indicator) {
        indicator.style.position = 'absolute';
        indicator.style.borderRadius = '24px';
        indicator.style.background = '#000000';
        indicator.style.transition = 'left 0.4s cubic-bezier(0.4, 0, 0.2, 1), top 0.4s cubic-bezier(0.4, 0, 0.2, 1), width 0.4s cubic-bezier(0.4, 0, 0.2, 1), height 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
        indicator.style.opacity = '0';
        indicator.style.zIndex = '0';
        indicator.style.pointerEvents = 'none';
      }

      const nav = document.getElementById(navId);
      if (!nav) return;

      nav.style.position = 'relative';
      nav.style.display = 'flex';
      nav.style.flexWrap = 'wrap';
      nav.style.alignItems = 'center';

      requestAnimationFrame(() => {
        updateNavIndicator(navId, indicatorId);
      });

      const items = nav.querySelectorAll('.stage-nav-item');
      items.forEach(item => {
        item.addEventListener('click', function() {
          requestAnimationFrame(() => {
            updateNavIndicator(navId, indicatorId);
          });
        });
      });

      const resizeObserver = new ResizeObserver(() => {
        requestAnimationFrame(() => {
          updateNavIndicator(navId, indicatorId);
        });
      });
      resizeObserver.observe(nav);
    }

    initNavIndicator('stageNav', 'stageNavIndicator');
    initNavIndicator('boboNav', 'boboNavIndicator');
    initNavIndicator('platformNav', 'platformNavIndicator');
    initNavIndicator('gongyanNav', 'gongyanNavIndicator');

    window.addEventListener('resize', function() {
      requestAnimationFrame(() => {
        updateNavIndicator('stageNav', 'stageNavIndicator');
        updateNavIndicator('boboNav', 'boboNavIndicator');
        updateNavIndicator('platformNav', 'platformNavIndicator');
        updateNavIndicator('gongyanNav', 'gongyanNavIndicator');
      });
    });

    window.addEventListener('load', function() {
      setTimeout(() => {
        requestAnimationFrame(() => {
          updateNavIndicator('stageNav', 'stageNavIndicator');
          updateNavIndicator('boboNav', 'boboNavIndicator');
          updateNavIndicator('platformNav', 'platformNavIndicator');
        });
      }, 300);
    });

    window.updateNavIndicator = function(navId, indicatorId) {
      requestAnimationFrame(() => {
        updateNavIndicator(navId, indicatorId);
      });
    };
  })();

  function updateCountdown() {
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth() + 1;
    const currentDate = now.getDate();
    
    function daysSince(year, month, day) {
      const start = new Date(year, month - 1, day);
      const diff = now - start;
      return Math.floor(diff / (1000 * 60 * 60 * 24));
    }
    
    function daysUntil(year, month, day) {
      const target = new Date(year, month - 1, day);
      const diff = target - now;
      return Math.ceil(diff / (1000 * 60 * 60 * 24));
    }
    
    const daysToDebutAnniv = daysUntil(2026, 9, 30);
    const daysToPromotionAnniv = daysUntil(2027, 2, 2);
    
    let birthdayYear = currentYear;
    if (currentMonth > 7 || (currentMonth === 7 && currentDate > 23)) {
      birthdayYear = currentYear + 1;
    }
    const daysToBirthday = daysUntil(birthdayYear, 7, 23);
    
    const daysSinceDebut = daysSince(2023, 9, 30);
    const daysSincePromotion = daysSince(2024, 2, 2);
    const daysSinceBirth = daysSince(2004, 7, 23);
    
    const setText = (id, text) => {
      const el = document.getElementById(id);
      if (el) el.textContent = text;
    };
    setText('daysToDebutAnniversary', daysToDebutAnniv + '天');
    setText('daysToPromotionAnniversary', daysToPromotionAnniv + '天');
    setText('daysToBirthday', daysToBirthday + '天');
    setText('daysSinceDebut', daysSinceDebut + '天');
    setText('daysSincePromotion', daysSincePromotion + '天');
    setText('daysSinceBirth', daysSinceBirth + '天');
  }

  document.addEventListener('DOMContentLoaded', function() {
    updateCountdown();
    setInterval(updateCountdown, 86400000);
  });

  

  const formalKeys = ['2026-newyear', '2025-autumn', '2025-newyear', '2024-autumn', '2024-spring', '2023-2024'];

  function renderFormal(key) {
    const scroll = document.getElementById('formalScroll');
    const container = document.querySelector('#formalScroll .scroll-inner');
    
    scroll.classList.add('active');
    document.getElementById('formalSingle').classList.remove('active');

    let html = '';

    if (key === 'all') {
      formalKeys.forEach(k => {
        const data = formalData[k];
        const shortLabel = data.label.replace('公式照', '').replace('年度', '');
        data.images.forEach(img => {
          html += `
            <div class="scroll-item">
              <img decoding="async" src="${img}" alt="${data.label}" loading="lazy" onclick="previewImage('${img}')" />
              <span class="scroll-label">${shortLabel}</span>
            </div>
          `;
        });
      });
    } else {
      const data = formalData[key];
      if (!data) return;
      const shortLabel = data.label.replace('公式照', '').replace('年度', '');
      data.images.forEach(img => {
        html += `
          <div class="scroll-item">
            <img decoding="async" src="${img}" alt="${data.label}" loading="lazy" onclick="previewImage('${img}')" />
            <span class="scroll-label">${shortLabel}</span>
          </div>
        `;
      });
    }

    container.innerHTML = html;
  }


  function scrollFormalBtn(dir) {
    const group = document.getElementById('formalBtnGroup');
    if (!group) return;
    const scrollAmount = 150;
    group.scrollBy({ left: dir * scrollAmount, behavior: 'smooth' });
  }

  function updateFormalScrollBtns() {
    const group = document.getElementById('formalBtnGroup');
    const leftBtn = document.getElementById('formalScrollLeft');
    const rightBtn = document.getElementById('formalScrollRight');
    if (!group || !leftBtn || !rightBtn) return;
    
    const canScrollLeft = group.scrollLeft > 2;
    const canScrollRight = group.scrollLeft + group.clientWidth < group.scrollWidth - 2;
    
    leftBtn.classList.toggle('hidden', !canScrollLeft);
    rightBtn.classList.toggle('hidden', !canScrollRight);
  }

  document.addEventListener('DOMContentLoaded', function() {
    const group = document.getElementById('formalBtnGroup');
    if (group) {
      group.addEventListener('wheel', function(e) {
        if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
          e.preventDefault();
          this.scrollLeft += e.deltaY;
        }
      }, { passive: false });
      
      group.addEventListener('scroll', updateFormalScrollBtns);
      window.addEventListener('resize', updateFormalScrollBtns);
      
      setTimeout(updateFormalScrollBtns, 100);
    }
  });

  function switchFormal(key) {
    document.querySelectorAll('#formalBtnGroup .drink-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.key === key);
    });
    renderFormal(key);
  }

  document.addEventListener('DOMContentLoaded', function() {
    const allBtn = document.querySelector('#formalBtnGroup .drink-btn[data-key="all"]');
    if (allBtn) allBtn.classList.add('active');
    renderFormal('all');
  });

  (function() {
    let formalWheelRaf = null;
    let formalPendingDelta = 0;
    document.addEventListener('DOMContentLoaded', function() {
      const scrollContainer = document.querySelector('#formalScroll');
      if (scrollContainer) {
        scrollContainer.addEventListener('wheel', function(e) {
          const rect = this.getBoundingClientRect();
          const inView = rect.top < window.innerHeight && rect.bottom > 0;
          if (!inView) return;
          
          e.preventDefault();
          formalPendingDelta += (e.deltaY || e.deltaX) * 2;
          if (!formalWheelRaf) {
            formalWheelRaf = requestAnimationFrame(() => {
              this.scrollLeft += formalPendingDelta;
              formalPendingDelta = 0;
              formalWheelRaf = null;
            });
          }
        }, { passive: false });
      }
    });
  })();

  (function() {
    const overlay = document.getElementById('mobileSearchOverlay');
    const input = document.getElementById('mobileSearchInput');
    const results = document.getElementById('mobileSearchResults');
    const closeBtn = document.getElementById('mobileSearchClose');
    const searchBtn = document.getElementById('mobileSearchBtn');

  function collectAllData() {
    const items = [];

    const allStageData = [
      ...unitData.map(d => ({ ...d, type: 'stage', typeLabel: '舞台', category: 'unit' })),
      ...specialData.map(d => ({ ...d, type: 'stage', typeLabel: '舞台', category: 'special' })),
      ...assistData.map(d => ({ ...d, type: 'stage', typeLabel: '舞台', category: 'assist' })),
      ...substituteData.map(d => ({ ...d, type: 'stage', typeLabel: '舞台', category: 'substitute' }))
    ];
    allStageData.forEach(item => {
      items.push({
        title: item.title,
        date: item.date || '',
        show: item.show || '',
        url: item.url || '#',
        type: 'stage',
        typeLabel: '舞台',
        tag: item.category || 'unit',
        tagLabel: { unit: 'UNIT', special: '特殊', assist: '助演', substitute: '代役' }[item.category] || '舞台',
        searchText: (item.title + ' ' + (item.date || '') + ' ' + (item.show || '')).toLowerCase()
      });
    });

    boboData.forEach(item => {
      const pureDate = item.date.replace(/[凌晨|晚|早|下午|中午].*$/, '');
      items.push({
        title: item.title,
        date: pureDate || item.date || '',
        show: '',
        url: item.url || '#',
        type: 'bobo',
        typeLabel: '直播',
        tag: item.category || 'pocket',
        tagLabel: item.category === 'pocket' ? '口袋回放' : '特殊直播',
        searchText: (item.title + ' ' + (item.date || '') + ' ' + (item.category || '')).toLowerCase()
      });
    });

    document.querySelectorAll('#weiboFeed .weibo-card, #weiboFeed .xiaohongshu-card').forEach(card => {
      const platform = card.dataset.platform || 'weibo';
      const platformNames = { weibo: '微博', xiaohongshu: '小红书', douyin: '抖音', bilibili: 'B站' };
      const timeEl = card.querySelector('.weibo-time');
      let dateText = timeEl ? timeEl.textContent.trim() : '';
      const textEl = card.querySelector('.weibo-text');
      let textContent = textEl ? textEl.textContent.trim() : '';
      
      let url = '#';
      const linkBtn = card.querySelector('.weibo-link-button');
      if (linkBtn) url = linkBtn.href || '#';
      const descBox = card.querySelector('.video-desc-box');
      if (descBox) url = descBox.href || '#';

      items.push({
        title: platformNames[platform] || platform + '更新',
        date: dateText,
        show: textContent.substring(0, 30),
        url: url,
        type: 'fancam',
        typeLabel: '平台',
        tag: platform,
        tagLabel: platformNames[platform] || platform,
        searchText: (dateText + ' ' + textContent + ' ' + (platformNames[platform] || '')).toLowerCase()
      });
    });

  wordsData.forEach((item, idx) => {
    const title = item.title || '演讲';
    const contentPreview = item.content ? item.content.substring(0, 50) : '';
    items.push({
      title: title,
      date: item.date || '',
      show: contentPreview,
      url: '#',
      type: 'words',
      typeLabel: '演讲',
      tag: 'words',
      tagLabel: '演讲',
      index: idx,
      searchText: (item.title + ' ' + (item.date || '') + ' ' + (item.content || '')).toLowerCase()
    });
  });

    return items;
  }

  function doSearch(keyword) {
    const trimmed = keyword.trim().toLowerCase();
    if (!trimmed) {
      results.innerHTML = '<div class="search-hint">输入关键词开始搜索</div>';
      return;
    }

    const allData = collectAllData();
    const matched = allData.filter(item => item.searchText.includes(trimmed));

    if (matched.length === 0) {
      results.innerHTML = '<div class="search-empty">没有找到 "<strong>' + keyword + '</strong>" 相关内容</div>';
      return;
    }

    const tagColors = {
      unit: '#7fb5d0',
      special: '#e8b88a',
      assist: '#e8d48a',
      substitute: '#a8d4c8',
      single: '#f0a0a0',
      'bobo-special': '#d4b0b8',
      weibo: '#4299e1',
      xiaohongshu: '#ff2d55',
      douyin: '#f97316',
      bilibili: '#fb7299',
      words: '#888'
    };

    let html = '<div style="font-size:13px;color:#999;margin-bottom:12px;">共 ' + matched.length + ' 个结果</div>';
    matched.slice(0, 30).forEach(item => {
      const color = tagColors[item.tag] || '#888';
      if (item.type === 'words') {
        const idx = item.index;
        html += `
          <div class="search-result-item" onclick="handleWordsSearchResult(${idx})" style="cursor:pointer;">
            <div class="result-info">
              <div class="result-title">${item.title}</div>
              <div class="result-meta">${item.date || ''}${item.show ? ' · ' + item.show : ''}</div>
            </div>
            <span class="result-tag" style="background:${color};">${item.tagLabel}</span>
          </div>
        `;
      } else {
        html += `
          <a class="search-result-item" href="${item.url}" target="_blank">
            <div class="result-info">
              <div class="result-title">${item.title}</div>
              <div class="result-meta">${item.date || ''}${item.show ? ' · ' + item.show : ''}</div>
            </div>
            <span class="result-tag" style="background:${color};">${item.tagLabel}</span>
          </a>
        `;
      }
    });
    if (matched.length > 30) {
      html += '<div style="text-align:center;color:#999;font-size:13px;padding:12px 0;">仅显示前 30 个结果</div>';
    }
    results.innerHTML = html;
  }
  
  function handleWordsSearchResult(title) {
    closeSearch();
    switchPage('words');
    setTimeout(function() {
      const wordsGrid = document.getElementById('wordsGrid');
      if (wordsGrid) {
        const cards = wordsGrid.querySelectorAll('.video-card');
        for (let i = 0; i < cards.length; i++) {
          const card = cards[i];
          const titleEl = card.querySelector('div:nth-child(2)');
          if (titleEl && titleEl.textContent.trim() === title) {
            if (typeof openWordsPopup === 'function') {
              openWordsPopup(i);
            }
            break;
          }
        }
      }
    }, 400);
  }

    function openSearch() {
      overlay.classList.add('open');
      document.body.style.overflow = 'hidden';
      setTimeout(() => input.focus(), 100);
      results.innerHTML = '<div class="search-hint">输入关键词开始搜索</div>';
      input.value = '';
    }

    function closeSearch() {
      overlay.classList.remove('open');
      document.body.style.overflow = '';
      input.blur();
    }

    if (searchBtn) {
      searchBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        if (overlay.classList.contains('open')) {
          closeSearch();
        } else {
          openSearch();
        }
      });
    }

    if (closeBtn) {
      closeBtn.addEventListener('click', closeSearch);
    }

    if (input) {
      input.addEventListener('input', function() {
        doSearch(this.value);
      });
      input.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') closeSearch();
      });
    }

    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && overlay.classList.contains('open')) {
        closeSearch();
      }
    });
  })();

  

  function renderWordsCards() {
    const grid = document.getElementById('wordsGrid');
    if (!grid) return;

    if (wordsData.length === 0) {
      grid.innerHTML = `<div style="grid-column:1/-1; text-align:center; padding:40px 0; color:#4a779e; font-size:14px;">暂无内容</div>`;
      return;
    }

    let html = '';
    wordsData.forEach((item, index) => {
      html += `
        <div class="video-card" onclick="openWordsPopup(${index})" style="cursor:pointer; padding:16px 20px; display:flex; flex-direction:column; justify-content:center; min-height:50px; grid-column:1 / -1;">
          <div class="words-card-date" style="font-size:14px; font-weight:600; color:var(--theme-color); opacity:0.6; margin-bottom:6px;">${item.date}</div>
          <div class="words-card-title" style="font-size:20px; font-weight:700; color:#000000;">${item.title}</div>
          <div class="words-card-link" style="font-size:13px; color:#4a779e; opacity:0.5; margin-top:4px;">点击查看 →</div>
        </div>
      `;
    });

    grid.innerHTML = html;
    // 根据当前布局模式设置样式
    if (typeof currentLayoutMode !== 'undefined' && currentLayoutMode === 'list') {
      grid.className = 'stage-grid list-mode';
    } else {
      grid.className = 'stage-grid';
    }
  }

  function openWordsPopup(index) {
    const data = wordsData[index];
    if (!data) return;

    const overlay = document.createElement('div');
    overlay.className = 'popup-overlay open';
    overlay.id = 'wordsPopupOverlay';
    overlay.style.display = 'flex';

    overlay.innerHTML = `
      <div class="popup-box" style="max-width:600px; padding:32px 36px 28px; border-radius:2px; background:#fcf9f5; position:relative; box-shadow:0 20px 60px rgba(0,0,0,0.2);">
        <button class="popup-close" onclick="closeWordsPopup()" style="position:absolute; top:12px; right:16px; font-size:24px; background:none; border:none; cursor:pointer; color:#999;">✕</button>
        
        <div style="font-family: 'Chiron GoRound TC', 'PingFang SC', sans-serif; min-height:300px; padding:8px 4px;">
          <div style="font-size:15px; line-height:2; color:#3a3a3a; white-space:pre-wrap; letter-spacing:0.5px; padding:0 8px;">
${data.content}
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(overlay);
    document.body.style.overflow = 'hidden';

    overlay.addEventListener('click', function(e) {
      if (e.target === this) closeWordsPopup();
    });

    document.addEventListener('keydown', function handler(e) {
      if (e.key === 'Escape') {
        closeWordsPopup();
        document.removeEventListener('keydown', handler);
      }
    });
  }

  function closeWordsPopup() {
    const overlay = document.getElementById('wordsPopupOverlay');
    if (overlay) {
      overlay.remove();
      document.body.style.overflow = '';
    }
  }

  document.addEventListener('navUpdate', function(e) {
    if (e.targetPage === 'words') {
      setTimeout(renderWordsCards, 50);
    }
  });

  document.addEventListener('DOMContentLoaded', function() {
    const activePage = document.querySelector('.page-box.active')?.id;
    if (activePage === 'words') {
      setTimeout(renderWordsCards, 100);
    }
  });

  (function() {
    const overlay = document.getElementById('mobileOverlay');
    const sideMenu = document.getElementById('mobileSideMenu');
    const menuToggle = document.getElementById('menuToggleBtn');
    const menuClose = document.getElementById('menuCloseBtn');

    function openMenu() {
      overlay.classList.add('open');
      sideMenu.classList.add('open');
      document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
      overlay.classList.remove('open');
      sideMenu.classList.remove('open');
      document.body.style.overflow = '';
    }

    if (menuToggle) {
      menuToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        if (sideMenu.classList.contains('open')) {
          closeMenu();
        } else {
          openMenu();
        }
      });
    }

    if (menuClose) {
      menuClose.addEventListener('click', closeMenu);
    }

    if (overlay) {
      overlay.addEventListener('click', closeMenu);
    }

    document.querySelectorAll('.mobile-side-menu .menu-item-link[data-page]').forEach(item => {
      item.addEventListener('click', function(e) {
        e.preventDefault();
        const pageId = this.dataset.page;
        if (pageId && typeof switchPage === 'function') {
          switchPage(pageId);
        }
        closeMenu();
      });
    });

    function syncMobileDarkUI() {
      const isDark = document.body.classList.contains('dark-mode');
      const icon = document.getElementById('mobileDarkIconImg');
      const label = document.getElementById('mobileDarkLabel');
      
      if (icon) {
        icon.src = isDark 
          ? 'https://huggingface.co/datasets/156816SAFE/image-bed/resolve/main/icon_bip5uayjrmg/5ecf3cc9-50bd-4348-97e2-90b5560baf51_1789006828553_taiyangtianqi.webp'
          : 'https://huggingface.co/datasets/156816SAFE/image-bed/resolve/main/icon_bip5uayjrmg/4201ec23-44a4-4802-9a45-6134e40578ab_1789006835993_taiyang.webp';
      }
      
      if (label) {
        label.textContent = isDark ? '亮色' : '暗色';
      }
    }

    document.querySelectorAll('.mobile-bottom-nav .nav-item').forEach(btn => {
      btn.addEventListener('click', function() {
        const action = this.dataset.action;

        if (action === 'home') {
          if (typeof switchPage === 'function') switchPage('home');
          document.querySelectorAll('.mobile-bottom-nav .nav-item').forEach(b => b.classList.remove('active'));
          this.classList.add('active');
        }

        if (action === 'palette') {
          const panel = document.getElementById('settingsPanel');
          const toggle = document.getElementById('paletteToggle');
          if (panel) {
            const isOpen = panel.classList.contains('open');
            if (isOpen) {
              panel.classList.remove('open');
              if (toggle) toggle.classList.remove('active');
            } else {
              panel.classList.add('open');
              if (toggle) toggle.classList.add('active');
            }
          }
        }

        if (action === 'dark') {
          const toggle = document.getElementById('darkToggle');
          if (toggle) toggle.click();
          setTimeout(syncMobileDarkUI, 50);
        }

        if (action === 'search') {
        }
      });
    });

    document.addEventListener('navUpdate', function(e) {
      const page = e.targetPage || 'home';
      document.querySelectorAll('.mobile-bottom-nav .nav-item').forEach(b => {
        b.classList.toggle('active', b.dataset.action === 'home' && page === 'home');
      });
      if (page !== 'home') {
        document.querySelectorAll('.mobile-bottom-nav .nav-item[data-action="home"]').forEach(b => b.classList.remove('active'));
      } else {
        document.querySelectorAll('.mobile-bottom-nav .nav-item[data-action="home"]').forEach(b => b.classList.add('active'));
      }
    });

    syncMobileDarkUI();

    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && sideMenu.classList.contains('open')) {
        closeMenu();
      }
    });
  })();

    (function() {
      const tocList = document.getElementById('tocList');
      if (!tocList) return;

      function findTitleElement(label) {
        const titles = document.querySelectorAll('.info-title');
        for (const el of titles) {
          if (el.textContent.includes(label)) {
            return el;
          }
        }
        return null;
      }

  function renderToc() {
    const tocList = document.getElementById('tocList');
    if (!tocList) return;

    const activePage = document.querySelector('.page-box.active')?.id || 'home';
    
    let config = [];
    
    if (activePage === 'home') {
      config = [
        { label: '个人简介' },
        { label: '平台账号' },
        { label: '历年公式照' },
        { label: '里程时间线' }
      ];
      } else if (activePage === 'fancam') {
        config = [{ label: '暂无目录', disabled: true }];
    } else {
      config = [{ label: '暂无目录', disabled: true }];
    }

    let html = '';
    config.forEach((item, index) => {
      if (item.disabled) {
        html += `<div class="toc-item" style="opacity:0.4;cursor:default;pointer-events:none;">${item.label}</div>`;
      } else if (activePage === 'home') {
        const targetEl = findTitleElement(item.label);
        if (targetEl) {
          const id = 'toc-section-' + index;
          if (!targetEl.id) targetEl.id = id;
          html += `<a class="toc-item" data-target="${id}">${item.label}</a>`;
        }
      } else if (activePage === 'fancam') {
        const monthKey = item.label.replace('年', '-').replace('月', '');
        html += `<a class="toc-item" data-month="${monthKey}">${item.label}</a>`;
      }
    });
    
    tocList.innerHTML = html;

    tocList.querySelectorAll('.toc-item').forEach(item => {
      item.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.dataset.target;
        if (targetId) {
          const targetEl = document.getElementById(targetId);
          if (targetEl) {
            const offset = 100;
            const top = targetEl.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top: top, behavior: 'smooth' });
            tocList.querySelectorAll('.toc-item').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
          }
          return;
        }
        
        const month = this.dataset.month;
        if (month && activePage === 'fancam') {
          const [year, monthNum] = month.split('-').map(Number);
          const cards = document.querySelectorAll('#weiboFeed [data-month]');
          console.log('目录点击月份:', month, '找到卡片数:', cards.length);
          let targetCard = null;
          for (const card of cards) {
            if (card.style.display === 'none') continue;
            const cardMonth = card.dataset?.month;
            if (cardMonth) {
              const [cy, cm] = cardMonth.split('-').map(Number);
              if (cy === year && cm === monthNum) {
                targetCard = card;
                break;
              }
            }
          }
          if (targetCard) {
            console.log('找到目标卡片，开始滚动:', targetCard);
            const offset = 120;
            const top = targetCard.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top: top, behavior: 'smooth' });
          } else {
            console.log('未找到该月份的卡片:', month);
          }
        }
      });
    });
  }
    function updateActiveOnScroll() {
      const items = tocList.querySelectorAll('.toc-item');
      if (!items.length) return;

      const activePage = document.querySelector('.page-box.active')?.id || 'home';
      const scrollY = window.pageYOffset + 120;

      if (activePage === 'home') {
        let activeIndex = 0;
        items.forEach((item, index) => {
          const targetId = item.dataset.target;
          const targetEl = document.getElementById(targetId);
          if (targetEl) {
            const rect = targetEl.getBoundingClientRect();
            const top = rect.top + window.pageYOffset;
            if (top <= scrollY) {
              activeIndex = index;
            }
          }
        });
        items.forEach((item, index) => {
          item.classList.toggle('active', index === activeIndex);
        });
      }
    }

  function setDrinkPosition() {
    const drinkCard = document.querySelector('.daily-drink-card');
    const calendar = document.querySelector('.sidebar-calendar');
    if (!drinkCard || !calendar) return;

    const calendarRect = calendar.getBoundingClientRect();
    const calendarBottom = calendarRect.bottom + window.pageYOffset;
    const gap = 6;

  }

  function updateDrinkFixed() {
    const drinkCard = document.querySelector('.daily-drink-card');
    const onThisDayCard = document.querySelector('.on-this-day-card');
    if (!drinkCard) return;
    
    if (drinkCard.style.display === 'none') {
      drinkCard.classList.remove('fixed');
      drinkCard.style.top = '';
      if (onThisDayCard) {
        onThisDayCard.classList.remove('fixed');
        onThisDayCard.style.top = '';
      }
      return;
    }

    if (!drinkCard.dataset.initialTop) {
      const rect = drinkCard.getBoundingClientRect();
      drinkCard.dataset.initialTop = rect.top + window.pageYOffset;
    }

    const initialTop = parseFloat(drinkCard.dataset.initialTop);
    const scrollY = window.pageYOffset;

    const recentUpdateCard = document.querySelector('.recent-update-card');
    
    if (scrollY >= initialTop) {
      drinkCard.classList.add('fixed');
      if (onThisDayCard) {
        onThisDayCard.classList.add('fixed');
        onThisDayCard.style.top = (4 + drinkCard.offsetHeight + 6) + 'px';
      }
      if (recentUpdateCard && onThisDayCard) {
        recentUpdateCard.classList.add('fixed');
        recentUpdateCard.style.top = (4 + drinkCard.offsetHeight + 6 + onThisDayCard.offsetHeight + 6) + 'px';
      }
    } else {
      drinkCard.classList.remove('fixed');
      drinkCard.style.top = '';
      delete drinkCard.dataset.initialTop;
      if (onThisDayCard) {
        onThisDayCard.classList.remove('fixed');
        onThisDayCard.style.top = '';
      }
      if (recentUpdateCard) {
        recentUpdateCard.classList.remove('fixed');
        recentUpdateCard.style.top = '';
      }
    }
  }

  // 目录和快速安利的固定位置配置
  const TOC_CONFIG = {
    topFixed: 4,         // 固定时目录的top位置（靠近顶部）
    gap: 6,                // 目录和快速安利之间的间距
    profileGap: 6          // 信息栏和目录之间的间距
  };
  
  function updateTocFixed() {
    const tocCard = document.querySelector('.left-toc-card');
    const countdownCard = document.querySelector('.left-countdown-card');
    const promoCard = document.querySelector('.left-promo-card');
    const profileCard = document.querySelector('.left-profile-card');
    
    if (!tocCard) return;
    
    const scrollY = window.pageYOffset;
    const cfg = TOC_CONFIG;
    const tocHeight = tocCard.offsetHeight || 200;
    const countdownHeight = countdownCard ? countdownCard.offsetHeight : 150;
    
    // 动态计算信息栏的底部位置（不固定时目录应该在信息栏下面）
    let topNormal = 500;
    let threshold = 500;
    if (profileCard) {
      const profileBottom = profileCard.offsetTop + profileCard.offsetHeight;
      topNormal = profileBottom + cfg.profileGap;
      threshold = profileBottom + cfg.profileGap;
    }
    
    const isFixed = scrollY >= threshold;
    
    // 用 CSS .fixed 类控制固定定位（和右侧侧边栏一致），JS 只控制 top 堆叠
    if (isFixed) {
      tocCard.classList.add('fixed');
      tocCard.style.top = cfg.topFixed + 'px';
      
      // 行程倒计时固定在目录下面
      if (countdownCard) {
        countdownCard.classList.add('fixed');
        countdownCard.style.top = (cfg.topFixed + tocHeight + cfg.gap) + 'px';
      }
      
      // 快速安利区固定在行程倒计时下面
      if (promoCard) {
        promoCard.classList.add('fixed');
        promoCard.style.top = (cfg.topFixed + tocHeight + cfg.gap + countdownHeight + cfg.gap) + 'px';
      }
    } else {
      tocCard.classList.remove('fixed');
      tocCard.style.top = topNormal + 'px';
      
      // 行程倒计时不固定时也在目录下面
      if (countdownCard) {
        countdownCard.classList.remove('fixed');
        countdownCard.style.top = (topNormal + tocHeight + cfg.gap) + 'px';
      }
      
      // 快速安利区不固定时在行程倒计时下面
      if (promoCard) {
        promoCard.classList.remove('fixed');
        promoCard.style.top = (topNormal + tocHeight + cfg.gap + countdownHeight + cfg.gap) + 'px';
      }
    }

    updateDrinkFixed();
  }
  
  // 页面加载后立即设置目录和快速安利的初始位置
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      setTimeout(updateTocFixed, 300);
    });
  } else {
    setTimeout(updateTocFixed, 300);
  }

  function renderOnThisDay() {
    const listEl = document.getElementById('onThisDayList');
    if (!listEl) return;

    const now = new Date();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const targetMMDD = month + '.' + day;

    const items = [];

    const allStageData = [...unitData, ...specialData, ...assistData, ...substituteData];
    allStageData.forEach(item => {
      const parts = item.date.split('.');
      if (parts.length >= 3) {
        const mmdd = parts[1] + '.' + parts[2];
        if (mmdd === targetMMDD) {
          items.push({
            year: parts[0],
            type: 'stage',
            typeLabel: '舞台',
            title: item.title + (item.show ? ' · ' + item.show.replace(/【.*?】/, '').trim() : ''),
            url: item.url,
            sortDate: item.date
          });
        }
      }
    });

    boboData.forEach(item => {
      const datePart = item.date.match(/^(\d{4}\.\d{2}\.\d{2})/);
      if (datePart) {
        const parts = datePart[1].split('.');
        const mmdd = parts[1] + '.' + parts[2];
        if (mmdd === targetMMDD) {
          items.push({
            year: parts[0],
            type: 'bobo',
            typeLabel: '直播',
            title: item.title,
            url: item.url,
            sortDate: datePart[1]
          });
        }
      }
    });

    document.querySelectorAll('.weibo-card, .xiaohongshu-card').forEach(card => {
      const m = card.dataset.month; 
      const d = card.dataset.day;   
      if (m && d) {
        const mmdd = m.split('-')[1] + '.' + String(d).padStart(2, '0');
        if (mmdd === targetMMDD) {
          const platform = card.dataset.platform === 'weibo' ? '微博' : '小红书';
          const textEl = card.querySelector('.weibo-text span, .xhs-text span');
          const title = textEl ? textEl.textContent.trim().substring(0, 40) : platform + '更新';
          const linkEl = card.querySelector('a[href]');
          items.push({
            year: m.split('-')[0],
            type: 'platform',
            typeLabel: platform,
            title: title || (platform + '更新'),
            url: linkEl ? linkEl.href : '',
            sortDate: m + '.' + String(d).padStart(2, '0')
          });
        }
      }
    });

    items.sort((a, b) => b.sortDate.localeCompare(a.sortDate));

    if (items.length === 0) {
      listEl.innerHTML = '<div class="on-this-day-empty">暂无内容</div>';
      return;
    }

    listEl.innerHTML = items.map(item => {
      const href = item.url ? 'href="' + item.url + '" target="_blank"' : '';
      return '<a class="on-this-day-item" ' + href + '>' +
        '<span class="year-tag">' + item.year + '</span>' +
        '<div class="item-body">' +
          '<span class="item-type ' + item.type + '">' + item.typeLabel + '</span>' +
          '<div class="item-title">' + item.title + '</div>' +
        '</div>' +
      '</a>';
    }).join('');
  }

  renderToc();

  document.addEventListener('navUpdate', function(e) {
  const pageId = e.targetPage || 'home';
  const card = document.querySelector('.left-toc-card');
  const promoCard = document.querySelector('.left-promo-card');
  const countdownCard = document.querySelector('.left-countdown-card');
  const drinkCard = document.querySelector('.daily-drink-card');

  card.style.display = '';
  renderToc();
  
  // 左侧卡片是 absolute 定位：移除 fixed 但不清 top，由 updateTocFixed 同步重算
  if (promoCard) {
    delete promoCard.dataset.initialTop;
    promoCard.style.display = '';
    promoCard.classList.remove('fixed');
  }
  if (countdownCard) {
    countdownCard.classList.remove('fixed');
  }
  if (pageId !== 'home') {
    card.classList.remove('fixed');
  }
  
  // 右侧卡片在 sidebar-wrapper 正常流中：移除 fixed 并清 top，自动归位
  if (pageId !== 'home') {
    if (drinkCard) {
      drinkCard.classList.remove('fixed');
      drinkCard.style.top = '';
      delete drinkCard.dataset.initialTop;
    }
    const onThisDayCard = document.querySelector('.on-this-day-card');
    if (onThisDayCard) {
      onThisDayCard.classList.remove('fixed');
      onThisDayCard.style.top = '';
    }
    const recentUpdateCard = document.querySelector('.recent-update-card');
    if (recentUpdateCard) {
      recentUpdateCard.classList.remove('fixed');
      recentUpdateCard.style.top = '';
    }
  }
  
  // 同步重算所有位置，浏览器只重绘一次，和右侧一样丝滑
  document.querySelectorAll('.left-toc-card .toc-item').forEach(t => t.classList.remove('active'));
  setDrinkPosition();
  updateActiveOnScroll();
  updateTocFixed();
});

    const tocCard = document.querySelector('.left-toc-card');
    if (tocCard) {
      tocCard.style.display = '';
      tocCard.classList.remove('fixed');
    }
  
  // 同步初始化位置，避免跳动
  setDrinkPosition();
  updateTocFixed();
  renderOnThisDay();

  let ticking = false;
  let lastScrollY = 0;
  window.addEventListener('scroll', function() {
    if (!ticking) {
      window.requestAnimationFrame(function() {
        const sy = window.pageYOffset;
        updateActiveOnScroll();
        updateTocFixed();
        lastScrollY = sy;
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  let resizeTimer;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      // 重置右侧侧边栏卡片状态，避免窗口缩放后卡在顶部
      const rDrinkCard = document.querySelector('.daily-drink-card');
      const rOnThisDayCard = document.querySelector('.on-this-day-card');
      const rRecentUpdateCard = document.querySelector('.recent-update-card');
      if (rDrinkCard) {
        rDrinkCard.classList.remove('fixed');
        rDrinkCard.style.top = '';
        delete rDrinkCard.dataset.initialTop;
      }
      if (rOnThisDayCard) {
        rOnThisDayCard.classList.remove('fixed');
        rOnThisDayCard.style.top = '';
      }
      if (rRecentUpdateCard) {
        rRecentUpdateCard.classList.remove('fixed');
        rRecentUpdateCard.style.top = '';
      }
      setDrinkPosition();
      updateTocFixed();
    }, 150);
  });

})();

  function randomJump(type) {
    let data = [];
    
    if (type === 'stage') {
      data = [...unitData, ...specialData, ...assistData, ...substituteData];
    } else if (type === 'bobo') {
      data = boboData;
    } else if (type === 'fancam') {
      const cards = document.querySelectorAll('#weiboFeed .weibo-card, #weiboFeed .xiaohongshu-card, #weiboFeed .douyin-card, #weiboFeed .bilibili-card');
      cards.forEach(card => {
        const link = card.querySelector('.weibo-link-button, .video-desc-box');
        if (link && link.href) {
          data.push({ url: link.href });
        }
      });
    }
    
    if (data.length === 0) return;
    
    const randomItem = data[Math.floor(Math.random() * data.length)];
    if (randomItem.url) {
      window.open(randomItem.url, '_blank');
    }
  }

  // ===== 口袋回放播放器 =====
  function openPocketPlayer(liveId) {
    const item = pocketLivesData.find(x => x.liveId === liveId);
    if (!item) { alert('未找到该回放'); return; }

    const overlay = document.getElementById('pocketPlayerOverlay');
    const titleEl = document.getElementById('pocketPlayerTitle');
    const infoEl = document.getElementById('pocketPlayerInfo');
    const video = document.getElementById('pocketPlayerVideo');
    const originBtn = document.getElementById('pocketPlayerOrigin');

    titleEl.textContent = item.title || '口袋回放';
    infoEl.innerHTML = `
      <span>${item.date || ''}</span>
      ${item.duration ? `<span>${item.duration}</span>` : ''}
      ${item.viewers ? `<span>${item.viewers}人观看</span>` : ''}
      ${item.plays ? `<span>${item.plays}次播放</span>` : ''}
    `;
    originBtn.href = item.m3u8 || '#';

    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';

    // 播放视频
    if (pocketCurrentHls) { pocketCurrentHls.destroy(); pocketCurrentHls = null; }
    if (item.m3u8) {
      if (window.Hls && window.Hls.isSupported()) {
        const hls = new window.Hls();
        hls.loadSource(item.m3u8);
        hls.attachMedia(video);
        hls.on(window.Hls.Events.MANIFEST_PARSED, () => video.play().catch(() => {}));
        pocketCurrentHls = hls;
      } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = item.m3u8;
        video.addEventListener('loadedmetadata', () => video.play().catch(() => {}));
      } else {
        video.src = item.m3u8;
      }
    }

    // 加载弹幕
    if (item.danmaku && item.danmaku.trim()) {
      loadPocketDanmaku(item.danmaku);
    } else {
      clearPocketDanmaku();
    }
  }

  function closePocketPlayer(event) {
    if (event && event.target.id !== 'pocketPlayerOverlay') return;
    const overlay = document.getElementById('pocketPlayerOverlay');
    const video = document.getElementById('pocketPlayerVideo');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
    video.pause();
    video.src = '';
    if (pocketCurrentHls) { pocketCurrentHls.destroy(); pocketCurrentHls = null; }
    clearPocketDanmaku();
  }

  async function loadPocketDanmaku(url) {
    clearPocketDanmaku();
    const listEl = document.getElementById('pocketDanmakuList');
    const countEl = document.getElementById('pocketDanmakuCount');
    if (!listEl) return;
    try {
      const res = await fetch(url);
      const text = await res.text();
      pocketDanmakuList = [];
      const lines = text.split('\n');
      for (const line of lines) {
        // 匹配 [hh:mm:ss.xxx] 或 [mm:ss.xx] 格式
        const match = line.match(/\[(?:(\d+):)?(\d+):(\d+)\.(\d+)\](.*)/);
        if (match) {
          const hour = match[1] ? parseInt(match[1]) : 0;
          const min = parseInt(match[2]);
          const sec = parseInt(match[3]);
          const ms = parseInt(match[4]);
          const time = hour * 3600 + min * 60 + sec + ms / 1000;
          const rawContent = match[5].trim();
          if (!rawContent) continue;
          // 解析发送者和内容（制表符或冒号分隔）
          let sender = '';
          let content = rawContent;
          const tabParts = rawContent.split('\t');
          if (tabParts.length >= 2) {
            sender = tabParts[0].trim();
            content = tabParts.slice(1).join('\t').trim();
          } else {
            const senderMatch = rawContent.match(/^([^:：]{1,15})[:：]\s*(.*)$/);
            if (senderMatch) {
              sender = senderMatch[1].trim();
              content = senderMatch[2].trim();
            }
          }
          pocketDanmakuList.push({ time, sender, content, raw: rawContent });
        }
      }
      pocketDanmakuList.sort((a, b) => a.time - b.time);
      
      // 渲染列表
      if (pocketDanmakuList.length === 0) {
        listEl.innerHTML = '<div class="pocket-danmaku-empty">暂无弹幕</div>';
      } else {
        let html = '';
        for (let i = 0; i < pocketDanmakuList.length; i++) {
          const item = pocketDanmakuList[i];
          const min = Math.floor(item.time / 60);
          const sec = Math.floor(item.time % 60);
          const timeStr = String(min).padStart(2, '0') + ':' + String(sec).padStart(2, '0');
          html += `<div class="pocket-danmaku-item" data-index="${i}" data-time="${item.time}">
            <span class="pocket-danmaku-time">${timeStr}</span>
            ${item.sender ? `<span class="pocket-danmaku-sender" title="${item.sender}">${item.sender}</span>` : ''}
            <span class="pocket-danmaku-text">${item.content}</span>
          </div>`;
        }
        listEl.innerHTML = html;
        
        // 点击跳转
        listEl.querySelectorAll('.pocket-danmaku-item').forEach(el => {
          el.addEventListener('click', function() {
            const video = document.getElementById('pocketPlayerVideo');
            const time = parseFloat(this.dataset.time);
            if (video && !isNaN(time)) {
              video.currentTime = time;
              video.play().catch(() => {});
            }
          });
        });
      }
      if (countEl) countEl.textContent = pocketDanmakuList.length + '条';
      startPocketDanmaku();
    } catch (e) {
      console.log('弹幕加载失败:', e.message);
      listEl.innerHTML = '<div class="pocket-danmaku-empty">弹幕加载失败</div>';
    }
  }

  function startPocketDanmaku() {
    // 弹幕不需要自动高亮，只保留点击跳转
  }

  function clearPocketDanmaku() {
    if (pocketDanmakuTimer) { clearInterval(pocketDanmakuTimer); pocketDanmakuTimer = null; }
    const listEl = document.getElementById('pocketDanmakuList');
    if (listEl) listEl.innerHTML = '';
    const countEl = document.getElementById('pocketDanmakuCount');
    if (countEl) countEl.textContent = '0条';
    pocketDanmakuList = [];
  }

  // ESC关闭播放器
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      const overlay = document.getElementById('pocketPlayerOverlay');
      if (overlay && overlay.classList.contains('active')) {
        closePocketPlayer();
      }
    }
  });


// ===== 渲染行程倒计时 =====
function renderCountdown() {
  const listEl = document.getElementById('countdownList');
  if (!listEl) return;
  
  const now = new Date();
  
  // 筛选还没到的行程
  const upcoming = performanceSchedule.filter(item => {
    const itemDate = new Date(item.date.replace(/\./g, '-') + 'T' + (item.time || '19:30') + ':00');
    return itemDate > now;
  }).sort((a, b) => new Date(a.date.replace(/\./g, '-') + 'T' + (a.time || '19:30') + ':00') - new Date(b.date.replace(/\./g, '-') + 'T' + (b.time || '19:30') + ':00'));
  
  if (upcoming.length === 0) {
    listEl.innerHTML = '<div class="countdown-empty">暂无 upcoming 行程</div>';
    return;
  }
  
  let html = '';
  upcoming.forEach((item, index) => {
    const targetTime = item.date.replace(/\./g, '-') + 'T' + (item.time || '19:30') + ':00';
    const itemDate = new Date(targetTime);
    const diffTime = itemDate - now;
    
    // 计算天、时、分、秒
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const diffHours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const diffMinutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
    const diffSeconds = Math.floor((diffTime % (1000 * 60)) / 1000);
    
    // 简化标题
    let title = item.title;
    title = title.replace(/TEAM NII全新原创公演/g, 'TEAM NII');
    title = title.replace(/TEAM NII焕新公演/g, 'TEAM NII');
    title = title.replace(/SNH48 TEAM NII/g, 'TEAM NII');
    
    html += `<div class="countdown-item" data-target="${targetTime}">
      <div class="countdown-date">${item.date} ${item.time || ''}</div>
      <div class="countdown-title">${title}</div>
      <div class="countdown-live">
        <span class="cd-num cd-days">${diffDays}</span><span class="cd-unit">天</span>
        <span class="cd-num cd-hours">${String(diffHours).padStart(2, '0')}</span><span class="cd-unit">时</span>
        <span class="cd-num cd-minutes">${String(diffMinutes).padStart(2, '0')}</span><span class="cd-unit">分</span>
        <span class="cd-num cd-seconds">${String(diffSeconds).padStart(2, '0')}</span><span class="cd-unit">秒</span>
      </div>
    </div>`;
  });
  
  listEl.innerHTML = html;
}

// 实时更新倒计时
let countdownTimer = null;
function startCountdownTimer() {
  if (countdownTimer) clearInterval(countdownTimer);
  countdownTimer = setInterval(() => {
    const items = document.querySelectorAll('.countdown-item[data-target]');
    if (items.length === 0) return;
    
    const now = new Date();
    items.forEach(item => {
      const targetTime = item.dataset.target;
      const targetDate = new Date(targetTime);
      const diffTime = targetDate - now;
      
      if (diffTime <= 0) {
        // 时间到了，重新渲染
        renderCountdown();
        return;
      }
      
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
      const diffHours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const diffMinutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
      const diffSeconds = Math.floor((diffTime % (1000 * 60)) / 1000);
      
      const daysEl = item.querySelector('.cd-days');
      const hoursEl = item.querySelector('.cd-hours');
      const minutesEl = item.querySelector('.cd-minutes');
      const secondsEl = item.querySelector('.cd-seconds');
      
      if (daysEl) daysEl.textContent = diffDays;
      if (hoursEl) hoursEl.textContent = String(diffHours).padStart(2, '0');
      if (minutesEl) minutesEl.textContent = String(diffMinutes).padStart(2, '0');
      if (secondsEl) secondsEl.textContent = String(diffSeconds).padStart(2, '0');
    });
  }, 1000);
}

// ===== 渲染最近更新 =====
function renderRecentUpdates() {
  const listEl = document.getElementById('recentUpdateList');
  if (!listEl) return;
  
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const fiveDaysAgo = new Date(today);
  fiveDaysAgo.setDate(today.getDate() - 4);  // 今天+前4天=5天
  fiveDaysAgo.setHours(0, 0, 0, 0);
  
  let updates = [];
  
  // 舞台数据
  const allStageData = [...unitData, ...specialData, ...assistData, ...substituteData];
  allStageData.forEach(item => {
    if (item.date) {
      const itemDate = new Date(item.date.replace(/\./g, '-'));
      if (itemDate >= fiveDaysAgo && itemDate <= today) {
        updates.push({
          date: item.date,
          title: item.title,
          type: 'stage',
          typeLabel: '舞台'
        });
      }
    }
  });
  
  // 直播数据
  const allBoboData = [...boboData, ...pocketLivesData];
  allBoboData.forEach(item => {
    if (item.date) {
      const pureDate = item.date.replace(/[凌晨|晚|早|下午|中午].*$/, '');
      const itemDate = new Date(pureDate.replace(/\./g, '-'));
      if (itemDate >= fiveDaysAgo && itemDate <= today) {
        updates.push({
          date: pureDate,
          title: item.title,
          type: 'bobo',
          typeLabel: '直播'
        });
      }
    }
  });
  
  // 平台更新数据
  const platformCards = document.querySelectorAll('#weiboFeed [data-platform], #weiboFeed .video-card');
  platformCards.forEach(card => {
    const platform = card.dataset.platform;
    const cardMonth = card.dataset.month;
    const cardDay = card.dataset.day;
    if (platform && cardMonth && cardDay) {
      const dateStr = cardMonth.replace(/-/g, '.') + '.' + cardDay;
      const dateParts = cardMonth.split('-');
      const itemDate = new Date(parseInt(dateParts[0]), parseInt(dateParts[1]) - 1, parseInt(cardDay));
      if (itemDate >= fiveDaysAgo && itemDate <= today) {
        const platformNames = { weibo: '微博', xiaohongshu: '小红书', douyin: '抖音', bilibili: 'B站' };
        const titleEl = card.querySelector('.weibo-text, .xiaohongshu-text, .card-title, .video-title, .bilibili-title, .video-desc-box .text');
        const title = titleEl ? titleEl.textContent.substring(0, 20) : (platformNames[platform] || platform) + '更新';
        updates.push({
          date: dateStr,
          title: title,
          type: 'fancam',
          typeLabel: platformNames[platform] || '平台'
        });
      }
    }
  });
  
  // 按日期降序排序
  updates.sort((a, b) => new Date(b.date.replace(/\./g, '-')) - new Date(a.date.replace(/\./g, '-')));
  
  // 最多显示10条
  updates = updates.slice(0, 20);  // 最多20条，超过框高度的滚动
  
  if (updates.length === 0) {
    listEl.innerHTML = '<div class="recent-update-empty">近五天暂无更新</div>';
    return;
  }
  
  let html = '';
  updates.forEach(item => {
    html += `<div class="recent-update-item">
      <div class="recent-update-date">${item.date}</div>
      <div class="recent-update-title">${item.title}<span class="recent-update-type ${item.type}">${item.typeLabel}</span></div>
    </div>`;
  });
  
  listEl.innerHTML = html;
}

// 页面加载完成后渲染
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(() => {
    renderCountdown();
    renderRecentUpdates();
    startCountdownTimer();
  }, 500);
});


// ========== 快速安利区轮播 ==========
(function() {
  const track = document.getElementById('promoCarouselTrack');
  const dots = document.querySelectorAll('.promo-dot');
  if (!track || dots.length === 0) return;
  
  let currentIndex = 0;
  const totalSlides = dots.length;
  
  function goToSlide(index) {
    currentIndex = (index + totalSlides) % totalSlides;
    track.style.transform = 'translateX(-' + (currentIndex * 100) + '%)';
    
    dots.forEach((dot, i) => {
      if (i === currentIndex) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }
  
  dots.forEach((dot, index) => {
    dot.addEventListener('click', function() {
      goToSlide(index);
    });
  });
  
  // 左右切换箭头
  const prevBtn = document.getElementById('promoPrevBtn');
  const nextBtn = document.getElementById('promoNextBtn');
  if (prevBtn) {
    prevBtn.addEventListener('click', function() {
      goToSlide(currentIndex - 1);
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', function() {
      goToSlide(currentIndex + 1);
    });
  }
  // 自动轮播（每5秒切换一次）
  setInterval(function() {
    const nextIndex = (currentIndex + 1) % totalSlides;
    goToSlide(nextIndex);
  }, 5000);
})();

// ========== 公演页面模块 ==========
(function() {
  let gongyanData = [];
  let gongyanLoaded = false;
  let currentGongyanCategory = 'all';

  // 加载公演数据
  async function loadGongyanData() {
    if (gongyanLoaded) return;
    try {
      const res = await fetch('bilibili_nii_videos.json');
      const data = await res.json();
      gongyanData = data.videos || [];
      // 按公演日期从新到旧排序（无日期排最后）
      gongyanData.sort(function(a, b) {
        return String(b.pubdate || '').localeCompare(String(a.pubdate || ''));
      });
      gongyanLoaded = true;
      window.gongyanData = gongyanData;  // 同步更新全局引用
      console.log('公演数据加载完成，共' + gongyanData.length + '条');
    } catch (e) {
      console.log('公演数据加载失败:', e.message);
      gongyanData = [];
      gongyanLoaded = true;
    }
  }

  // 判断是否是公演（有日期的）
  function isGongyan(item) {
    return item.pubdate && item.pubdate !== '';
  }

  // 获取分类数据
  function getCategoryData(category) {
    if (category === 'gongyan') {
      return gongyanData.filter(isGongyan);
    } else if (category === 'other') {
      return gongyanData.filter(item => !isGongyan(item));
    }
    return gongyanData;
  }

  // 更新分类计数
  function updateGongyanCounts() {
    const allCount = gongyanData.length;
    const gongyanCount = gongyanData.filter(isGongyan).length;
    const otherCount = allCount - gongyanCount;
    
    const totalEl = document.getElementById('gongyanTotalCount');
    const gongyanEl = document.getElementById('gongyanGongyanCount');
    const otherEl = document.getElementById('gongyanOtherCount');
    
    if (totalEl) totalEl.textContent = allCount;
    if (gongyanEl) gongyanEl.textContent = gongyanCount;
    if (otherEl) otherEl.textContent = otherCount;
  }

  // 渲染公演卡片（和舞台同款）
  // 公演分页
  let currentGongyanPage = 1;
  const gongyanPageSize = 20;
  let isGongyanPaginationClick = false;

  function updateGongyanPaginationUI(totalCount) {
    const controls = document.getElementById('gongyanPaginationControls');
    const prevBtn = document.getElementById('gongyanPrevBtn');
    const nextBtn = document.getElementById('gongyanNextBtn');
    const pageInfo = document.getElementById('gongyanPageInfo');
    if (!controls) return;

    const totalPages = Math.ceil(totalCount / gongyanPageSize);
    if (totalPages <= 1) { controls.style.display = 'none'; return; }

    controls.style.display = 'flex';
    pageInfo.textContent = `第 ${currentGongyanPage} / ${totalPages} 页`;
    prevBtn.disabled = currentGongyanPage === 1;
    nextBtn.disabled = currentGongyanPage === totalPages;
    prevBtn.style.opacity = currentGongyanPage === 1 ? '0.4' : '1';
    nextBtn.style.opacity = currentGongyanPage === totalPages ? '0.4' : '1';
  }

  function changeGongyanPage(delta) {
    const keyword = document.getElementById('gongyanSearch')?.value || '';
    const data = getCategoryData(currentGongyanCategory);
    const filtered = data.filter(item => {
      const k = keyword.trim().toLowerCase();
      return k === '' || item.title.toLowerCase().includes(k);
    });
    const totalPages = Math.ceil(filtered.length / gongyanPageSize);
    const newPage = currentGongyanPage + delta;
    if (newPage >= 1 && newPage <= totalPages) {
      currentGongyanPage = newPage;
      isGongyanPaginationClick = true;
      renderGongyanCards(currentGongyanCategory, keyword);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  function renderGongyanCards(category, searchText) {
    const grid = document.getElementById('gongyanGrid');
    if (!grid) return;
    
    let data = getCategoryData(category);
    
    // 搜索过滤
    if (searchText && searchText.trim()) {
      const keyword = searchText.trim().toLowerCase();
      data = data.filter(item => 
        item.title && item.title.toLowerCase().includes(keyword)
      );
    }
    
    if (data.length === 0) {
      grid.innerHTML = '<div style="grid-column:1/-1; text-align:center; padding:60px 20px; color:#999; font-size:14px;">暂无内容</div>';
      const controls = document.getElementById('gongyanPaginationControls');
      if (controls) controls.style.display = 'none';
      return;
    }

    // 分页
    if (!isGongyanPaginationClick) currentGongyanPage = 1;
    isGongyanPaginationClick = false;
    const pageData = data.slice((currentGongyanPage - 1) * gongyanPageSize, currentGongyanPage * gongyanPageSize);

    let html = '';
    pageData.forEach(item => {
      const isGongyanItem = isGongyan(item);
      const tagText = isGongyanItem ? '公演' : '其他';
      const tagColor = isGongyanItem ? '#6bb8e8' : '#f5a0b8';
      
      // 封面：有封面图用封面图，否则用fallback
      let coverHtml = '';
      if (item.cover || item.pic) {
        const coverUrl = item.cover || item.pic;
        coverHtml = '<img decoding="async" src="' + coverUrl + '" alt="' + item.title + '" loading="lazy" fetchpriority="low" style="opacity:1;" />';
      } else {
        coverHtml = '<div class="cover-fallback" style="background:linear-gradient(135deg,#b8d4e8,#8ab3d0);"><div class="video-icon">🎬</div><div class="video-tip" style="color:#fff;">公演视频</div></div>';
      }
      
      const dateMatch = item.pubdate ? item.pubdate.match(/(\d{4})-(\d{2})-(\d{2})/) : null;
      const dataMonth = dateMatch ? dateMatch[1] + '-' + dateMatch[2] : '';
      const dataDay = dateMatch ? dateMatch[3] : '';
      
      html += `
        <div class="video-card" data-url="${item.url}" data-month="${dataMonth}" data-day="${dataDay}" onclick="window.open('${item.url || '#'}','_blank')">
          <div class="video-cover-box">
            ${coverHtml}
            ${item.length ? `<span class="video-duration-badge">${item.length}</span>` : ''}
          </div>
          <div class="video-info">
            <div class="video-name">${item.title}</div>
            <div class="video-date">${item.pubdate || '无日期'}</div>
            <div class="video-tag-bottom" style="background:${tagColor};">${tagText}</div>
          </div>
        </div>
      `;
    });
    
    grid.innerHTML = html;
    // 根据当前布局模式设置样式
    if (typeof currentLayoutMode !== 'undefined' && currentLayoutMode === 'list') {
      grid.className = 'stage-grid list-mode';
    } else {
      grid.className = 'stage-grid';
    }

    updateGongyanPaginationUI(data.length);
  }

  // 格式化播放量
  function formatPlayCount(count) {
    if (!count) return '0';
    if (count >= 10000) {
      return (count / 10000).toFixed(1) + '万';
    }
    return count.toString();
  }

  // 初始化公演页面
  async function initGongyanPage() {
    await loadGongyanData();
    updateGongyanCounts();
    renderGongyanCards(currentGongyanCategory, document.getElementById('gongyanSearch')?.value || '');
    
    // 更新导航指示器
    if (window.updateNavIndicator) {
      window.updateNavIndicator('gongyanNav', 'gongyanNavIndicator');
    }
    
    // 重新渲染右侧日历（日期颜色标记 + 更新汇总列表）
    if (typeof currentYear !== 'undefined' && typeof currentMonth !== 'undefined') {
      calCurrentPage = 'gongyan';
      renderCalendar(currentYear, currentMonth);
      renderUpdateList(currentYear, currentMonth, null, 'gongyan');
    }
  }

  // 标签切换
  document.addEventListener('click', function(e) {
    const btn = e.target.closest('#gongyanNav .stage-nav-item');
    if (!btn) return;
    
    currentGongyanCategory = btn.dataset.category;
    
    document.querySelectorAll('#gongyanNav .stage-nav-item').forEach(b => {
      b.classList.remove('active');
    });
    btn.classList.add('active');
    
    renderGongyanCards(currentGongyanCategory, document.getElementById('gongyanSearch')?.value || '');
    
    if (window.updateNavIndicator) {
      window.updateNavIndicator('gongyanNav', 'gongyanNavIndicator');
    }
  });

  // 搜索
  document.addEventListener('input', function(e) {
    if (e.target.id === 'gongyanSearch') {
      renderGongyanCards(currentGongyanCategory, e.target.value);
    }
  });

  // 页面切换时初始化
  // 暴露初始化函数
  window.initGongyanPage = initGongyanPage;

  // 暴露分页函数和数据到全局作用域，供HTML onclick和日历函数调用
  window.changeGongyanPage = changeGongyanPage;
  window.gongyanData = gongyanData;
  window.isGongyan = isGongyan;
  window.getCategoryData = getCategoryData;

  // ===== 前端路由：浏览器前进/后退 + 页面初始化 =====
  // 监听浏览器前进/后退按钮，根据地址栏同步切换页面
  window.addEventListener('popstate', function() {
    var pageId = getPageFromUrl();
    __isPoppingState = true;
    switchPage(pageId);
    __isPoppingState = false;
  });

  // 页面首次加载时，根据地址栏中的路径直接显示对应页面
  // （例如直接访问 /stage 或刷新 /stage 页面时）
  function initRouteFromUrl() {
    var pageId = getPageFromUrl();
    if (pageId !== 'home') {
      // 延迟执行，确保 DOM 和其他初始化脚本都已就绪
      setTimeout(function() {
        __isPoppingState = true; // 不重复写入历史记录
        switchPage(pageId);
        __isPoppingState = false;
      }, 200);
    }
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initRouteFromUrl);
  } else {
    initRouteFromUrl();
  }
  })();
// ================= 归档年度报告弹窗 =================
  function calcReportDays(dateStr) {
    const parts = dateStr.split('.');
    const target = new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2]));
    return Math.floor((new Date() - target) / (1000 * 60 * 60 * 24));
  }

  function extractShowName(title) {
    const m = (title || '').match(/《(.+?)》/);
    return m ? m[1].trim() : (title || '未命名公演');
  }

  function getGongyanItems() {
    return new Promise(function(resolve) {
      var items = (window.gongyanData || []).filter(function(v) { return v && v.pubdate && v.pubdate !== ''; });
      if (items.length) { resolve(items); return; }
      try {
        fetch('bilibili_nii_videos.json?_=' + Date.now())
          .then(function(r) { return r.json(); })
          .then(function(d) { resolve((d.videos || []).filter(function(v) { return v && v.pubdate && v.pubdate !== ''; })); })
          .catch(function() { resolve([]); });
      } catch (e) { resolve([]); }
    });
  }

  function normalizeShowName(kuoName, fullText, dateStr) {
    var t = fullText || '';
    var d = (dateStr || '').replace(/-/g, '.');
    var after = t.indexOf('》') !== -1 ? t.split('》').pop() : t;
    var specialKw = ['毕业', '联合', '特别', '特殊'];
    for (var i = 0; i < specialKw.length; i++) {
      if (after.indexOf(specialKw[i]) !== -1) return '特别公演';
    }
    if (kuoName === '平安喜乐') return '特别公演';
    if (kuoName && kuoName.indexOf('声动星河') !== -1) return '特别公演';
    if (kuoName && (kuoName === '人生并不会完蛋' || kuoName === '褒美' || kuoName === '我们的夏天')) return '应许之地-b版';
    if (d >= '2026.06.27') return '肆时墟';
    if (kuoName && kuoName.indexOf('应许之地') !== -1) {
      if (d >= '2024.12.15' && d <= '2025.11.02') return '应许之地-b版';
      return '应许之地';
    }
    if (kuoName && kuoName.toLowerCase() === 'nice to meet you ii') return 'Nice to meet you II';
    return kuoName || '未命名公演';
  }

  function computeShowStats(gongyanItems) {
    var items = gongyanItems || [];
    var showMap = {};
    items.forEach(function(v) {
      if (!v || !v.title) return;
      var m = (v.title || '').match(/《(.+?)》/);
      var kuo = m ? m[1].trim() : '';
      var nn = normalizeShowName(kuo, v.title, v.pubdate || '');
      showMap[nn] = (showMap[nn] || 0) + 1;
    });
    var entries = Object.keys(showMap).map(function(k) { return [k, showMap[k]]; }).sort(function(a, b) { return b[1] - a[1]; });
    return { showCount: entries.length, top: entries[0] || null, showMap: showMap };
  }

  // 舞台小字标题：对 unit 名中混入公演名内容的特殊条目，从原始 title 解析出「完整公演标题」（不含 unit 名）；未命中返回 null
  function stageFullTitle(item) {
    const u = item.title || '';
    const specialKeys = ['声动星河淘汰赛', '联合公演', '晋级赛', '及作品展演'];
    if (!specialKeys.some(k => u.indexOf(k) !== -1)) return null;
    let s = item.rawTitle || '';
    if (!s) return null;
    s = s.replace(/^【[^】]*】\s*/, '');
    s = s.replace(/^\d{4}[\.\-]?\d{2}[\.\-]?\d{2}\s*/, '');
    s = s.replace(/\s*CUT\s*$/i, '');
    s = s.trim();
    const un = cleanUnitName(u);
    if (un && s.endsWith(un)) {
      s = s.slice(0, s.length - un.length).trim();
    }
    return s || null;
  }

  // 剥离 unit 名中混入的公演名内容（&...联合公演、第X阶段晋级赛第X场）
  function cleanUnitName(u) {
    let s = u || '';
    s = s.replace(/^&.*?联合公演\s*/, '');
    s = s.replace(/^第[一二三四五六七八九十\d]+阶段晋级赛第[一二三四五六七八九十\d]+场\s*/, '');
    s = s.replace(/^声动星河淘汰赛\s*/, '');
    s = s.replace(/^及作品展演\s*/, '');
    return s;
  }

  function getUnitStats() {
    const src = (typeof stageCategoryCache !== 'undefined' && stageCategoryCache && stageCategoryCache.all) ? stageCategoryCache.all : (typeof unitData !== 'undefined' && unitData ? unitData : []);
    const cleaned = src.filter(function(i) { return i && i.title; }).map(function(i) {
      return { name: cleanUnitName(i.title), date: i.date || '' };
    }).filter(function(o) { return o.name && o.name.indexOf('今日之星') === -1 && o.name.indexOf('&') === -1; });
    const uniqueCount = new Set(cleaned.map(function(o) { return o.name; })).size;
    const cnt = {};
    cleaned.forEach(function(o) { cnt[o.name] = (cnt[o.name] || 0) + 1; });
    const topArr = Object.entries(cnt).sort(function(a, b) { return b[1] - a[1]; });
    const withDate = cleaned.filter(function(o) { return o.date; }).sort(function(a, b) { return (a.date || '').localeCompare(b.date || ''); });
    return {
      uniqueCount: uniqueCount,
      totalCount: cleaned.length,
      top: topArr.length ? { name: topArr[0][0], count: topArr[0][1] } : null,
      first: withDate.length ? { title: withDate[0].name, date: withDate[0].date } : null
    };
  }

  function fmtDate(d) {
    return (d || '').replace(/-/g, '.');
  }

  // ===== 归档页内容区：年度盘点（文字） + 舞台数据（柱状图） =====
  var archiveChartType = 'show';
  var archiveChartBound = false;
  var archiveSummaryCache = null;   // 公演统计缓存（computeShowStats 结果）
  var archiveUnitCounts = null;     // unit 计数缓存（[name, count]）

  function escapeHtml(s) {
    return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  // unit 出现次数统计（口径与弹窗一致：所有舞台数据、去除今日之星/含&）
  function getUnitCounts() {
    if (archiveUnitCounts) return archiveUnitCounts;
    var src = (typeof stageCategoryCache !== 'undefined' && stageCategoryCache && stageCategoryCache.all)
      ? stageCategoryCache.all
      : (typeof unitData !== 'undefined' && unitData ? unitData : []);
    var cnt = {};
    src.forEach(function(i) {
      if (!i || !i.title) return;
      var name = cleanUnitName(i.title);
      if (!name || name.indexOf('今日之星') !== -1 || name.indexOf('&') !== -1) return;
      cnt[name] = (cnt[name] || 0) + 1;
    });
    archiveUnitCounts = Object.keys(cnt).map(function(k) { return [k, cnt[k]]; }).sort(function(a, b) { return b[1] - a[1]; });
    return archiveUnitCounts;
  }

  function drawArchiveBars(entries, unitLabel) {
    const barsEl = document.getElementById('archiveChartBars');
    const noteEl = document.getElementById('archiveChartNote');
    if (!barsEl) return;
    if (!entries || !entries.length) {
      barsEl.innerHTML = '<div class="archive-chart-loading">暂无数据</div>';
      if (noteEl) noteEl.textContent = '';
      return;
    }
    const max = entries[0][1] || 1;
    var html = '';
    entries.forEach(function(e, idx) {
      const h = Math.max(8, Math.round((e[1] / max) * 168));
      const title = escapeHtml(e[0]) + '：' + e[1] + unitLabel;
      const delay = Math.min(idx * 0.06, 0.6).toFixed(2);
      html += '<div class="archive-chart-col">'
        + '<div class="archive-chart-val">' + e[1] + '</div>'
        + '<div class="archive-chart-bar" style="height:' + h + 'px; animation-delay:' + delay + 's" title="' + title + '"></div>'
        + '<div class="archive-chart-label" title="' + title + '">' + escapeHtml(e[0]) + '</div>'
        + '</div>';
    });
    barsEl.innerHTML = html;
    if (noteEl) {
      if (archiveChartType === 'unit' && entries.length >= 15) {
        noteEl.textContent = '按出现次数从高到低，仅展示前 15 首';
      } else {
        noteEl.textContent = '按出现次数从高到低排列';
      }
    }
  }

  function renderArchiveChart() {
    const barsEl = document.getElementById('archiveChartBars');
    if (!barsEl) return;
    barsEl.innerHTML = '<div class="archive-chart-loading">加载中...</div>';
    if (archiveChartType === 'show') {
      getGongyanItems().then(function(items) {
        if (!archiveSummaryCache) archiveSummaryCache = computeShowStats(items);
        const st = archiveSummaryCache;
        const entries = Object.keys(st.showMap).map(function(k) { return [k, st.showMap[k]]; }).sort(function(a, b) { return b[1] - a[1]; });
        drawArchiveBars(entries, '场');
      });
    } else {
      var entries = getUnitCounts();
      if (!entries.length) {
        // 舞台数据还没加载完，等待后重试
        if (typeof loadStageData === 'function' && typeof stageCategoryCache !== 'undefined' && (!stageCategoryCache.all || !stageCategoryCache.all.length)) {
          loadStageData().then(function() {
            archiveUnitCounts = null;
            drawArchiveBars(getUnitCounts(), '次');
          });
        } else {
          drawArchiveBars(entries, '次');
        }
      } else {
        drawArchiveBars(entries.slice(0, 15), '次');
      }
    }
  }

  function renderArchiveSummary() {
    const textEl = document.getElementById('archiveSummaryText');
    if (!textEl) return;
    textEl.textContent = '加载中...';
    getGongyanItems().then(function(items) {
      if (!archiveSummaryCache) archiveSummaryCache = computeShowStats(items);
      const st = archiveSummaryCache;
      const stageTotal = items.length;
      const showCount = st.showCount;
      const topShow = st.top ? st.top[0] : '暂无';
      const topShowCount = st.top ? st.top[1] : 0;
      const u = getUnitStats();
      const unitCount = u.uniqueCount || 0;
      const topUnit = u.top ? u.top.name : '暂无';
      const topUnitCount = u.top ? u.top.count : 0;
      const firstStage = (function() {
        const sorted = items.slice().sort(function(a, b) { return (a.pubdate || '').localeCompare(b.pubdate || ''); });
        return sorted[0] || null;
      })();
      const firstStageName = firstStage ? extractShowName(firstStage.title) : '暂无';
      const firstStageDate = firstStage ? fmtDate(firstStage.pubdate) : '';
      const firstUnit = u.first ? u.first.title : '暂无';
      const firstUnitDate = u.first ? fmtDate(u.first.date) : '';

      const debut = calcReportDays('2023.09.30');
      const promo = calcReportDays('2024.02.02');

      // 完整场次分布（降序）
      const showEntries = Object.keys(st.showMap).map(function(k) { return [k, st.showMap[k]]; }).sort(function(a, b) { return b[1] - a[1]; });
      const showDist = showEntries.map(function(e) { return '《' + escapeHtml(e[0]) + '》' + e[1] + '场'; }).join('、');
      // 公演占比
      const showPct = stageTotal ? Math.round((topShowCount / stageTotal) * 1000) / 10 : 0;
      // UNIT 完整排序列表
      const unitEntries = getUnitCounts();
      const unitTotalTimes = unitEntries.reduce(function(s, e) { return s + e[1]; }, 0);
      const unitTop3 = unitEntries.slice(0, 3).map(function(e) { return '《' + escapeHtml(e[0]) + '》' + e[1] + '次'; }).join('、');
      const unitPct = unitTotalTimes ? Math.round((topUnitCount / unitTotalTimes) * 1000) / 10 : 0;

      textEl.innerHTML =
        '<div class="ar-stat-block">'
        + '<div class="ar-stat-head">出道 · 升格</div>'
        + '<div class="ar-stat-row">'
        + '<span class="ar-item">出道日期：2023.09.30</span>'
        + '<span class="ar-item">出道至今 <b>' + debut + '</b> 天</span>'
        + '</div>'
        + '<div class="ar-stat-row">'
        + '<span class="ar-item">升格日期：2024.02.02</span>'
        + '<span class="ar-item">升格至今 <b>' + promo + '</b> 天</span>'
        + '</div>'
        + '</div>'
        + '<div class="ar-stat-block">'
        + '<div class="ar-stat-head">公演统计</div>'
        + '<div class="ar-stat-row">'
        + '<span class="ar-item">累计完成公演 <b>' + stageTotal + '</b> 场</span>'
        + '<span class="ar-item">覆盖 <b>' + showCount + '</b> 套公演</span>'
        + '</div>'
        + '<div style="margin:6px 0;line-height:1.8;">场次分布：' + showDist + '</div>'
        + '<div class="ar-stat-row">'
        + '<span class="ar-item">单套登台最多：《' + escapeHtml(topShow) + '》<b>' + topShowCount + '</b> 场</span>'
        + '<span class="ar-item">占全部公演场次的 <b>' + showPct + '%</b></span>'
        + '</div>'
        + '</div>'
        + '<div class="ar-stat-block">'
        + '<div class="ar-stat-head">UNIT 统计</div>'
        + '<div class="ar-stat-row">'
        + '<span class="ar-item">累计解锁 <b>' + unitCount + '</b> 首 UNIT</span>'
        + '<span class="ar-item">累计出演 <b>' + unitTotalTimes + '</b> 次</span>'
        + '</div>'
        + '<div class="ar-stat-row">'
        + '<span class="ar-item">重复次数最多：《' + escapeHtml(topUnit) + '》<b>' + topUnitCount + '</b> 次</span>'
        + '<span class="ar-item">占全部 UNIT 出演的 <b>' + unitPct + '%</b></span>'
        + '</div>'
        + '<div style="margin-top:6px;line-height:1.8;">高频前三：' + (unitTop3 || "暂无") + '</div>'
        + '</div>'
        + '<div class="ar-stat-block">'
        + '<div class="ar-stat-head">首次记录</div>'
        + '<div class="ar-stat-row">'
        + '<span class="ar-item">首次公演：《' + escapeHtml(firstStageName) + '》（' + firstStageDate + '）</span>'
        + '<span class="ar-item">首次 UNIT：《' + escapeHtml(firstUnit) + '》（' + firstUnitDate + '）</span>'
        + '</div>'
        + '</div>';
    });
  }

  function renderArchiveSections() {
    if (!archiveChartBound) {
      archiveChartBound = true;
      document.querySelectorAll('.archive-chart-tab').forEach(function(btn) {
        btn.addEventListener('click', function() {
          document.querySelectorAll('.archive-chart-tab').forEach(function(b) { b.classList.remove('active'); });
          btn.classList.add('active');
          archiveChartType = btn.getAttribute('data-chart');
          renderArchiveChart();
        });
      });
    }
    renderArchiveSummary();
    renderArchiveChart();
  }



// ===== 随机背景：进入页面时从 bgImages 随机选一张 =====
(function () {
  if (typeof bgImages === 'undefined' || !bgImages.length) return;
  var pool = bgImages.slice().sort(function () { return Math.random() - 0.5; });
  var i = 0;
  function trySet() {
    if (i >= pool.length) return; // 全部失败则不换背景，用 CSS 默认图
    var img = new Image();
    img.onload = function () {
      document.documentElement.style.setProperty('--bg-image', 'url("' + pool[i] + '")');
    };
    img.onerror = function () { i++; trySet(); };
    img.src = pool[i];
  }
  trySet();
})();





