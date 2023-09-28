//------------------------------ABOUT------------------------------------------

let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname){  //onClick hide underline and content
for(tablink of tablinks){
  tablink.classList.remove("active-link");
}
for(tabcontent of tabcontents){
  tabcontent.classList.remove("active-tab");
}
// Add underline to experience and education
event.currentTarget.classList.add("active-link");
//Add content to experience and eduaction
document.getElementById(tabname).classList.add("active-tab");
}


const scriptURL =
"https://script.google.com/macros/s/AKfycbzHjyoso6jxMtGu7CzmVTHUgKvlS07F_91MWyiDVOhVrNhgQfdIrRjJi3v82Xv5o3jU/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
e.preventDefault();
fetch(scriptURL, { method: "POST", body: new FormData(form) })
  .then((response) => {
    msg.innerHTML = "Message sent successfully!";
    setTimeout(function () {
      msg.innerHTML = "";
    }, 5000);
    form.reset();
  })
  .catch((error) => console.error("Error!", error.message));
});







