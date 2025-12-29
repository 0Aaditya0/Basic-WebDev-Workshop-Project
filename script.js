//menu or hamburger toggle

const menu = document.getElementById("menu")
const navbar = document.getElementById("navbar") 

menu.addEventListener("click", ()=>{
    navbar.classList.toggle("active");
});

//form validation
   
function validate(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
   
   if (!name || name.length < 3){
       alert("Please write a name thats atleast 3 characters.");
       return false;
   }

   if (!email.includes("@")){
       alert("Invalid Email");
       return false;
   }

   if(!message || message.length < 50){
    alert("Write a message with 50 characters.");
    return false;
   }

   alert("Successfully Submitted.")
   return true;
}

console.log("Hello there! I didnt think you would come see the console.");
console.log("It's just me here. There is nothing else.");
console.log("Thanks for passing by, Its been a long time since anyone came to see me.");