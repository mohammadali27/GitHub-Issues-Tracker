// const allDiv = document.getElementById("allDiv");
// const openDiv = document.getElementById("openDiv");
// const closedDiv = document.getElementById("closedDiv");
// let totalIssues = document.getElementById("totalIssues");
// let githubTotalIssues = document.getElementById("gitHtbTotalIssues");
// let spner = document.getElementById("spner");
// let allIssuse = [];

// // Spinner manage function
// const manegeSpeer = (status) => {
//   if (status === true) {
//     spner.classList.remove("hidden");
//     githubTotalIssues.classList.add("hidden");
//   } else {
//     githubTotalIssues.classList.remove("hidden");
//     spner.classList.add("hidden");
//   }
// };

// // Load all issues
// const lodeIsses = () => {
//   manegeSpeer(true);
//   fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
//     .then(res => res.json())
//     .then(json => {
//       allIssuse = json.data;
//       displayLessons(allIssuse);
//       manegeSpeer(false);
//     })
//     .catch(err => {
//       console.error(err);
//       manegeSpeer(false);
//     });
// };

// // Load issue details for modal
// const lodeWordDitile = async (id) => {
//   manegeSpeer(true);
//   try {
//     const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`);
//     const data = await res.json();
//     const issue = data.data;

//     const ditilesBox = document.getElementById("ditiles-contener");
//     ditilesBox.innerHTML = `
//       <div class="space-y-5">
//         <h1 class="font-bold text-2xl">${issue.title}</h1>
//         <ul class="flex gap-2">
//           <li class="bg-[#00a96e] rounded-xl px-5">${issue.status}</li>
//           <li>${issue.author}</li>
//           <li>${issue.date || "1/15/2024"}</li>
//         </ul>
//         <div class="flex gap-2">
//           <p class="bg-[#feecec] text-[#ef4444] rounded-xl px-5 uppercase">${issue.type || "Bug"}</p>
//           <p class="bg-[#fde68a] text-[#d97706] rounded-xl px-5 uppercase">${issue.label || "help wanted"}</p>
//         </div>
//         <p>${issue.description}</p>
//         <div class="flex gap-50">
//           <div>
//             <p>Assignee</p>
//             <p>${issue.author}</p>
//           </div>
//           <div>
//             <p>Priority:</p>
//             <p>${issue.priority || "High"}</p>
//           </div>
//         </div>
//       </div>
//     `;
//     document.getElementById("my_modal_5").showModal();
//   } catch (err) {
//     console.error(err);
//   } finally {
//     manegeSpeer(false);
//   }
// };

// // Display issues in grid
// const displayLessons = (lessens) => {
//   const sectionContinor = document.getElementById("gitHtbTotalIssues");
//   sectionContinor.innerHTML = "";

//   lessens.forEach(lessen => {
//     let priorityClass = "";
//     if (lessen.priority === "high") priorityClass = "bg-[#feecec] text-[#ef4444]";
//     else if (lessen.priority === "medium") priorityClass = "bg-[#FFF6D1] text-[#F59E0B]";
//     else if (lessen.priority === "low") priorityClass = "bg-[#eeeff2] text-[#abb1bb]";

//     let allcards = "allcard bg-white space-y-3 m-3 p-3 rounded-lg shadow-lg min-h-[350px]";
//     allcards += lessen.status === "open" ? " border-t-4 border-t-[#00a96e]" : " border-t-4 border-t-[#a85587]";
//     let statusimg = lessen.status === "open" ? "./assets/Open-Status.png" : "./assets/Closed- Status .png";

//     const btnlesson = document.createElement("div");
//     btnlesson.innerHTML = `
//       <div onclick="lodeWordDitile(${lessen.id})" class="${allcards}">
//         <div class="flex justify-between">
//           <img src="${statusimg}" alt="" />
//           <h1 class="${priorityClass} uppercase rounded-lg px-5">${lessen.priority}</h1>
//         </div>
//         <h1 class="font-bold">${lessen.title}</h1>
//         <p>${lessen.description}</p>
//         <div class="flex gap-2">
//           <p class="bg-[#feecec] text-[#ef4444] rounded-xl px-5 uppercase">Bug</p>
//           <p class="bg-[#fde68a] text-[#d97706] rounded-xl px-5 uppercase">help wanted</p>
//         </div>
//         <p>#${lessen.id} by ${lessen.author}</p>
//         <p>${lessen.date || "1/15/2024"}</p>
//       </div>
//     `;
//     sectionContinor.appendChild(btnlesson);
//   });

//   totalIssues.innerText = lessens.length;
// };

// // Filters
// allDiv.addEventListener("click", () => {
//   displayLessons(allIssuse);
//   allDiv.classList.add("btn-primary");
//   openDiv.classList.remove("btn-primary");
//   closedDiv.classList.remove("btn-primary");
// });

// openDiv.addEventListener("click", () => {
//   displayLessons(allIssuse.filter(i => i.status === "open"));
//   openDiv.classList.add("btn-primary");
//   allDiv.classList.remove("btn-primary");
//   closedDiv.classList.remove("btn-primary");
// });

// closedDiv.addEventListener("click", () => {
//   displayLessons(allIssuse.filter(i => i.status === "closed"));
//   closedDiv.classList.add("btn-primary");
//   allDiv.classList.remove("btn-primary");
//   openDiv.classList.remove("btn-primary");
// });

// // Search functionality
// document.getElementById("btn-search").addEventListener("click", () => {
//   const input = document.getElementById("input-search");
//   const hint = document.querySelector(".validator-hint");
//   const searchValue = input.value.trim().toLowerCase();

//   if (searchValue === "") {
//     hint.classList.remove("hidden");
//     return;
//   } else {
//     hint.classList.add("hidden");
//   }

//   manegeSpeer(true);
//   fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${encodeURIComponent(searchValue)}`)
//     .then(res => res.json())
//     .then(data => {
//       manegeSpeer(false);
//       displayLessons(data.data || []);
//     })
//     .catch(err => {
//       console.error(err);
//       manegeSpeer(false);
//     });
// });

// // Initial load
// lodeIsses();