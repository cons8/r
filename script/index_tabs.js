var tabs = document.getElementById("tabs");
var tabItems = tabs.getElementsByClassName("tab-item");
var apps = document.getElementsByClassName("app");
var tools = document.getElementsByClassName("tool");
var games = document.getElementsByClassName("game");
var recommends = document.getElementsByClassName("recommend");
var websides = document.getElementsByClassName("webside");
function init() {
    var config = window.localStorage.getItem("config");
    if (config != null) {
        config = JSON.parse(config);
        // 加载字体
        tabs.className = "tabs " + config.font;
    }
}
function hideElement(elements) {
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = "none";
    }
}
function showElement(elements) {
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = "block";
    }
}

function changeTab(tab) {
    for (var i = 0; i < tabItems.length; i++) {
        tabItems[i].classList.remove("selected-item");
    }
    event.target.classList.add("selected-item");
    if (tab === "recommend") {
        hideElement(apps);
        showElement(recommends);
    } else if (tab === "tool") {
        hideElement(apps);
        showElement(tools);
    } else if (tab === "game") {
        hideElement(apps);
        showElement(games);
    } else if (tab === "webside") {
        hideElement(apps);
        showElement(websides);
    }

}

init();