let images   = document.getElementsByClassName( "actual-image" );
let galleryLinks = document.getElementsByClassName( "gallery-link" );
let locations = document.getElementsByClassName( "location" );
let names = document.getElementsByClassName( "name" ); 

for( let i = 0; i < galleryLinks.length ; ++i ){

    galleryLinks[i].onmouseover = function(){

        locations[i].className = locations[i].className + " responsive" ;
        names[i].className = names[i].className + " responsive" ;
    }

    galleryLinks[i].onmouseout = function(){

        locations[i].className = "location" ;
        names[i].className = "name" ;
    }
}