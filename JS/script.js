let totalCount = document.getElementById("totalCount");
let interviewCount = document.getElementById("interviewCount");
let rejectedCount = document.getElementById("rejectedCount");
let totalJobs = document.getElementById("totalJobs");

const allBtn = document.getElementById("allBtn");
const interviewSectionBtn = document.getElementById("interviewSectionBtn");
const rejectionSectionBtn = document.getElementById("rejectionSectionBtn");
const cardContainer = document.getElementById("card-container");

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
}

cardContainer.addEventListener("click", function (event) {
  // removing card
  const parent = event.target.parentNode.parentNode;
  if (parent.classList.contains("card-box") === true) {
    parent.remove();
  }

  const targetBtn = event.target;
  if (targetBtn.innerText === "INTERVIEW") {
    if (!targetBtn.classList.contains("counted")) {
      interviewCount.innerText = Number(interviewCount.innerText) + 1;
      targetBtn.classList.add("counted");
    }
  }
  if (targetBtn.innerText === "REJECTED") {
    if (!targetBtn.classList.contains("counted")) {
      rejectedCount.innerText = Number(rejectedCount.innerText) + 1;
      targetBtn.classList.add("counted");
    }
  }
});
