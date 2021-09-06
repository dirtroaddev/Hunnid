

//get the values from the page
//start or controller function
function getValues() {
    //get values from the page
    let startValue  = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;
    

    //parse into Integers
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    //validating th e input
    if(Number.isInteger(startValue) && Number.isInteger(endValue)) {
        //call generateNumbers
        let numbers = generateNumbers(startValue, endValue);
        //call displayNumbers
        displayNumbers(numbers)
    }else {
        alert("You must enter integers");
    }

    
}



//generate numbers from start value to the end value
//logic function(s)
function generateNumbers(sValue, eValue) {
    let numbers = [];

    for(let i = sValue; i <= eValue; i++) {
        numbers.push(i);
    }

    return numbers;
}


//display the numbers and mark the even bold
//display or view function
function displayNumbers(numbers) {


    let templateRows = "";
    
    for(let i = 0; i < numbers.length; i++) {
        let className = "even";
        let number = numbers[i];
        if(number % 2 == 0) {
            classname = "even";
        }else {
            className = "odd";
        }

        templateRows += `<tr><td class="${className}">${number}</td></tr>`;
    }

    document.getElementById("results").innerHTML = templateRows;


}
