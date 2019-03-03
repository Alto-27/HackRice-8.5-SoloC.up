var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
			
			var regex1 = /(\d+|\d+.\d+|\d+\/\d+)( |)(pt|pints|pint|qt|quarts|quart|cups|cup|ounces|ounce|oz|gallons|gallon|gal|teaspoons|teaspoon|tsp|tablespoons|tablespoon|tbsp)/gi
			
			var matches = text.match(regex1);
			var replacements = new Array(matches.length);
			for (var k = 0; k < matches.length; k++){
                replacements[k] = convert_string(matches[k]);
			}
			
			var replace1 = '[SOLO CUP MEASUREMENT]'
			
            var replacedText = text.replace(regex1, replace1);
			
            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}

function convert_string(text) {
    let str_arr = text.split(/(d+.d+|d+\/d+|d+)( |)/);
    let unit = str_arr[1];
    let num = parseInt(str_arr[0]);
	let convertFactor = 1.0;
	switch(unit) {
        case "gallons":
        case "gal":
        case "gallon":
            convertFactor = 8.0;
            break;
        case "cups":
		case "cup":
            convertFactor = 0.5;
            break;
        case "teaspoons":
        case "teaspoon":
        case "tsp":
            convertFactor = 1.0 / 96;
            break;
        case "ounces":
        case "oz":
        case "ounce":
            convertFactor = 1.0 / 16;
            break;
        case "tablespoons":
        case "tablespoon":
		case "tbsp":
            convertFactor = 1.0 / 32;
            break;
        case "quarts":
        case "quart":
        case "qt":
            convertFactor = 2.0;
            break;
        case "pints":
        case "pt":
        case "pint":
            convertFactor = 1.0;
            break;
        default:
            break;
    }
    num *= conversionFactor
    
    return num + " solocups";
}
