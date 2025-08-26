import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './Pages.css';

const Bakim = () => {
  const navigate = useNavigate();
  const bakimHizmetleri = [
    {
      title: "Sistem Bakımı",
      description: "Logo sistemlerinizin düzenli bakım ve optimizasyonu",
      sure: "Düzenli",
      icerik: ["Performans optimizasyonu", "Sistem temizliği", "Güvenlik kontrolleri", "Veri bütünlüğü"]
    },
    {
      title: "Güvenlik Güncellemeleri",
      description: "Sistem güvenliğini sağlamak için güncellemeler ve yamalar",
      sure: "7/24",
      icerik: ["Güvenlik yamaları", "Virüs koruması", "Firewall yönetimi", "Erişim kontrolü"]
    },
    {
      title: "Performans Optimizasyonu",
      description: "Sistem performansını artırmak için optimizasyon çalışmaları",
      sure: "Sürekli",
      icerik: ["Veritabanı optimizasyonu", "Disk temizliği", "Bellek yönetimi", "Hız artırımı"]
    }
  ];

  const bakimOzellikleri = [
    {
      title: "Proaktif Bakım",
      description: "Sorunlar oluşmadan önce önleyici bakım hizmetleri"
    },
    {
      title: "Uzman Ekip",
      description: "Logo sistemlerinde deneyimli bakım uzmanları"
    },
    {
      title: "7/24 İzleme",
      description: "Sistemlerinizi sürekli izleyerek sorunları erken tespit"
    },
    {
      title: "Hızlı Müdahale",
      description: "Kritik sorunlarda hızlı müdahale ve çözüm"
    }
  ];

  const bakimPaketleri = [
    {
      title: "Temel Bakım Paketi",
      description: "Logo sistemleriniz için temel bakım ve güncelleme hizmetleri",
      icerik: ["Aylık sistem kontrolü", "Güvenlik güncellemeleri", "Temel optimizasyon", "E-posta desteği"]
    },
    {
      title: "Gelişmiş Bakım Paketi",
      description: "Kapsamlı bakım, izleme ve önleyici hizmetler",
      icerik: ["Haftalık sistem kontrolü", "7/24 izleme", "Performans optimizasyonu", "Telefon desteği"]
    },
    {
      title: "Premium Bakım Paketi",
      description: "En kapsamlı bakım hizmeti ile özel destek ve çözümler",
      icerik: ["Günlük sistem kontrolü", "Proaktif müdahale", "Özel optimizasyon", "7/24 destek"]
    }
  ];

  const bakimSureci = [
    {
      adim: "1",
      title: "Sistem Analizi",
      description: "Mevcut sistem durumunuzu detaylı olarak analiz ediyoruz"
    },
    {
      adim: "2",
      title: "Bakım Planı",
      description: "İhtiyaçlarınıza uygun bakım planı hazırlıyoruz"
    },
    {
      adim: "3",
      title: "Uygulama",
      description: "Planlanan bakım işlemlerini uyguluyoruz"
    },
    {
      adim: "4",
      title: "Test ve Doğrulama",
      description: "Bakım sonrası sistem testleri ve performans kontrolü"
    },
    {
      adim: "5",
      title: "Raporlama",
      description: "Bakım raporu ve öneriler sunuyoruz"
    }
  ];

  return (
    <div className="page">
      <div className="page-header">
        <h1>🔧 Sistem Bakım Hizmetleri</h1>
        <p>Logo sistemlerinizin sorunsuz çalışması için kapsamlı bakım ve optimizasyon hizmetleri</p>
      </div>

      <div className="page-content">

        {/* Ana İçerik */}
        <div className="content-section">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2>Bakım Hizmetlerimiz</h2>
            <p>
              İş çözümlerinin sistemsel veya yapısal işleyişinin, sorunsuz ilerlemesi alınan danışmanlık hizmeti 
              ve kalitesi ile doğrudan ilişkilidir. Süreç ne kadar standart ve disiplinli olursa, sorunlar o kadar az olacaktır. 
              Binport Bilişim Teknolojileri olarak, Logo sistemlerinizin kesintisiz çalışması için 
              kapsamlı bakım ve optimizasyon hizmetleri sunuyoruz.
            </p>
          </motion.div>
        </div>

        {/* Bakım Hizmetleri */}
        <div className="content-section">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="section-header-plain">
              <h2>🔧 Bakım Hizmet Türlerimiz</h2>
              <p>
                Logo sistemlerinizin optimum performansta çalışması için tasarlanmış 
                kapsamlı bakım hizmetlerimiz ile sistemlerinizi güvenilir tutuyoruz.
              </p>
            </div>
            <div className="grid-base grid-3-col">
              {bakimHizmetleri.map((hizmet, index) => (
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
                    {index === 0 ? '⚙️' : index === 1 ? '🛡️' : '🚀'}
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

        {/* Bakım Özellikleri */}
        <div className="content-section">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="section-header-plain">
              <h2>🔧 Bakım Hizmet Özelliklerimiz</h2>
              <p>
                Bakım hizmetlerimizi özel kılan avantajlar ve 
                sistemlerinize sunduğumuz profesyonel bakım deneyimi
              </p>
            </div>
            <div className="features-grid-enhanced">
              {bakimOzellikleri.map((ozellik, index) => (
                <motion.div
                  key={index}
                  className="feature-item-enhanced"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 + index * 0.15 }}
                >
                  <div className="feature-icon-enhanced">
                    {index === 0 ? '🎯' : index === 1 ? '👨‍💻' : index === 2 ? '📊' : '⚡'}
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

        {/* Bakım Paketleri */}
        <div className="content-section">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <div className="section-header-plain">
              <h2>📦 Bakım Paketlerimiz</h2>
              <p>
                İşletmenizin ihtiyaçlarına ve bütçenize uygun bakım paketi seçeneklerimiz.
              </p>
            </div>
            <div className="grid-base grid-3-col">
              {bakimPaketleri.map((paket, index) => (
                <motion.div
                  key={index}
                  className="card-base card-hover card-with-top-border maintenance-item"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.15 }}
                >
                  <h4 className="item-title">{paket.title}</h4>
                  <p className="item-description">{paket.description}</p>
                  <ul className="list-base">
                    {paket.icerik.map((item, idx) => (
                      <li key={idx} className="list-item list-item-checkmark">{item}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bakım Süreci */}
        <div className="content-section">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
              <div className="section-header-plain">
              <h2>🔧 Bakım Sürecimiz</h2>
              <p>
                Sistemlerinizin sorunsuz çalışması için tasarlanmış adım adım bakım sürecimiz ile 
                Logo sistemlerinizi en iyi durumda tutuyoruz.
              </p>
            </div>
            <div className="process-grid-enhanced process-timeline">
              {bakimSureci.map((adim, index) => (
                <motion.div
                  key={index}
                  className="process-item-enhanced"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.7, 
                    delay: 1.4 + index * 0.2,
                    type: "spring",
                    stiffness: 100
                  }}
                >
                  <div className="process-number-enhanced">{adim.adim}</div>
                  <div className="process-content-enhanced">
                    <h4>{adim.title}</h4>
                    <p>{adim.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA Bölümü */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="cta-section"
        >
          <h2>Bakım Hizmetlerimiz Hakkında Bilgi Alın</h2>
          <p>
            Logo sistemlerinizin sorunsuz çalışması için en uygun bakım paketini seçmek ve 
            sistem performansınızı optimize etmek için bizimle iletişime geçin.
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

export default Bakim;
