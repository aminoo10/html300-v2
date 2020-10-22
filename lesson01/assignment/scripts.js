// jQuery Doc Ready
$(function() {
    // Set up some data and variables
    const data = [1, 2, 3, 4],
        input = $('.input'),
        input2 = $('.input2'),
        input3 = $('.input3'),
        input4 = $('.input4'),
        input5 = $('.input5'),
        submit = $('.submit'),
        submit2 = $('.submit2'),
        submit3 = $('.submit3'),
        submit4 = $('.submit4'),
        submit5 = $('.submit5'),
        resultSum = $('.sum'),
        result2 = $('.sum2'),
        result3 = $('.sum3'),
        result4 = $('.sum4'),
        result5 = $('.sum5');

    // Click event on the submit input
    submit.on('click', function() {
        // Grab the input value and parse it into a number
        const val = input.val();
        const num = parseInt(val);
        // Verify the user gave us a real number
        if (!isNaN(num)) {
            // Add our new number to the data array
            data.push(num);
            // Use reduce to convert our array of numbers into a single value - the sum of all of the numbers
            const sum = data.reduce((acc, curr) => acc + curr);
            // Add our new total to the page
            resultSum.text(sum);
            // Reset the input value to an empty string
            input.val('');
        }
    });
    submit2.on('click', function() {
        const num = parseInt(input2.val());
        //removed val variable because it wasn't being used anywhere else

        if (!isNaN(num)) {
            //checks to see if input value is a number
            const answer = data.every((value) => value < num);
            //check if there is a value that is under the input number
            result2.text(answer);
            input2.val('');
        }
    });
    submit3.on('click', function() {
        const num = parseInt(input3.val());
        if (!isNaN(num)) {
            const data2 = data.filter((value) => value < num);
            //returns all values under input number
            result3.text(data2);
            input3.val('');
        }
    });
    submit4.on('click', function() {
        const num = parseInt(input4.val());
        if (!isNaN(num)) {
            const answer = data.includes(num);
            //returns true or false depending if the input value is found wuthin the array
            result4.text(answer);
            input4.val('');
        }
    });
    submit5.on('click', function() {
        const num = parseInt(input5.val());
        if (!isNaN(num)) {
            const data2 = data.map((value) => value += num);
            //adds the input value to each element in the array and then prints out into a seperate array.
            result5.text(data2);
            input5.val('');
        }
    });
});

/*
concluding notes: I feel like there is a more efficient way of doing this rather than reusing a lot of the same functions and 
using similarly named variables multiple times, but right now I can't really think of any ideas so I'll come back to this later.
*/