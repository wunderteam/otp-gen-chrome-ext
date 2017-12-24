$(document).ready(function() {
    $("#form").submit(function(event) {
        event.preventDefault();
        localStorage.setItem("secret", $("#secret").val());
        localStorage.setItem("secret_type", $("#secret_type").val());
        localStorage.setItem("counter", 0);
        window.close();
    });
});
