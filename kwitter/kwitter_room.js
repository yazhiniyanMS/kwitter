
//ADD YOUR FIREBASE LINKS HERE
 // Your web app's Firebase configuration
//YOUR FIREBASE LINKS
var firebaseConfig = {
  apiKey: "AIzaSyA0aHMRNXWpwo2S7pwFZcGDjfdZF9-9l4A",
  authDomain: "class-test-d9ef2.firebaseapp.com",
  projectId: "class-test-d9ef2",
  storageBucket: "class-test-d9ef2.appspot.com",
  messagingSenderId: "409925328347",
  appId: "1:409925328347:web:55f7a3fd4b5e0e42105bfe"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

    
function getData() {firebase.database().ref("/").on('value', function(snapshot) 
    {document.getElementById("output").innerHTML = "";
      snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
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
    window.location = "kwitter_page.html";
}

function redirectToRoomName(name){
  console.log(name);
     localStorage.setItem("room_name", name);
     window.location = "kwitter_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}