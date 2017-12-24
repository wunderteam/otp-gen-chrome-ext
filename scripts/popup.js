$(document).ready(function() {
    // Kick the user to options if their secret is blank
    if (KeyUtils.getSecret() == null || KeyUtils.getSecret() == "") {
        chrome.runtime.openOptionsPage();
        return;
    }

    // Get the latest OTP code
    if (KeyUtils.getSecretType() == 'totp') {
        $("#otp").text(KeyUtils.getOTP());
    }

    var clipboard = new Clipboard('.btn');
    clipboard.on('success', function(e) {
        e.clearSelection();
    });

    // Allow token to be manually refreshed
    $("#refresh_button").click(function() {
        KeyUtils.advanceCounter();
        $("#otp").text(KeyUtils.getOTP());
    });

    $("#go-to-options").click(function() {
        chrome.runtime.openOptionsPage();
    });
});
