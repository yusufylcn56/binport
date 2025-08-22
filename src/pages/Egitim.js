import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './Pages.css';

const Egitim = () => {
  const navigate = useNavigate();
  const egitimProgramlari = [
    {
      title: "Logo Temel Eğitimi",
      description: "Logo sistemlerinin temel kullanımı ve işlevleri hakkında kapsamlı eğitim",
      sure: "3-5 gün",
      icerik: ["Logo arayüzü ve navigasyon", "Temel işlemler", "Raporlama", "Veri girişi"]
    },
    {
      title: "İleri Seviye Logo Eğitimi",
      description: "Logo sistemlerinin gelişmiş özellikleri ve optimizasyon teknikleri",
      sure: "5-7 gün",
      icerik: ["Gelişmiş raporlama", "Analitik araçlar", "Sistem optimizasyonu", "Entegrasyon"]
    },
    {
      title: "Logo Sertifika Programı",
      description: "Logo sistemlerinde uzmanlaşma için kapsamlı sertifika programı",
      sure: "10-15 gün",
      icerik: ["Teorik eğitim", "Pratik uygulamalar", "Sınav", "Sertifika"]
    }
  ];

  const egitimOzellikleri = [
    {
      title: "Yerinde Eğitim",
      description: "İşletmenizin bulunduğu yerde, kendi sisteminiz üzerinde eğitim"
    },
    {
      title: "Uzman Eğitmenler",
      description: "Logo sistemlerinde deneyimli ve sertifikalı eğitmenler"
    },
    {
      title: "Esnek Program",
      description: "İşletmenizin ihtiyaçlarına göre özelleştirilmiş eğitim programı"
    },
    {
      title: "Sürekli Destek",
      description: "Eğitim sonrası sorularınız için teknik destek hizmeti"
    }
  ];

  return (
    <div className="page">
      <div className="page-header">
        <h1>📚 Logo Eğitim Hizmetleri</h1>
        <p>Logo kullanıcıları için kapsamlı eğitim çözümleri ile iş süreçlerinizi optimize edin</p>
      </div>

      <div className="page-content">

        {/* Ana İçerik */}
        <div className="content-section">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2>Eğitim Hizmetlerimiz</h2>
            <p>
              Binport Bilişim Teknolojileri olarak, Logo kullanıcılarına yönelik kapsamlı eğitim hizmetleri sunuyoruz. 
              Deneyimli eğitmenlerimiz ile Logo sistemlerini daha verimli kullanmanızı sağlayarak, 
              iş süreçlerinizi optimize etmenize yardımcı oluyoruz.
            </p>
          </motion.div>
        </div>

        {/* Eğitim Programları */}
        <div className="content-section">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="section-header-enhanced">
              <h2>📚 Eğitim Programlarımız</h2>
              <p>
                Logo sistemlerinde uzmanlaşmanız için tasarlanmış kapsamlı eğitim programları. 
                Temel seviyeden ileri seviyeye kadar tüm ihtiyaçlarınızı karşılıyoruz.
              </p>
            </div>
            <div className="grid-base grid-large">
              {egitimProgramlari.map((program, index) => (
                <motion.div
                  key={index}
                  className="card-base card-large-hover card-with-animated-border service-card"
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
                    {index === 0 ? '🎯' : index === 1 ? '🚀' : '🏆'}
                  </div>
                  <h3 className="item-title">{program.title}</h3>
                  <p className="item-description">{program.description}</p>
                  <div className="service-details">
                    <span className="duration-badge">
                      ⏱️ {program.sure}
                    </span>
                    <ul className="list-base">
                      {program.icerik.map((item, idx) => (
                        <li key={idx} className="list-item list-item-checkmark">{item}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Eğitim Özellikleri */}
        <div className="content-section">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="section-header-enhanced">
              <h2>⭐ Eğitim Özelliklerimiz</h2>
              <p>
                Eğitim hizmetlerimizi özel kılan avantajlar ve 
                size sunduğumuz profesyonel eğitim deneyimi
              </p>
            </div>
            <div className="features-grid-enhanced">
              {egitimOzellikleri.map((ozellik, index) => (
                <motion.div
                  key={index}
                  className="feature-item-enhanced"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 + index * 0.15 }}
                >
                  <div className="feature-icon-enhanced">
                    {index === 0 ? '🏢' : index === 1 ? '🎓' : index === 2 ? '⚡' : '🛡️'}
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

        {/* Eğitim Süreci */}
        <div className="content-section">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <div className="section-header-enhanced">
              <h2>📚 Eğitim Sürecimiz</h2>
              <p>
                Etkili öğrenme için tasarlanmış adım adım eğitim sürecimiz ile 
                Logo sistemlerini profesyonel seviyede kullanmayı öğrenin.
              </p>
            </div>
            <div className="process-grid-enhanced process-timeline">
              <motion.div
                className="process-item-enhanced"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 1.2, type: "spring", stiffness: 100 }}
              >
                <div className="process-number-enhanced">1</div>
                <div className="process-content-enhanced">
                  <h4>İhtiyaç Analizi</h4>
                  <p>Eğitim ihtiyaçlarınızı analiz ederek size en uygun programı belirliyoruz</p>
                </div>
              </motion.div>
              <motion.div
                className="process-item-enhanced"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 1.4, type: "spring", stiffness: 100 }}
              >
                <div className="process-number-enhanced">2</div>
                <div className="process-content-enhanced">
                  <h4>Program Hazırlama</h4>
                  <p>İhtiyaçlarınıza özel eğitim programını hazırlıyoruz</p>
                </div>
              </motion.div>
              <motion.div
                className="process-item-enhanced"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 1.6, type: "spring", stiffness: 100 }}
              >
                <div className="process-number-enhanced">3</div>
                <div className="process-content-enhanced">
                  <h4>Eğitim Uygulama</h4>
                  <p>Uzman eğitmenlerimiz ile eğitimi uyguluyoruz</p>
                </div>
              </motion.div>
              <motion.div
                className="process-item-enhanced"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 1.8, type: "spring", stiffness: 100 }}
              >
                <div className="process-number-enhanced">4</div>
                <div className="process-content-enhanced">
                  <h4>Değerlendirme</h4>
                  <p>Eğitim sonrası değerlendirme ve geri bildirim sağlıyoruz</p>
                </div>
              </motion.div>
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
          <h2>Eğitim Hizmetlerimiz Hakkında Bilgi Alın</h2>
          <p>
            Logo sistemleriniz için özel eğitim programları oluşturmak ve 
            ekibinizin verimliliğini artırmak için bizimle iletişime geçin.
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

export default Egitim;
