const form = document.querySelector("#myForm");



form.addEventListener("submit",function(e){
    e.preventDefault();
    const height=parseInt(document.querySelector("#height").value);
    const weight=parseInt(document.querySelector("#weight").value);
    const results = document.querySelector("#results");

    if (height === "" || height<=0 || isNaN(height) ){
        results.innerHTML= `Invalid Input ${height},Please enter height in CM`;
    }
    else if(weight === "" || weight<=0 || isNaN(weight) ){
        results.innerHTML= `Invalid Input ${weight},Please enter weight in KG`;
    }
    else{
        const BMI = (weight / ((height * height) / 10000)).toFixed(2);
        if (BMI < 18.6){
            results.innerHTML =`<span>Your BMI : ${BMI}. You are Under Weight</span>`
        }
        else if (BMI>=18.6 && BMI <=24.9){
            results.innerHTML =`<span>Your BMI : ${BMI}. You are in Normal range</span>`
        }
        else{
            results.innerHTML =`<span>Your BMI : ${BMI}. You are OverWeight !!!</span>`
        }
        
    }

})