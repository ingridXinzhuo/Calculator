//alert('This works');
let result = 0;  //camelCase: finalResult. same as java.

//43
let logEntries = [];//empty array
//34
//addBtn.addEventListener('click',add);
addBtn.addEventListener('click',add);
subtractBtn.addEventListener('click',substract);
multiplyBtn.addEventListener('click',multiply);
divideBtn.addEventListener('click',division);
//get user input
function getUserInput(){
    return parseInt(userInput.value);//userInput: variable from vendor.js
}

//39
function createAndWriteOutput(operator,resultBeforeCalc,calcNumber){
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(result, calcDescription);
}

//47
function writeToLog(operationIdentifier, previousResult, operationNumber, newResult){
    //44 object
    const logEntry = {
        operation: operationIdentifier,
        previousResult: previousResult,//same name allowed
        number: operationNumber,
        newResult: newResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);//print in developer tool
    //or : console.log(logEntries[0]);
    //45
    console.log(logEntry);
    //or to print the key and value: console.log(logEntry.operation);
}

function calculateResult(calculationType){
    const enteredNumber = getUserInput();
    const initialResult = result;
    let mathOperator;
    if (enteredNumber == 0 && calculationType == 'DIVIDE'){
        alert("Invalid operation");
        return;
    }
    if (calculationType === 'ADD'){
        result = result + enteredNumber;
        mathOperator = '+';
    }else if (calculationType === 'SUBSTRACT'){
        result = result - enteredNumber;
        mathOperator = '-';
    }else if (calculationType === 'MULTIPLY'){
        result = result * enteredNumber;
        mathOperator = '*';
    }else if (calculationType === 'DIVIDE'){
        result = result / enteredNumber;
        mathOperator = '/';
    }
    createAndWriteOutput(mathOperator,initialResult,enteredNumber);
    writeToLog(calculationType,initialResult,enteredNumber,result);
}

function add(){
    calculateResult('ADD');
}

function substract(){
    calculateResult('SUBSTRACT');
}

function multiply(){
    calculateResult('MULTIPLY');
}

function division(){
    calculateResult('DIVIDE');
}



//41 result++/ ++result / result--/ --result ok. not ok with * and /
//41 **: exponentiation  e.g. 2**3 = 8


