import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Pages.css';

const LogoConnectBanka = () => {
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
          <h1>🏦 Logo Connect Banka</h1>
          <p>Logo ERP sistemleri ile banka entegrasyonu çözümleri</p>
        </div>
        
        <div className="page-content">
          <div className="content-section">
            <h2>Logo Connect Banka Nedir?</h2>
            <p>
              Logo Connect Banka, Logo ERP sistemleri ile banka sistemleri arasında 
              güvenli ve hızlı entegrasyon sağlayan bir çözümdür. Finansal işlemlerin 
              otomatikleştirilmesi ve gerçek zamanlı takibi için geliştirilmiştir.
            </p>
          </div>

          <div className="content-section">
            <h2>Logo Connect Banka Avantajları</h2>
            <div className="features-grid">
              <div className="feature-card">
                <h3>🏦 Banka Entegrasyonu</h3>
                <p>Tüm bankalarla güvenli entegrasyon</p>
              </div>
              <div className="feature-card">
                <h3>⚡ Otomatik İşlemler</h3>
                <p>Finansal işlemlerin otomatikleştirilmesi</p>
              </div>
              <div className="feature-card">
                <h3>🔍 Gerçek Zamanlı Takip</h3>
                <p>Hesap hareketlerinin anlık takibi</p>
              </div>
              <div className="feature-card">
                <h3>🛡️ Güvenli Bağlantı</h3>
                <p>SSL şifreleme ile güvenli iletişim</p>
              </div>
            </div>
          </div>

          <div className="content-section">
            <h2>Desteklenen Bankalar</h2>
            <ul className="service-list">
              <li>Ziraat Bankası</li>
              <li>İş Bankası</li>
              <li>Garanti BBVA</li>
              <li>Yapı Kredi</li>
              <li>Akbank</li>
              <li>VakıfBank</li>
              <li>Halkbank</li>
              <li>QNB Finansbank</li>
            </ul>
          </div>

          <div className="content-section">
            <h2>Hizmetlerimiz</h2>
            <ul className="service-list">
              <li>Logo Connect Banka kurulumu</li>
              <li>Banka entegrasyonu</li>
              <li>Mevcut sistem entegrasyonu</li>
              <li>Kullanıcı eğitimleri</li>
              <li>Teknik destek ve bakım</li>
            </ul>
          </div>

          <div className="cta-section">
            <h2>Logo Connect Banka Çözümlerimizi Keşfedin</h2>
            <p>Banka entegrasyonunuzu güçlendirin</p>
            <button className="btn btn-primary" onClick={handleContactClick}>Ücretsiz Danışmanlık</button>
          </div>
        </div>
    </div>
  );
};

export default LogoConnectBanka;
