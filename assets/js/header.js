let header         = document.getElementById( "pageHeader" );
let navBar         = document.getElementById( "navigation" );
let headerLinksBox = document.getElementById( "sideMenuOpen" );
let closeBtn       = document.getElementById( "sideMenuClose" );
let prevScrollY    = window.pageYOffset;

navBar.onclick = function(){
    headerLinksBox.style.width = "45%";
}

closeBtn.onclick = function(){
    headerLinksBox.style.width = "0px";
}


window.onscroll = function(){
    let currScrollY = window.pageYOffset;

    if( currScrollY > prevScrollY ){
        header.style.top = "-20vh";
    }else{
        header.style.top = "0px";
    }

    prevScrollY = currScrollY;
}