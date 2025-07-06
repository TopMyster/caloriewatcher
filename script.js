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
            
                if (malecb.checked) {
                    result =  [66 + (6.23 * document.getElementById('weight').value) + (12.7 * (document.getElementById('height').value) - (6.8 * document.getElementById('age').value)] * ActivityFactor - 500
                }
                 if (femalecb.checked) {
                    result =  [655 + (4.35 * document.getElementById('weight').value) + (4.7 * (document.getElementById('height').value * 12)) - (4.7 * document.getElementById('age').value)] * ActivityFactor - 500
                }

              document.getElementById('result').textContent = Math.floor(result) 
            }
