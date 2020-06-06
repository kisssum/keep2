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
    $('#xfc')[0].style.marginTop = document.documentElement.clientHeight / 2 - 100 + 'px'
    if (document.documentElement.scrollTop > document.documentElement.clientHeight)
        $('#goTop')[0].style.display = 'block'
    else
        $('#goTop')[0].style.display = 'none'
}

function jsqc() {
    let count = 1
    setInterval(() => {
        let img = $('#jsqc-img')[0]
        let lis = $('#jsqc-u2 li')

        if (count == lis.length)
            count = 1;
        else
            count++;

        url = './images/jsqc/p' + count + '.png'
        img.style.backgroundImage = 'url(' + url + ')'

        for (let i = 0; i < lis.length; i++)
            if (i == count - 1) {
                lis[i].style.backgroundColor = 'rgba(255,0,0,.7)'
                lis[i].style.border = 'solid 1px rgba(255,0,0,.7)'
            } else {
                lis[i].style.backgroundColor = 'rgba(255,255,255,.4)'
                lis[i].style.border = 'solid 1px orange'
            }
    }, 3000)
}