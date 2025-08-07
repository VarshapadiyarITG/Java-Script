//-------------------dark mode change ------------------------------------------------------------
const btn = document.getElementById('mode-toggle');
btn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    btn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});
// -------------------print kar vane ke liye ------------------------------------------------------
function overWrite() {
    let input = document.getElementById("myInput");
    let para = document.getElementById("para");
    para.innerText = input.value
}
const input = document.getElementById("myInput");
const para = document.getElementById("para")
// -------------------------------UPPER CASE KE LIYE FUNCTION --------------------------------------
const uppreCaseBtn = document.getElementById("uppreCaseBtn");
uppreCaseBtn.addEventListener("click", function () {
    const input = document.getElementById("myInput").value;
    para.classList.toggle("uppercase");
    para.classList.remove("capital")
    para.classList.remove("lowercase")
    //para.innerText = input.toUpperCase();

});
// --------------------LOWER CASE KE LIYE FUNCTION -------------------------------------------------
const lowercasebtn = document.getElementById("lowercasebtn");
lowercasebtn.addEventListener("click", function () {
    const input = document.getElementById("myInput").value;
    para.classList.toggle("lowercase");
    para.classList.remove("uppercase")
    para.classList.remove("capital")
    // para.innerText = input.toLowerCase();
});
// ----------------BOLD KE LIYE FUNCTION ------------------------------------------------------------
const boldbtn = document.getElementById("boldbtn");
boldbtn.addEventListener("click", function () {
    const input = document.getElementById("myInput").value;

    para.classList.toggle("fontweight");
    // para.style.fontWeight = "900";
});
// ----------------------ITALIC KE LIYE FUNCTION ------------------------------------------------------
const italic = document.getElementById("italic");
italic.addEventListener("click", function () {
    const input = document.getElementById("myInput").value;
    para.classList.toggle("italic");
    // para.style.fontStyle = "italic";

});
// ------------- COLOR CHANGE FUNCTION -----------------------------------------------------------------
function changeColor() {
    let color = document.getElementById("colorinput").value;
    if (para.style.color == "black") {
        para.style.color = color;
    }
    else {
        para.style.color = "black"
    }
}
//---------------FIRST LETTER CAPITAL--------------------------------------------------------------------
const firstletter = document.getElementById("firstletter");
firstletter.addEventListener("click", function () {
    const input = document.getElementById("myInput").value;
    para.classList.toggle("capital");
    para.classList.remove("lowercase")
    para.classList.remove("uppercase")
    //para.style.textTransform = "capitalize";

});