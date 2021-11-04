function showDescriptions()
{
    var allInfosFirst = document.querySelector(".all-infos-first");
    var allInfosSecond = document.querySelector(".all-infos-second");
    var allInfosThird = document.querySelector(".all-infos-third");

    if (allInfosFirst.style.display === "none")
    {
        allInfosFirst.style.display = "block";
        document.querySelector(".show-infos span").style.transform = "rotate(180deg)";
    }
    else
    {
        allInfosFirst.style.display = "none";
        document.querySelector(".show-infos span").style.transform = "rotate(0deg)";
    }

    if (allInfosSecond.style.display === "none")
    {
        allInfosSecond.style.display = "block";
        document.querySelector(".show-infos span").style.transform = "rotate(180deg)";
    }
    else
    {
        allInfosSecond.style.display = "none";
        document.querySelector(".show-infos span").style.transform = "rotate(0deg)";
    }

    if (allInfosThird.style.display === "none")
    {
        allInfosThird.style.display = "block";
        document.querySelector(".show-infos span").style.transform = "rotate(180deg)";
    }
    else
    {
        allInfosThird.style.display = "none";
        document.querySelector(".show-infos span").style.transform = "rotate(0deg)";
    }
}
