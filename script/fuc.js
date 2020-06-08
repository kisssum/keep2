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

function jump() {
    $('#jump')[0].style.display = "block"
}

function bd_cancel() {
    $('#jump')[0].style.display = "none"

    // UserName
    $('#UserName')[0].value = ""
    $('#UserName')[0].style.border = ""
    $('#UserNameTip')[0].innerHTML = ""

    // Passwd
    $('#Passwd')[0].value = ""
    $('#Passwd')[0].style.border = ""
    $('#PasswdTip')[0].innerHTML = ""

    // RePasswd
    $('#RePasswd')[0].value = ""
    $('#RePasswd')[0].style.border = ""
    $('#RePasswdTip')[0].innerHTML = ""
}

function bd() {
    // userName
    $('#UserName')[0].onblur = function () {
        if (this.value == "") {
            this.style.border = 'solid 2px red'
            $('#UserNameTip')[0].style.color = 'red'
            $('#UserNameTip')[0].innerHTML = '用户名不能为空！'
        } else if (this.value.length > 12) {
            this.style.border = 'solid 2px red'
            $('#UserNameTip')[0].style.color = 'red'
            $('#UserNameTip')[0].innerHTML = '用户名长度不能超过12个字符！'
        } else {
            this.style.border = ""
            $('#UserNameTip')[0].style.color = 'green'
            $('#UserNameTip')[0].innerHTML = '正确！'
        }
    }

    // Passwd
    $('#Passwd')[0].onblur = function () {
        if (this.value == "") {
            this.style.border = 'solid 2px red'
            $('#PasswdTip')[0].style.color = 'red'
            $('#PasswdTip')[0].innerHTML = '密码不能为空！'
        } else if (this.value.length > 16) {
            this.style.border = 'solid 2px red'
            $('#PasswdTip')[0].style.color = 'red'
            $('#PasswdTip')[0].innerHTML = '密码长度不能超过16个字符！'
        } else {
            this.style.border = ""
            $('#PasswdTip')[0].style.color = 'green'
            $('#PasswdTip')[0].innerHTML = '正确！'
        }
    }

    // RePasswd
    $('#RePasswd')[0].onblur = function () {
        if (this.value == "") {
            this.style.border = 'solid 2px red'
            $('#RePasswdTip')[0].style.color = 'red'
            $('#RePasswdTip')[0].innerHTML = '密码不能为空！'
        } else if (this.value != $('#Passwd')[0].value) {
            this.style.border = 'solid 2px red'
            $('#RePasswdTip')[0].style.color = 'red'
            $('#RePasswdTip')[0].innerHTML = '密码不重复！'
        } else {
            this.style.border = ""
            $('#RePasswdTip')[0].style.color = 'green'
            $('#RePasswdTip')[0].innerHTML = '正确！'
        }
    }
}

function checkout() {
    if ($('#UserNameTip')[0].innerHTML != '正确！') {
        alert('信息不完整！')
        return false
    }
    if ($('#PasswdTip')[0].innerHTML != '正确！') {
        alert('信息不完整！')
        return false
    }
    if ($('#RePasswdTip')[0].innerHTML != '正确！') {
        alert('信息不完整！')
        return false
    }
}

function xfc() {
    let xfc = $('#xfc')[0]
    let lis = $('#xfc li')
    let imgs = $('#xfc img')

    for (let i = 0; i < imgs.length; i++)
        imgs[i].src = './images/xfc/' + i + '_black.png'

    // xfc
    xfc.onmouseover = function () {
        this.style.backgroundColor = 'rgba(0,0,0,.7)'
        for (let i = 0; i < imgs.length; i++)
            imgs[i].src = './images/xfc/' + i + '_white.png'
    }
    xfc.onmouseout = function () {
        this.style.backgroundColor = 'rgba(255,255,255,.5)'
        for (let i = 0; i < imgs.length; i++)
            imgs[i].src = './images/xfc/' + i + '_black.png'
    }

    for (let i = 0; i < lis.length; i++) {
        lis[i].id = i
        lis[i].onmouseover = function () {
            this.style.backgroundColor = 'rgba(0,255,255,.7)'
        }
        lis[i].onmouseout = function () {
            this.style.backgroundColor = ''
        }
    }
}