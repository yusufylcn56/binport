import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Pages.css';

const GoGaranti = () => {
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
          <h1>🛡️ Go Garanti</h1>
          <p>Garanti Bankası ile entegrasyon çözümleri</p>
        </div>
        
        <div className="page-content">
          <div className="content-section">
            <h2>Go Garanti Nedir?</h2>
            <p>
              Go Garanti, işletmelerin Garanti Bankası ile güvenli ve hızlı entegrasyon 
              sağlamasını mümkün kılan bir çözümdür. Finansal işlemlerin otomatikleştirilmesi 
              ve gerçek zamanlı takibi için geliştirilmiştir.
            </p>
          </div>

          <div className="content-section">
            <h2>Go Garanti Avantajları</h2>
            <div className="features-grid">
              <div className="feature-card">
                <h3>🏦 Garanti Entegrasyonu</h3>
                <p>Garanti Bankası ile tam entegrasyon</p>
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
            <h2>Özellikler</h2>
            <ul className="service-list">
              <li>Hesap bakiyesi sorgulama</li>
              <li>Havale ve EFT işlemleri</li>
              <li>Ödeme emirleri</li>
              <li>Hesap hareketi takibi</li>
              <li>Toplu işlem desteği</li>
              <li>Raporlama araçları</li>
            </ul>
          </div>

          <div className="content-section">
            <h2>Hizmetlerimiz</h2>
            <ul className="service-list">
              <li>Go Garanti kurulumu</li>
              <li>Garanti Bankası entegrasyonu</li>
              <li>Mevcut sistem entegrasyonu</li>
              <li>Kullanıcı eğitimleri</li>
              <li>Teknik destek ve bakım</li>
            </ul>
          </div>

          <div className="cta-section">
            <h2>Go Garanti Çözümlerimizi Keşfedin</h2>
            <p>Garanti Bankası entegrasyonunuzu güçlendirin</p>
            <button className="btn btn-primary" onClick={handleContactClick}>Ücretsiz Danışmanlık</button>
          </div>
        </div>
    </div>
  );
};

export default GoGaranti;
