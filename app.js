const buttonsEl = document.querySelectorAll("button");
const showResult = document.querySelector(".result");

for (let i = 0; i < buttonsEl.length; i++) {
  buttonsEl[i].addEventListener("click", () => {
    // get text content
    const getValue = buttonsEl[i].textContent;

    // conditions....
    if (getValue == "C") {
      clearResult();
    } else if (getValue == "=") {
      calculate();
    } else {
      showValue(getValue);
    }
  });
}

// Clear result.........
function clearResult() {
  showResult.value = "";
}

// Calculate result.........
function calculate() {
  showResult.value = eval(showResult.value);
}

// Show value.........
function showValue(getValue) {
  showResult.value += getValue;
}
