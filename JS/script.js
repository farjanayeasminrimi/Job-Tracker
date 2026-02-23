let totalCount = document.getElementById("totalCount");
let interviewCount = document.getElementById("interviewCount");
let rejectedCount = document.getElementById("rejectedCount");
let totalJobs = document.getElementById("totalJobs");

const allBtn = document.getElementById("allBtn");
const interviewSectionBtn = document.getElementById("interviewSectionBtn");
const rejectionSectionBtn = document.getElementById("rejectionSectionBtn");
const cardContainer = document.getElementById("card-container");
const interviewSection = document.getElementById("interview-section");
const rejectionSection = document.getElementById("rejection-section");

// total dashboard and main section
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
  // removing card
  const parent = event.target.parentNode.parentNode;
  if (parent.classList.contains("card-box") === true) {
    parent.remove();
  }

  // counting interview
  const targetBtn = event.target;
  if (targetBtn.innerText === "INTERVIEW") {
    if (!targetBtn.classList.contains("counted")) {
      interviewCount.innerText = Number(interviewCount.innerText) + 1;
      const statusDiv =
        targetBtn.parentNode.parentNode.parentNode.children[0].children[2].children[0];
      statusDiv.innerHTML = ` 
                <span
                  class="text-green-500 text-[1rem] bg-blue-50 font-medium rounded-md py-2 px-2 inline-block uppercase counted"
                >
                  interview
                </span>`;

      targetBtn.classList.add("counted");
      statusDiv.classList.add("counted");

      // Card moves to interview section
      const noInterview = document.querySelector("#interview-section #no-interview");
      noInterview.classList.add("hidden");
      interviewSection.appendChild(targetBtn.parentNode.parentNode.parentNode);
    }
  }

  // counting  rejection
  if (targetBtn.innerText === "REJECTED") {
    if (!targetBtn.classList.contains("counted")) {
      rejectedCount.innerText = Number(rejectedCount.innerText) + 1;
      const statusDiv =
        targetBtn.parentNode.parentNode.parentNode.children[0].children[2].children[0];
      statusDiv.innerHTML = ` 
                <span
                  class="text-red-400 text-[1rem] bg-blue-50 font-medium rounded-md py-2 px-2 inline-block uppercase counted"
                >
                  REJECTED
                </span>`;

      targetBtn.classList.add("counted");
      statusDiv.classList.add("counted");
      const noRejection = document.querySelector("#rejection-section #no-rejection");
      noRejection.classList.add("hidden");
      rejectionSection.appendChild(targetBtn.parentNode.parentNode.parentNode);
    }
  }
});

// toggle section

interviewSectionBtn.addEventListener("click", function () {
  cardContainer.classList.add("hidden");
  rejectionSection.classList.add("hidden");
  interviewSection.classList.remove("hidden");
});
allBtn.addEventListener("click", function () {
  interviewSection.classList.add("hidden");
  rejectionSection.classList.add("hidden");
  cardContainer.classList.remove("hidden");
});
rejectionSectionBtn.addEventListener("click", function () {
  interviewSection.classList.add("hidden");
  cardContainer.classList.add("hidden");
  rejectionSection.classList.remove("hidden");
});
