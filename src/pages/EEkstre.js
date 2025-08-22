import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Pages.css';

const EEkstre = () => {
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
          <h1>📋 E-Ekstre Çözümleri</h1>
          <p>Dijital ekstre yönetimi ile finansal takibinizi kolaylaştırın</p>
        </div>
        
        <div className="page-content">
          <div className="content-section">
            <h2>E-Ekstre Nedir?</h2>
            <p>
              E-Ekstre, banka hesap ekstrelerinin elektronik ortamda alınması, 
              işlenmesi ve yönetilmesi sürecidir. Geleneksel ekstre yöntemlerine göre 
              daha hızlı, güvenli ve verimli bir çözüm sunar.
            </p>
          </div>

          <div className="content-section">
            <h2>E-Ekstre Avantajları</h2>
            <div className="features-grid">
              <div className="feature-card">
                <h3>📊 Otomatik İşlem</h3>
                <p>Ekstrelerin otomatik alınması ve işlenmesi</p>
              </div>
              <div className="feature-card">
                <h3>🔍 Kolay Takip</h3>
                <p>Hesap hareketlerinin kolay takibi</p>
              </div>
              <div className="feature-card">
                <h3>🛡️ Güvenli Saklama</h3>
                <p>Ekstrelerin güvenli dijital saklanması</p>
              </div>
              <div className="feature-card">
                <h3>⚡ Hızlı Erişim</h3>
                <p>Geçmiş ekstrelere hızlı erişim</p>
              </div>
            </div>
          </div>

          <div className="content-section">
            <h2>Özellikler</h2>
            <ul className="service-list">
              <li>Otomatik ekstre alma</li>
              <li>Çoklu banka desteği</li>
              <li>Ekstre formatı dönüştürme</li>
              <li>Muhasebe entegrasyonu</li>
              <li>Raporlama araçları</li>
              <li>Arşivleme sistemi</li>
            </ul>
          </div>

          <div className="content-section">
            <h2>Hizmetlerimiz</h2>
            <ul className="service-list">
              <li>E-Ekstre sistemi kurulumu</li>
              <li>Banka entegrasyonu</li>
              <li>Mevcut sistem entegrasyonu</li>
              <li>Kullanıcı eğitimleri</li>
              <li>Teknik destek ve bakım</li>
            </ul>
          </div>

          <div className="cta-section">
            <h2>E-Ekstre Çözümlerimizi Keşfedin</h2>
            <p>Ekstre yönetiminizi dijitalleştirin</p>
            <button className="btn btn-primary" onClick={handleContactClick}>Ücretsiz Danışmanlık</button>
          </div>
        </div>
    </div>
  );
};

export default EEkstre;
