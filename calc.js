// This function will take in a number and a unit to convert from
// It will change the conversion factor according the given unit
// The function will output the number of units given into the respective amount of solo cups
document.getElementById("myText").addEventListener("input", function() {
    let num = parseFloat(document.getElementById('myText').value);
    let unit = document.getElementById('mySelect').value;
    let convertFactor = 1.0;
    switch(unit) {
        case "gallons":
            convertFactor = 8.0;
            break;
        case "cups":
            convertFactor = 0.5;
            break;
        case "teaspoons":
            convertFactor = 1.0 / 96;
            break;
        case "ounces":
            convertFactor = 1.0 / 16;
            break;
        case "tablespoons":
            convertFactor = 1.0 / 32;
            break;
        case "quarts":
            convertFactor = 2.0;
            break;
        case "pints":
            convertFactor = 1.0;
            break;
        default:
            break;
    }

    document.getElementById('myOutput').value = (num * convertFactor).toFixed(5); 

        if (document.getElementById('myOutput').value <= 0.28125) {
            if ((num * convertFactor * (32.0/3.0)).toFixed(5) % 1 == 0) {
                document.getElementById('myOutput').value = (num * convertFactor * (32.0/3.0)) + " shots";
            } else {
                document.getElementById('myOutput').value = (num * convertFactor * (32.0/3.0)).toFixed(5) + " shots";
            }

        } else {
            document.getElementById('myOutput').value = num * convertFactor;
        }


});