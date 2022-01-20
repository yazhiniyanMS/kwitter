const firebaseConfig = {
    apiKey: "AIzaSyC3NRsM8-LL6kTSrRRaWGVFgomZHosQa_c",
    authDomain: "chat-e3297.firebaseapp.com",
    databaseURL: "https://chat-e3297-default-rtdb.firebaseio.com",
    projectId: "chat-e3297",
    storageBucket: "chat-e3297.appspot.com",
    messagingSenderId: "474305816483",
    appId: "1:474305816483:web:b6ce46857621aba9b99c16"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig)

  
function getData() 
    {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;

     console.log("Room Name - " + Room_names);
     row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
     document.getElementById("output").innerHTML  =  row; 
    //Start code
    
    //End code
    });});}
getData();

function addroom() {
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
 purpose:"adding room name"
  });
  localStorage.setItem("room_ name", room_name);
  window.location = "kwitter_page.html"
}

function redirectToRoomName(name){
console.log(name);
   localStorage.setItem("room_name", name);
   window.location = "kwitter_page.html"
}
