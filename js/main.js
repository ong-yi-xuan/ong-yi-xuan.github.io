// Toggles between adding and removing the "responsive" class to topnav when the user clicks on the hamburger icon
function myFunction() {
    var x = document.getElementById("topnavBar");
    var icon = document.getElementById("responsiveIcon");

    if (x.className === "topnav") {
        x.className += " responsive";
        icon.className = "fa-solid fa-x";
    } 
    
    else {
        x.className = "topnav";
        icon.className = "fa fa-bars";
    }
}