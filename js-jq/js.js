var page

function dark(page) {
    $(document).find("#switch_circle").css({backgroundColor:"darkgray"})
    $(document).find("#switch_bg").animate({paddingLeft:"40px"}), 2000;
    $(document).find("html").css({backgroundImage:"url(images/" + page + "_bg_dark.svg)"});
    localStorage.setItem("theme", "dark");
}

function light(page) {
    $(document).find("#switch_circle").css({backgroundColor:"yellow"})
    $(document).find("#switch_bg").animate({paddingLeft:"0px"}), 2000;
    $(document).find("html").css({backgroundImage:"url(images/" + page + "_bg_light.svg)"});
    localStorage.setItem("theme", "light");
}