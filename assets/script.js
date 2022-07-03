function ThemeToggle() {
    if (localStorage.getItem("theme") === "dark") {
        localStorage.setItem("theme", "light");
    } else {
        localStorage.setItem("theme", "dark");
    }
    ThemeSet();
}

function ThemeSet() {
    if (localStorage.getItem("theme") === "light") {
        $("body").removeClass("dark-bg").addClass("light-bg");
        $("nav")
            .removeClass("navbar-dark bg-dark")
            .addClass("navbar-light bg-light");
        $(".text").removeClass("col-gray-white");
    } else {
        $("body").addClass("dark-bg").removeClass("light-bg");
        $("nav")
            .addClass("navbar-dark bg-dark")
            .removeClass("navbar-light bg-light");
        $(".text").addClass("col-gray-white");
    }
}
var today = new Date().getHours();
console.log(today);
if ((today <= 6 && today >= 0) || (today <= 23 && today >= 20)) {
    localStorage.setItem("theme", "dark");
} else {
    localStorage.setItem("theme", "light");
}
ThemeSet();
