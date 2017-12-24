function KeyUtils() {
}

KeyUtils.getSecret = function() {
    return localStorage.getItem("secret");
};

KeyUtils.getSecretType = function() {
    return localStorage.getItem("secret_type");
};

KeyUtils.getCounter = function() {
    return localStorage.getItem("counter");
};

KeyUtils.advanceCounter = function() {
    return localStorage.setItem("counter", parseInt(KeyUtils.getCounter()) + 1);
};

KeyUtils.getOTP = function() {
    var otp = window.OTP({secret: KeyUtils.getSecret()});

    if (KeyUtils.getSecretType() == 'totp') {
      return otp.totp();
    } else {
      return otp.hotp(KeyUtils.getCounter());
    }


};
