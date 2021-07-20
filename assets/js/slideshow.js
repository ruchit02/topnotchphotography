let slides = document.getElementsByClassName( "slideshow-images" );
let slideIndex = 0;

for( let slide of slides ){

    slide.style.transition = "opacity 0.75s";
}

function transistioner(){

    if( slideIndex !== 0 ){

        disappear( slides[slideIndex-1] );
    }

    if( slideIndex === slides.length ){ slideIndex = 0; }
    reappear( slides[slideIndex] );

    slideIndex++;
    setTimeout( transistioner, 3750 );
}

function reappear(elem){ elem.style.opacity = 1; }

function disappear(elem){ elem.style.opacity = 0; }

transistioner();