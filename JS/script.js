let totalCount = document.getElementById("totalCount");
let interviewCount = document.getElementById("interviewCount");
let rejectedCount = document.getElementById("rejectedCount");
let totalJobs = document.getElementById("totalJobs");

const allBtn = document.getElementById("allBtn");
const interviewSectionBtn = document.getElementById("interviewSectionBtn");
const rejectionSectionBtn = document.getElementById("rejectionSectionBtn");
const cardContainer = document.getElementById("card-container");
// setting count
totalCount.innerText = cardContainer.children.length;
totalJobs.innerText = cardContainer.children.length;

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
  console.log(event.target);
});
