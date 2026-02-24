let totalCount = document.getElementById("totalCount");
let interviewCount = document.getElementById("interviewCount");
let rejectedCount = document.getElementById("rejectedCount");
let totalJobs = document.getElementById("totalJobs");

const allBtn = document.getElementById("allBtn");
const interviewSectionBtn = document.getElementById("interviewSectionBtn");
const rejectionSectionBtn = document.getElementById("rejectionSectionBtn");

const mainContainer = document.getElementById("main-section");
const cardContainer = document.getElementById("card-container");

const interviewButtons = document.getElementsByClassName("interview");
const rejectionButtons = document.getElementsByClassName("rejection");
const deleteButtons = document.querySelectorAll(".right i");

const interviewSection = document.getElementById("interview-section");
const rejectionSection = document.getElementById("rejection-section");

// setting bg-color to active btn
function activeSectionBtn(id) {
  allBtn.classList.remove("bg-[#3B82F6]", "text-white");
  interviewSectionBtn.classList.remove("bg-[#3B82F6]", "text-white");
  rejectionSectionBtn.classList.remove("bg-[#3B82F6]", "text-white");

  allBtn.classList.add("text-gray-500");
  interviewSectionBtn.classList.add("text-gray-500");
  rejectionSectionBtn.classList.add("text-gray-500");

  const selected = document.getElementById(id);
  selected.classList.add("bg-[#3B82F6]", "text-white");
  selected.classList.remove("text-gray-500");
}

// function getStatus(card) {
//   return card.getAttribute("data-status") || "none";
// }

function setStatus(card, status) {
  // card.setAttribute("data-status", status);

  const statusDiv = card.children[0].children[2].children[0];

  if (status === "interview") {
    statusDiv.innerHTML = `
      <span class="text-green-500 text-[1rem] bg-blue-50 font-medium rounded-md py-2 px-2 inline-block uppercase">
        interview
      </span>`;
  } else if (status === "rejected") {
    statusDiv.innerHTML = `
      <span class="text-red-400 text-[1rem] bg-blue-50 font-medium rounded-md py-2 px-2 inline-block uppercase">
        REJECTED
      </span>`;
  } else {
    statusDiv.innerHTML = `
      <span class="text-[#002C5C] text-[1rem] bg-blue-50 font-medium rounded-md py-2 px-2 inline-block uppercase">
        Not Applied
      </span>`;
  }
}

function updateNoJobUI() {
  const noInterview = document.querySelector("#interview-section #no-interview");
  const noRejection = document.querySelector("#rejection-section #no-rejection");

  const interviewCards = interviewSection.querySelectorAll(".card-box").length;
  const rejectionCards = rejectionSection.querySelectorAll(".card-box").length;

  if (noInterview) noInterview.classList.toggle("hidden", interviewCards > 0);
  if (noRejection) noRejection.classList.toggle("hidden", rejectionCards > 0);
}

function updateCounts() {
  const available = cardContainer.querySelectorAll(".card-box").length;
  const interview = interviewSection.querySelectorAll(".card-box").length;
  const rejected = rejectionSection.querySelectorAll(".card-box").length;

  totalCount.innerText = available + interview + rejected;
  interviewCount.innerText = interview;
  rejectedCount.innerText = rejected;
  if (!cardContainer.classList.contains("hidden")) totalJobs.innerText = available;
  else if (!interviewSection.classList.contains("hidden")) totalJobs.innerText = interview;
  else if (!rejectionSection.classList.contains("hidden")) totalJobs.innerText = rejected;
}

// init
updateNoJobUI();
updateCounts();

// deleting card
for (let button of deleteButtons) {
  button.addEventListener("click", function () {
    const parent = button.parentNode.parentNode;
    parent.remove();
    updateNoJobUI();
    updateCounts();
  });
}

// button click function on interview button
for (let button of interviewButtons) {
  button.addEventListener("click", function (event) {
    const targetBtn = event.target;
    const card = targetBtn.parentNode.parentNode.parentNode;

    setStatus(card, "interview");

    const noInterview = document.querySelector("#interview-section #no-interview");
    if (noInterview) noInterview.classList.add("hidden");

    interviewSection.appendChild(card);

    // auto switch tab
    // cardContainer.classList.add("hidden");
    // rejectionSection.classList.add("hidden");
    // interviewSection.classList.remove("hidden");
    // activeSectionBtn("interviewSectionBtn");

    updateNoJobUI();
    updateCounts();
  });
}

// button click function on rejection button
for (let button of rejectionButtons) {
  button.addEventListener("click", function (event) {
    const targetBtn = event.target;
    const card = targetBtn.parentNode.parentNode.parentNode;

    setStatus(card, "rejected");

    const noRejection = document.querySelector("#rejection-section #no-rejection");
    if (noRejection) noRejection.classList.add("hidden");

    rejectionSection.appendChild(card);

    // auto switch tab
    // interviewSection.classList.add("hidden");
    // cardContainer.classList.add("hidden");
    // rejectionSection.classList.remove("hidden");
    // activeSectionBtn("rejectionSectionBtn");

    updateNoJobUI();
    updateCounts();
  });
}

// toggle section
interviewSectionBtn.addEventListener("click", function () {
  cardContainer.classList.add("hidden");
  rejectionSection.classList.add("hidden");
  interviewSection.classList.remove("hidden");
  activeSectionBtn("interviewSectionBtn");
  updateCounts();
});

allBtn.addEventListener("click", function () {
  interviewSection.classList.add("hidden");
  rejectionSection.classList.add("hidden");
  cardContainer.classList.remove("hidden");
  activeSectionBtn("allBtn");
  updateCounts();
});

rejectionSectionBtn.addEventListener("click", function () {
  interviewSection.classList.add("hidden");
  cardContainer.classList.add("hidden");
  rejectionSection.classList.remove("hidden");
  activeSectionBtn("rejectionSectionBtn");
  updateCounts();
});
