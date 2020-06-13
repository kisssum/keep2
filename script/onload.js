window.onload = () => {
    timeAll()

    // click All
    clickAll()

    // bd
    bd()

    xfc()

    // 判断是否按下F12，F12键码为123  
    window.onkeydown = window.onkeyup = window.onkeypress = function (event) {
        if (event.keyCode = 123) {
            event.preventDefault(); // 阻止默认事件行为  
            window.event.returnValue = false;
        }
    }
    console.log('no body!')

    // 右键自定义事件
    window.oncontextmenu = function () {
        return false;
    }
}
