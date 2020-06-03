function Search() {
    yq = {
        '搜索': 'https://www.dogedoge.com/results?q=',
        '谷歌': 'https://www.google.com.hk/search?q=',
        '百度': 'https://www.baidu.com/s?wd=',
        'Doge': 'https://www.dogedoge.com/results?q=',
        '360': 'https://www.so.com/s?q='
    }

    yqtop = $('#top_right span')[0].innerHTML
    text = $('#top_right input')[0].value
    if (text != '')
        window.open(yq[yqtop] + text, '_blank')
}