/* ========== Calculate daily Calorie ========== */
const activity = document.querySelector(".activity-option");
// const female = document.querySelector("#gender-female").value;
// const male = document.querySelector("#gender-male").value;
const calcButton = document.querySelector(".calc-button");
const gender = document.getElementsByName("gender");
const genderForm = document.querySelector('.gender-check');


genderForm.addEventListener('submit', function calReqCalculator() {

    // Get all elements with the name 'gender'
    const genderRadios = document.getElementsByName('gender');

    let selectedGender = '';

    // Loop through and check which radio button is selected
    for (const radio of genderRadios) {
        if (radio.checked) {
            selectedGender = radio.value;
            break; 
        }
    }

    if (selectedGender === 'male') {
        const bodySize = parseInt(document.querySelector("#body-size").value);
        const age = parseInt(document.querySelector("#age").value);
        const weight = parseInt(document.querySelector("#weight").value);
        const bmrKcalResult = document.querySelector(".bmr-kcal-result");
        const bmrKjResult = document.querySelector(".bmr-kj-result");

        bmrKjResult.innerHTML = "";
        bmrKcalResult.innerHTML = "";

        const result = (10 * weight) + (6.25 * bodySize) - (5 * age + 5);
        bmrKcalResult.innerHTML = result;
        bmrKjResult.innerHTML = result * 4.184;
    } else if (selectedGender === 'female') {
        const bodySize = parseInt(document.querySelector("#body-size").value);
        const age = parseInt(document.querySelector("#age").value);
        const weight = parseInt(document.querySelector("#weight").value);
        const bmrKcalResult = document.querySelector(".bmr-kcal-result");
        const bmrKjResult = document.querySelector(".bmr-kj-result");

        bmrKjResult.innerHTML = "";
        bmrKcalResult.innerHTML = "";

        const result = (10 * weight) + (6.25 * bodySize) - (5 * age) - 161;
        bmrKcalResult.innerHTML = result;
        bmrKjResult.innerHTML = result * 4.184;
    } else {
        console.log("No gender selected.");
    }
});
