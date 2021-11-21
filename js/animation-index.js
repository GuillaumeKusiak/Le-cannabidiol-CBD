function responsiveMenu() {
    if (document.querySelector('.responsive-navbar').style.width === '100%')
    {
        document.querySelector('.navbar i').style.transform = 'rotate(0deg)';
        document.querySelector('.responsive-navbar').style.width = '0';
        document.querySelector('.responsive-nav-link').style.display = 'none';
    }
    else{
        window.scrollTo(0,0)
        document.querySelector('.navbar i').style.transform = 'rotate(90deg)'
        document.querySelector('.responsive-navbar').style.width = '100%';
        document.querySelector('.responsive-nav-link').style.display = 'flex';
    }
}

function navbarStyle(){
    this.scrollY > 100 ? document.querySelector(".picture-first").style.width = "100%" : "";
    this.scrollY > 600 ? document.querySelector(".picture-second").style.width = "100%" : "";
    this.scrollY > 1100 ? document.querySelector(".picture-third").style.width = "100%" : "";
}
window.addEventListener("scroll", navbarStyle, false);
