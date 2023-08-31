// Clock update
$(document).ready(function () {
    updateTime();

    function updateTime() {
        var currentTime = new Date();
        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        var ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;

        var formattedTime = `${hours}:${padZero(minutes)} ${ampm}`;
        $("#current-time").text(formattedTime);

        setTimeout(updateTime, 1000);
    }

    function padZero(number) {
        return (number < 10 ? '0' : '') + number;
    }

    // Dropdown and AM/PM button functionality
    $(".dropdown-button").click(function () {
        $(this).siblings(".dropdown-content").toggle();
    });

    $(".am-button").click(function () {
        $(this).addClass("selected");
        $(this).siblings(".pm-button").removeClass("selected");
    });

    $(".pm-button").click(function () {
        $(this).addClass("selected");
        $(this).siblings(".am-button").removeClass("selected");
    });

    // Initialize flatpickr for time picker
    flatpickr("#timepicker", {
        enableTime: true,
        noCalendar: true,
        dateFormat: "h:i",
        time_24hr: false
    });

    // Handle AM/PM buttons outside the modal
    $(".am-button").click(function () {
        $(this).addClass("selected");
        $(".pm-button").removeClass("selected");
    });

    $(".pm-button").click(function () {
        $(this).addClass("selected");
        $(".am-button").removeClass("selected");
    });
});

const toggleInput = document.getElementById("toggle-checkbox");
const toggleCircle = document.querySelector(".toggle-circle");

toggleCircle.addEventListener("click", () => {
  toggleInput.checked = !toggleInput.checked;
  toggleInput.dispatchEvent(new Event("change"));
});

toggleInput.addEventListener("change", () => {
  const isChecked = toggleInput.checked;
  if (isChecked) {
    toggleCircle.style.backgroundColor = "#4f5571";
  } else {
    toggleCircle.style.backgroundColor = "#E1E4F";
  }
});
