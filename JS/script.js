function buildMenu() { 
    var links = [
        ["Hem", "index.html"],
        ["Ingredienslexikon", "ingredienser.html"],
        ["Blogg", "blogg.html"], 
        ["Media", "media.html"],
        ["Om oss", "omoss.html"],
    ];

    var content = "";
    for(var i = 0; i < links.length; i++) {
        var text = links[i][0];
        var address = links[i][1];
        content += "<li><a href=\"" + address + "\">" + text + "</a></li>";
    }

    // Fyller headerns meny
    var headerMenu = document.getElementById("header-menu");
    if (headerMenu) {
        headerMenu.innerHTML = content;
    }

    // Fyller footerns meny
    var footerMenu = document.getElementById("footer-menu");
    if (footerMenu) {
        footerMenu.innerHTML = content;
    }
}