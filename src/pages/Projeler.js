import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './Pages.css';

const Projeler = () => {
  const navigate = useNavigate();
  const projeHizmetleri = [
    {
      title: "Özel Yazılım Geliştirme",
      description: "İşletmenizin ihtiyaçlarına özel yazılım çözümleri geliştirme",
      sure: "2-8 hafta",
      icerik: ["İhtiyaç analizi", "Tasarım ve geliştirme", "Test ve optimizasyon", "Eğitim ve destek"]
    },
    {
      title: "Logo Entegrasyon Projeleri",
      description: "Logo sistemleri ile diğer uygulamaların entegrasyonu",
      sure: "1-4 hafta",
      icerik: ["API entegrasyonu", "Veri senkronizasyonu", "Otomatik süreçler", "Raporlama"]
    },
    {
      title: "Sistem Modernizasyonu",
      description: "Mevcut sistemlerin modern teknolojilerle güncellenmesi",
      sure: "4-12 hafta",
      icerik: ["Sistem analizi", "Modernizasyon planı", "Uygulama", "Test ve geçiş"]
    }
  ];

  const projeOzellikleri = [
    {
      title: "İhtiyaç Analizi",
      description: "Detaylı iş süreç analizi ve gereksinim belirleme"
    },
    {
      title: "Uzman Ekip",
      description: "Logo sistemlerinde deneyimli proje ekibi"
    },
    {
      title: "Kalite Güvencesi",
      description: "Kapsamlı test ve kalite kontrol süreçleri"
    },
    {
      title: "Zamanında Teslim",
      description: "Proje takvimi ve teslim süreçleri yönetimi"
    }
  ];

  const basariliProjeler = [
    {
      title: "KOBİ ERP Entegrasyonu",
      description: "50+ kullanıcılı KOBİ için Logo Tiger ile özel modül entegrasyonu",
      sonuc: "İş süreçlerinde %40 verimlilik artışı"
    },
    {
      title: "E-Ticaret Entegrasyonu",
      description: "Online satış platformu ile Logo sistemleri entegrasyonu",
      sonuc: "Stok yönetiminde %60 zaman tasarrufu"
    },
    {
      title: "Muhasebe Otomasyonu",
      description: "Otomatik fatura ve muhasebe süreçleri entegrasyonu",
      sonuc: "Muhasebe işlemlerinde %70 hız artışı"
    },
    {
      title: "Raporlama Sistemi",
      description: "Özel raporlama ve analiz araçları geliştirme",
      sonuc: "Karar verme süreçlerinde %50 iyileştirme"
    }
  ];

  const projeSureci = [
    {
      adim: "1",
      title: "İhtiyaç Analizi",
      description: "İş süreçlerinizi analiz ederek proje gereksinimlerini belirliyoruz"
    },
    {
      adim: "2",
      title: "Tasarım ve Planlama",
      description: "Proje tasarımı ve detaylı uygulama planı hazırlıyoruz"
    },
    {
      adim: "3",
      title: "Geliştirme",
      description: "Uzman ekibimiz ile projeyi geliştiriyoruz"
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
        <h1>📋 Proje Hizmetleri</h1>
        <p>İşletmenizin ihtiyaçlarına özel Logo projeleri ve yazılım çözümleri geliştirme</p>
      </div>

      <div className="page-content">

        {/* Ana İçerik */}
        <div className="content-section">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2>Proje Hizmetlerimiz</h2>
            <p>
              Binport Bilişim Teknolojileri olarak, işletmelerin iş süreçlerini ve özel ihtiyaçlarını analiz ederek 
              bu ihtiyaçlara karşılık verebilecek en uygun çözümlerin işletmelerde kullanıma alınmasına yönelik 
              kapsamlı proje hizmetleri sunuyoruz.
            </p>
          </motion.div>
        </div>

        {/* Proje Hizmetleri */}
        <div className="content-section">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="section-header-plain">
              <h2>🚀 Proje Türlerimiz</h2>
              <p>
                İşletmenizin özel ihtiyaçlarına yönelik tasarladığımız proje çözümleri ile 
                dijital dönüşüm yolculuğunuzda güçlü bir ortak oluyoruz.
              </p>
            </div>
            <div className="grid-base grid-3-col">
              {projeHizmetleri.map((hizmet, index) => (
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
                    {index === 0 ? '💻' : index === 1 ? '🔗' : '🔧'}
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

        {/* Proje Özellikleri */}
        <div className="content-section">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="section-header-plain">
              <h2>✨ Proje Özelliklerimiz</h2>
              <p>
                Projelerimizi başarıya ulaştıran özel yaklaşımımız ve 
                deneyimli ekibimizin sunduğu avantajlar
              </p>
            </div>
            <div className="features-grid-enhanced">
              {projeOzellikleri.map((ozellik, index) => (
                <motion.div
                  key={index}
                  className="feature-item-enhanced"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 + index * 0.15 }}
                >
                  <div className="feature-icon-enhanced">
                    {index === 0 ? '🔍' : index === 1 ? '👥' : index === 2 ? '🛡️' : '⏰'}
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

        {/* Başarılı Projeler */}
        <div className="content-section">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <div className="section-header-plain">
              <h2>🏆 Başarılı Projelerimiz</h2>
              <p>
                Logo sistemleri alanında gerçekleştirdiğimiz başarılı projeler ve 
                müşterilerimizin elde ettiği sonuçlar.
              </p>
            </div>
            <div className="grid-base grid-3-col">
              {basariliProjeler.map((proje, index) => (
                <motion.div
                  key={index}
                  className="card-base card-hover card-with-top-border project-item"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.15 }}
                >
                  <div className="flex-item-center project-header">
                    🏆
                    <h4 className="item-title">{proje.title}</h4>
                  </div>
                  <p className="item-description">{proje.description}</p>
                  <div className="result-badge project-result">
                    <strong>Sonuç:</strong> {proje.sonuc}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Proje Süreci */}
        <div className="content-section">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <div className="section-header-plain">
              <h2>🚀 Proje Sürecimiz</h2>
              <p>
                Projelerinizi baştan sona profesyonel bir yaklaşımla yönetiyoruz. 
                Her adımda kalite ve mükemmellik odaklı çalışıyoruz.
              </p>
            </div>
            <div className="process-grid-enhanced process-timeline">
              {projeSureci.map((adim, index) => (
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
          <h2>Proje Hizmetlerimiz Hakkında Bilgi Alın</h2>
          <p>
            İşletmeniz için özel proje çözümleri geliştirmek ve 
            Logo sistemlerinizi optimize etmek için bizimle iletişime geçin.
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

export default Projeler;
