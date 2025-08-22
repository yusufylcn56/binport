import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Pages.css';

const EDefter = () => {
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
          <h1>📚 E-Defter Çözümleri</h1>
          <p>Dijital defter tutma ile muhasebe süreçlerinizi modernleştirin</p>
        </div>
        
        <div className="page-content">
          <div className="content-section">
            <h2>E-Defter Nedir?</h2>
            <p>
              E-Defter, muhasebe kayıtlarının elektronik ortamda tutulması ve 
              yönetilmesi sürecidir. Geleneksel defter tutma yöntemlerinin yerini 
              alarak daha güvenli, erişilebilir ve verimli bir çözüm sunar.
            </p>
          </div>

          <div className="content-section">
            <h2>E-Defter Avantajları</h2>
            <div className="features-grid">
              <div className="feature-card">
                <h3>📊 Otomatik Kayıt</h3>
                <p>Otomatik muhasebe kayıtları oluşturma</p>
              </div>
              <div className="feature-card">
                <h3>🔍 Kolay Kontrol</h3>
                <p>Denetim ve kontrol süreçlerini kolaylaştırma</p>
              </div>
              <div className="feature-card">
                <h3>🛡️ Yasal Uyumluluk</h3>
                <p>Mevzuata uygun dijital defter tutma</p>
              </div>
              <div className="feature-card">
                <h3>⚡ Hızlı Raporlama</h3>
                <p>Anında rapor ve analiz imkanları</p>
              </div>
            </div>
          </div>

          <div className="content-section">
            <h2>Hizmetlerimiz</h2>
            <ul className="service-list">
              <li>E-Defter sistemi kurulumu</li>
              <li>Mevcut kayıtların dijitalleştirilmesi</li>
              <li>Yasal uyumluluk danışmanlığı</li>
              <li>Muhasebe entegrasyonu</li>
              <li>Kullanıcı eğitimleri ve destek</li>
            </ul>
          </div>

          <div className="cta-section">
            <h2>E-Defter Çözümlerimizi Keşfedin</h2>
            <p>Muhasebe süreçlerinizi dijitalleştirin</p>
            <button className="btn btn-primary" onClick={handleContactClick}>Ücretsiz Danışmanlık</button>
          </div>
        </div>
    </div>
  );
};

export default EDefter;
