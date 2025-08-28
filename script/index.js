console.log("index.js loaded");

var config = {
    message: "我们是<br>沙沙作响的叶片<br>以这声音回应着暴风雨.",
    logo: true,
    font: "font-default"
}

var tip = document.getElementById('js-tip');
var welcomeMessageTitle = document.getElementById('welcome-message-title');
function init() {
    tip.style.display = 'none';
    // 获取用户自定义配置
    var userConfig = localStorage.getItem('config');
    if (userConfig) {
        try {
            userConfig = JSON.parse(userConfig);
            config = { ...config, ...userConfig };
            welcomeMessageTitle.innerHTML = config.message;
            welcomeMessageTitle.className = config.font;
            if (!config.logo) {
                document.getElementById('header').style.display = 'none';
                document.getElementById('setLogo').innerHTML = '显示Logo';
            }
        } catch (e) {
            console.error('配置解析失败:', e);
        }
    } else {
        welcomeMessageTitle.innerHTML = config.message;
    }
}
function setting() {
    showLog({ title: "设置", content: "欢迎使用墨枢！<br>在这里你可以自定义欢迎语和Logo的显示与隐藏。" });
    document.getElementById('fontSelect').value = config.font;
}

function submitLog() {
    var log = document.getElementById('welcome-message-input').value;
    log = escapeHtml(log); // 先转义危险字符
    log = fixText(log); // 再替换换行
    if (log) {
        config.message = log;
        localStorage.setItem('config', JSON.stringify(config));
        welcomeMessageTitle.innerHTML = log;
        hideLog();
    } else {
        showLog({ title: "提示" });
    }
}

function resetLog() {
    config.message = "我们是<br>沙沙作响的叶片<br>以这声音回应着暴风雨.";
    localStorage.setItem('config', JSON.stringify(config));
    welcomeMessageTitle.innerHTML = config.message;
    hideLog();
}

function fixText(text) {
    text = text || '';
    return text.replace(/\r?\n/g, "<br/>"); // 匹配 \n 或 \r\n，替换为 <br/>
}

function showLog({ title = "提示", content = "欢迎使用墨枢！<br>在这里你可以自定义欢迎语和Logo的显示与隐藏。" }) {
    document.getElementById('mask').style.display = 'block';
    document.getElementById('log').style.display = 'flex';
    document.getElementById('log-content').innerHTML = content;
    document.getElementById('log-title').innerHTML = title;

}
function hideLog() {
    document.getElementById('mask').style.display = 'none';
    document.getElementById('log').style.display = 'none';
}
function setLogo() {
    config.logo = !config.logo;
    localStorage.setItem('config', JSON.stringify(config));
    if (config.logo) {
        document.getElementById('header').style.display = 'block';
        document.getElementById('setLogo').innerHTML = '隐藏Logo';
    } else {
        document.getElementById('header').style.display = 'none';
        document.getElementById('setLogo').innerHTML = '显示Logo';
    }
    hideLog();
}
function setFont() {
    var selectedFont = document.getElementById('fontSelect').value;
    welcomeMessageTitle.className = selectedFont;
    
    config.font = selectedFont;
    localStorage.setItem('config', JSON.stringify(config));
    hideLog();
}

// 转义函数（转义除<br>外的HTML标签）
function escapeHtml(unsafe) {
    return unsafe.replace(/[&<"'>]/g, function (match) {
        switch (match) {
            case '&': return '&amp;';
            case '<': return '&lt;';
            case '>': return '&gt;';
            case '"': return '&quot;';
            case "'": return '&#039;';
            default: return match;
        }
    });
}
init()