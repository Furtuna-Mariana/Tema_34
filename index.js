document.addEventListener('DOMContentLoaded', function() {
    const showTimeBtn = document.getElementById('showTimeBtn');
    const clockDiv = document.getElementById('clock');

    showTimeBtn.addEventListener('click', function() {
        updateClock(); 

        setInterval(updateClock, 1000);
    });

    function updateClock() {
        const currentDate = new Date();
        const formattedTime = currentDate.toLocaleTimeString();
        clockDiv.innerText = formattedTime;
    }
});
















