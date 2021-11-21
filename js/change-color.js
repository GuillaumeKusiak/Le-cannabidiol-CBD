function changeStyle() {
    let link = document.querySelector('.style');
    if (link.getAttribute("href") === 'css/theme-first.css')
    {
        link.href = 'css/theme-second.css';
    }
    else
    {
        link.href = 'css/theme-first.css';
    }
}