

export default function CONTACT(){
    return(
        <div class="contact" id="contact">
            <div class="spani">
              <div class="span"></div>
            </div>
            <h2> Me contacter </h2>
            <div class="cont">
                <a href="tel:237675046420"><i class="fas fa-phone"></i></a>
                <a href="https://wa.me/237675046420"><i class="fab fa-whatsapp"></i></a>
                <a href="https://github.com/Dubrelh"><i class="fab fa-github"></i></a>
                <a href="https://www.linkedin.com/in/henry-kemeni-339029280/"><i class="fab fa-linkedin"></i></a>
                <a href="https://instagram.com/henry_kemeni"><i class="fab fa-instagram"></i></a>
            </div>
            <div class="form">
                <form action="mailto:henrykemeni2@gmail.com" method="post" enctype="text/plain">
                    <fieldset>
                        <legend><h3>Envoyer un message</h3></legend>
                        <input type="text" name="message" placeholder="Votre message..." />
                        <button type="submit">Envoyer</button>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}