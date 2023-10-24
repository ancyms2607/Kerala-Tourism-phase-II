const form = document.querySelector("form");
eField = form.querySelector(".email"),
eInput = eField.querySelector("input"),
pField = form.querySelector(".password"),
pInput = pField.querySelector("input");


//preventing from form submitting
form.onsubmit = (e)=>{
  e.preventDefault(); 



  //if email and password is blank then add shake class in it else call specified function
  (eInput.value == "") ? eField.classList.add("shake", "error") : checkEmail();
  (pInput.value == "") ? pField.classList.add("shake", "error") : checkPass();



  setTimeout(()=>{ //remove shake class after 500ms
    eField.classList.remove("shake");
    pField.classList.remove("shake");
  }, 500);


//calling checkEmail function on email input keyup
  
  eInput.onkeyup = ()=>{checkEmail();} 

  //calling checkPassword function on pass input keyup
  
  pInput.onkeyup = ()=>{checkPass();} 


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

  //checkPass function

  function checkPass()
  { 
    let pattern =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

    if(!pInput.value.match(pattern))
    { 
      pField.classList.add("error");
      pField.classList.remove("valid");
      let errorTxt = eField.querySelector(".error-txt");
      
      (eInput.value != "") ? errorTxt.innerText = "Enter a valid Passcode" : errorTxt.innerText = "Please Enter a Valid Passcode";
    }
    
    else{

      pField.classList.remove("error");
      pField.classList.add("valid");
    }
  }

  //if eField and pField doesn't contains error class that mean user filled details properly
  if(!eField.classList.contains("error") && !pField.classList.contains("error")){

    //redirecting user to the specified url which is inside action attribute of form tag
    window.location.href = form.getAttribute("action"); 
  }
}



















