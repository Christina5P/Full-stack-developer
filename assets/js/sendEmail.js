const btn = document.getElementById('button');
const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
  event.preventDefault(); 

  btn.value = 'Sending...'; 


  // Logga data innan vi skickar det
  console.log('Sending email with the following data:');
  console.log('Email:', emailaddress);
  console.log('Project Summary:',projectsummary);

  const templateID = 'template_ur2p89b';
  const serviceID = 'default_service';

  // Skickar e-post med EmailJS
  emailjs.send(serviceID, templateID, {
    from_name: form.name.value,
    from_email: form.emailaddress.value,
    project_request: form.projectsummary.value
  })
  .then(() => {
    btn.value = 'Send Email';
    alert('Sent!');
  }, (err) => {
    btn.value = 'Send Email';
    alert(JSON.stringify(err));
  });
});