
const steps = ["one", "two", "three"];
const listTemplate = (step) => {
  return `<li>${step}</li>`;
};
const stepsHtml = steps.map(listTemplate).join("");
document.querySelector("#myList").innerHTML = stepsHtml;
