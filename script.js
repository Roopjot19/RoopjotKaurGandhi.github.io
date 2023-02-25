function initializeApp() 
{
  // TODO: Replace the following with your app's Firebase project configuration
  const firebaseConfig = {
    apiKey: "AIzaSyD05w8bjc1tmLmjhrSbnZHVp7hlAHgVaes",
    authDomain: "contact-form-f5999.firebaseapp.com",
    databaseURL: "https://contact-form-f5999-default-rtdb.firebaseio.com",
    projectId: "contact-form-f5999",
    storageBucket: "contact-form-f5999.appspot.com",
    messagingSenderId: "540901356615",
  };
  
  firebase.initializeApp(firebaseConfig);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');

  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);

  // Submit form
  function submitForm(e)
  {
   e.preventDefault();

   //Get value
   var name = getInputVal('name');
   var email = getInputVal('email');
   var message = getInputVal('message');

    // Save message
   saveMessage(name, email, message);

   // Show alert
   document.querySelector('.alert').style.display = 'block';

   // Hide alert after 3 seconds
   setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
    },3000);

   // Clear form
   document.getElementById('contactForm').reset();
  }

  // Function to get form value
  function getInputVal(id){
  return document.getElementById(id).value;
  }

  // Save message to firebase
  function saveMessage(name, email, message)
  {
   var newMessageRef = messagesRef.push();
   newMessageRef.set({
    name: name,
    email: email,
    message: message
   });
  }
 
  

  
}
