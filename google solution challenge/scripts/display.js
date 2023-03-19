// const firebaseConfig = {
//   apiKey: "AIzaSyBEgOFqknZd1TyJ8tblbEXA-dnrmmOqY4I",
//   authDomain: "sc-b98a9.firebaseapp.com",
//   databaseURL: "https://sc-b98a9-default-rtdb.firebaseio.com",
//   projectId: "sc-b98a9",
//   storageBucket: "sc-b98a9.appspot.com",
//   messagingSenderId: "943331072614",
//   appId: "1:943331072614:web:82ae4c97a80618d1edeba7",
//   measurementId: "G-RBFVMJ3TS7"
// };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   var firebaseRef = firebase.database().ref("enteries");
//   var name;
//   firebaseRef.child("8979722289").once("value" , function(snapshot){
//   snapshot.forEach(function(element) {
//     // if (element.key == 8979722289){
//     //   data = element.val();
//       // document.querySelector("#abc").innerHTML = 
//       //   <div> ${element.val()}</div>
//       // 
//       // console.log(print(data));
//       // console.log(element.key);
//       if(element.key == "name")
//         {
//           console.log(element.val());
//           document.getElementById("name").innerHTML = element.val(); 
//         }
//       if(element.key == "phone_no")
//         {
//           console.log(element.val());
//           document.getElementById("pn").innerHTML = element.val(); 
  
//         }
//       if(element.key == "type_of_services")
//         {
//           console.log(element.val());
//           document.getElementById("tp").innerHTML = element.val(); 
//         }
//       if(element.key == "experience")
//         {
//           console.log(element.val());
//           document.getElementById("exp").innerHTML = element.val(); 
//         }
//       if(element.key == "work_location")
//         {
//           console.log(element.val());
//           document.getElementById("worlo").innerHTML = element.val(); 
//         }
//         if(element.key == "imageUrl")
//         {
//           console.log(element.val());
//           document.getElementById("pid").src= element.val();
//           // element.val().getDownloadURL().then(function(url){
//           //   var test=url;
//           //   alert(url);
//           //   document.querySelector('img').src = test;
//           // }).catch(function(error){
  
//           // });
//         }
//   });
//   });