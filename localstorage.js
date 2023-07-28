// function saveData() {
//   let Uname, email, pswd;
//   Uname = document.getElementById("name").value;
//   email = document.getElementById("email").value;
//   pswd = document.getElementById("pswd").value;

//   localStorage.setItem("name", Uname);
//   localStorage.setItem("email", email);
//   localStorage.setItem("pswd", pswd);

//   if (Uname && email && pswd) {
//     return saveData();
//   } else {
//     console.log("Data is not matched");
//   }
// }

let userName = document.getElementById("name");
let password = document.getElementById("pswd");

function validateForm() {
  if (userName.value == "") {
    console.log("Username is empty");
  }
  return false;
}
