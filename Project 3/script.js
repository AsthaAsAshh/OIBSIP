function convert() {
    const temperature = document.getElementById('temperature').value;
    const unit = document.getElementById('unit').value;
    let result = '';

    if (unit === 'C') {
        result = (temperature * 9/5) + 32 + ' °F';
    } else if (unit === 'F') {
        result = (temperature - 32) * 5/9 + ' °C';
    }

    document.getElementById('result').innerText = `Converted Temperature: ${result}`;
}
