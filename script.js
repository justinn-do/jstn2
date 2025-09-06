const glow = document.querySelector('.cursor-glow');

document.addEventListener('mousemove', (e) => {
  glow.style.left = `${e.clientX}px`;
  glow.style.top = `${e.clientY}px`;
});


  (function () {
    const RIGHT_CODE = "3620";
    const ACCESS_CODE = "SPORP";

    // Grab the existing input & button inside the #code <h1>
    const codeRow = document.getElementById("code");
    const input = codeRow.querySelector("input");
    const submitBtn = codeRow.querySelector("button");

    // Make a result line right after the code row
    const resultEl = document.createElement("p");
    resultEl.id = "result";
    resultEl.style.marginTop = "10px";
    codeRow.insertAdjacentElement("afterend", resultEl);

    // Prepare the "next" button (hidden by default)
    const nextBtn = document.createElement("button");
    nextBtn.id = "nextBtn";
    nextBtn.textContent = "Go to Home Page";
    nextBtn.style.display = "none";
    nextBtn.style.marginTop = "8px";
    nextBtn.addEventListener("click", () => {
      // Change this to your actual destination
      window.location.href = "https://ohlonecicada.netlify.app/";
    });
    resultEl.insertAdjacentElement("afterend", nextBtn);

    function checkCode() {
      const value = input.value.trim();
      if (value === RIGHT_CODE) {
        resultEl.textContent = `✅ Your access code is "${ACCESS_CODE}"`;
        resultEl.style.color = "green";
        nextBtn.style.display = "inline-block";
      } else {
        resultEl.textContent = "❌ Incorrect code. Try again.";
        resultEl.style.color = "red";
        nextBtn.style.display = "none";
      }
    }

    // Click to submit
    submitBtn.addEventListener("click", checkCode);

    // Press Enter in the input to submit
    input.addEventListener("keypress", (e) => {
      if (e.key === "Enter") checkCode();
    });
  })();
