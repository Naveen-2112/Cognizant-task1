let output=document.getElementById("output");
let images=document.querySelectorAll(".thumbnail");
images.forEach((img)=>{
    img.addEventListener("click",()=>{
        output.innerHTML=`<img src="${img.src}" class="selected-image">`;
        console.log(img.src);
    }
    );
});
