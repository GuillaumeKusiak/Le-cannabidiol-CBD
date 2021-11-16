function showDescriptionsFirst()
{
    var allInfosFirst = document.querySelector(".all-infos-first");

    if (allInfosFirst.style.display === "none")
    {
        allInfosFirst.style.display = "block";
        document.querySelector(".all-infos-first .show-infos span").style.transform = "rotate(180deg)";
    }
    else
    {
        allInfosFirst.style.display = "none";
        document.querySelector(".all-infos-first .show-infos span").style.transform = "rotate(0deg)";
    }
}
function showDescriptionsSecond()
{
    var allInfosSecond = document.querySelector(".all-infos-second");

    if (allInfosSecond.style.display === "none")
    {
        allInfosSecond.style.display = "block";
        document.querySelector(".all-infos-second .show-infos span").style.transform = "rotate(180deg)";
    }
    else
    {
        allInfosSecond.style.display = "none";
        document.querySelector(".all-infos-second .show-infos span").style.transform = "rotate(0deg)";
    }
}
function showDescriptionsThird()
{
    var allInfosThird = document.querySelector(".all-infos-third");

    if (allInfosThird.style.display === "none")
    {
        allInfosThird.style.display = "block";
        document.querySelector(".all-infos-third .show-infos span").style.transform = "rotate(180deg)";
    }
    else
    {
        allInfosThird.style.display = "none";
        document.querySelector(".all-infos-third .show-infos span").style.transform = "rotate(0deg)";
    }
}
