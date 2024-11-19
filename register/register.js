document.addEventListener("DOMContentLoaded", () => {
  let participantCount = 1;

  document.getElementById("addParticipantBtn").addEventListener("click", () => {
    participantCount += 1;
    addParticipantSection(participantCount);
  });

  function addParticipantSection(count) {
    const participantHTML = participantTemplate(count);
    const addButton = document.getElementById("addParticipantBtn");
    addButton.insertAdjacentHTML("beforebegin", participantHTML);
  }

  function participantTemplate(count) {
    return `
      <section class="participant participant${count}">
        <p>Participant ${count}</p>
        <div class="item">
          <label for="fname${count}">First Name<span>*</span></label>
          <input id="fname${count}" type="text" name="fname${count}" required />
        </div>
        <div class="item activities">
          <label for="activity${count}">Activity #<span>*</span></label>
          <input id="activity${count}" type="text" name="activity${count}" />
        </div>
        <div class="item">
          <label for="fee${count}">Fee ($)<span>*</span></label>
          <input id="fee${count}" type="number" name="fee${count}" />
        </div>
        <div class="item">
          <label for="date${count}">Desired Date <span>*</span></label>
          <input id="date${count}" type="date" name="date${count}" />
        </div>
        <div class="item">
          <p>Grade</p>
          <select name="grade${count}">
            <option selected value="" disabled></option>
            <option value="1">1st</option>
            <option value="2">2nd</option>
            <option value="3">3rd</option>
            <option value="4">4th</option>
            <option value="5">5th</option>
            <option value="6">6th</option>
            <option value="7">7th</option>
            <option value="8">8th</option>
            <option value="9">9th</option>
            <option value="10">10th</option>
            <option value="11">11th</option>
            <option value="12">12th</option>
          </select>
        </div>
      </section>
    `;
  }

  document.getElementById("registrationForm").addEventListener("submit", submitForm);

  function submitForm(event) {
    event.preventDefault();

    const totalFee = totalFees();
    const adultName = document.getElementById("adult_name").value;

    document.getElementById("registrationForm").style.display = "none";

    const summaryDiv = document.getElementById("summary");
    summaryDiv.classList.remove("hide");
    summaryDiv.innerHTML = successTemplate({
      name: adultName,
      count: participantCount,
      fee: totalFee,
    });
  }

  function totalFees() {
    let feeElements = document.querySelectorAll("[id^=fee]");
    feeElements = [...feeElements];
    return feeElements.reduce(
      (sum, feeElement) => sum + Number(feeElement.value || 0),
      0
    );
  }

  function successTemplate(info) {
    return `Thank you ${info.name} for registering. You have registered ${info.count} participants and owe $${info.fee} in Fees.`;
  }
});
