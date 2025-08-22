import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Pages.css';

const LogoConnectB2B = () => {
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
          <h1>🔗 Logo Connect B2B</h1>
          <p>Logo ERP sistemleri ile B2B entegrasyonu çözümleri</p>
        </div>
        
        <div className="page-content">
          <div className="content-section">
            <h2>Logo Connect B2B Nedir?</h2>
            <p>
              Logo Connect B2B, Logo ERP sistemleri ile iş ortakları arasında 
              güvenli ve hızlı veri entegrasyonu sağlayan bir çözümdür. 
              B2B süreçlerinin otomatikleştirilmesi ve yönetimi için geliştirilmiştir.
            </p>
          </div>

          <div className="content-section">
            <h2>Logo Connect B2B Avantajları</h2>
            <div className="features-grid">
              <div className="feature-card">
                <h3>🤝 İş Ortaklığı</h3>
                <p>Tedarikçi ve müşteri entegrasyonu</p>
              </div>
              <div className="feature-card">
                <h3>⚡ Otomatik İşlemler</h3>
                <p>B2B süreçlerinin otomatikleştirilmesi</p>
              </div>
              <div className="feature-card">
                <h3>🔍 Gerçek Zamanlı Takip</h3>
                <p>Sipariş ve stok durumlarının takibi</p>
              </div>
              <div className="feature-card">
                <h3>🛡️ Güvenli Veri Transferi</h3>
                <p>Şifreli ve güvenli iletişim</p>
              </div>
            </div>
          </div>

          <div className="content-section">
            <h2>Özellikler</h2>
            <ul className="service-list">
              <li>Otomatik sipariş işleme</li>
              <li>Stok senkronizasyonu</li>
              <li>Fiyat güncellemeleri</li>
              <li>Katalog yönetimi</li>
              <li>Ödeme entegrasyonu</li>
              <li>Raporlama araçları</li>
            </ul>
          </div>

          <div className="content-section">
            <h2>Hizmetlerimiz</h2>
            <ul className="service-list">
              <li>Logo Connect B2B kurulumu</li>
              <li>İş ortakları entegrasyonu</li>
              <li>Mevcut sistem entegrasyonu</li>
              <li>Kullanıcı eğitimleri</li>
              <li>Teknik destek ve bakım</li>
            </ul>
          </div>

          <div className="cta-section">
            <h2>Logo Connect B2B Çözümlerimizi Keşfedin</h2>
            <p>B2B süreçlerinizi otomatikleştirin</p>
            <button className="btn btn-primary" onClick={handleContactClick}>Ücretsiz Danışmanlık</button>
          </div>
        </div>
    </div>
  );
};

export default LogoConnectB2B;
