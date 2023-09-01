
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

// gv
const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 

// function
const checkValidation = ()=>{
  // username validation
  if(userName.value == ""){
    userName.classList.contains('success') ? userName.classList.remove('success') : '';
    userName.classList.add('fail')
    errorUserName.style.visibility = 'visible';
  }else if(userName.value !== ""){
    userName.classList.contains('fail') ? userName.classList.remove('fail') : '';
    userName.classList.add('success')
    errorUserName.style.visibility = 'hidden';
  }
  // email validation
  if(emailId.value == ""){
    emailId.classList.contains('success') ? emailId.classList.remove('success') : '';
    emailId.classList.add('fail')
    errorEmail.style.visibility = 'visible';
  }else if(emailId.value !== ""){
    if(emailId.value.match(pattern)){
      emailId.classList.contains('fail') ? emailId.classList.remove('fail') : '';
      emailId.classList.add('success')
      errorEmail.style.visibility = 'hidden';
    }else{
      errorEmail.innerText = `Invalid Email Id`;
      errorEmail.style.visibility = 'visible';
    }
    
    
  }
  // password validation
  if(newPassword.value == ""){
    newPassword.classList.contains('success') ? newPassword.classList.remove('success') : '';
    newPassword.classList.add('fail')
    errorPassword.style.visibility = 'visible';
  }else if(newPassword.value !== ""){
    newPassword.classList.contains('fail') ? newPassword.classList.remove('fail') : '';
    newPassword.classList.add('success')
    errorPassword.style.visibility = 'hidden';
  }
  // new password validation
  if(checkPassword.value == ""){
    checkPassword.classList.contains('success') ? checkPassword.classList.remove('success') : '';
    checkPassword.classList.add('fail')
    errorPasswordCheck.style.visibility = 'visible';
  }else if(checkPassword.value !== ""){
    if(checkPassword.value !== newPassword.value){
      checkPassword.classList.contains('success') ? checkPassword.classList.remove('success') : '';
      checkPassword.classList.add('fail')
      errorPasswordCheck.innerText = `Password doesn't match`
      errorPasswordCheck.style.visibility = 'visible';
    }else if(checkPassword.value === newPassword.value){
      checkPassword.classList.contains('fail') ? checkPassword.classList.remove('fail') : '';
      checkPassword.classList.add('success')
      errorPasswordCheck.style.visibility = 'hidden';
    }
    
  }
}

//EventListener

formContainer.addEventListener('submit',(event)=>{
  event.preventDefault();
  checkValidation();
})