const name = document.getElementById("input1");
const email = document.getElementById("input2");
const password = document.getElementById("input4");
const confirmpassword = document.getElementById("input5");
const phoneno = document.getElementById("input3");
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = {
        name: name.value,
        email: email.value,
        password: password.value,
        confirmpassword: confirmpassword.value,
        phoneno: phoneno.value
    }
    console.log(formData);
    if (name.value == "" || name.value == null) {
        document.getElementById("id1").innerHTML = "*please enter valid name";

    } else {
        document.getElementById("id1").innerHTML = "";
        if (!isNaN(name.value)) {
            document.getElementById("id1").innerHTML = "name should be in characters"
        }
    }
    if (email.value == "" || email.value == null) {
        document.getElementById("id2").innerHTML = "enter valid email"
    } else {
        document.getElementById("id2").innerHTML = ""
        if(!email.value.includes("@")) {
            document.getElementById("id2").innerHTML = "email must have @"

        }

    } if (password.value == "" || password.value == null) {
        document.getElementById("id4").innerHTML = "*enter valid password"
    }
    else {
        document.getElementById("id4").innerHTML = ""
        if (password.value.length < 6 || password.value.length > 20) {
            document.getElementById("id4").innerHTML = "password lies between 6 to 20 character"
        } if (password.value.length < 6 && password.value.length > 20) {
            document.getElementById("id4").innerHTML = ""

        }

    }
    if ((phoneno.value == "" || phoneno.value == null) || isNaN(phoneno.value)) {
        document.getElementById("id3").innerHTML = "*enter valid phoneno"
    }
    else {
        document.getElementById("id3").innerHTML = ""
        
    }
    if (confirmpassword.value == "" || confirmpassword.value == null) {
        document.getElementById("id5").innerHTML = "confirm password";

    } else {
        document.getElementById("id5").innerHTML = "";
        if (confirmpassword.vlaue !== password.value) {
            document.getElementById("id5").innerHTML = "password not confirm";
        }


}

    
    




})

