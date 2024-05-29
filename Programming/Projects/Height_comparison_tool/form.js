let errorDisplay = document.getElementById("errorDisplay");

function toDisplay(Whattoshow) {
    errorDisplay.textContent = Whattoshow;
    errorDisplay.style.opacity = 1;
    setTimeout(() => {
        errorDisplay.style.opacity = 0;
    }, 3000);
}

function height() {
    let mami = document.getElementById("mami");
    let Inches = document.getElementById("Inches");
    if (Inches.valueAsNumber >= 0 && Inches.valueAsNumber <= 100) {
        mami.style.height = `${Inches.value}vh`;
    } else {
        if (Inches.valueAsNumber >= 0) {
            toDisplay("Hone wali Mami will be too small for Mama");
        } else if (Inches.valueAsNumber <= 100) {
            toDisplay("Hone wali Mami will be too big for Mama");
        } else {
            toDisplay("Invalid input");
        }
    }
}