/* Я комментарий, который ждал тебя здесь. Удали меня и напиши хороший код! */
const collapsContentButton = document.querySelector(".collapsible__button");
const collapsContent = document.querySelector(".collapsible__content");

const visibleButton = document.querySelector(".collapsible__action--visible");
const collapsButton = document.querySelector(".collapsible__action--hidden");

visibleButton.style.display = "none";
collapsButton.style.display = "block";

const collaps = collapsContent.animate({ opacity: ["0", "1"] }, { duration: 250, fill: "both", easing: "ease-out" });
collaps.pause();

collapsContentButton.addEventListener("click", () => {
    if (collaps.playState === "paused") {
        collaps.play();
    } else {
        collaps.reverse();
    }
});
collaps.onfinish = (event) => {
    if (event.currentTime === 0) {
        visibleButton.style.display = "none";
        collapsButton.style.display = "block";
    } else {
        visibleButton.style.display = "block";
        collapsButton.style.display = "none";
    }
}