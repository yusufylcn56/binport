import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Pages.css';

const EMutabakat = () => {
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
          <h1>🔄 E-Mutabakat Çözümleri</h1>
          <p>Dijital mutabakat süreçleri ile finansal kontrolünüzü güçlendirin</p>
        </div>
        
        <div className="page-content">
          <div className="content-section">
            <h2>E-Mutabakat Nedir?</h2>
            <p>
              E-Mutabakat, finansal kayıtların elektronik ortamda karşılaştırılması ve 
              doğrulanması sürecidir. Geleneksel mutabakat yöntemlerine göre daha hızlı, 
              güvenilir ve verimli bir çözüm sunar.
            </p>
          </div>

          <div className="content-section">
            <h2>E-Mutabakat Avantajları</h2>
            <div className="features-grid">
              <div className="feature-card">
                <h3>⚡ Hızlı İşlem</h3>
                <p>Otomatik mutabakat süreçleri</p>
              </div>
              <div className="feature-card">
                <h3>🔍 Detaylı Analiz</h3>
                <p>Kapsamlı finansal analiz imkanları</p>
              </div>
              <div className="feature-card">
                <h3>🛡️ Hata Azaltma</h3>
                <p>Manuel hataları minimize etme</p>
              </div>
              <div className="feature-card">
                <h3>📊 Raporlama</h3>
                <p>Detaylı rapor ve analiz çıktıları</p>
              </div>
            </div>
          </div>

          <div className="content-section">
            <h2>Hizmetlerimiz</h2>
            <ul className="service-list">
              <li>E-Mutabakat sistemi kurulumu</li>
              <li>Banka mutabakatı otomasyonu</li>
              <li>Müşteri mutabakatı çözümleri</li>
              <li>Tedarikçi mutabakatı</li>
              <li>Raporlama ve analiz araçları</li>
            </ul>
          </div>

          <div className="cta-section">
            <h2>E-Mutabakat Çözümlerimizi Keşfedin</h2>
            <p>Finansal süreçlerinizi otomatikleştirin</p>
            <button className="btn btn-primary" onClick={handleContactClick}>Ücretsiz Danışmanlık</button>
          </div>
        </div>
    </div>
  );
};

export default EMutabakat;
