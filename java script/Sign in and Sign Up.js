// Sign Up Start
name_chk = /^([a-zA-Z])+$/;
email_chk = /^([a-zA-Z0-9\-\.]{5,20})+\@([a-zA-Z])+\.([a-zA-Z]{2,4})+$/;

// First name 
document.getElementById("fnames").addEventListener("blur", function () {
    if (this.value.length > 0) {
        if (name_chk.test(this.value) == true) {
            document.getElementById("fname_error").innerHTML = '';
        }
        else {
            document.getElementById("fname_error").innerHTML = 'Only alphabet Allowed';
            document.getElementById("fname_error").style.color = "red";
        }
    }
    else {
        document.getElementById("fname_error").innerHTML = 'Please Enter Name';
        document.getElementById("fname_error").style.color = "red";

    }
});

// Last name 
document.getElementById("lnames").addEventListener("blur", function () {
    if (this.value.length > 0) {
        if (name_chk.test(this.value) == true) {
            document.getElementById("lname_error").innerHTML = '';
        }
        else {
            document.getElementById("lname_error").innerHTML = 'Only alphabet Allowed';
            document.getElementById("lname_error").style.color = "red";
        }
    }
    else {
        document.getElementById("lname_error").innerHTML = 'Please Enter Name';
        document.getElementById("lname_error").style.color = "red";

    }
});
// Email  
document.getElementById("emails").addEventListener("blur", function () {
    if (this.value.length > 0) {
        if (email_chk.test(this.value) == true) {
            document.getElementById("email_error").innerHTML = '';
        }
        else {
            document.getElementById("email_error").innerHTML = 'Please Enter Valid Email Address';
            document.getElementById("email_error").style.color = "red";
        }
    }
    else {
        document.getElementById("email_error").innerHTML = 'Please Enter Email address';
        document.getElementById("email_error").style.color = "red";

    }
});
// Password  
document.getElementById("pass").addEventListener("blur", function () {
    if (this.value.length > 0) {
        document.getElementById("pass_error").innerHTML = '';
    }
    else {
        document.getElementById("pass_error").innerHTML = 'Please Enter Password';
        document.getElementById("pass_error").style.color = "red";

    }
});

var SignInModal = new bootstrap.Modal(document.getElementById("Signin"));
var SignUpModal2 = new bootstrap.Modal(document.getElementById("Signup"));

function signup() {
    var fnames = document.getElementById('fnames').value;
    var lnames = document.getElementById('lnames').value;
    var pasword = document.getElementById('pass').value;
    var emails = document.getElementById('emails').value;
    var fname_error = document.getElementById("fname_error").innerHTML;
    var lname_error = document.getElementById("lname_error").innerHTML;
    var email_error = document.getElementById("email_error").innerHTML;
    var pass_error = document.getElementById("pass_error").innerHTML;

    name_chk = /^([a-zA-Z])+$/;
    email_chk = /^([a-zA-Z0-9\-\.]{5,20})+\@([a-zA-Z])+\.([a-zA-Z]{2,4})+$/;

    //                                       F Name
    if (fnames.length > 0) {
        if (name_chk.test(fnames) == true) {
            document.getElementById("fname_error").innerHTML = '';
        }
        else {
            document.getElementById("fname_error").innerHTML = 'Only alphabet Allowed';
            document.getElementById("fname_error").style.color = "red";
        }
    }
    else {
        document.getElementById("fname_error").innerHTML = 'Please Enter Name';
        document.getElementById("fname_error").style.color = "red";

    }

    //                                       L Name
    if (lnames.length > 0) {
        if (name_chk.test(lnames) == true) {
            document.getElementById("lname_error").innerHTML = '';
        }
        else {
            document.getElementById("lname_error").innerHTML = 'Only alphabet Allowed';
            document.getElementById("lname_error").style.color = "red";
        }
    }
    else {
        document.getElementById("lname_error").innerHTML = 'Please Enter Name';
        document.getElementById("lname_error").style.color = "red";

    }
    //                                       Email
    if (emails.length > 0) {
        if (email_chk.test(emails) == true) {
            document.getElementById("email_error").innerHTML = '';
        }
        else {
            document.getElementById("email_error").innerHTML = 'Please Enter Valid Email';
            document.getElementById("email_error").style.color = "red";
        }
    }
    else {
        document.getElementById("email_error").innerHTML = 'Please Enter Email';
        document.getElementById("email_error").style.color = "red";

    }
    //                                       Password
    if (pasword.length > 0) {
        document.getElementById("pass_error").innerHTML = '';
    }
    else {
        document.getElementById("pass_error").innerHTML = 'Please Enter Password';
        document.getElementById("pass_error").style.color = "red";

    }

    if (name_chk.test(fnames) == true && name_chk.test(lnames) == true && email_chk.test(emails) == true && pasword.length > 0) {
        SignInModal.show();
        SignUpModal2.hide();
    }
    else {

    }

    localStorage.setItem("First Name", fnames);
    localStorage.setItem("Last Name", lnames);
    localStorage.setItem("ID", emails);
    localStorage.setItem("Pass", pasword);
}

// Sign IN Start 
function signin() {

    ssfn = localStorage.getItem("First Name");
    ssln = localStorage.getItem("Last Name");
    ssid = localStorage.getItem("ID");
    sspass = localStorage.getItem("Pass");

    emails = document.getElementById('emails2').value;
    ages = document.getElementById('pass2').value;


    // Email Start 
    if (emails.length == 0 && ages.length == 0) {
        document.getElementById("email_error2").innerHTML = "Please Enter Email address";
        document.getElementById("email_error2").style.color = "red";
        document.getElementById("pass_error2").innerHTML = "Please Enter Password";
        document.getElementById("pass_error2").style.color = "red";
    }
    else if (emails == ssid && ages == sspass) {
        alert("Welcome "+ssfn +" "+ ssln+"😃");
        window.location.reload(true);
        document.getElementById("email_error2").innerHTML = "";
        document.getElementById("pass_error2").innerHTML = "";
        document.getElementById('emails2').value = "";
        document.getElementById('pass2').value = "";
    }
    else if (emails != ssid && ages == sspass) {
        document.getElementById("email_error2").innerHTML = "Please Check Your Email address";
        document.getElementById("email_error2").style.color = "red";
        document.getElementById("pass_error2").innerHTML = "";
    }
    else if (emails == ssid && ages != sspass) {
        document.getElementById("pass_error2").innerHTML = "Please Check Your Password";
        document.getElementById("pass_error2").style.color = "red";
        document.getElementById("email_error2").innerHTML = "";
    }
    else if (emails != ssid && pass != sspass) {
        document.getElementById("email_error2").innerHTML = "Please Check Your Email address";
        document.getElementById("email_error2").style.color = "red";
        document.getElementById("pass_error2").innerHTML = "Please Check Your Password";
        document.getElementById("pass_error2").style.color = "red";
    }
    else { }
}

function atc(){
    alert("Your item Added to Cart 😀");
}
function buy(){
    alert("Please Wait Your Request is being Processed");
}
// Sign IN End