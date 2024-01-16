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

            $('#btn:nth-child(1)').on('click', () => {
                $('[data-index="' + 1 + '"]').css({
                    'display': 'none',
                })
                $('[data-index="' + 2 + '"]').css({
                    'display': 'block',
                })

                $('.btn_rounded:first-child').css('background', 'none')
                $('.btn_rounded:nth-child(2)').css('background', 'aquamarine')
            });
        } else {
            // Clear red borders and enable the button
            $('#userName, #userEmail, #userNumber').css('border', '');
            button.prop("disabled", false);
        }
    });

    // TRACK THE LEFT BUTTON WHEN CLICKED
    $('.btn_rounded').each(function () {
        $(this).on('click', function () {
            let varIndex = $(this).text();

            // Use the function within not() to exclude other buttons
            let otherIndex = $('.btn_rounded').not(this).text();

            // Set background to 'aquamarine' for the clicked button
            $(this).css('background', 'aquamarine');

            // Set background to 'none' for the other buttons
            $('.btn_rounded').not(this).css('background', 'none');

            // Select the container with the specified data-index value
            var container = $('[data-index="' + varIndex + '"]');

            container.show(); // Show the container associated with the clicked button

            // Hide containers associated with other buttons
            $('.form-container').not('[data-index="' + varIndex + '"]').hide();
        });
    });

    // IMPLEMENT NEXT STEP BUTTON

    // TOGGLE BETWEENT THE DISPLAY OF 2ND AND 3RD CHILD
    $('#btn:nth-child(2)').on('click', () => {
        $('[data-index="' + 2 + '"]').css({
            'display': 'none',
        })
        $('[data-index="' + 3 + '"]').css({
            'display': 'block',
        })

        $('.btn_rounded:nth-child(2)').css('background', 'none')
        $('.btn_rounded:nth-child(3)').css('background', 'aquamarine')
    });

    // TOGGLE BETWEENT THE DISPLAY OF 3ND AND 4RD CHILD
    $('#btn:nth-child(3)').on('click', () => {
        $('[data-index="' + 3 + '"]').css({
            'display': 'none',
        })
        $('[data-index="' + 4 + '"]').css({
            'display': 'block',
        })
    });

    // IMPLEMENT GOBACK BUTTON
    $('#goBackbtn').on('click', () => {
        $('[data-index="' + 2 + '"]').css({
            'display': 'none',
        })
        $('[data-index="' + 1 + '"]').css({
            'display': 'block',
        })
    })

    // IMPLEMENT BETWEEN THE TOGGLE OF RADIO BUTTON WHILE SELECTING PLAN
    $('#radio').on('click', () => {

        // Accessing custom color variables
        const coolGrayColor = getComputedStyle(document.documentElement).getPropertyValue('--COOL-GRAY');
        const marineBlueColor = getComputedStyle(document.documentElement).getPropertyValue('--MARINE-BLUE');

        if ($('#radio').css('justify-content') == 'flex-start') {
            $('.choosePlanBtn p:first-child').css('color', coolGrayColor);
            $('.choosePlanBtn p:last-child').css('color', marineBlueColor);
            $('#radio').css('justify-content', 'flex-end');

            // View the yearly plan
            $('.months').slideUp(); // Slide up the months container
            $('.years').slideDown(); // Slide down the years container

            // CHANGE THE PLAN TO YEARLY PLAN ON THE THIRD STEP
            $('.rightPlanSpan').css('display', 'block')
            $('.rightPlanParah').css('display', 'none')

        } else {
            $('.choosePlanBtn p:first-child').css('color', marineBlueColor);
            $('.choosePlanBtn p:last-child').css('color', coolGrayColor);
            $('#radio').css('justify-content', 'flex-start');

            // View the monthly plan
            $('.months').slideDown(); // Slide down the months container
            $('.years').slideUp(); // Slide up the years container

            // CHANGE THE PLAN TO MONTHLY PLAN 
            $('.rightPlanSpan').css('display', 'none')
            $('.rightPlanParah').css('display', 'block')
        }
    });


    // IMPLEMENT THE LOGIC BEHIND THE CHECK MARK IN THE THIRD STEP
    $('.checkMark').on('click', function () {
        // Set HTML content to an icon
        $(this).html('<i class="fa-solid fa-check"></i>');

        // Set background and border colors
        $(this).css({
            'background-color': 'SlateBlue ',
            'border-color': 'SlateBlue ',
            'color': 'white'
        });

        // Find other elements with the same class and reset their HTML content to plain text
        $('.checkMark').not(this).html('');

        // Reset background and border colors for other elements

        $('.checkMark').not(this).css({
            'background-color': '',
            'border-color': ''
        });
    });


});
