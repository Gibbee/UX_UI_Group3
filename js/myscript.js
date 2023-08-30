//current time code

$(document).ready(function () {
    updateTime();

    function updateTime() {
        var currentTime = new Date();
        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        var seconds = currentTime.getSeconds();

        var ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12; // Convert to 12-hour format

        var formattedTime = `${hours}:${padZero(minutes)}: ${ampm}`;

        $("#current-time").text(formattedTime);

        setTimeout(updateTime, 1000); // Update every second
    }

    function padZero(number) {
        return (number < 10 ? '0' : '') + number;
    }
});

//checkboxes

$(document).ready(function() {
    $(".am-button").click(function() {
        $(this).addClass("selected");
        $(this).siblings(".pm-button").removeClass("selected");
    });

    $(".pm-button").click(function() {
        $(this).addClass("selected");
        $(this).siblings(".am-button").removeClass("selected");
    });
});
