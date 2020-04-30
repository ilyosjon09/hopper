let activeInput = document.querySelector("#activeInput");
let btnSave = document.querySelector("#btnSave");
let hopperId = "";

browser.runtime.onMessage.addListener(getTabIndex);

function getTabIndex(message) {
    if(message.hasOwnProperty("tabindex")) {
        activeInput.value = message.tabindex;
        hopperId = message.hopperId;
    }
}

btnSave.addEventListener("click", sendMessage);

function sendMessage() {
    browser.tabs.query({ currentWindow: true, active: true }).then( tabs => {
        browser.tabs.sendMessage(tabs[0].id, { hopperId: hopperId,tabindex: activeInput.value });
    }).catch(errorData => console.log(errorData));
}