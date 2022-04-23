const openButton = document.querySelector("#Log-in");
const closeButton = document.querySelector("#exist");
const form = document.querySelector("#popup-form");


openButton.addEventListener("click", () => {
  document.querySelector("#popup-form").style.display = "block";

});  

closeButton.addEventListener("click", () => {
  document.querySelector("#popup-form").style.display = "none";

});


const loginForm = document.querySelector("#Login-form");
const email = document.querySelector("#email");
const userName = document.querySelector("#user-name");
const password = document.querySelector("#psw");
const submit = document.querySelector(".submit");

submit.addEventListener("submit", (event) => {
  event.preventDefault();
  validateInputs();
})



const validateInputs = () => {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

}

if(userName === '') {
  alert('Username cant be blank');
}else{
  alert('User name must be lowercase');
}

if(email === '') {
  alert('Email can not be blank');
 } else {
   alert( 'Provide a valid email address');
 }

  if(password=== 'password.length>6') {
    alert('Password not valid');
  }else {
    alert('Password must be at least 6 character');

  }






