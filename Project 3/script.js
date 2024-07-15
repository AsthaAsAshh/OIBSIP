function convert() {
    const temperature = parseFloat(document.getElementById('temperature').value);
    const unit = document.getElementById('unit').value;
    let result = '';

    if (isNaN(temperature)) {
        result = 'Please enter a valid number';
    } else {
        switch (unit) {
            case 'C':
                result = `${(temperature * 9/5 + 32).toFixed(2)} °F | ${(temperature + 273.15).toFixed(2)} K`;
                break;
            case 'F':
                result = `${((temperature - 32) * 5/9).toFixed(2)} °C | ${(((temperature - 32) * 5/9) + 273.15).toFixed(2)} K`;
                break;
            case 'K':
                result = `${(temperature - 273.15).toFixed(2)} °C | ${((temperature - 273.15) * 9/5 + 32).toFixed(2)} °F`;
                break;
        }
    }

    document.getElementById('result').innerText = `Converted Temperature: ${result}`;
}
