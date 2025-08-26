import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './Pages.css';

const Lisans = () => {
  const navigate = useNavigate();
  const lisansHizmetleri = [
    {
      title: "LEM Sözleşmesi",
      description: "Logo Enterprise Maintenance sözleşmesi ile kapsamlı lisans hizmetleri",
      ozellikler: ["Ürün güncellemeleri", "Teknik destek", "Yeni özellikler", "Güvenlik yamaları"]
    },
    {
      title: "Ürün Güncellemeleri",
      description: "Logo ürünlerinin en güncel sürümlerine otomatik erişim",
      ozellikler: ["Otomatik güncellemeler", "Yeni modüller", "Performans iyileştirmeleri", "Uyumluluk"]
    },
    {
      title: "Güvenlik ve Uyumluluk",
      description: "Mevzuat değişikliklerine uyum ve güvenlik güncellemeleri",
      ozellikler: ["Mevzuat uyumluluğu", "Güvenlik yamaları", "Hata düzeltmeleri", "Uyumluluk garantisi"]
    }
  ];

  const lisansAvantajlari = [
    {
      title: "Kesintisiz Hizmet",
      description: "Logo ürünlerinizin kesintisiz ve güncel kalmasını sağlar"
    },
    {
      title: "Teknik Destek",
      description: "LEM sözleşmesi kapsamında öncelikli teknik destek hizmeti"
    },
    {
      title: "Güvenlik",
      description: "En güncel güvenlik yamaları ve mevzuat uyumluluğu"
    },
    {
      title: "Maliyet Avantajı",
      description: "Yeni lisans alımına göre daha ekonomik çözüm"
    }
  ];

  const lisansTurleri = [
    {
      title: "Temel LEM",
      description: "Logo ürünleriniz için temel bakım ve güncelleme hizmetleri",
      icerik: ["Ürün güncellemeleri", "Hata düzeltmeleri", "Temel destek", "Güvenlik yamaları"]
    },
    {
      title: "Gelişmiş LEM",
      description: "Kapsamlı bakım, destek ve danışmanlık hizmetleri",
      icerik: ["Öncelikli destek", "Danışmanlık hizmetleri", "Eğitim desteği", "Proje desteği"]
    },
    {
      title: "Premium LEM",
      description: "En kapsamlı lisans hizmeti ile özel destek ve çözümler",
      icerik: ["7/24 destek", "Özel proje desteği", "Öncelikli geliştirme", "Özel eğitimler"]
    }
  ];

  const lisansSureci = [
    {
      adim: "1",
      title: "İhtiyaç Analizi",
      description: "Mevcut Logo lisanslarınızı ve ihtiyaçlarınızı analiz ediyoruz"
    },
    {
      adim: "2",
      title: "LEM Önerisi",
      description: "Size en uygun LEM sözleşmesi seçeneklerini sunuyoruz"
    },
    {
      adim: "3",
      title: "Sözleşme İmzalama",
      description: "LEM sözleşmesini imzalayarak hizmete başlıyoruz"
    },
    {
      adim: "4",
      title: "Aktif Hizmet",
      description: "Lisans hizmetleriniz aktif hale geliyor ve destek almaya başlıyorsunuz"
    }
  ];

  return (
    <div className="page">
      <div className="page-header">
        <h1>📄 Logo Lisans Hizmetleri</h1>
        <p>LEM sözleşmesi ile Logo ürünlerinizin güncel kalmasını ve kesintisiz hizmet almasını sağlayın</p>
      </div>

      <div className="page-content">

        {/* Ana İçerik */}
        <div className="content-section">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2>Lisans Hizmetlerimiz</h2>
            <p>
              Logo ürünlerinde yapılan tüm güncellemeler, mevzuatla ilgili değişiklikler ve hata giderici sürümler 
              sadece LEM (Logo Enterprise Maintenance) sözleşmesi kapsamındaki kullanıcılara sunulmaktadır. 
              Binport Bilişim Teknolojileri olarak, Logo lisans hizmetlerinizi yöneterek 
              sistemlerinizin güncel ve güvenli kalmasını sağlıyoruz.
            </p>
          </motion.div>
        </div>

        {/* Lisans Hizmetleri */}
        <div className="content-section">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="section-header-plain">
              <h2>📄 Lisans Hizmet Türlerimiz</h2>
              <p>
                Logo ürünlerinizin güncel kalması ve kesintisiz çalışması için tasarlanmış 
                LEM sözleşmesi kapsamında sunduğumuz kapsamlı lisans hizmetleri.
              </p>
            </div>
            <div className="grid-base grid-3-col">
              {lisansHizmetleri.map((hizmet, index) => (
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
                    {index === 0 ? '📋' : index === 1 ? '🔄' : '🛡️'}
                  </div>
                  <h3 className="item-title">{hizmet.title}</h3>
                  <p className="item-description">{hizmet.description}</p>
                  <ul className="list-base">
                    {hizmet.ozellikler.map((ozellik, idx) => (
                      <li key={idx} className="list-item list-item-checkmark">{ozellik}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Lisans Avantajları */}
        <div className="content-section">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="section-header-plain">
              <h2>🎯 LEM Sözleşmesi Avantajları</h2>
              <p>
                Logo Enterprise Maintenance sözleşmesinin size sunduğu 
                değerli avantajlar ve işletmenize katkıları
              </p>
            </div>
            <div className="features-grid-enhanced">
              {lisansAvantajlari.map((avantaj, index) => (
                <motion.div
                  key={index}
                  className="feature-item-enhanced"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 + index * 0.15 }}
                >
                  <div className="feature-icon-enhanced">
                    {index === 0 ? '🔄' : index === 1 ? '🛠️' : index === 2 ? '🔐' : '💰'}
                  </div>
                  <div className="feature-content-enhanced">
                    <h4>{avantaj.title}</h4>
                    <p>{avantaj.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Lisans Türleri */}
        <div className="content-section">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <div className="section-header-plain">
              <h2>📋 LEM Sözleşme Türleri</h2>
              <p>
                İşletmenizin ihtiyaçlarına ve bütçenize uygun LEM sözleşmesi seçeneklerimiz.
              </p>
            </div>
            <div className="grid-base grid-3-col">
              {lisansTurleri.map((tur, index) => (
                <motion.div
                  key={index}
                  className="card-base card-hover card-with-top-border license-item"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.15 }}
                >
                  <h4 className="item-title">{tur.title}</h4>
                  <p className="item-description">{tur.description}</p>
                  <ul className="list-base">
                    {tur.icerik.map((item, idx) => (
                      <li key={idx} className="list-item list-item-checkmark">{item}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Lisans Süreci */}
        <div className="content-section">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <div className="section-header-plain">
              <h2>📋 Lisans Sürecimiz</h2>
              <p>
                LEM sözleşmenizi hızlı ve kolay bir şekilde aktive etmek için tasarlanmış 
                adım adım sürecimiz ile lisanslarınızı yönetin.
              </p>
            </div>
            <div className="process-grid-enhanced process-timeline">
              {lisansSureci.map((adim, index) => (
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
          <h2>Lisans Hizmetlerimiz Hakkında Bilgi Alın</h2>
          <p>
            Logo ürünleriniz için en uygun LEM sözleşmesi seçeneklerini öğrenmek ve 
            lisans hizmetlerinizi yönetmek için bizimle iletişime geçin.
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

export default Lisans;
