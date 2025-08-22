import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Pages.css';

const EIrsaliye = () => {
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
          <h1>📦 E-İrsaliye Çözümleri</h1>
          <p>Dijital irsaliye yönetimi ile lojistik süreçlerinizi optimize edin</p>
        </div>
        
        <div className="page-content">
          <div className="content-section">
            <h2>E-İrsaliye Nedir?</h2>
            <p>
              E-İrsaliye, mal sevkiyatlarının elektronik ortamda takip edilmesi ve 
              yönetilmesi sürecidir. Geleneksel irsaliye yöntemlerine göre daha hızlı, 
              güvenli ve verimli bir çözüm sunar.
            </p>
          </div>

          <div className="content-section">
            <h2>E-İrsaliye Avantajları</h2>
            <div className="features-grid">
              <div className="feature-card">
                <h3>🚚 Lojistik Takip</h3>
                <p>Gerçek zamanlı sevkiyat takibi</p>
              </div>
              <div className="feature-card">
                <h3>📱 Mobil Erişim</h3>
                <p>Mobil cihazlardan erişim imkanı</p>
              </div>
              <div className="feature-card">
                <h3>🔍 Detaylı Raporlama</h3>
                <p>Kapsamlı lojistik raporları</p>
              </div>
              <div className="feature-card">
                <h3>⚡ Hızlı İşlem</h3>
                <p>Anında irsaliye oluşturma</p>
              </div>
            </div>
          </div>

          <div className="content-section">
            <h2>Hizmetlerimiz</h2>
            <ul className="service-list">
              <li>E-İrsaliye sistemi kurulumu</li>
              <li>Lojistik entegrasyonu</li>
              <li>Mobil uygulama geliştirme</li>
              <li>Rota optimizasyonu</li>
              <li>Takip ve raporlama araçları</li>
            </ul>
          </div>

          <div className="cta-section">
            <h2>E-İrsaliye Çözümlerimizi Keşfedin</h2>
            <p>Lojistik süreçlerinizi dijitalleştirin</p>
            <button className="btn btn-primary" onClick={handleContactClick}>Ücretsiz Danışmanlık</button>
          </div>
        </div>
    </div>
  );
};

export default EIrsaliye;
