import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Pages.css';

const EFatura = () => {
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
        <h1>📄 E-Fatura Çözümleri</h1>
        <p>Dijital fatura yönetimi ile işletmenizi geleceğe taşıyın</p>
      </div>

      <div className="page-content">
          <div className="content-section">
            <h2>E-Fatura Nedir?</h2>
            <p>
              E-Fatura, faturaların elektronik ortamda oluşturulması, gönderilmesi ve 
              saklanması sürecini kapsayan dijital bir çözümdür. Geleneksel kağıt faturaların 
              yerini alarak hem çevre dostu hem de verimli bir yaklaşım sunar.
            </p>
          </div>

          <div className="content-section">
            <h2>E-Fatura Avantajları</h2>
            <div className="features-grid">
              <div className="feature-card">
                <h3>🚀 Hızlı İşlem</h3>
                <p>Anında fatura oluşturma ve gönderme</p>
              </div>
              <div className="feature-card">
                <h3>💰 Maliyet Tasarrufu</h3>
                <p>Kağıt, baskı ve posta maliyetlerinden tasarruf</p>
              </div>
              <div className="feature-card">
                <h3>📊 Otomatik Raporlama</h3>
                <p>Detaylı analiz ve raporlama imkanları</p>
              </div>
              <div className="feature-card">
                <h3>🔒 Güvenli Saklama</h3>
                <p>Yasal gerekliliklere uygun dijital arşivleme</p>
              </div>
            </div>
          </div>

          <div className="content-section">
            <h2>Hizmetlerimiz</h2>
            <ul className="service-list">
              <li>E-Fatura entegrasyonu ve kurulum</li>
              <li>Mevcut sistemlerle entegrasyon</li>
              <li>Eğitim ve destek hizmetleri</li>
              <li>Teknik danışmanlık</li>
              <li>7/24 destek</li>
            </ul>
          </div>

          <div className="cta-section">
            <h2>E-Fatura Çözümlerimizi Keşfedin</h2>
            <p>İşletmenizi dijital dönüşüme hazırlayın</p>
            <button className="btn btn-primary" onClick={handleContactClick}>Ücretsiz Danışmanlık</button>
          </div>
        </div>
    </div>
  );
};

export default EFatura;
