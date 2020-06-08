function timeAll() {
    setInterval(timeChange, 100);
    jsqc()
}

function timeChange() {
    // video_gf panel height 
    $('#video_fg')[0].style.height = $('#video_mp4')[0].clientHeight + 'px'

    // xfc panel height 
    $('#xfc')[0].style.marginTop = document.documentElement.clientHeight / 2 - 100 + 'px'

    // goTop panel height 
    if (document.documentElement.scrollTop > document.documentElement.scrollTop / 2)
        $('#goTop')[0].style.bottom = '2%'
    else
        $('#goTop')[0].style.bottom = '-20%'
}

function jsqc() {
    let count = 1
    let img = $('#jsqc-img')[0]
    let lis = $('#jsqc-u2 li')

    let lisCheckBg = 'rgba(255,0,0,.7)'
    let lisCheckBorder = 'solid 1px rgba(255,0,0,.7)'
    let lisUnCheckBg = 'rgba(255,255,255,.4)'
    let lisUnCheckBorder = 'solid 1px orange'

    let time = setInterval(times, 3000)

    function times() {
        if (count == lis.length)
            count = 1;
        else
            count++;

        url = './images/jsqc/p' + count + '.png'
        img.style.backgroundImage = 'url(' + url + ')'

        for (let i = 0; i < lis.length; i++)
            if (i == count - 1) {
                lis[i].style.backgroundColor = lisCheckBg
                lis[i].style.border = lisCheckBorder
            } else {
                lis[i].style.backgroundColor = lisUnCheckBg
                lis[i].style.border = lisUnCheckBorder
            }
    }

    // click
    for (let i = 0; i < lis.length; i++) {
        lis[i].id = i
        lis[i].onclick = function () {
            for (let j = 0; j < lis.length; j++)
                if (this.id == j) {
                    // img
                    count = j + 1
                    url = './images/jsqc/p' + count + '.png'
                    img.style.backgroundImage = 'url(' + url + ')'

                    // lis
                    lis[j].style.backgroundColor = lisCheckBg
                    lis[j].style.border = lisCheckBorder

                    // repeat while
                    clearInterval(time)
                    time = setInterval(times, 3000)
                } else {
                    lis[j].style.backgroundColor = lisUnCheckBg
                    lis[j].style.border = lisUnCheckBorder
                }
        }
    }
}