import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './Pages.css';

const KurumsalHizmetler = () => {
  const navigate = useNavigate();
  const kurumsalHizmetler = [
    {
      title: "Kurumsal Danışmanlık",
      description: "İşletmenizin dijital dönüşüm sürecinde uzman danışmanlık hizmeti",
      sure: "Sürekli",
      icerik: ["Strateji geliştirme", "Süreç optimizasyonu", "Teknoloji danışmanlığı", "Değişim yönetimi"]
    },
    {
      title: "Hosting ve Cloud Hizmetleri",
      description: "Logo sistemleriniz için güvenli ve ölçeklenebilir hosting çözümleri",
      sure: "7/24",
      icerik: ["Cloud hosting", "Veri yedekleme", "Güvenlik", "Performans optimizasyonu"]
    },
    {
      title: "Sistem Entegrasyonu",
      description: "Logo sistemlerinizi diğer kurumsal uygulamalarla entegre etme",
      sure: "Proje bazlı",
      icerik: ["API entegrasyonu", "Veri senkronizasyonu", "Otomatik süreçler", "Raporlama"]
    }
  ];

  const kurumsalOzellikleri = [
    {
      title: "Deneyimli Ekip",
      description: "Logo sistemlerinde uzmanlaşmış deneyimli proje ekibi"
    },
    {
      title: "Özel Çözümler",
      description: "İşletmenizin ihtiyaçlarına özel uygulama geliştirme"
    },
    {
      title: "Kalite Güvencesi",
      description: "Kapsamlı test ve kalite kontrol süreçleri"
    },
    {
      title: "Sürekli Destek",
      description: "7/24 teknik destek ve bakım hizmetleri"
    }
  ];

  const kurumsalCozumler = [
    {
      title: "ERP Çözümleri",
      description: "Kurumsal kaynak planlama sistemleri ve optimizasyonu",
      icerik: ["Logo Tiger", "Logo GO", "Logo Enterprise", "Özel modüller"]
    },
    {
      title: "CRM Entegrasyonu",
      description: "Müşteri ilişkileri yönetimi sistemleri entegrasyonu",
      icerik: ["Müşteri takibi", "Satış yönetimi", "Raporlama", "Analitik"]
    },
    {
      title: "E-Ticaret Entegrasyonu",
      description: "Online satış platformları ile Logo sistemleri entegrasyonu",
      icerik: ["Stok senkronizasyonu", "Sipariş yönetimi", "Fatura entegrasyonu", "Raporlama"]
    },
    {
      title: "Mobil Uygulamalar",
      description: "Logo sistemleri için mobil uygulama geliştirme",
      icerik: ["iOS uygulamaları", "Android uygulamaları", "Web uygulamaları", "API geliştirme"]
    }
  ];

  const kurumsalSureci = [
    {
      adim: "1",
      title: "İhtiyaç Analizi",
      description: "Kurumsal ihtiyaçlarınızı detaylı olarak analiz ediyoruz"
    },
    {
      adim: "2",
      title: "Çözüm Tasarımı",
      description: "Size en uygun kurumsal çözümü tasarlıyoruz"
    },
    {
      adim: "3",
      title: "Uygulama ve Geliştirme",
      description: "Uzman ekibimiz ile çözümü uyguluyoruz"
    },
    {
      adim: "4",
      title: "Test ve Optimizasyon",
      description: "Kapsamlı test süreçleri ile sistemi optimize ediyoruz"
    },
    {
      adim: "5",
      title: "Eğitim ve Destek",
      description: "Kullanıcı eğitimi ve sürekli destek hizmeti sağlıyoruz"
    }
  ];

  return (
    <div className="page">
      <div className="page-header">
        <h1>🏢 Kurumsal Hizmetler</h1>
        <p>Deneyimli ve uzman proje ekibimiz ile kurumsal ihtiyaçlarınıza özel çözümler</p>
      </div>

      <div className="page-content">

        {/* Ana İçerik */}
        <div className="content-section">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2>Kurumsal Hizmetlerimiz</h2>
            <p>
              Deneyimli ve uzman proje ekibimiz ile işletmelerin ihtiyaçlarına özel uygulamalar sunarken, 
              danışmanlık, destek, eğitim, entegrasyon, hosting ve uygulama bakım hizmetlerini de sağlamaktayız. 
              Kurumsal müşterilerimizin dijital dönüşüm yolculuğunda güvenilir ortağı oluyoruz.
            </p>
          </motion.div>
        </div>

        {/* Kurumsal Hizmetler */}
        <div className="content-section">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="section-header-plain">
              <h2>🏢 Hizmet Türlerimiz</h2>
              <p>
                Kurumsal ihtiyaçlarınıza özel tasarlanmış kapsamlı hizmet portföyümüz ile 
                işletmenizin dijital dönüşümünü destekliyor, operasyonel verimliliğinizi artırıyoruz.
              </p>
            </div>
            <div className="grid-base grid-3-col">
              {kurumsalHizmetler.map((hizmet, index) => (
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
                    {index === 0 ? '📊' : index === 1 ? '🔄' : '🎯'}
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

        {/* Kurumsal Özellikler */}
        <div className="content-section">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="section-header-plain">
              <h2>🏢 Kurumsal Hizmet Özelliklerimiz</h2>
              <p>
                Kurumsal hizmetlerimizi özel kılan avantajlar ve 
                işletmenize sunduğumuz profesyonel çözümler
              </p>
            </div>
            <div className="features-grid-enhanced">
              {kurumsalOzellikleri.map((ozellik, index) => (
                <motion.div
                  key={index}
                  className="feature-item-enhanced"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 + index * 0.15 }}
                >
                  <div className="feature-icon-enhanced">
                    {index === 0 ? '👨‍💼' : index === 1 ? '⚙️' : index === 2 ? '🏆' : '🛡️'}
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

        {/* Kurumsal Çözümler */}
        <div className="content-section">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <div className="section-header-plain">
              <h2>💼 Kurumsal Çözümlerimiz</h2>
              <p>
                Logo sistemleri alanında kurumsal müşterilerimiz için geliştirdiğimiz 
                özel çözümler ve entegrasyon hizmetleri.
              </p>
            </div>
            <div className="grid-base grid-2-col">
              {kurumsalCozumler.map((cozum, index) => (
                <motion.div
                  key={index}
                  className="card-base card-small-hover solution-item"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.15 }}
                >
                  <h4 className="item-subtitle">{cozum.title}</h4>
                  <p className="item-description">{cozum.description}</p>
                  <ul className="list-base">
                    {cozum.icerik.map((item, idx) => (
                      <li key={idx} className="list-item-small list-item-bullet">{item}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Kurumsal Süreç */}
        <div className="content-section">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <div className="section-header-plain">
              <h2>🚀 Kurumsal Hizmet Sürecimiz</h2>
              <p>
                Kurumsal projelerinizi baştan sona profesyonel bir yaklaşımla yönetiyoruz. 
                Her adımda kalite ve mükemmellik odaklı çalışıyoruz.
              </p>
            </div>
            <div className="process-grid-enhanced process-timeline">
              {kurumsalSureci.map((adim, index) => (
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
          <h2>Kurumsal Hizmetlerimiz Hakkında Bilgi Alın</h2>
          <p>
            İşletmeniz için özel kurumsal çözümler geliştirmek ve 
            dijital dönüşüm sürecinizde size destek olmak için bizimle iletişime geçin.
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

export default KurumsalHizmetler;
