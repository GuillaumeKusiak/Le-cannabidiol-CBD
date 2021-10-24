function navbarStyle(){
    var navbar = document.querySelector(".navbar");
    var navbarUl = document.querySelector(".navbar ul")

    this.scrollY > 100 ? document.querySelector(".picture-first").style.width = "100%" : "";
    this.scrollY > 600 ? document.querySelector(".picture-second").style.width = "100%" : "";
    this.scrollY > 1100 ? document.querySelector(".picture-thrid").style.width = "100%" : "";


}
window.addEventListener("scroll", navbarStyle, false);

