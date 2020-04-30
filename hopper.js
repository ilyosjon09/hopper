let inputs = document.querySelectorAll("input");
let activeInput = {};
let counter = 1;

inputs.forEach(function (input) {
  input.addEventListener("focus", function(e) {
    e.target.setAttribute("data-hopperid", "hop" + counter);
    counter++;
    browser.runtime.sendMessage({
      tabindex: e.target.getAttribute("tabindex"),
      hopperId: e.target.dataset.hopperid
    });
  });
});

browser.runtime.onMessage.addListener(alertHello);
function alertHello(message) {
  console.log(message);
}