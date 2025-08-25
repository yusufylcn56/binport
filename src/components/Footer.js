import React from 'react';
import { Facebook, Linkedin, Phone, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const navigate = useNavigate();

  // Scroll to section function
  const scrollToSection = (sectionId) => {
    // Ana sayfada değilsek, önce ana sayfaya git
    if (window.location.pathname !== '/') {
      navigate('/');
      // Sayfa yüklendikten sonra scroll işlemini yap
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);
    } else {
      // Ana sayfadaysak direkt scroll yap
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Navigate to page function
  const navigateToPage = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  const socialLinks = [
    {
      icon: <Facebook size={20} />,
      href: "https://www.facebook.com/binportyazilim/",
      label: "Facebook"
    },
    {
      icon: <Linkedin size={20} />,
      href: "https://www.linkedin.com/company/binportbili%C5%9Fim/",
      label: "LinkedIn"
    },
    {
      icon: <Phone size={20} />,
      href: "tel:0212 320 02 53 54",
      label: "Telefon"
    },
    {
      icon: <Mail size={20} />,
      href: "mailto:info@binport.com.tr",
      label: "E-posta"
    }
  ];

  const quickLinks = [
    { name: "Ana Sayfa", action: () => scrollToSection('home') },
    { name: "Hizmetler", action: () => scrollToSection('services') },
    { name: "Hakkımızda", action: () => scrollToSection('about') },
    { name: "İletişim", action: () => scrollToSection('contact') }
  ];

  const services = [
    { name: "Eğitim", action: () => navigateToPage('/egitim') },
    { name: "Destek", action: () => navigateToPage('/destek') },
    { name: "Projeler", action: () => navigateToPage('/projeler') },
    { name: "Lisans", action: () => navigateToPage('/lisans') },
    { name: "Kurumsal Hizmetler", action: () => navigateToPage('/kurumsal-hizmetler') },
    { name: "Bakım", action: () => navigateToPage('/bakim') }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-brand">
              <h3>Binport</h3>
              <p className="brand-subtitle">Yazılım Çözümleri</p>
            </div>
            <p className="footer-description">
              Modern teknolojiler ile işletmenizi geleceğe taşıyoruz. 
              Dijital dönüşüm yolculuğunuzda güvenilir ortağınız.
            </p>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-section">
            <h4>Hızlı Linkler</h4>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={link.action}
                    className="footer-link-button"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4>Hizmetler</h4>
            <ul className="footer-links">
              {services.map((service, index) => (
                <li key={index}>
                  <button 
                    onClick={service.action}
                    className="footer-link-button"
                  >
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4>İletişim</h4>
                         <div className="contact-info">
               <p>📍 Kaptan Paşa Mahallesi<br />
               Piyalepaşa Bulvarı No:75<br />
               Famas Plaza A Blok Kat:5/19<br />
               34384 Şişli / İstanbul</p>
              <p>📧 info@binport.com.tr</p>
              <p>📞 0212 320 02 53 54</p>
            </div>
          </div>
        </div>

        {/* Harita Bölümü */}
        <div className="footer-map-section">
                     <div className="map-header">
             <h3>Konumumuz</h3>
             <p>Kaptan Paşa Mahallesi Piyalepaşa Bulvarı No:75 Famas Plaza A Blok Kat:5/19 34384 Şişli / İstanbul</p>
           </div>
          <div className="map-container">
                         <iframe
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.9633693359308!2d28.9739197!3d41.062629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab722f0135443%3A0x47bc7c2d3a627f12!2sFamas+Plaza%2C+Kaptan+Pa%C5%9Fa%2C+Piyalepa%C5%9Fa+Blv.+No%3A75%2C+34384+%C5%9Ei%C5%9Fli%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1703123456789"
               width="100%"
               height="300"
               style={{ border: 0, borderRadius: '12px' }}
               allowFullScreen=""
               loading="lazy"
               referrerPolicy="no-referrer-when-downgrade"
               title="Binport Bilişim Teknolojileri Konumu"
             ></iframe>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; Copyright 2019 Binport. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
