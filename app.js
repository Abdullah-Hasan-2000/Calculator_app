var inputFieldData = document.getElementById('inputField');

function sendValue(element) {
    inputFieldData.value += element.value
};

function addMinusSign() {

    if (inputFieldData.value[0] === "-") {
        removeSign = inputFieldData.value
        inputFieldData.value = removeSign.slice(1)

    } else {
        inputFieldData.value = "-" + inputFieldData.value
    }
};

function clearAll() {
    inputFieldData.value = ""
    count = 0
    nextOne = []
};

function clearLastDigit() {
    inputFieldData.value = inputFieldData.value.slice(0, -1)
};

function rationalFunction() {
    inputFieldData.value = 1 / inputFieldData.value
};

function sqaure() {
    inputFieldData.value = inputFieldData.value ** 2
};

function sqaureRoot() {
    inputFieldData.value = Math.sqrt(inputFieldData.value)
};

var nextOne;
function sendSign(sign) {
    receivingValue = inputFieldData.value
    nextOne = [receivingValue, sign]
    inputFieldData.value = ""
    console.log(nextOne)
    count = 0
}

var count = 0
var firstTime;
function sendValue_2() {
    
    if (count === 0) {
        receivingValue = inputFieldData.value
        firstTime = inputFieldData.value
        console.log(firstTime)
        console.log(count)
        
        if (nextOne[1] === "*") {
            inputFieldData.value = nextOne[0] * receivingValue;
            count++
        } else if (nextOne[1] === "/") {
            inputFieldData.value = nextOne[0] / receivingValue;
            count++
        } else if (nextOne[1] === "-") {
            inputFieldData.value = nextOne[0] - receivingValue;
            count++
        } else if (nextOne[1] === "+") {
            inputFieldData.value = parseFloat(nextOne[0]) + parseFloat(receivingValue);
            count++
        } else if (nextOne[1] === "%") {
            inputFieldData = nextOne[0] 
        }
    } else if (count >= 1) {
        console.log(firstTime)
        if (nextOne[1] === "*") {
            inputFieldData.value = inputFieldData.value * firstTime
        } else if (nextOne[1] === "/") {
            inputFieldData.value = inputFieldData.value / firstTime
        } else if (nextOne[1] === "-") {
            inputFieldData.value = inputFieldData.value - firstTime
        } else if (nextOne[1] === "+") {
            inputFieldData.value = parseFloat(inputFieldData.value) + parseFloat(firstTime);
        }
    }
}

