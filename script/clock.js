// Function to update the time
function bdTime() {
    // Set up the options for date and time formatting
    const options = { 
        timeZone: 'Asia/Dhaka', 
        weekday: 'long' ,
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        // hour: '2-digit', 
        // minute: '2-digit', 
        // second: '2-digit', 
        // hour12: true
    };

    // Get the current date and time in Bangladesh time zone
    const time = new Date().toLocaleString('en-US', options);

    // Update the HTML element with the current time
    document.getElementById("bd-time").innerText = time;
}

// Update the time every 1000 milliseconds (1 second)
setInterval(bdTime, 1000);

// Call the function once to show the time immediately when the page loads
bdTime();
