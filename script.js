/**
 * Kutay Kubilay Kayhan - Portfolio Script
 * Kapsam: Animasyonlar, Form Kontrolü, Dinamik Efektler ve Etkileşim
 */

document.addEventListener('DOMContentLoaded', () => {
    console.log("Kutay Portfolyo JS aktif!");

    // 1. Sayfa Yüklenme Animasyonu (Fade-in & Slide-up)
    const mainContent = document.querySelector('main');
    if (mainContent) {
        mainContent.style.opacity = '0';
        mainContent.style.transform = 'translateY(30px)';
        mainContent.style.transition = 'all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)';
        setTimeout(() => {
            mainContent.style.opacity = '1';
            mainContent.style.transform = 'translateY(0)';
        }, 200);
    }

    // 2. Dinamik "Yazılıyor..." Efekti (Ana Sayfa Başlığı İçin)
    const typingElement = document.getElementById('ana-baslik');
    if (typingElement) {
        const originalText = typingElement.innerText;
        typingElement.innerText = '';
        let i = 0;
        function typeWriter() {
            if (i < originalText.length) {
                typingElement.innerHTML += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 70);
            }
        }
        typeWriter();
    }

    // 3. Mavi Kartlar ve Yetenekler İçin Gelişmiş Hover
    const cards = document.querySelectorAll('.proje-kart, .deneyim-kart, .bilgi-kart, .yetenek-item');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.04) translateY(-8px)';
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.15)';
            this.style.zIndex = '10';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) translateY(0)';
            this.style.boxShadow = 'none';
            this.style.zIndex = '1';
        });
    });

    // 4. İletişim Formu Kontrolü ve Başarı Mesajı
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Sayfa yenilenmesini engelle
            
            const inputs = contactForm.querySelectorAll('input, textarea');
            let isFilled = true;

            inputs.forEach(input => {
                if (input.value.trim() === "") {
                    input.style.borderColor = "#f44336";
                    isFilled = false;
                } else {
                    input.style.borderColor = "#ddd";
                }
            });

            if (isFilled) {
                const btn = contactForm.querySelector('button');
                const originalBtnText = btn.innerText;
                btn.innerText = "Gönderiliyor...";
                btn.disabled = true;

                setTimeout(() => {
                    alert("Sayın Kutay Kubilay Kayhan'a mesajınız başarıyla iletildi! En kısa sürede dönüş sağlanacaktır.");
                    btn.innerText = originalBtnText;
                    btn.disabled = false;
                    contactForm.reset();
                }, 1500);
            } else {
                alert("Lütfen tüm alanları doldurunuz.");
            }
        });
    }

    // 5. Scroll (Kaydırma) Esnasında Görünürlük Kontrolü
    const scrollReveal = () => {
        const elements = document.querySelectorAll('.deneyim-kart, .bilgi-kart');
        elements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (elementTop < windowHeight - 50) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }
        });
    };
    window.addEventListener('scroll', scrollReveal);

    // 6. Navbar Linkleri İçin Aktif Durum Takibi
    const navLinks = document.querySelectorAll('.nav-buton');
    navLinks.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add('aktif');
        }
    });

    // 7. Footer Yılı Otomatik Güncelleme
    const footerYear = document.querySelector('footer p');
    if (footerYear) {
        const currentYear = new Date().getFullYear();
        footerYear.innerHTML = `&copy; ${currentYear} Kutay Kubilay Kayhan - Bütün Telif Hakları Saklıdır`;
    }

    // 8. Sayfa İçi Smooth Scroll (Hızlı Kaydırma)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});