// // Set the date we're counting down to
// const eventDate = new Date("Nov 1, 2026 00:00:00").getTime();

// const timer = setInterval(function() {
//     const now = new Date().getTime();
//     const distance = eventDate - now;

//     // Time calculations for days, hours, minutes and seconds
//     const days = Math.floor(distance / (1000 * 60 * 60 * 24));
//     const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     const seconds = Math.floor((distance % (1000 * 60)) / 1000);

//     // Display the result in the elements
//     document.getElementById("days").innerText = days;
//     document.getElementById("hours").innerText = hours;
//     document.getElementById("minutes").innerText = minutes;
//     document.getElementById("seconds").innerText = seconds;

//     // If the count down is finished
//     if (distance < 0) {
//         clearInterval(timer);
//         document.getElementById("days").innerText = "EXPIRED";
//     }
// }, 1000);

// function filterEvents(category) {
//     let cards = document.querySelectorAll('.event-content');
//     cards.forEach(card => {
//         let title = card.querySelector('h2').innerText.toLowerCase();
//         if (category === 'all' || title.includes(category)) {
//             card.style.display = "flex";
//         } else {
//             card.style.display = "none";
//         }
//     });
// }