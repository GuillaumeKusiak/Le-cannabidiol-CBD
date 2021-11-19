function changeStyle() {
    console.log("check ok");
    let link = document.querySelector('.style');
    if (link.getAttribute("href") === 'css/colors.css')
    {
        link.href = 'css/other-colors.css';
        document.querySelector('.presentation').style.background = 'url("../images/background2.jpg")';
    }
    else
    {
        link.href = 'css/colors.css';
        document.querySelector('.presentation').style.background = 'url("../images/background.jpg")';
    }
}