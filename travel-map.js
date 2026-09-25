// ============================================
// 足迹 · 中国地图（ECharts）
// 依赖：lib/echarts.min.js + data/china.js + data/travelData.js
// ============================================
(function () {
  'use strict';

  var page = document.getElementById('music');
  var inited = false;

  // ---------- 工具 ----------
  function themeHue() {
    try {
      var v = getComputedStyle(document.documentElement).getPropertyValue('--theme-hue');
      return v ? v.trim() : '210';
    } catch (e) { return '210'; }
  }

  function isDark() {
    return document.body.classList.contains('dark-mode');
  }

  // ---------- 弹窗 ----------
  var popup = null;

  function buildPopup() {
    popup = document.createElement('div');
    popup.className = 'travel-popup';
    popup.innerHTML =
      '<div class="travel-popup-card">' +
      '  <button class="travel-popup-close" id="travelPopupClose">✕</button>' +
      '  <div class="travel-popup-head">' +
      '    <div class="travel-popup-title" id="travelPopupTitle"></div>' +
      '    <div class="travel-popup-tags" id="travelPopupTags"></div>' +
      '  </div>' +
      '  <div class="travel-popup-intro" id="travelPopupIntro"></div>' +
      '  <div class="travel-popup-footer" id="travelPopupFooter"></div>' +
      '</div>';
    document.body.appendChild(popup);
    popup.addEventListener('click', function (e) {
      if (e.target === popup) closePopup();
    });
    document.getElementById('travelPopupClose').addEventListener('click', closePopup);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closePopup();
    });
  }

  function closePopup() {
    if (popup) popup.classList.remove('show');
  }

  function openPopup(name) {
    if (!popup) buildPopup();
    var data = TRAVEL_DATA;
    var info = (data.visited && data.visited[name]) || null;
    var title = document.getElementById('travelPopupTitle');
    var tags = document.getElementById('travelPopupTags');
    var intro = document.getElementById('travelPopupIntro');
    var footer = document.getElementById('travelPopupFooter');

    title.textContent = name;
    tags.innerHTML = '';
    if (info && info.intro) {
      if (info.tags && info.tags.length) {
        info.tags.forEach(function (t) {
          var s = document.createElement('span');
          s.className = 'travel-popup-tag';
          s.textContent = t;
          tags.appendChild(s);
        });
      }
      var lines = (info.intro || '').split('\n');
      var frag = document.createDocumentFragment();
      lines.forEach(function (l) {
        var t = (l || '').trim();
        if (!t) { frag.appendChild(document.createElement('br')); return; }
        if (t.charAt(0) === '【' && t.indexOf('】') > 0) {
          var sub = document.createElement('div');
          sub.className = 'travel-popup-sub';
          sub.textContent = t.replace(/^【(.+)】$/, '$1');
          frag.appendChild(sub);
        } else {
          var p = document.createElement('p');
          p.textContent = t;
          frag.appendChild(p);
        }
      });
      intro.innerHTML = '';
      intro.appendChild(frag);
    } else {
      intro.innerHTML = '暂未解锁';
    }
    footer.textContent = data.footerText || '';
    popup.classList.add('show');
  }

  // ---------- 地图 ----------
  function buildOption() {
    var data = TRAVEL_DATA;
    var hue = themeHue();

    // 每个省的状态：1=去过 0=暂未开发
    var mapData = CHINA_GEO.features.map(function (f) {
      var name = f.properties.name;
      var visitedInfo = data.visited && data.visited[name];
      var state = visitedInfo ? 1 : 0;
      return { name: name, value: state };
    });

    function areaColor(state) {
      // 去过的省份浅灰、未开发的深灰（暗色模式，不带蓝调）
      if (state === 1) return isDark() ? '#565a63' : '#d8e7f8';
      return isDark() ? '#2f3136' : '#ffffff';
    }
    function borderColor(state) {
      return isDark() ? '#3a3e48' : '#e3e3e3';
    }

    return {
      tooltip: {
        show: true,
        trigger: 'item',
        backgroundColor: isDark() ? 'rgba(20,20,20,.96)' : 'rgba(255,255,255,.95)',
        borderColor: 'hsla(' + hue + ', 70%, 60%, .45)',
        borderWidth: 1,
        padding: [8, 12],
        extraCssText: 'box-shadow:none!important;',
        textStyle: { color: isDark() ? '#e6e9f2' : '#333', fontSize: 12 },
        formatter: function(params) {
          var vi = data.visited && data.visited[params.name];
          if (params.value === 1 && vi) {
            if (vi.time) return params.name + '<br/>去过时间：' + vi.time;
            return params.name + '<br/>已探索';
          }
          return params.name + '<br/>暂未探索';
        }
      },
      visualMap: false,
      series: [{
        type: 'map',
        map: 'china',
        roam: true,
        selectedMode: false,
        zoom: 1.15,
        label: {
          show: false
        },
        itemStyle: {
          borderColor: '#e3e3e3',
          borderWidth: 1
        },
        emphasis: {
          scale: false,
          label: { show: true, fontSize: 11, fontWeight: 'bold', color: isDark() ? '#ffffff' : '#333' },
          itemStyle: {
            borderWidth: 1.2,
            borderColor: 'hsla(' + hue + ', 70%, 50%, 0.85)'
          }
        },
        data: mapData.map(function (d) {
          return {
            name: d.name,
            value: d.value,
            itemStyle: {
              areaColor: areaColor(d.value),
              borderColor: borderColor(d.value)
            },
            emphasis: {
              itemStyle: {
                areaColor: areaColor(d.value)
              }
            }
          };
        })
      }]
    };
  }

  function initMap() {
    if (!window.echarts || !CHINA_GEO || !TRAVEL_DATA) return;
    var container = document.getElementById('chinaMap');
    if (!container) return;

    if (!echarts.getMap('china')) {
      echarts.registerMap('china', CHINA_GEO);
    }
    chart = echarts.init(container);
    chart.setOption(buildOption());

    chart.on('click', function (params) {
      if (params && params.name) openPopup(params.name);
    });

    window.addEventListener('resize', function () {
      chart.resize();
    });
  }

  function tryInit() {
    if (inited) return;
    if (page && page.classList.contains('active')) {
      inited = true;
      setTimeout(initMap, 60);
    }
  }

  // 首次加载如果足迹页已激活，直接初始化
  tryInit();

  // 监听足迹页切换（class 变为 active 时初始化）
  if (page && window.MutationObserver) {
    new MutationObserver(function () { tryInit(); }).observe(page, {
      attributes: true,
      attributeFilter: ['class']
    });
  }

  // 暗色/亮色切换时重绘地图
  var chart = null;
  if (window.MutationObserver) {
    new MutationObserver(function () {
      if (inited && chart) chart.setOption(buildOption());
    }).observe(document.body, {
      attributes: true,
      attributeFilter: ['class']
    });
  }
})();
