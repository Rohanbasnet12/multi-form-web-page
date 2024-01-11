$(document).ready(function () {
    let button = $('#btn'); // GET THE BUTTON TO SUBMIT THE FORM

    // Get the values after the button is clicked
    button.on('click', () => {
        let userName = $('#userName').val().trim(); // GET THE VALUE OF USER NAME
        let userEmail = $('#userEmail').val().trim(); // GET THE VALUE OF USER EMAIL
        let userNumber = $('#userNumber').val().trim(); // GET THE VALUE OF USER NUMBER

        // Check if any of the fields is empty
        if (userName === "" || userEmail === "" || userNumber === "") {
            // Add red borders to the empty fields
            if (userName === "") {
                $('#userName').css('border', '2px solid red');
                $('#errorName').toggle();
            }
            if (userEmail === "") {
                $('#userEmail').css('border', '2px solid red');
                $('#errorEmail').toggle();
            }
            if (userNumber === "") {
                $('#userNumber').css('border', '2px solid red');
                $('#errorNumber').toggle();
            }

            // Disable the button
            button.prop("disabled", true);

            // Set a timer to reset styles and hide error messages after 2000ms
            setTimeout(function () {
                $('#userName, #userEmail, #userNumber').css('border', '');
                $('#errorName, #errorEmail, #errorNumber').hide();
                button.prop("disabled", false);
            }, 2000);
        } else {
            // Clear red borders and enable the button
            $('#userName, #userEmail, #userNumber').css('border', '');
            button.prop("disabled", false);

            // Perform your desired actions or logic here
            alert(`User name is ${userName}, his email is ${userEmail}, and his number is ${userNumber}`);
        }
    });
});
