const displayKey = document.querySelector(".key h2");
const displayeKey = document.querySelector(".eKey h2");
const displayeLocation = document.querySelector(".eLocation h2");
const displayeWhich = document.querySelector(".eWhich h2");
const displayeCode = document.querySelector(".eCode h2");
const eKeyDiv = document.querySelector(".eKey");
const eLocationDiv = document.querySelector(".eLocation");
const eWhichDiv = document.querySelector(".eWhich");
const eCodeDiv = document.querySelector(".eCode");
const overlay = document.querySelector(".overlay");

window.addEventListener("keypress", (e) => {
  overlay.classList.add("hide");
  displayKey.innerHTML = e.key;
  displayeKey.innerHTML = e.key;
  displayeLocation.innerHTML = e.location;
  displayeWhich.innerHTML = e.which;
  displayeCode.innerHTML = e.code;

  if (e.key === 32) {
    displayKey.innerHTML = `Space`;
  }
});

eKeyDiv.addEventListener("click", (e) => {
  const textArea = document.createElement("textarea");
  textArea.setAttribute("readonly", "");
  textArea.style.position = "absolute";
  textArea.value = displayeKey.innerText;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
  eKeyDiv.querySelector("p").innerText = "Copied";
  setTimeout(() => {
    eKeyDiv.querySelector("p").innerText = "Click to Copy";
  }, 2000);
});

eLocationDiv.addEventListener("click", (e) => {
  const textArea = document.createElement("textarea");
  textArea.setAttribute("readonly", "");
  textArea.style.position = "absolute";
  textArea.value = displayeLocation.innerText;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
  eLocationDiv.querySelector("p").innerText = "Copied";
  setTimeout(() => {
    eLocationDiv.querySelector("p").innerText = "Click to Copy";
  }, 2000);
});

eWhichDiv.addEventListener("click", (e) => {
  const textArea = document.createElement("textarea");
  textArea.setAttribute("readonly", "");
  textArea.style.position = "absolute";
  textArea.value = displayeWhich.innerText;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
  eWhichDiv.querySelector("p").innerText = "Copied";
  setTimeout(() => {
    eWhichDiv.querySelector("p").innerText = "Click to Copy";
  }, 2000);
});

eCodeDiv.addEventListener("click", (e) => {
  const textArea = document.createElement("textarea");
  textArea.setAttribute("readonly", "");
  textArea.style.position = "absolute";
  textArea.value = displayeC.innerText;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
  eCodeDiv.querySelector("p").innerText = "Copied";
  setTimeout(() => {
    eCodeDiv.querySelector("p").innerText = "Click to Copy";
  }, 2000);
});