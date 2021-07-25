let navBar         = document.getElementById( "navigation" );
let headerLinksBox = document.getElementById( "sideMenuOpen" );
let closeBtn       = document.getElementById( "sideMenuClose" );

navBar.onclick = function(){
    headerLinksBox.style.width = "45%";
}

closeBtn.onclick = function(){
    headerLinksBox.style.width = "0px";
}

