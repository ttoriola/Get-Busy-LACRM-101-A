

function validateEmail(){
let email = document.getElementById('email').value; 
   if(email == ""){
        alert("Please enter your email");
   }
   if(!email.includes("@")){
        alert("Please enter a valid email");
   }
   if(email.includes("outlook.com") || (email.includes("aol.com")) || (email.includes("gmail.com")) || (email.includes("hotmail.com")) || (email.includes(".edu"))){
       alert("Thank you for your email!");
   }
   else{
    alert("Please make sure your email comes from a valid email server");
  }
}
// || (!email.includes("aol.com")) || (!email.includes("gmail.com")) || (!email.includes("hotmail.com"))
// | (!email.includes("aol.com")) || (!email.includes("gmail.com")) || (!email.includes("hotmail.com")) ){
/*
  if(!email.includes("outlook.com") || (!email.includes("aol.com"))){
       alert("Please make sure your email comes from a valid email server");
   }
   else{
    alert("Thank you for your email!");
  }

  */