const clock = document.querySelector(".clockBox");
const myDate = document.querySelector(".dateBox");


setInterval(function(){
    const date = new Date();
    // console.log(date.toLocaleTimeString())
    clock.innerHTML = `Current time:-   ${date.toLocaleTimeString()}`;
    myDate.textContent = `Today's Date:-   ${date.toLocaleDateString()}`;
},1000);