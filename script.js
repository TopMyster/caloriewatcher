let malecb = document.getElementById('male')
let femalecb = document.getElementById('female')

function submition() {
    let result
    let ActivityFactor

    if (document.getElementById('Sedentary').checked) {
        ActivityFactor = 1.2
    }
    if (document.getElementById('Lightly active').checked) {
        ActivityFactor = 1.375
    }
    if (document.getElementById('Moderately active').checked) {
        ActivityFactor = 1.55
    }
    if (document.getElementById('Very active').checked) {
        ActivityFactor = 1.725
    }

    let weightLb = Number(document.getElementById('weight').value)
    let heightIn = Number(document.getElementById('height').value)
    let age = Number(document.getElementById('age').value)
    let weight = weightLb * 0.453592   // pounds to kg
    let height = heightIn * 2.54       // inches to cm

    if (malecb.checked) {
        result = (10 * weight) + (6.25 * height) - (5 * age) + 5
    }
    if (femalecb.checked) {
        result = (10 * weight) + (6.25 * height) - (5 * age) - 161
    }

    result = (result * ActivityFactor) - 500

    document.getElementById('result').textContent = Math.floor(result)
}
