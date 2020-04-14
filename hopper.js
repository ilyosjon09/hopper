let inputs = document.querySelectorAll("input");
let activeInput = {};

inputs.forEach(function (input) {
  input.addEventListener("focus", function(e) {
      activeInput = e.target;
      browser.runtime.sendMessage({
          tabindex: e.target.getAttribute("tabindex")
        });
  });
});