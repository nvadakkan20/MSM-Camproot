const firebaseConfig = {
    apiKey: "AIzaSyBWLke2w5OsvG-3urLUQcRl3MTgGLU74PA",
    authDomain: "contactform-4c191.firebaseapp.com",
    databaseURL: "https://contactform-4c191-default-rtdb.firebaseio.com",
    projectId: "contactform-4c191",
    storageBucket: "contactform-4c191.appspot.com",
    messagingSenderId: "932262749313",
    appId: "1:932262749313:web:b3fed606661f2a5470d980"
  };
  //initialize firebase
  firebase.initializeApp(firebaseConfig);

  //reference your database
  var contactFormDB=firebase.database().ref('contactForm');

  document.getElementById("contactForm").addEventListener("submit",submitForm);

  function submitForm(e){
    e.preventDefault();

    var name = getElementVal("name");
    var phone = getElementVal("phone");
    var place = getElementVal("place");
    var college = getElementVal("college");
    var course = getElementVal("course");
    saveMessages(name,phone,place,college,course);
    window.location = "success.html";
 }

 const saveMessages = (name,phone,place,college,course) =>{
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        name : name,
        phone : phone,
        place : place,
        college : college,
        course : course,

    });
 };

  const getElementVal=(id)=>{
    return document.getElementById(id).value;
  };