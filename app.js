function setAlarm() {
  const alarmTimeInput = document.getElementById("alarmTime");
  const alarmTime = alarmTimeInput.value;

  if (alarmTime) {
    const alarmsList = document.getElementById("alarmsList");
    const li = document.createElement("li");
    li.textContent = alarmTime;

    const now = new Date();
    const [hours, minutes] = alarmTime.split(":");
    const alarmDate = new Date();
    alarmDate.setHours(hours);
    alarmDate.setMinutes(minutes);
    alarmDate.setSeconds(0);

    if (alarmDate < now) {
      li.classList.add("past");
    }

    alarmsList.appendChild(li);

    alarmTimeInput.value = "";
  } else {
    alert("Please enter a valid time.");
  }
}
function checkAlarms() {
  const alarmsList = document.getElementById("alarmsList").children;
  const now = new Date();
  Array.from(alarmsList).forEach((alarm) => {
    const [hours, minutes] = alarm.textContent.split(":");
    const alarmDate = new Date();
    alarmDate.setHours(hours);
    alarmDate.setMinutes(minutes);
    alarmDate.setSeconds(0);

    if (alarmDate < now) {
      alarm.classList.add("past");
    }
  });
}
setInterval(checkAlarms, 60000);
