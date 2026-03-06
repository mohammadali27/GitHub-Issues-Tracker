const allDiv = document.getElementById("allDiv");
const openDiv = document.getElementById("openDiv");
const closedDiv = document.getElementById("closedDiv");
let totalIssues = document.getElementById("totalIssues");
let githubTotalIssues = document.getElementById("gitHtbTotalIssues");
allDiv.addEventListener("click", function() {
  allDiv.classList.add("btn-primary");
  openDiv.classList.remove("btn-primary");
  closedDiv.classList.remove("btn-primary");
});

openDiv.addEventListener("click", function() {
  openDiv.classList.add("btn-primary");
  allDiv.classList.remove("btn-primary");
  closedDiv.classList.remove("btn-primary");
});

closedDiv.addEventListener("click", function() {
  closedDiv.classList.add("btn-primary");
  allDiv.classList.remove("btn-primary");
  openDiv.classList.remove("btn-primary");
});

function countIsses (){
    const allCard=document.querySelectorAll(".allcard");
    totalIssues.innerText=allCard.length;
}
countIsses();