let header         = document.getElementById( "pageHeader" );
let navBar         = document.getElementById( "navigation" );
let headerLinksBox = document.getElementById( "sideMenuOpen" );
let closeBtn       = document.getElementById( "sideMenuClose" );
let prevScrollY    = window.pageYOffset;

navBar.onclick = function(){
    headerLinksBox.style.width = "160px";
}

closeBtn.onclick = function(){
    headerLinksBox.style.width = "0px";
}


window.onscroll = function(){
    let currScrollY = window.pageYOffset;

    if( currScrollY > prevScrollY ){
        header.style.top = "-75px";
        headerLinksBox.style.top = "75px";
    }else{
        header.style.top = "0px";
        headerLinksBox.style.top = "0px";
    }

    prevScrollY = currScrollY;
}