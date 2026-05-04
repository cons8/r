console.log("indexUserAppList.js loaded");
var appList = document.getElementById("app-list");
var userAppList = JSON.parse(localStorage.getItem("userAppList")) || [];
// 展示应用列表
function showAppList() {
    var i, app, appItem, html;
    for (i = 0; i < userAppList.length; i++) {
            app = userAppList[i];
            appItem = document.createElement("a");
            appItem.className = "app webside display-none";
            appItem.href = app.href;
            html = '<div class="avater"><div class="app-logo">' + app.name + '</div></div><div class="app-title">' + app.name + '</div>';
            appItem.innerHTML = html;
        appList.appendChild(appItem);
    }
}
showAppList();