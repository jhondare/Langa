const scriptURL = 'https://script.google.com/macros/s/AKfycbzv7OWLzIsyn5wv72jTBch_p5OQbVe5lyFBCuKGbA40WTX4DWQ/exec'
const form = document.forms['google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => $("#form_alerts").html("<div class='alert alert-success'>Thank you, message sent successfully.</div>"))
    .catch(error => $("#form_alerts").html("<div class='alert alert-danger'>Ooops! message not sent.</div>"))
    .then(response=>$("#form")[0].reset())
})