import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form gönderme işlemi burada yapılacak
    // TODO: EmailJS veya backend API entegrasyonu yapılacak
    alert('Mesajınız gönderildi! En kısa sürede size dönüş yapacağız.');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "E-posta",
      info: "info@binport.com.tr",
      link: "mailto:info@binport.com.tr"
    },
    {
      icon: <Phone size={24} />,
      title: "Telefon",
      info: "0212 320 02 53 54",
      link: "tel:0212 320 02 53 54"
    },
    {
      icon: <MapPin size={24} />,
      title: "Adres",
      info: "Kaptanpaşa Mahallesi Halit Ziya Türkkan Sokak Famas Plaza A Blok Kat:5/19 Şişli/İstanbul",
      link: "#"
    }
  ];

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">İletişim</h2>
          <p className="section-subtitle">
          Bizlere aşağıda yer alan iletişim formunu 
          doldurarak veya iletişim bilgilerimizden ulaşabilirsiniz.
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3>Bizimle İletişime Geçin</h3>
            <p>
              Dijital dönüşüm yolculuğunuzda size yardımcı olmak için buradayız. 
              Projeleriniz hakkında konuşmak ve size özel çözümler sunmak için 
              bizimle iletişime geçin.
            </p>
            
            <div className="contact-details">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  className="contact-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="contact-icon">
                    {item.icon}
                  </div>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.info}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="contact-form"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="form">
              <div className="form-group">
                <label htmlFor="name">Ad Soyad *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Adınız ve soyadınız"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">E-posta *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="E-posta adresiniz"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="company">Şirket</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Şirket adınız (opsiyonel)"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Mesaj *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Projeniz hakkında bilgi verin..."
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary submit-btn">
                <Send size={18} />
                Mesaj Gönder
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
