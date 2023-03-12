const firebaseConfig = {
    apiKey: "AIzaSyBEgOFqknZd1TyJ8tblbEXA-dnrmmOqY4I",
    authDomain: "sc-b98a9.firebaseapp.com",
    databaseURL: "https://sc-b98a9-default-rtdb.firebaseio.com",
    projectId: "sc-b98a9",
    storageBucket: "sc-b98a9.appspot.com",
    messagingSenderId: "943331072614",
    appId: "1:943331072614:web:82ae4c97a80618d1edeba7",
    measurementId: "G-RBFVMJ3TS7"
  };
  // initialize firebase
firebase.initializeApp(firebaseConfig);

// if (btn){
//     btn.addEventListener('click',() =>{
//         console.log('btn clicked');
//     });
// }

// reference your database
var enteriesDB = firebase.database().ref("enteries");
document.getElementById("enteries").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();
    var name = getElementVal("signupName");
     
      var pn = getElementVal("num");
    
      var pass = getElementVal("signupPassword");
      
      


      saveMessages(name,pn,pass);

      //   enable alert
      document.querySelector(".alert").style.display = "block";

      //   remove the alert
      setTimeout(() => {
        document.querySelector(".alert").style.display = "none";
      }, 3000);

      //   reset the form

    }

    const saveMessages = (name,  pn,pass) => {
      var newenteries = enteriesDB.push();

      newenteries.set({
        name: name,
       
        phone_no: pn,
       
        password:pass,
        
      });

      document.getElementById("enteries").reset();
      alert("YOUR DATA HAS BEEN SUBMITTED SUCCESSFULLY..");

    };

    const getElementVal = (id) => {
      return document.getElementById(id).value;
    };