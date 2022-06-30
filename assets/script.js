function ThemeSet() {
    if (localStorage.getItem("theme") === "light") {
        $("body").removeClass("backg-dark");
        $("nav")
            .removeClass("navbar-dark bg-dark")
            .addClass("navbar-light bg-light");
        $(".text").removeClass("col-gray-white");
        $(".pbar").removeClass("pbar-bg");
        $(".card").removeClass("card-dark");
    } else {
        $("body").addClass("backg-dark");
        $("nav")
            .addClass("navbar-dark bg-dark")
            .removeClass("navbar-light bg-light");
        $(".text").addClass("col-gray-white");
        $(".pbar").addClass("pbar-bg");
        $(".card").addClass("card-dark");
    }
}
var today = new Date().getHours();
console.log(today);
if ((today <= 6 && today >= 0) || (today <= 23 && today >= 14)) {
    localStorage.setItem("theme", "dark");
} else {
    localStorage.setItem("theme", "light");
}
ThemeSet();
