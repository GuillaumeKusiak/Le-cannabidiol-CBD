function navbarStyle(){
    var navbar = document.querySelector(".navbar");
    var navbarUl = document.querySelector(".navbar ul")

    if (this.scrollY > 600)
    {
        navbar.style.background = "none";
        navbar.style.backgroundColor = "#355E22";
    }
    else
    {
        navbar.style.backgroundColor = "none";
        navbar.style.background = "url(\"../images/background.jpg\") no-repeat fixed center";
    }
    this.scrollY > 600 ? navbar.style.backgroundColor = "#355E22": "white";

    this.scrollY > 100 ? document.querySelector(".picture-first").style.width = "100%" : "";
    this.scrollY > 600 ? document.querySelector(".picture-second").style.width = "100%" : "";
    this.scrollY > 1100 ? document.querySelector(".picture-third").style.width = "100%" : "";


}
window.addEventListener("scroll", navbarStyle, false);