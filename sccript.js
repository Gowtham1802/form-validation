
//Input Elements
const userName = document.getElementById('username-inp');

const emailId = document.getElementById('email-inp');

const newPassword = document.getElementById('password-inp');

const checkPassword = document.getElementById('password-check-input');

const submitBtn = document.getElementById('submit-btn');

const formContainer = document.getElementById('form-container');

// Output Elements
const errorUserName = document.getElementById('error-msg-username');

const errorEmail = document.getElementById('error-msg-email');

const errorPassword = document.getElementById('error-msg-password');

const errorPasswordCheck =document.getElementById('error-msg-passwordcheck');

// function
const checkValidation = ()=>{
  console.log(userName.value)
  if(userName.value == ""){
    userName.classList.contains('success') ? userName.classList.remove('success') : '';
    userName.classList.add('fail')
    errorUserName.style.visibility = 'visible';
  }else{
    userName.classList.contains('fail') ? userName.classList.remove('fail') : '';
    userName.classList.add('success')
    errorUserName.style.visibility = 'hidden';
  }
}

//EventListener

formContainer.addEventListener('submit',(event)=>{
  event.preventDefault();
  checkValidation();
})