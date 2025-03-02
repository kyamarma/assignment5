function bdTime() {
    // Set up the options for date and time formatting
    const options = {
        timeZone: 'Asia/Dhaka',
        weekday: 'long',
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

document.getElementById("btn_Completed").addEventListener('click', function () {
    alert("board update Successfully");
    const title = document.getElementById('historyAdd');
    title.innerText = 'You have completed the task Fix Mobile issue at ';
    console.log(title)
// const number ={};
//     const numbers = document.getElementById('numDisplay');
//     numbers =  number - 1
//     console.log(numbers)
document.getElementById("numDisplay").addEventListener('click', function nums(){
    const num = 5;
    const numb = { };
    for(const number of numbers){
        numb = number - 1
    }
    return numb ;
})
const result = nums ();
console.log(result)
})


