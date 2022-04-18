burger.onclick = function myFunction() {
    var x = document.getElementById("myTopnav");

    if (x.className === "nav-list") {
        x.className += " responsive";
    } else {
        x.className = "nav-list";
    };

    if (x.className === "nav-link") {
        x.className += " responsive";
    } else {
        x.className = "nav-link";
    };
    
    

}