$(document).ready(function() {
    $("#form").submit(function(event) {
        event.preventDefault();
        localStorage.setItem("secret", $("#secret").val());
        localStorage.setItem("counter", 0);
        window.close();
    });
});
