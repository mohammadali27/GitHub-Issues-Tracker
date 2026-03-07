const allDiv = document.getElementById("allDiv");
const openDiv = document.getElementById("openDiv");
const closedDiv = document.getElementById("closedDiv");
let totalIssues = document.getElementById("totalIssues");
let githubTotalIssues = document.getElementById("gitHtbTotalIssues");
const lodeIsses =()=>{
    fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
    .then(res => res.json())
    .then((json)=>displayLessons(json.data)
    )
};

const displayLessons =(lessens)=>{
console.log(lessens);
const sectionContinor=document.getElementById("gitHtbTotalIssues");
// sectionContinor.innerHTML="";
for (const lessen of lessens) {
    const btnlesson =document.createElement("div");
    btnlesson.innerHTML=`<div class="allcard  bg-white space-y-3 m-3 p-3 rounded-lg">
        <div class="flex justify-between">
          <img src="./assets/Open-Status.png" alt="" />
          <h1 class="bg-[#feecec] text-[#ef4444]">${lessen.priority}</h1>
        </div>
        <h1 class=" font-bold">${lessen.title}</h1>
        <p>
          ${lessen.description}
        </p>
        <div class="flex gap-2">
         <p class="bg-[#feecec] text-[#ef4444] rounded-xl px-5">Bug</p>
        <p class="bg-[#fde68a] text-[#d97706] rounded-xl px-5">help wanted</p>
        </div>
        
        <p>${lessen.id} by ${lessen.author} </p>
        
        </div>`
        sectionContinor.append(btnlesson);
}
countIsses();

};
lodeIsses();

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
