const box = document.querySelectorAll(".box");
const mainBody = document.querySelector("body");
const currentColor = document.querySelector("#currentColor");

box.forEach((item)=>{
    item.addEventListener("click",function(e){
        if (e.target.id == "grey"){
            mainBody.style.backgroundColor="grey";
            
            currentColor.textContent = `Current color : ${e.target.id}`;
        }
        if (e.target.id == "white"){
            mainBody.style.backgroundColor=e.target.id;
            currentColor.textContent = `Current color : ${e.target.id}`;
        }
        if (e.target.id == "green"){
            mainBody.style.backgroundColor=e.target.id;
            currentColor.textContent = `Current color : ${e.target.id}`;
        }
        if (e.target.id == "red"){
            mainBody.style.backgroundColor=e.target.id;
            currentColor.textContent = `Current color : ${e.target.id}`;
        }
       
    })
})

