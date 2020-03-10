chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    var textField = document.activeElement;
    textField.value = textField.value + message.key;

    // Fire change event so controlled inputs know to update values
    const changeEvent = document.createEvent("HTMLEvents");
    changeEvent.initEvent("change", true, true);
    textField.dispatchEvent(changeEvent);
});
