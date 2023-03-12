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

document.getElementById("submit").addEventListener("click", check());

function check(){
    var database = firebase.database();

    var number = document.getElementById('signinEmail').value;
    alert(number)
    database.ref('enteries').once('value', function(snapshot) {
              if (snapshot.hasChild(number)) {
                alert("number registered")
                }
    else{
        alert("number not registered")
    }
});

}