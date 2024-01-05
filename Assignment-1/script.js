const inputGroups = document.getElementById("input-groups");
const addSubjectButton = document.getElementById("add-subject");
const calculateButton = document.getElementById("calculate");
let subjectCount = 1;

addSubjectButton.addEventListener("click", () => {
  const newInputGroup = document.createElement("div");
  newInputGroup.classList.add("input-group");
  newInputGroup.innerHTML = `
    <label for="grade${subjectCount}">Grade ${subjectCount}:</label><input type="number" id="grade${subjectCount}">
    <label for="credit${subjectCount}">Credit ${subjectCount}:</label><input type="number" id="credit${subjectCount}">
  `;
  inputGroups.appendChild(newInputGroup);
  subjectCount++;
});

calculateButton.addEventListener("click", () => {
  const grades = [];
  const credits = [];

  for (let i = 1; i < subjectCount; i++) {
    grades.push(parseFloat(document.getElementById(`grade${i}`).value));
    credits.push(parseFloat(document.getElementById(`credit${i}`).value));
  }

  const cgpa = calculateCGPA(grades, credits);

  const result = document.getElementById("result");
  result.textContent = `Your CGPA is: ${cgpa.toFixed(2)}`;
});

function calculateCGPA(grades, credits) {
    const totalGradePoints = grades.map((grade, index) => grade * credits[index]).reduce((sum, point) => sum + point, 0);
    const totalCredits = credits.reduce((sum, credit) => sum + credit, 0);
    return totalGradePoints / totalCredits;
  }
