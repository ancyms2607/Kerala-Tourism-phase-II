const form = document.querySelector("form");
nField = form.querySelector(".username"),
nInput = nField.querySelector("input"),
eField = form.querySelector(".email"),
eInput = eField.querySelector("input"),
mField = form.querySelector(".phonenumber"),
mInput = mField.querySelector("input"),
pField = form.querySelector(".password"),
pInput = pField.querySelector("input");
cField = form.querySelector(".checkpassword"),
cInput = cField.querySelector("input");





//preventing from form submitting
form.onsubmit = (e)=>{
  e.preventDefault(); 



  // add shake class in it else call specified function

  (nInput.value == "") ? nField.classList.add("shake", "error") : checkname();
  (eInput.value == "") ? eField.classList.add("shake", "error") : checkEmail();
 
  (mInput.value == "") ? mField.classList.add("shake", "error") : checkphone();
  (pInput.value == "") ? pField.classList.add("shake", "error") : checkPass();

  (cInput.value == "") ? cField.classList.add("shake", "error") : checkPasscode();
  



  setTimeout(()=>{ //remove shake class after 500ms

    nField.classList.remove("shake");
    eField.classList.remove("shake");
    mField.classList.remove("shake");
    pField.classList.remove("shake");
    cField.classList.remove("shake");
  }, 500);


//calling check function on input keyup


  nInput.onkeyup = ()=>{checkname();} 
 
  eInput.onkeyup = ()=>{checkEmail();} 

  mInput.onkeyup = ()=>{checkphone();} 
 
  pInput.onkeyup = ()=>{checkPass();} 

  cInput.onkeyup = ()=>{checkPasscode();} 


  //checkUsername function


  function checkname(){ 
    
    let pattern = /^[^ ]+[^ ]+[a-z]$/; 
    if(!nInput.value.match(pattern))
    { 
      nField.classList.add("error");
      nField.classList.remove("valid");
      let errorTxt = nField.querySelector(".error-txt");
      
      (nInput.value != "") ? errorTxt.innerText = "Enter a valid Username" : errorTxt.innerText = "Please Enter a Valid Username";
    }
    
    else{

      nField.classList.remove("error");
      nField.classList.add("valid");
    }
  }
//checkEmail function


  function checkEmail(){ 
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; 

    if(!eInput.value.match(pattern))
    { 
      eField.classList.add("error");
      eField.classList.remove("valid");
      let errorTxt = eField.querySelector(".error-txt");
      
      (eInput.value != "") ? errorTxt.innerText = "Enter a valid email address" : errorTxt.innerText = "Please Enter a Valid Email";
    }
    
    else{

      eField.classList.remove("error");
      eField.classList.add("valid");
    }
  }

  //checkPhone Number function


  function checkphone(){ 
    let pattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/; 

    if(!mInput.value.match(pattern))
    { 
      mField.classList.add("error");
      mField.classList.remove("valid");
      let errorTxt = eField.querySelector(".error-txt");
      
      (mInput.value != "") ? errorTxt.innerText = "Enter a valid Phonenumber" : errorTxt.innerText = " Enter a valid Phonenumber";
    }
    
    else{

      mField.classList.remove("error");
      mField.classList.add("valid");
    }
  }

  // checkPass function

   function checkPass()
  { 
    let pattern =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

    if(!pInput.value.match(pattern))
    { 
      pField.classList.add("error");
      pField.classList.remove("valid");
      let errorTxt = pField.querySelector(".error-txt");
      
      (pInput.value != "") ? errorTxt.innerText = "Enter a valid Passcode" : errorTxt.innerText = "Enter a Valid Passcode";
    }
    
    else{

      pField.classList.remove("error");
      pField.classList.add("valid");
    }
  }

 // check ConfirmPasscode function

 function checkPasscode()
   { 
    

    if(cInput.value != pInput.value){ //if pattern not matched then add error and remove valid class

      cField.classList.add("error");

      cField.classList.remove("valid");

    let errorTxt = cField.querySelector(".error-txt");

    //if email value is not empty then show please enter valid email else show Email can't be blank

    (cInput.value !=  pInput.value) ? errorTxt.innerText = "password doesnt match" : errorTxt.innerText = "password can't be blank"; ;

  }else{ //if pattern matched then remove error and add valid class

      cField.classList.remove("error");

      cField.classList.add("valid");

  }

}

  




  //if eField and pField doesn't contains error class that mean user filled details properly
  if(!nField.classList.contains("error") && !eField.classList.contains("error") && !mField.classList.contains("error") && !pField.classList.contains("error") && !cField.classList.contains("error")){

    //redirecting user to the specified url which is inside action attribute of form tag
    window.location.href = form.getAttribute("action"); 
  }
}

// PASSWORD STRENGTH CHECKER

 

function getPasswordStrength(password){

  let s = 0;

  if(password.length > 6){

  s++;

  }

  if(password.length >= 8){

  s++;

  }

  if(/[A-Z]/.test(password)){

  s++;

  }

  if(/[0-9]/.test(password)){

  s++;

  }

  if(/[^A-Za-z0-9]/.test(password)){

  s++;

  }

  return s;

  }

  document.querySelector(".wrapper #passcode").addEventListener("focus",function(){

  document.querySelector(".wrapper .pw-strength").style.display = "block";

  });

  

  

  document.querySelector(".wrapper #passcode").addEventListener("keyup",function(e){

  let password = e.target.value;

  let strength = getPasswordStrength(password);

  let passwordStrengthSpans = document.querySelectorAll(".wrapper .pw-strength span");

  strength = Math.max(strength,1);

  passwordStrengthSpans[1].style.width = strength*20 + "%";

  if(strength < 2){

  passwordStrengthSpans[0].innerText = "Weak";

  passwordStrengthSpans[0].style.color = "#111";

  passwordStrengthSpans[1].style.background = "#d13636";

  } else if(strength >= 2 && strength <= 4){

  passwordStrengthSpans[0].innerText = "Medium";

  passwordStrengthSpans[0].style.color = "00FFFF";

  passwordStrengthSpans[1].style.background = "#e6da44";

  } else {

  passwordStrengthSpans[0].innerText = "Strong";

  passwordStrengthSpans[0].style.color = "#fff";

  passwordStrengthSpans[1].style.background = "#20a820";

  }

  });


  



















