function responsiveMenu() {
    if (document.querySelector('.responsive-navbar').style.width === '100%')
    {
        document.querySelector('.navbar i').style.transform = 'rotate(0deg)'
        document.querySelector('.responsive-navbar').style.width = '0';
    }
    else{
        document.querySelector('.navbar i').style.transform = 'rotate(90deg)'
        document.querySelector('.responsive-navbar').style.width = '100%';
    }
}

function navbarStyle(){
    var navbar = document.querySelector(".navbar");
    var navbarUl = document.querySelector(".navbar ul")
    if (this.scrollY > 50){
        navbar.style.background = "#355E22";
    }
    else {
        navbar.style.background = "url(\"../images/background.jpg\") no-repeat fixed center";
    }

    this.scrollY > 100 ? document.querySelector(".picture-first").style.width = "100%" : "";
    this.scrollY > 600 ? document.querySelector(".picture-second").style.width = "100%" : "";
    this.scrollY > 1100 ? document.querySelector(".picture-third").style.width = "100%" : "";
}
window.addEventListener("scroll", navbarStyle, false);
