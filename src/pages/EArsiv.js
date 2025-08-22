import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Pages.css';

const EArsiv = () => {
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
          <h1>📁 E-Arşiv Çözümleri</h1>
          <p>Dijital arşivleme ile belgelerinizi güvenle saklayın</p>
        </div>
        
        <div className="page-content">
          <div className="content-section">
            <h2>E-Arşiv Nedir?</h2>
            <p>
              E-Arşiv, elektronik belgelerin yasal gerekliliklere uygun şekilde 
              dijital ortamda saklanması ve yönetilmesi sürecidir. Geleneksel 
              arşivleme yöntemlerine göre daha güvenli, erişilebilir ve verimli bir çözüm sunar.
            </p>
          </div>

          <div className="content-section">
            <h2>E-Arşiv Avantajları</h2>
            <div className="features-grid">
              <div className="feature-card">
                <h3>🔍 Kolay Erişim</h3>
                <p>Belgelere anında ve güvenli erişim</p>
              </div>
              <div className="feature-card">
                <h3>💾 Alan Tasarrufu</h3>
                <p>Fiziksel depolama alanından tasarruf</p>
              </div>
              <div className="feature-card">
                <h3>🛡️ Güvenli Saklama</h3>
                <p>Yedekleme ve güvenlik önlemleri</p>
              </div>
              <div className="feature-card">
                <h3>⚡ Hızlı Arama</h3>
                <p>Gelişmiş arama ve filtreleme özellikleri</p>
              </div>
            </div>
          </div>

          <div className="content-section">
            <h2>Hizmetlerimiz</h2>
            <ul className="service-list">
              <li>E-Arşiv sistemi kurulumu</li>
              <li>Mevcut belgelerin dijitalleştirilmesi</li>
              <li>Yasal uyumluluk danışmanlığı</li>
              <li>Güvenlik ve yedekleme çözümleri</li>
              <li>Kullanıcı eğitimleri</li>
            </ul>
          </div>

          <div className="cta-section">
            <h2>E-Arşiv Çözümlerimizi Keşfedin</h2>
            <p>Belgelerinizi dijital güvenlikle koruyun</p>
            <button className="btn btn-primary" onClick={handleContactClick}>Ücretsiz Danışmanlık</button>
          </div>
        </div>
    </div>
  );
};

export default EArsiv;
