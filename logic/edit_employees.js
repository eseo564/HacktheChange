      let Wrkdays = [];
        let i = 0;

      document.getElementById("inputDay").addEventListener("click", processUserInput);

        function processUserInput(manDayOfWk) {
                var manDayOfWk = "";
                while (manDayOfWk != 'done' && i < 5) {
                    manDayOfWk = prompt("Enter a mandatory work day");
		    manDayOfWk = manDayOfWk.toLowerCase();
                    if (manDayOfWk != 'done') {
                        
                        switch (manDayOfWk) {
                            case 'monday':
                            case 'tuesday':
                            case 'wednesday':
                            case 'thursday':
                            case 'friday':
                                Wrkdays[i] = manDayOfWk;
                                i++;
                                break;
                            default:
                                console.log("Invalid input. Please enter a valid day of the week.");
                        }

                    }
                }
		printEnteredDays();
            }

        function printEnteredDays() {
            const enteredDaysDiv = document.getElementById('enteredDays');
            enteredDaysDiv.innerHTML = "<p>This employee is scheduled in office for these days:</p>";
            Wrkdays.forEach(day => {
                if (day !== null && day !== undefined) {
                    enteredDaysDiv.innerHTML += `<p>${day}</p>`;
                }
            });
        }
