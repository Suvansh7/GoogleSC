const firebaseConfig = {
  apiKey: "AIzaSyBEgOFqknZd1TyJ8tblbEXA-dnrmmOqY4I",
  authDomain: "sc-b98a9.firebaseapp.com",
  databaseURL: "https://sc-b98a9-default-rtdb.firebaseio.com",
  projectId: "sc-b98a9",
  storageBucket: "sc-b98a9.appspot.com",
  messagingSenderId: "943331072614",
  appId: "1:943331072614:web:82ae4c97a80618d1edeba7",
  measurementId: "G-RBFVMJ3TS7",
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

  const form = new FormData(e.target);

  // var name = getElementVal("signupName");

  //   var pn = getElementVal("num");

  //   var pass = getElementVal("signupPassword");

  var name = form.get("signupName");
  var pn = form.get("num");
  var pass = form.get("signupPassword");
  var role = form.get("role");

  saveMessages(name, pn, pass);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
}

const saveMessages = (name, pn, pass) => {
  // var newenteries = enteriesDB.push();

  enteriesDB.child(pn).set({
    name: name,

    phone_no: pn,

    password: pass,
  });

  document.getElementById("enteries").reset();
  sessionStorage.setItem("pn",pn);
  window.location.href="./userDashboard.html";
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
