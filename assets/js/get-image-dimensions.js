let images   = document.getElementsByClassName( "actual-img" );
let imgLinks = document.getElementsByClassName( "img-link" );
let imgTexts = document.getElementsByClassName( "img-text" );
let imgViews = document.getElementsByClassName( "view-button" ); 

let index = 0;

for( let img of images ){

    img.onload = function(){

        let imgW = img.naturalWidth;
        let imgH = img.naturalHeight;
        
        let ratio = imgW/imgH ;
    
        let vh = 0.8*window.innerHeight;
    
        let sampleH = imgH;
        while( sampleH > vh ){
    
            sampleH = sampleH-2;
        }
    
        let sampleW = Math.floor( ratio*sampleH );
    
        img.height = sampleH;
        img.width  = sampleW;

        if( (index % 2) === 0 ){
            imgLinks[index].style.float = "right";
        }else{
            imgLinks[index].style.float = "left";
            imgTexts[index].style.right = 0;
            imgTexts[index].style.textAlign = "right";

            imgViews[index].style.right = 0;
        }

        ++index;
    }
}


for( let i = 0; i < 4 ; ++i ){

    imgLinks[i].onmouseover = function(){

        imgTexts[i].className = imgTexts[i].className + " responsive" ;
        imgViews[i].className = imgViews[i].className + " responsive" ;
    }

    imgLinks[i].onmouseout = function(){

        imgTexts[i].className = "img-text" ;
        imgViews[i].className = "view-button" ;
    }
}
