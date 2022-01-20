const firebaseConfig = {
    apiKey: "AIzaSyA0aHMRNXWpwo2S7pwFZcGDjfdZF9-9l4A",
    authDomain: "class-test-d9ef2.firebaseapp.com",
    databaseURL: "https://class-test-d9ef2-default-rtdb.firebaseio.com",
    projectId: "class-test-d9ef2",
    storageBucket: "class-test-d9ef2.appspot.com",
    messagingSenderId: "409925328347",
    appId: "1:409925328347:web:55f7a3fd4b5e0e42105bfe"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);


function addUser() 

{ 
    user_name = document.getElementById("user_name").value;
 firebase.database().ref("/").child(user_name).update({ 
     purpose : "adding user"
 });
 }