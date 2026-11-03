// countdown to the event (date comes from data-date on #countdown)
const countdown = document.getElementById("countdown");

if (countdown) {
    const eventDate = new Date(countdown.dataset.date).getTime();

    const timer = setInterval(function () {
        const now = new Date().getTime();
        const distance = eventDate - now;

        // event already started / finished
        if (distance < 0) {
            clearInterval(timer);
            countdown.innerHTML = "<p class='event_over'>🎉 This event has started or is over. Thank you for being part of Spandan!</p>";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").innerText = String(days).padStart(2, "0");
        document.getElementById("hours").innerText = String(hours).padStart(2, "0");
        document.getElementById("minutes").innerText = String(minutes).padStart(2, "0");
        document.getElementById("seconds").innerText = String(seconds).padStart(2, "0");
    }, 1000);
}

// click on the poster to see it big, click again (or press Esc) to close
const poster = document.getElementById("poster_img");
const lightbox = document.getElementById("lightbox");

poster.addEventListener("click", function () {
    lightbox.querySelector("img").src = poster.src;
    lightbox.classList.add("show");
});

lightbox.addEventListener("click", function () {
    lightbox.classList.remove("show");
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        lightbox.classList.remove("show");
    }
});
