// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFUNq4mD5AJLatqj3eEgiVRJn4D2feUyw",
  authDomain: "kwitter-fdd6d.firebaseapp.com",
  databaseURL: "https://kwitter-fdd6d-default-rtdb.firebaseio.com",
  projectId: "kwitter-fdd6d",
  storageBucket: "kwitter-fdd6d.appspot.com",
  messagingSenderId: "11765997577",
  appId: "1:11765997577:web:b4c3aadd0f8ea97656d8d8"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);

//code
firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+ user_name + "!!";
console.log("Welcome "+ user_name + "!!");

function addRoom() {
  room_name= document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    action:"Room Is Added",
    date:"null"
  });
  localStorage.setItem("room_name",room_name);
  window.location="kwitter_page.html";
}

function getData() {
  firebase.database().ref("/").on('value', function(snapshot) { 
    document.getElementById("output").innerHTML = ""; 
    snapshot.forEach(function(childSnapshot) { 
      childKey = childSnapshot.key; 
      Room_names = childKey; 
      console.log("Room Name - " + Room_names); 
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
      document.getElementById("output").innerHTML += row;
});});};
function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}