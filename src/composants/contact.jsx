import { useState } from "react";

export default function CONTACT() {
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        window.location.href = `mailto:henrykemeni2@gmail.com?subject=Contact%20depuis%20le%20portfolio&body=${encodeURIComponent(message)}`;
    };

    return (
        <div className="contact" id="contact">
            <div className="spani">
                <div className="span"></div>
            </div>
            <h2>Me contacter</h2>
            <div className="cont">
                <a href="tel:237675046420"><i className="fas fa-phone"></i></a>
                <a href="https://wa.me/237675046420"><i className="fab fa-whatsapp"></i></a>
                <a href="https://github.com/Dubrelh"><i className="fab fa-github"></i></a>
                <a href="https://www.linkedin.com/in/henry-kemeni-339029280/"><i className="fab fa-linkedin"></i></a>
                <a href="https://instagram.com/henry_kemeni"><i className="fab fa-instagram"></i></a>
            </div>
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <legend><h3>Envoyer un message</h3></legend>
                        <input
                            type="text"
                            name="message"
                            placeholder="Votre message..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        />
                        <button type="submit">Envoyer</button>
                    </fieldset>
                </form>
            </div>
        </div>
    );
}