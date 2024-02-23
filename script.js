function calculateBMI() {
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;

    if (height && weight) {
        const heightInMeters = height / 100;
        const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
        const resultElement = document.getElementById('result');
        resultElement.innerHTML = `Your BMI is: <span style="color: #e74c3c;">${bmi}</span>`;
    } else {
        alert('Please enter both height and weight.');
    }
}
