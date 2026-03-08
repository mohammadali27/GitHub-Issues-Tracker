const allDiv = document.getElementById("allDiv");
const openDiv = document.getElementById("openDiv");
const closedDiv = document.getElementById("closedDiv");
let totalIssues = document.getElementById("totalIssues");
let githubTotalIssues = document.getElementById("gitHtbTotalIssues");
// let spner = document.getElementById("speer");
let allIssuse = [];

// const manegeSpeer = (status) => {
//   if (status === true) {
//     spner.classList.remove("hidden");
//     githubTotalIssues.classList.add("hidden");
//   } else {
//     githubTotalIssues.classList.remove("hidden");
//     spner.classList.add("hidden");
//   }
// };

const lodeIsses = () => {
  // manegeSpeer(true);
  fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
    .then((res) => res.json())
    .then((json) => {
      allIssuse = json.data;
      displayLessons(allIssuse);
       manegeSpeer(false);
    })
    
};
const lodeWordDitile = async (id) => {
  // manegeSpeer(true);
  const url = `https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`;
  const res = await fetch(url);
  const ditles = await res.json();

  const issue = ditles.data;
  displayWord(ditles.data);
  const ditilesBox = document.getElementById("ditiles-contener");
  ditilesBox.innerHTML = ` <div class=" space-y-5 ">
      <h1 class="font-bold text-2xl">${issue.title}</h1>
      
      <ul class="flex gap-2">
        <li class="bg-[#00a96e] rounded-xl px-5 ">${issue.status}</li>
        <li>${issue.author}</li>
        <li>${issue.date || "1/15/2024"}</li>
      </ul>
      <div class="flex gap-2">
        <p class="bg-[#feecec] text-[#ef4444] rounded-xl px-5 uppercase">${issue.type || "Bug"}</p>
        <p class="bg-[#fde68a] text-[#d97706] rounded-xl px-5 uppercase">
          ${issue.label || "help wanted"}
        </p>
      </div>
      <p>
        ${issue.description}
      </p>
      <div class="flex gap-50">
        <div class="">
          <p>Assignee</p>
          <p>${issue.author}</p>
        </div>
        <div class="">
          <p>Priority:</p>
          <p>High</p>
        </div>
      </div>
    </div>`;

  document.getElementById("my_modal_5").showModal();
  // manegeSpeer(false);
};
const displayWord = (word) => {};
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

    let allcards =
      "allcard  bg-white  space-y-3 m-3 p-3 rounded-lg shadow-lg min-h-[350px]";
    if (lessen.status === "open") {
      allcards += " border-t-4 border-t-[#00a96e]";
    } else if (lessen.status === "closed") {
      allcards += " border-t-4 border-t-[#a85587]";
    }

    let statusimg = "";
    if (lessen.status === "open") {
      statusimg = "./assets/Open-Status.png";
    } else {
      statusimg = "./assets/Closed- Status.png";
    }

    const btnlesson = document.createElement("div");
    btnlesson.innerHTML = `<div onclick="lodeWordDitile(${lessen.id})" class="${allcards}">
        <div class="flex justify-between">
          <img src="${statusimg}" alt="" />
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
        
        <p ># ${lessen.id} by ${lessen.author} </p>
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
  const openIssues = allIssuse.filter((issue) => issue.status === "open");
  displayLessons(openIssues);
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
document.getElementById("btn-search").addEventListener("click", () => {
  const input = document.getElementById("input-search");
  const searchValue = input.value.trim().toLowerCase();
  console.log(searchValue);
  fetch(
    `https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${searchValue}`,
  )
    .then((res) => res.json())
    .then((data) => {
      const allWorld = data.data;
      console.log(allWorld);
      const featerWord = allWorld.filter((word) =>
        word.title.toLowerCase().includes(searchValue)
      );
      displayLessons(featerWord);
    });
});
