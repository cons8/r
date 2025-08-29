console.log("index_tabs loaded");
var tabs = document.getElementById("tabs");
var tabItems = tabs.getElementsByClassName("tab-item");
var tools = document.getElementsByClassName("tool");
var games = document.getElementsByClassName("game");
function init() {
    var config = window.localStorage.getItem("config");
    if (config != null) {
        config = JSON.parse(config);
        // 加载字体
        tabs.className = "tabs " + config.font;
    }

}

function changeTab(tab) {
    for (var i = 0; i < tabItems.length; i++) {
        tabItems[i].classList.remove("selected-item");
    }
    event.target.classList.add("selected-item");
    if (tab === "all") {
        for (var i = 0; i < tools.length; i++) {
            tools[i].style.display = "block";
        }
        for (var i = 0; i < games.length; i++) {
            games[i].style.display = "block";
        }
    } else if (tab === "tool") {
        for (var i = 0; i < tools.length; i++) {
            tools[i].style.display = "block";
        }
        for (var i = 0; i < games.length; i++) {
            games[i].style.display = "none";
        }
    } else if (tab === "game") {
        for (var i = 0; i < tools.length; i++) {
            tools[i].style.display = "none";
        }
        for (var i = 0; i < games.length; i++) {
            games[i].style.display = "block";
        }
    }
}

init();