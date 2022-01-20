function addUser(){
    
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("username", user_name);
    
    window.location = "roomin.html";
    
    
}
 //start code
 function getdata(){firebase.database().ref("/").on('value',}
 function (snapshot) {document.getElementById("output")}