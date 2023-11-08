document.addEventListener("DOMContentLoaded", function () {
    // Check if the visitorCount is in local storage
    if (localStorage.getItem("counter")) {
        // Retrieve and increment the count from local storage
        let count = parseInt(localStorage.getItem("counter")) + 1;
        localStorage.setItem("counter", count);
        updateCounter(count);
    } else {
        // If the count doesn't exist in local storage, set it to 1
        localStorage.setItem("counter", 1);
        updateCounter(1);
    }
});

function updateCounter(count) {
    // Update the visitorCount element on the page
    const visitorCountElement = document.getElementById("counter");
    visitorCountElement.textContent = count;
}
