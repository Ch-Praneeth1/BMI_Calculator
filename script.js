function inputData(){
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;

    let heightm = (height/100)*(height/100)

    let bmi =(weight/heightm)
    

    document.getElementById('displayBmi').innerHTML=bmi
}