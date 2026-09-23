    // 1. Toggle Mobile Menu (Menú Hamburguesa)
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        mobileMenu.classList.toggle('hidden');
    });

    // Ocultar el menú automáticamente al hacer clic en cualquier enlace
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });

    // Ocultar si se hace clic fuera del menú
    document.addEventListener('click', (e) => {
        if (!mobileMenu.contains(e.target) && !menuBtn.contains(e.target)) {
            mobileMenu.classList.add('hidden');
        }
    });
}



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
