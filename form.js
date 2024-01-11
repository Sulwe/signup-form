let password = document.getElementById("password").value;
let confirm_password = document.getElementById("confirm_password").value;

const submit = document.getElementById("submit");

submit.addEventListener("click", validatePassword)

function validatePassword(){
    if(password != confirm_password) {
        console.log("Not Matching")
      //confirm_password.setCustomValidity("Passwords Don't Match");
    } else {
        console.log(`Matches ${password.value}`)
      //confirm_password.setCustomValidity('');
    }
  }