const btn = document.getElementById('mode-toggle');
btn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
     btn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});


const input = document.getElementById("myInput");
const para = document.getElementById("para")
// -------------------------------UPPER CASE KE LIYE FUNCTION --------------------------------
const uppreCaseBtn = document.getElementById("uppreCaseBtn");
uppreCaseBtn.addEventListener("click", function () {
    const input = document.getElementById("myInput").value;
    para.innerText = input.toUpperCase();
    
});
// --------------------LOWER CASE KE LIYE FUNCTION ------------------------------------------
const lowercasebtn = document.getElementById("lowercasebtn");
lowercasebtn.addEventListener("click", function () {
    const input = document.getElementById("myInput").value;
    para.innerText = input.toLowerCase();
});
// ----------------BOLD KE LIYE FUNCTION -----------------------------------------------------
const boldbtn = document.getElementById("boldbtn");
boldbtn.addEventListener("click", function () {
    const input = document.getElementById("myInput").value;

    para.style.fontWeight = "900";
});
// ----------------------ITALIC KE LIYE FUNCTION -----------------------------------------------
const italic = document.getElementById("italic");
italic.addEventListener("click", function () {
    const input = document.getElementById("myInput").value;
    para.style.fontStyle = "italic";

});
// ------------- COLOR CHANGE FUNCTION -------------------------
// function changeColor() {
    
// }
//---------------FIRST LETTER CAPITAL---------------------------------------------------------------
const firstletter = document.getElementById("firstletter");
firstletter.addEventListener("click", function () {
    const input = document.getElementById("myInput").value;
    para.style.textTransform = "capitalize";

});