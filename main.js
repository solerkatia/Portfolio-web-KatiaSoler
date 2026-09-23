    // Contact Form Submission Handler (Conectado a Formspree)
    const contactForm = document.getElementById('contact-form');
    const formSuccess = document.getElementById('form-success');

    if (contactForm && formSuccess) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            
            try {
                const response = await fetch(contactForm.action, {
                    method: contactForm.method,
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    formSuccess.classList.remove('hidden');
                    contactForm.reset();
                    setTimeout(() => {
                        formSuccess.classList.add('hidden');
                    }, 5000);
                } else {
                    alert('Hubo un error al enviar el mensaje. Inténtalo de nuevo.');
                }
            } catch (error) {
                alert('Error de conexión. Revisa tu internet.');
            }
        });
    }
