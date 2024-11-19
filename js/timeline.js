const slider = document.getElementById("range-slider");
const rangeTitle = document.getElementById("range-title");
const rangeText = document.getElementById("range-text");
const rangeImage = document.getElementById("range-image");

slider.addEventListener("input", (event) => {
    const value = event.target.value;

    rangeTitle.textContent = `Value: ${value}`;

    let newSrc, newText;
    if (value < 30) {
        newText = "This is a low range description.";
        newSrc = "../img/red.png";
    } else if (value < 70) {
        newText = "This is a neutral description.";
        newSrc = "../img/blue.png";
    } else {
        newText = "This is a high range description.";
        newSrc = "../img/green.png";
    }

    rangeText.textContent = newText;

    if (rangeImage.getAttribute("src") !== newSrc) {
        rangeImage.classList.add("faded");

        setTimeout(() => {
            rangeImage.setAttribute("src", newSrc);
            rangeImage.classList.remove("faded");
        }, 100); 
    }
});
