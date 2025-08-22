import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './Pages.css';

const IsgCozumleri = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/');
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 500);
  };
  return (
    <div className="page">
      <div className="page-header">
        <h1>🛡️ İSG Çözümleri</h1>
        <p>İş sağlığı ve güvenliği çözümleriyle çalışanlarınızı koruyun</p>
      </div>

      <div className="page-content">
        {/* E Logo İSG Bölümü */}
        <motion.div
          id="e-logo-isg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="content-section"
        >
          <h2>⚡ E Logo İSG</h2>
          <p>
            E Logo İSG, işletmenizin iş sağlığı ve güvenliği yükümlülüklerini dijital ortamda 
            yönetmenizi sağlayan kapsamlı bir İSG yönetim sistemidir. Yasal uyumluluktan risk 
            yönetimine, eğitim planlamasından kaza takibine kadar tüm İSG süreçlerinizi tek 
            platformda entegre ederek güvenli çalışma ortamları oluşturmanıza yardımcı olur.
          </p>
          
          <div className="features-grid">
            <div className="feature-card">
              <h3>🔍 Risk Değerlendirme</h3>
              <p>Sistematik risk analizi, tehlike tanımlama ve risk skorlama araçları ile 
              işyeri risklerini proaktif olarak yönetin ve önleyici tedbirler alın.</p>
            </div>
            <div className="feature-card">
              <h3>📚 Eğitim ve Sertifikasyon</h3>
              <p>Personel İSG eğitimlerini planlayın, takip edin ve sertifika süreçlerini 
              yönetin. Yasal eğitim gerekliliklerini otomatik olarak takip edin.</p>
            </div>
            <div className="feature-card">
              <h3>📊 Yasal Uyumluluk</h3>
              <p>İSG mevzuatı gerekliliklerini otomatik takip edin, yasal raporları 
              hazırlayın ve denetim süreçlerini kolayca yönetin.</p>
            </div>
          </div>

          <ul className="service-list">
            <li>Kapsamlı risk değerlendirme ve tehlike analizi modülleri</li>
            <li>İş kazası ve ramak kala olay raporlama sistemi</li>
            <li>Personel İSG eğitim planlaması ve takip araçları</li>
            <li>Yasal denetim ve uyumluluk raporlama özellikleri</li>
            <li>İSG performans göstergeleri ve analitik dashboard</li>
          </ul>
        </motion.div>

        {/* İş Sağlığı ve Güvenliği Bölümü */}
        <motion.div
          id="is-sagligi-guvenligi"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="content-section"
        >
          <h2>🔒 İş Sağlığı ve Güvenliği</h2>
          <p>
            İş Sağlığı ve Güvenliği çözümümüz, işyerlerinde güvenli ve sağlıklı çalışma 
            ortamları oluşturmak için gerekli tüm süreçleri yöneten kapsamlı bir platformdur. 
            Mevzuat uyumundan personel sağlığı takibine, iş güvenliği önlemlerinden acil 
            durum planlamasına kadar İSG'nin tüm alanlarını kapsayan entegre çözümler sunar.
          </p>
          
          <div className="features-grid">
            <div className="feature-card">
              <h3>🏥 Sağlık Takibi</h3>
              <p>Personel sağlık muayeneleri, meslek hastalığı takibi ve sağlık 
              raporları yönetimi ile çalışan sağlığını proaktif olarak koruyun.</p>
            </div>
            <div className="feature-card">
              <h3>🛡️ Güvenlik Yönetimi</h3>
              <p>İş güvenliği önlemleri, kişisel koruyucu donanım takibi ve 
              güvenlik prosedürleri ile iş kazalarını önleyin.</p>
            </div>
            <div className="feature-card">
              <h3>🚨 Acil Durum Planı</h3>
              <p>Acil durum senaryoları, tahliye planları ve kriz yönetimi 
              protokolleri ile her türlü acil duruma hazırlıklı olun.</p>
            </div>
          </div>

          <ul className="service-list">
            <li>Personel sağlık kayıtları ve periyodik muayene takibi</li>
            <li>İş güvenliği önlemleri ve KKD yönetim sistemi</li>
            <li>Acil durum planlaması ve tahliye prosedürleri</li>
            <li>Meslek hastalığı önleme ve takip programları</li>
            <li>İSG komitesi yönetimi ve toplantı kayıtları</li>
          </ul>
        </motion.div>

        {/* CTA Bölümü */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="cta-section"
        >
          <h2>İSG Çözümlerimiz Hakkında Bilgi Alın</h2>
          <p>
            E Logo İSG ve İş Sağlığı ve Güvenliği çözümlerimiz hakkında detaylı bilgi almak 
            ve işletmenizde iş sağlığı ve güvenliği standartlarını yükseltmek için bizimle iletişime geçin.
          </p>
          <button className="btn btn-primary" onClick={handleContactClick}>İletişime Geçin</button>
        </motion.div>
      </div>
    </div>
  );
};

export default IsgCozumleri;
