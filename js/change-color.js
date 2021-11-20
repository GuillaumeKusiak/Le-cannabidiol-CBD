function changeStyle() {
    let link = document.querySelector('.style');
    if (link.getAttribute("href") === 'css/colors.css')
    {
        link.href = 'css/other-colors.css';
        if (document.title === "Le Cannabidiol / Accueil")
        {
            document.querySelector('.picture-first').setAttribute("src", "../images/inverse/mangohaze.jpeg");
            document.querySelector('.picture-second').setAttribute("src", "../images/inverse/huile.jpeg");
            document.querySelector('.picture-third').setAttribute("src", "../images/inverse/thé.jpeg");
        }
        else if (document.title === "Le Cannabidiol / Nos-produits")
        {
            document.querySelector('#picture-mangohaze').setAttribute("src", "../images/inverse/mangohaze.jpeg");
            document.querySelector('#picture-huile').setAttribute("src", "../images/inverse/huile.jpeg");
            document.querySelector('#picture-the').setAttribute("src", "../images/inverse/thé.jpeg");
        }
        else if (document.title === "Le Cannabidiol / Contact")
        {
            document.querySelector('.facebook img').setAttribute("src", "../images/inverse/facebook.png");
            document.querySelector('.instagram img').setAttribute("src", "../images/inverse/instagram.png");
            document.querySelector('.twitter img').setAttribute("src", "../images/inverse/twitter.png");
        }
    }
    else
    {
        link.href = 'css/colors.css';
        if (document.title === "Le Cannabidiol / Accueil")
        {
            document.querySelector('.picture-first').setAttribute("src", "../images/normal/mangohaze.jpeg");
            document.querySelector('.picture-second').setAttribute("src", "../images/normal/huile.jpeg");
            document.querySelector('.picture-third').setAttribute("src", "../images/normal/thé.jpeg");
        }
        else if (document.title === "Le Cannabidiol / Nos-produits")
        {
            document.querySelector('#picture-mangohaze').setAttribute("src", "../images/normal/mangohaze.jpeg");
            document.querySelector('#picture-huile').setAttribute("src", "../images/normal/huile.jpeg");
            document.querySelector('#picture-the').setAttribute("src", "../images/normal/thé.jpeg");
        }
        else if (document.title === "Le Cannabidiol / Contact")
        {
            document.querySelector('.facebook').setAttribute("src", "../images/normal/facebook.png");
            document.querySelector('.instagram').setAttribute("src", "../images/normal/instagram.png");
            document.querySelector('.twitter').setAttribute("src", "../images/normal/twitter.png");
        }
    }
}