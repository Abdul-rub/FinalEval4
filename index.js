// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("#masaiForm").addEventListener("submit",myFunction)
var arr=JSON.parse(localStorage.getItem("schedule")) || []
function myFunction(){
    event.preventDefault();

    var obj={
        matchNumber:masaiForm.matchNum.value,
        TeamA:masaiForm.teamA.value,
        TeamB:masaiForm.teamA.value,
        Date:masaiForm.date.value,
        Venue:masaiForm.venue.value
    }
    arr.push(obj)
   


localStorage.setItem("schedule", JSON.stringify(arr));
console.log(arr)
window.location.href="matches.html"
}