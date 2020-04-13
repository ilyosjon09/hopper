let inputs = document.querySelectorAll("input");
let toolbar = document.createElement("div");
let saveButton = document.createElement("button");
let tabInput = document.createElement('input');
let activeInput = {};

inputs.forEach(function (input) {
  input.addEventListener("focus", function(e) {
      tabInput.value = e.target.getAttribute("tabindex");
      activeInput = e.target;
      console.log(e);
  });
});

saveButton.addEventListener("click", function() {
    activeInput.setAttribute("tabindex", tabInput.value);
    console.log(activeInput);
});

saveButton.innerText = "Save";

toolbar.style.background = "linear-gradient(45deg, #483 0%, #ae4 100%)";
toolbar.style.width = "100vw";
toolbar.style.display = "flex";
toolbar.style.position = "fixed";
toolbar.style.height = "32px";
toolbar.style.padding = "16px";
toolbar.style.bottom  = "0";
toolbar.style.zIndex = "999";

toolbar.appendChild(tabInput);
toolbar.appendChild(saveButton);

document.body.appendChild(toolbar);