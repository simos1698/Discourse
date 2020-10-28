window.onload = function() {

    var form = document.getElementById('form_grid');
    form.addEventListener('submit', Submit);
    //emailjs.sendForm('contact_service', 'form_grid', this);

    function Submit (event) {
        event.preventDefault();

        emailjs.send('contact_service','template_2utqpbn', {
            from_name: document.getElementById("name").value,
            from_lastname: document.getElementById("lastname").value,
            message: document.getElementById("message").value,
            reply_to: document.getElementById("email").value,
        });
        window.alert('komple');
    }

    
}
