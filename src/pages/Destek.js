import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './Pages.css';

const Destek = () => {
  const navigate = useNavigate();
  const destekHizmetleri = [
    {
      title: "Tele-Destek",
      description: "Telefon üzerinden anında teknik destek hizmeti",
      sure: "7/24",
      icerik: ["Hızlı sorun çözümü", "Uzaktan yardım", "Anında müdahale", "7/24 erişim"]
    },
    {
      title: "Uzak Bağlantı Desteği",
      description: "Uzaktan erişim ile sistem sorunlarını çözme",
      sure: "7/24",
      icerik: ["Uzaktan erişim", "Sistem optimizasyonu", "Güvenli bağlantı", "Hızlı çözüm"]
    },
    {
      title: "Yerinde Destek",
      description: "İşletmenizde fiziksel olarak teknik destek hizmeti",
      sure: "Randevu ile",
      icerik: ["Yerinde müdahale", "Donanım desteği", "Kurulum", "Eğitim"]
    }
  ];

  const destekOzellikleri = [
    {
      title: "7/24 Teknik Destek",
      description: "Günün her saati teknik destek hizmeti"
    },
    {
      title: "Uzman Ekip",
      description: "Logo sistemlerinde deneyimli teknik uzmanlar"
    },
    {
      title: "Güvenli Destek",
      description: "SSL şifreli güvenli uzaktan erişim"
    },
    {
      title: "Hızlı Müdahale",
      description: "Kritik sorunlarda 2 saat içinde müdahale"
    }
  ];

  const danismanlikHizmetleri = [
    {
      title: "Proje Danışmanlığı",
      description: "Logo projelerinizde uzman danışmanlık hizmeti"
    },
    {
      title: "Sistem Optimizasyonu",
      description: "Mevcut sistemlerinizi optimize etme ve performans artırma"
    },
    {
      title: "Veri Bakımı",
      description: "Veritabanı bakımı ve veri güvenliği hizmetleri"
    },
    {
      title: "Network Danışmanlığı",
      description: "Ağ altyapısı ve bağlantı sorunları için danışmanlık"
    }
  ];

  return (
    <div className="page">
      <div className="page-header">
        <h1>🔧 Teknik Destek Hizmetleri</h1>
        <p>Logo sistemleriniz için 7/24 kapsamlı teknik destek ve danışmanlık hizmetleri</p>
      </div>

      <div className="page-content">

        {/* Ana İçerik */}
        <div className="content-section">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2>Destek Hizmetlerimiz</h2>
            <p>
              Binport Bilişim Teknolojileri olarak, Logo kullanıcılarına yönelik kapsamlı teknik destek hizmetleri sunuyoruz. 
              7/24 erişilebilir uzman ekibimiz ile sistem sorunlarınızı hızlıca çözüyor, 
              iş süreçlerinizin kesintisiz devam etmesini sağlıyoruz.
            </p>
          </motion.div>
        </div>

        {/* Destek Hizmetleri */}
        <div className="content-section">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="section-header-plain">
              <h2>🛠️ Destek Türlerimiz</h2>
              <p>
                7/24 kesintisiz teknik destek hizmetimiz ile Logo sistemlerinizde 
                yaşayabileceğiniz tüm sorunlara hızlı ve etkili çözümler sunuyoruz.
              </p>
            </div>
            <div className="grid-base grid-3-col">
              {destekHizmetleri.map((hizmet, index) => (
                <motion.div
                  key={index}
                  className="card-base card-hover card-with-animated-border service-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.7, 
                    delay: 0.8 + index * 0.15,
                    type: "spring",
                    stiffness: 100
                  }}
                >
                  <div className="icon-base icon-large icon-circle service-icon">
                    {index === 0 ? '📞' : index === 1 ? '💻' : '🏠'}
                  </div>
                  <h3 className="item-title">{hizmet.title}</h3>
                  <p className="item-description">{hizmet.description}</p>
                  <div className="service-details">
                    <span className="duration-badge">
                      ⏱️ {hizmet.sure}
                    </span>
                    <ul className="list-base">
                      {hizmet.icerik.map((item, idx) => (
                        <li key={idx} className="list-item list-item-checkmark">{item}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Destek Özellikleri */}
        <div className="content-section">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="section-header-plain">
              <h2>🛠️ Destek Özelliklerimiz</h2>
              <p>
                Teknik destek hizmetlerimizi özel kılan avantajlar ve 
                size sunduğumuz profesyonel destek deneyimi
              </p>
            </div>
            <div className="features-grid-enhanced">
              {destekOzellikleri.map((ozellik, index) => (
                <motion.div
                  key={index}
                  className="feature-item-enhanced"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 + index * 0.15 }}
                >
                  <div className="feature-icon-enhanced">
                    {index === 0 ? '🕒' : index === 1 ? '👥' : index === 2 ? '🔒' : '⚡'}
                  </div>
                  <div className="feature-content-enhanced">
                    <h4>{ozellik.title}</h4>
                    <p>{ozellik.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Danışmanlık Hizmetleri */}
        <div className="content-section">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <div className="section-header-plain">
              <h2>💼 Danışmanlık Hizmetlerimiz</h2>
              <p>
                Logo sistemlerinizde uzmanlaşmış ekibimiz ile proje danışmanlığı, 
                sistem optimizasyonu ve teknik danışmanlık hizmetleri sunuyoruz.
              </p>
            </div>
            <div className="grid-base grid-2-col">
              {danismanlikHizmetleri.map((hizmet, index) => (
                <motion.div
                  key={index}
                  className="card-base card-small-hover consulting-item"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.15 }}
                >
                  <h4 className="item-subtitle">{hizmet.title}</h4>
                  <p className="item-small-description">{hizmet.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA Bölümü */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="cta-section"
        >
          <h2>Teknik Destek İçin İletişime Geçin</h2>
          <p>
            Logo sistemlerinizde yaşadığınız sorunlar için hemen teknik destek alın. 
            7/24 hizmet veren uzman ekibimiz size yardımcı olmaya hazır.
          </p>
          <button className="btn btn-primary" onClick={() => {
            navigate('/');
            setTimeout(() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }, 500);
          }}>
            İletişime Geçin
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Destek;
