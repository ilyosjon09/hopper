browser.windows.getCurrent({populate: true}).then((windowInfo) => {
    myWindowId = windowInfo.id;
});
let activeInput = document.querySelector("#activeInput");
browser.runtime.onMessage.addListener(getTabIndex);

function getTabIndex(message) {
activeInput.value = message.tabindex;
}