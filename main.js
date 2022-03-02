const form = document.getElementById("myForm");
function handleForm(e) {
    e.preventDefault();
}
form.addEventListener('submit', handleForm);

const checkbox = document.getElementById("flexSwitchCheckDefault");
checkbox.addEventListener('change', converterFunction);

function converterFunction() {
    const inputNumber = document.getElementById("inputNumber").value;
    const numberInText = document.getElementById("numberInText");

    numberInText.innerHTML = numberToWords(inputNumber);
}

const num = "zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen".split(" ");
const tens = "twenty thirty forty fifty sixty seventy eighty ninety".split(" ");

function numberToWords(inpNum) {
    if (inpNum < 20) return num[inpNum];
    if (inpNum < 100) return tens[~~(inpNum / 10) - 2] + (inpNum % 10 ? "-" + num[inpNum % 10] : "");
    if (checkbox.checked && inpNum < 10000) {
        if (inpNum < 10000) return numberToWords(~~(inpNum / 100)) + " hundred" + (inpNum % 100 == 0 ? "" : " and " + numberToWords(inpNum % 100));
    } else {
        if (inpNum < 1000) return num[~~(inpNum / 100)] + " hundred" + (inpNum % 100 == 0 ? "" : " and " + numberToWords(inpNum % 100));
        if (inpNum < 1000000) return numberToWords(~~(inpNum / 1000)) + " thousand" + (inpNum % 1000 != 0 ? " " + numberToWords(inpNum % 1000) : "");
    }
    if (inpNum < 1000000000) return numberToWords(~~(inpNum / 1000000)) + " million" + (inpNum % 1000000 != 0 ? " " + numberToWords(inpNum % 1000000) : "");
    if (inpNum < 1000000000000) return numberToWords(~~(inpNum / 1000000000)) + " billion" + (inpNum % 1000000000 != 0 ? " " + numberToWords(inpNum % 1000000000) : "");
};

// Test function (totally unnecessary: In Chrome & Firefox (+31) you can add CSS in console.log messages (%c, color...) just for fun.)

function myTest(expectedResult, numberToBeTested) {
    const resultOfNumberToWords = numberToWords(numberToBeTested);
    if ((expectedResult == resultOfNumberToWords) === false) {
        console.log('%cRun test: '+ (expectedResult == resultOfNumberToWords), 'color: red')
    } else {
        console.log('%cRun test: '+ (expectedResult == resultOfNumberToWords), 'color: green')
    }
    console.log(`Number to be tested: ${numberToBeTested}
Expected: ${expectedResult}
Result: ${resultOfNumberToWords}
---------------------------`);
}

    // Tests - first two should be true, the last two should be false
    myTest("four hundred and forty-four", 444);
    myTest("two hundred and twenty-two", 222);
    myTest("four hundred and forty-four", 44114);
    myTest("four hundred and forty-four", 444444);
    // Tests from Github
    console.log("Oo~~~~~~~~~~~ Examples ~~~~~~~~~~~oO")
    myTest("seven", 7);
    myTest("forty-two", 42);
    myTest("one thousand nine hundred and ninety-nine", 1999);
    myTest("two thousand and one", 2001);
    myTest("seventeen thousand nine hundred and ninety-nine", 17999);
    myTest("three hundred and forty-two thousand two hundred and fifty-one", 342251);
    myTest("one million three hundred thousand four hundred and twenty", 1300420);