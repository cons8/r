console.log("indexUserAppList.js loaded");
var appList = document.getElementById("app-list");
var userAppList = JSON.parse(localStorage.getItem("userAppList")) || [];
// 展示应用列表
function showAppList() {
    for (let i = 0; i < userAppList.length; i++) {
            let app = userAppList[i];
            let appItem = document.createElement("a");
            appItem.className = "app webside display-none";
            appItem.href = app.href;
            appItem.innerHTML = `
                <div class="avater">
                    <div class="app-logo">${app.name}</div>
                </div>
                <div class="app-title">${app.name}</div>`;
        appList.appendChild(appItem);
    }
}
showAppList();