
let participantCount = 1;


document.getElementById("addParticipantBtn").addEventListener("click", () => {
  participantCount += 1;
  addParticipantSection(participantCount);
});


function addParticipantSection(count) {

  const participantHTML = `
    <section class="participant" id="participant${count}">
      <label for="participantName${count}">Name:</label>
      <input type="text" id="participantName${count}" name="participantName${count}">
      
      <label for="fee${count}">Fee:</label>
      <input type="number" id="fee${count}" name="fee${count}" min="0">
    </section>
  `;
  

  const addButton = document.getElementById("addParticipantBtn");
  addButton.insertAdjacentHTML("beforebegin", participantHTML);
}


document.getElementById("registrationForm").addEventListener("submit", submitForm);


function submitForm(event) {
  event.preventDefault();


  const totalFee = totalFees();
  const adultName = document.getElementById("participantName1").value;


  document.getElementById("registrationForm").style.display = "none";
  const summaryDiv = document.getElementById("summary");
  summaryDiv.classList.remove("hide");
  summaryDiv.innerHTML = successTemplate({
    name: adultName,
    count: participantCount,
    fee: totalFee
  });
}

// Function to calculate total fees
function totalFees() {
  let feeElements = document.querySelectorAll("[id^=fee]");
  feeElements = [...feeElements];
  return feeElements.reduce((sum, feeElement) => sum + Number(feeElement.value || 0), 0);
}


function successTemplate(info) {
  return `Thank you ${info.name} for registering. You have registered ${info.count} participants and owe $${info.fee} in Fees.`;
}
