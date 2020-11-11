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
      
    var sandwitchView = window.matchMedia("(max-width: 1300px)")

    sandwitchView.addEventListener("change", (e)=>{
        if (e.matches) {  
            var menu_icon = document.createElement("img");
            menu_icon.src = "https://img.icons8.com/material-two-tone/48/000000/menu.png"
            document.querySelector("header").append(menu_icon);
            menu_icon.classList.add("menu_icon");
            menu_icon.id = "sandwitch"
            document.querySelector("nav").style.display = 'none';
        }
        else {
            try {
            document.querySelector("nav").style.display = 'flex';
            document.getElementById('sandwitch').remove();
            }catch {}    
        }
    });
}
