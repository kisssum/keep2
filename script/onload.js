$(()=>{
    timeAll()

    // click All
    clickAll()

    xfc()

    // 右键自定义事件
    window.oncontextmenu = () => {
        return false;
    }

    let lastTop = 0
    $(window).scroll(() => {
        let top = document.documentElement.scrollTop
        let clientHeight = document.documentElement.clientHeight
        let totalHeight = document.documentElement.scrollHeight

        // 左xfc
        let xfc = $('#xfc')[0]
        if (top < clientHeight / 2)
            xfc.style.left = '-45px'
        else if (top + clientHeight >= totalHeight - 100)
            xfc.style.left = '-45px'
        else
            xfc.style.left = '0'

        // topBar
        let topBar = $('#top')[0]
        if (top > lastTop)
            topBar.style.top = "-7%"
        else
            topBar.style.top = "0"

        lastTop = top
    })
})