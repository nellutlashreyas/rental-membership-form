//Shreyas Nellutla
//Rental Membership Form JS
//Due Date: June 7 2022

// Added a validation function to check that the name field and address field are not left blank 
//Added if statements to set conditon to set an alert if it is found that a field has been left blank
// If left blank, the form will not let you submit and will give an alert box 
function validateMemberForm(event) {
    var empty = false;
    if (document.memberform.name.value == "") {
        empty = true;
        alert("cannot leave name field blank");
    }

    if (document.memberform.address.value == "") {
        empty = true;
       alert("cannot leave address field blank");
    }

    if (empty) {
        event.preventDefault();
    }

}


//function to validate the phone number field through using a regular expression
//Added variables to set value from the phone number field and make sure that it follows the format of a phone number without dashes and has the correct number of digits
//Added an if statement to test the validity of the field. It would show an alert box if the digits do not match the requirement and would not allow to submit form until it is in the right format. 

function validateRegular(e) {
    var phone = false;
    var x = document.memberform.phonenum.value;
    var numForm = /^\d{3}\d{3}\d{4}$/;
    var errNum = document.getElementById("phonenum");

    if (!numForm.test(x)) {
        errNum.style.display = "block";
        phone = true;
        alert("must be in the form of xxxxxxxxxx");
    }
    if (phone) {
        e.preventDefault();
    }

}


// Init function to execute the event handler functions, which were the two main validity functions 
function init(){
    var memberCheck = document.getElementById("memberform");
    memberCheck.addEventListener("submit", validateMemberForm);


    var f = document.getElementsByName("memberform");
    f[0].addEventListener("submit", validateRegular); 
}

window.onload = init;
