function func() {
    var username = document.getElementById("username").value;
    var pass = document.getElementById("password").value;

    if (username === 'RitikJena' && pass === 'Mahal') {
        alert("Happy birthday love😘😘 Click OK to proceed.");
        window.location.href = "main2.html"; // Redirect to another file in the same folder
    } else {
        alert("Try again😅😂");
    }
}

