function updateClock() {
    var now = new Date();
    var targetTime = new Date(now.getTime() + 8 * 60 * 60 * 1000); // +8小时
    var year = targetTime.getUTCFullYear();
    var month = targetTime.getUTCMonth() + 1;
    var date = targetTime.getUTCDate();
    var hours = targetTime.getUTCHours();
    var minutes = targetTime.getUTCMinutes();

    // 格式化时间：HH:MM
    var timeStr = (hours < 10 ? "0" + hours : hours) + ":" + (minutes < 10 ? "0" + minutes : minutes);

    // 公历字符串
    var solarStr = year + "年/" + month + "月/" + date + "日";

    // 星期
    var weekday = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
    // 生肖
    var zodiac = ["鼠", "牛", "虎", "兔", "龙", "蛇", "马", "羊", "猴", "鸡", "狗", "猪"];
    var zodiacYear = zodiac[(year - 4) % 12];

    // 获取 DOM 元素
    var timeEl = document.getElementById("time");
    var solarEl = document.getElementById("solar");
    var zodiacEl = document.getElementById("zodiac");
    // 更新内容
    if (timeEl) { timeEl.innerHTML = timeStr; }
    if (solarEl) { solarEl.innerHTML = solarStr; }
    if (zodiacEl) { zodiacEl.innerHTML = zodiacYear + "年"; }
    // 根据星期更新样式
    var weekdayCells = document.getElementsByClassName("weekday");
    for (var i = 0; i < weekdayCells.length; i++) {
        weekdayCells[i].classList.remove("today");
    }
    var todayIndex = targetTime.getUTCDay();
    if (weekdayCells[todayIndex]) {
        weekdayCells[todayIndex].classList.add("today");
    }
}

// 初次运行
updateClock();

// 每秒更新一次时间
setInterval(updateClock, 1000);