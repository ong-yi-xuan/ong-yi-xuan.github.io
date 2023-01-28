function openImage(image){
    // Get the modal
    var modalImg = document.getElementById("img01");
    
    // set image src
    modalImg.src = image;

    // Disable scroll
    document.body.style.overflow = "hidden";
    document.body.style.height = "100%";
    document.body.style.paddingRight = "10px";
}

function enableSroll(){
    document.body.style.overflow = "auto"; 
    document.body.style.height = "auto"; 
    document.body.style.paddingRight = "0px";
}