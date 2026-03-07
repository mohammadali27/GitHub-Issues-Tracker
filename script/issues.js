const allDiv = document.getElementById("allDiv");
const openDiv = document.getElementById("openDiv");
const closedDiv = document.getElementById("closedDiv");
let totalIssues = document.getElementById("totalIssues");
let githubTotalIssues = document.getElementById("gitHtbTotalIssues");
let allIssuse = [];
const lodeIsses = () => {
  fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
    .then((res) => res.json())
    .then((json) => {
      allIssuse = json.data;
      displayLessons(allIssuse);
    });
};

const displayLessons = (lessens) => {
  console.log(lessens);
  const sectionContinor = document.getElementById("gitHtbTotalIssues");
  sectionContinor.innerHTML = "";
  for (const lessen of lessens) {
    let positionClass = "";
    if (lessen.priority === "high") {
      positionClass = "bg-[#feecec] text-[#ef4444]";
    } else if (lessen.priority === "medium") {
      positionClass = "bg-[#FFF6D1] text-[#F59E0B]";
    } else if (lessen.priority === "low") {
      positionClass = "bg-[#eeeff2] text-[#abb1bb]";
    }
    const btnlesson = document.createElement("div");
    btnlesson.innerHTML = `<div class="allcard  bg-white  space-y-3 m-3 p-3 rounded-lg shadow-lg  h-full ">
        <div class="flex justify-between">
          <img src="./assets/Open-Status.png" alt="" />
          <h1 class="${positionClass}  uppercase rounded-lg px-5">${lessen.priority}</h1>
        </div>
        <h1 class=" font-bold">${lessen.title}</h1>
        <p >
          ${lessen.description}
        </p>
        <div class="flex gap-2">
         <p class="bg-[#feecec] text-[#ef4444] rounded-xl px-5 uppercase">Bug</p>
        <p class="bg-[#fde68a] text-[#d97706] rounded-xl px-5 uppercase">help wanted</p>
        </div>
        
        <p >${lessen.id} by ${lessen.author} </p>
        <p>1/15/2024</p>
        
        </div>`;
    sectionContinor.append(btnlesson);
  }
  totalIssues.innerText = lessens.length;
};
lodeIsses();

allDiv.addEventListener("click", function () {
  displayLessons(allIssuse);
  allDiv.classList.add("btn-primary");
  openDiv.classList.remove("btn-primary");
  closedDiv.classList.remove("btn-primary");
});

openDiv.addEventListener("click", function () {
  const closedIssues = allIssuse.filter((issue) => issue.status === "open");
  displayLessons(closedIssues);
  openDiv.classList.add("btn-primary");
  allDiv.classList.remove("btn-primary");
  closedDiv.classList.remove("btn-primary");
});

closedDiv.addEventListener("click", function () {
  const closedIssues = allIssuse.filter((issue) => issue.status === "closed");
  displayLessons(closedIssues);
  closedDiv.classList.add("btn-primary");
  allDiv.classList.remove("btn-primary");
  openDiv.classList.remove("btn-primary");
});

function countIsses() {
  const allCard = document.querySelectorAll(".allcard");
  totalIssues.innerText = allCard.length;
}
