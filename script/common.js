// 公共弹窗函数库

/**
 * 显示弹窗（简单版，不支持参数）
 */
function showLog() {
    var logEl = document.getElementById('log');
    var maskEl = document.getElementById('mask');

    // 如果有参数版本的元素，使用参数版本
    if (logEl && document.getElementById('log-title')) {
        showLogWithPos("提示", "欢迎使用墨枢！");
    } else {
        // 简单版
        maskEl.style.display = 'block';
        logEl.style.display = 'flex';
    }
}

/**
 * 显示弹窗（带参数版本，支持居中计算）
 * @param {string} title 弹窗标题
 * @param {string} content 弹窗内容
 */
function showLogWithPos(title, content) {
    var logEl = document.getElementById('log');
    var maskEl = document.getElementById('mask');

    if (!logEl || !maskEl) {
        return;
    }

    // 设置内容
    var titleEl = document.getElementById('log-title');
    var contentEl = document.getElementById('log-content');
    if (titleEl) titleEl.innerHTML = title || "提示";
    if (contentEl) contentEl.innerHTML = content || "";

    // 先显示出来才能获取正确的高度
    maskEl.style.display = 'block';
    logEl.style.display = 'flex';

    // 动态计算居中位置（兼容老设备，不使用transform）
    var winW = window.innerWidth || document.documentElement.clientWidth;
    var winH = window.innerHeight || document.documentElement.clientHeight;
    var logW = logEl.offsetWidth || 400;
    var logH = logEl.offsetHeight || 300;

    // 确保不超出屏幕
    if (logW > winW - 20) {
        logW = winW - 20;
    }

    var left = (winW - logW) / 2;
    var top = (winH - logH) / 2;

    // 确保不超出边界，最小 top 为 winH 的 20%
    if (top < winH * 0.2) top = winH * 0.2;
    if (left < 10) left = 10;

    logEl.style.left = left + 'px';
    logEl.style.top = top + 'px';
    logEl.style.width = logW + 'px';
}

/**
 * 隐藏弹窗
 */
function hideLog() {
    var maskEl = document.getElementById('mask');
    var logEl = document.getElementById('log');

    if (maskEl) maskEl.style.display = 'none';
    if (logEl) logEl.style.display = 'none';
}
