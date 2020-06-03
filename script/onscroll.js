window.onscroll = () => {
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

    // jsqc
    if (top + clientHeight > 1000)
        $('#jsqc')[0].style.display = 'block'
}
