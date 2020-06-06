function clickAll() {
    clickSearch()
    clickGoTop()
}

function clickSearch() {
    // 输入框回车
    document.onkeydown = (e) => {
        if (e.keyCode == 13)
            Search()
    }

    // 弹出搜索引擎框
    $('#top_right span')[0].onclick = () => {
        search = $('#top_right_search')[0]
        if (search.style.display == 'none')
            search.style.display = 'block'
        else
            search.style.display = 'none'
    }

    // 搜索引擎选择
    for (i of $('#top_right_search li'))
        i.onclick = function () {
            $('#top_right span')[0].innerHTML = this.innerHTML
            $('#top_right_search')[0].style.display = 'none'
        }
}

function clickGoTop() {
    $('#goTop')[0].onclick = () => {
        document.documentElement.scrollTop = 0
    }
}
