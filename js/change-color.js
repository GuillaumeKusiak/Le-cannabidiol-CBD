function changeStyle() {
    let link = document.querySelector('.style');
    if (link.getAttribute("href") === 'css/colors.css')
    {
        link.href = 'css/other-colors.css';
    }
    else
    {
        link.href = 'css/colors.css';
    }
}