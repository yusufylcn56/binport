import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Pages.css';

const LogoConnectFDA = () => {
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
          <h1>📊 Logo Connect FDA</h1>
          <p>Logo ERP sistemleri ile FDA entegrasyonu çözümleri</p>
        </div>
        
        <div className="page-content">
          <div className="content-section">
            <h2>Logo Connect FDA Nedir?</h2>
            <p>
              Logo Connect FDA, Logo ERP sistemleri ile FDA (Fatura Dağıtım Aracı) 
              arasında güvenli entegrasyon sağlayan bir çözümdür. E-fatura süreçlerinin 
              otomatikleştirilmesi ve yönetimi için geliştirilmiştir.
            </p>
          </div>

          <div className="content-section">
            <h2>Logo Connect FDA Avantajları</h2>
            <div className="features-grid">
              <div className="feature-card">
                <h3>📄 E-Fatura Entegrasyonu</h3>
                <p>FDA ile tam entegrasyon</p>
              </div>
              <div className="feature-card">
                <h3>⚡ Otomatik İşlemler</h3>
                <p>Fatura süreçlerinin otomatikleştirilmesi</p>
              </div>
              <div className="feature-card">
                <h3>🔍 Gerçek Zamanlı Takip</h3>
                <p>Fatura durumlarının anlık takibi</p>
              </div>
              <div className="feature-card">
                <h3>🛡️ Güvenli İletişim</h3>
                <p>Şifreli ve güvenli veri transferi</p>
              </div>
            </div>
          </div>

          <div className="content-section">
            <h2>Özellikler</h2>
            <ul className="service-list">
              <li>Otomatik fatura gönderimi</li>
              <li>Fatura durumu takibi</li>
              <li>Toplu işlem desteği</li>
              <li>Hata yönetimi</li>
              <li>Detaylı log kayıtları</li>
              <li>Raporlama araçları</li>
            </ul>
          </div>

          <div className="content-section">
            <h2>Hizmetlerimiz</h2>
            <ul className="service-list">
              <li>Logo Connect FDA kurulumu</li>
              <li>FDA entegrasyonu</li>
              <li>Mevcut sistem entegrasyonu</li>
              <li>Kullanıcı eğitimleri</li>
              <li>Teknik destek ve bakım</li>
            </ul>
          </div>

          <div className="cta-section">
            <h2>Logo Connect FDA Çözümlerimizi Keşfedin</h2>
            <p>E-fatura süreçlerinizi otomatikleştirin</p>
            <button className="btn btn-primary" onClick={handleContactClick}>Ücretsiz Danışmanlık</button>
          </div>
        </div>
    </div>
  );
};

export default LogoConnectFDA;
