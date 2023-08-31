let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let string = "";
let arr = Array.from(buttons);

arr.forEach(button =>{
    button.addEventListener('click', (e) =>{
        // When "=" is clicked, result is displayed
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }

        // When "AC" is clicked, result panel is cleared out
        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        // When "x2" is clicked, square number is calculated
        else if (e.target.innerHTML == 'x2') {
            string = Math.pow(parseFloat(string), 2); 
            input.value = string;
        }
        // When "DEL" is clicked,the last character from the string is deleted
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        // When "%" is clicked, percentage is calculated    
        else if (e.target.innerHTML == '%') {
            string = eval(string) / 100; 
            input.value = string;
        }
        // For all other buttons, clicked button's value is appended to the string
        else{
            string += e.target.innerHTML;
            input.value = string;
        }

        

    })
})