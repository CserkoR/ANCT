const form = document.getElementById("myForm");
function handleForm(e) {
    e.preventDefault();
} 
form.addEventListener('submit', handleForm);

function converterFunction() {
    const inputNumber = document.getElementById("inputNumber").value;
    const numberInText = document.getElementById("numberInText");

    numberInText.innerHTML = numberToWords(inputNumber);
}

const num = "zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen".split(" ");
const tens = "twenty thirty forty fifty sixty seventy eighty ninety".split(" ");

function numberToWords(iNum){
    if (iNum < 20) return num[iNum];
    if (iNum < 100) return tens[~~(iNum/10)-2] + (iNum%10? "-" + num[iNum%10]: "");
    if (iNum < 1000) return num[~~(iNum/100)] +" hundred" + (iNum%100 == 0? "": " and " + numberToWords(iNum%100));
    if (iNum < 1000000) return numberToWords(~~(iNum/1000)) + " thousand" + (iNum%1000 != 0? " " + numberToWords(iNum%1000): "");
    if (iNum < 1000000000) return numberToWords(~~(iNum/1000000)) + " million" + (iNum%1000000 != 0? " " + numberToWords(iNum%1000000): "");
}