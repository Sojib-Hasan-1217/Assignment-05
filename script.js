
// heart counter button

function heartcount(){
     const heartCounter=parseInt(document.getElementById('heart-count').innerText)
     const clicker=1;    
     const finalCount=heartCounter+clicker;

   document.getElementById('heart-count').innerText=finalCount;
}


