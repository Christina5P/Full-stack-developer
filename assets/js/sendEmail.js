function sendMail (contactForm) {
    emailjs.send("outlook", "Christina", {
        "from_name":contactForm.name.value,
        "from_emailjs":contactForm.emailadress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(respone) {
            console.log("SUCCESS", response);
            },
            function(error) {
                console.log("FAILED", error);
            });
}