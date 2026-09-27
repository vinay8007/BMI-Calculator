const form = document.querySelector("form");

form.addEventListener("submit", (e) =>{
    e.preventDefault();

    const height = Number(document.querySelector("#height").value);
    const weight = Number(document.querySelector("#weight").value);
    const result = document.querySelector("#result");
    const remark = document.querySelector("#remark");

    console.log(height,weight);

    if(height<= 0 || isNaN(height)){
        result.innerHTML = `Please enter a valid height ${height}`;
       // remark.innerHTML = "";
        
    }
    else if(weight<= 0 || isNaN(weight)){
        result.innerHTML = `Please enter a valid weight ${weight}`;
        //remark.innerHTML = "";
        
    } else{
        const bmi = (weight/((height * height) / 10000)).toFixed(2);
        
        // console.log(bmi);
        result.innerHTML =`<span><b> ${bmi} </b></span>`;

        if(bmi < 18.5){
            remark.innerHTML = `<div> Underweight: Increse calorie intake or consult a Dcotor</div>`;
            remark.style.color = "blue";

        } else if(bmi>=18.5 && bmi <= 24.9){
            remark.innerHTML = `<div>Normal: Good, congratulations! Maintain your life style.</div>`;
            remark.style.color = "green";

        }else if(bmi >=25 && bmi <= 29.9){
            remark.innerHTML = `<div>Overweight: start morning jogging, take simple food.</div>`;
            remark.style.color = "orange";

        }else if(bmi >= 30 && bmi <= 39.9){
            remark.innerHTML =`<div>obese: Contect to profectional Doctor for advice.</div>`;
            remark.style.color = "orangered";

        } else if(bmi >= 40){
            remark.innerHTML =`<div>Severely Obese: immergency! consult to special Doctor.</div>`;
            remark.style.color = "red";

        }
    }
});