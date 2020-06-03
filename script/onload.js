window.onload = () => {
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


    // jsqc
    let count = 1
    let timer = setInterval(showImg, 3000)

    function showImg() {
        let img = $('#jsqc-img')[0]
        let lis = $('#jsqc-u2 li')

        if (count == 6)
            count = 1;
        else
            count++;

        url = './images/jsqc/p' + count + '.png'
        img.style.backgroundImage = 'url(' + url + ')'

        for (let i = 0; i < lis.length; i++)
            if (i == count - 1)
                lis[i].style.backgroundColor = 'rgba(0,255,255,.5)'
            else
                lis[i].style.backgroundColor = 'rgba(255,255,255,.5)'
    }
}