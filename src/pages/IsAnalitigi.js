import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './Pages.css';

const IsAnalitigi = () => {
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
        <h1>📈 İş Analitiği Çözümleri</h1>
        <p>Veri odaklı karar verme süreçlerinizi güçlendirin</p>
      </div>

      <div className="page-content">
        {/* Logo Mind Insight Bölümü */}
        <motion.div
          id="logo-mind-insight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="content-section"
        >
          <h2>🧠 Logo Mind Insight</h2>
          <p>
            Logo Mind Insight, işletmenizin verilerini derinlemesine analiz ederek stratejik 
            içgörüler sunan gelişmiş bir iş zekası platformudur. Büyük veri setlerini anlamlı 
            bilgilere dönüştürerek, rekabetçi avantaj sağlayacak trendleri keşfetmenizi ve 
            veri odaklı kararlar almanızı sağlar.
          </p>
          
          <div className="features-grid">
            <div className="feature-card">
              <h3>🔍 Derinlemesine Analiz</h3>
              <p>Gelişmiş algoritma ve makine öğrenmesi teknikleri ile verilerinizi 
              çok boyutlu olarak analiz eder ve gizli kalıpları ortaya çıkarır.</p>
            </div>
            <div className="feature-card">
              <h3>📊 Predictive Analytics</h3>
              <p>Geçmiş verilerden yola çıkarak gelecek trendlerini tahmin eder, 
              proaktif iş stratejileri geliştirmenize yardımcı olur.</p>
            </div>
            <div className="feature-card">
              <h3>💡 Akıllı Öneriler</h3>
              <p>AI destekli öneri sistemi ile performans iyileştirme fırsatlarını 
              tespit eder ve eylem planları önerir.</p>
            </div>
          </div>

          <ul className="service-list">
            <li>Gelişmiş veri madenciliği ve pattern recognition teknolojileri</li>
            <li>Makine öğrenmesi tabanlı tahminleme modelleri</li>
            <li>Interaktif görselleştirme ve self-service analytics</li>
            <li>Gerçek zamanlı anomali tespiti ve uyarı sistemleri</li>
            <li>Özelleştirilebilir KPI dashboard'ları ve raporlar</li>
          </ul>
        </motion.div>

        {/* Logo Mind Navigator Bölümü */}
        <motion.div
          id="logo-mind-navigator"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="content-section"
        >
          <h2>🧭 Logo Mind Navigator</h2>
          <p>
            Logo Mind Navigator, işletmenizin stratejik hedeflerine ulaşma yolunda rehberlik 
            eden kapsamlı bir performans yönetimi ve navigasyon platformudur. KPI takibinden 
            stratejik planlama süreçlerine, performans ölçümlerinden hedef yönetimine kadar 
            işletmenizi başarıya götüren yol haritasını çizer.
          </p>
          
          <div className="features-grid">
            <div className="feature-card">
              <h3>🎯 Stratejik Hedef Yönetimi</h3>
              <p>Kurumsal hedeflerinizi belirleyin, takip edin ve gerçekleşme oranlarını 
              real-time olarak izleyerek stratejik odaklanmayı sağlayın.</p>
            </div>
            <div className="feature-card">
              <h3>📈 Performans İzleme</h3>
              <p>Balanced scorecard metodolojisi ile finansal ve operasyonel performansı 
              çok boyutlu olarak ölçün ve karşılaştırın.</p>
            </div>
            <div className="feature-card">
              <h3>🔄 Aksiyon Planları</h3>
              <p>Hedeflere ulaşmak için gerekli aksiyonları planlayın, sorumluları 
              belirleyin ve ilerleme durumunu sistematik olarak takip edin.</p>
            </div>
          </div>

          <ul className="service-list">
            <li>Stratejik hedef belirleme ve cascading süreçleri</li>
            <li>Balanced scorecard ve KPI yönetim sistemleri</li>
            <li>Performans dashboard'ları ve trend analizleri</li>
            <li>Aksiyon planı yönetimi ve takip araçları</li>
            <li>Benchmark analizi ve sektörel karşılaştırmalar</li>
          </ul>
        </motion.div>

        {/* Logo Mind Budget Bölümü */}
        <motion.div
          id="logo-mind-budget"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="content-section"
        >
          <h2>💰 Logo Mind Budget</h2>
          <p>
            Logo Mind Budget, işletmenizin finansal planlama ve bütçe yönetimi süreçlerini 
            dijitalleştiren akıllı bir bütçe yönetim platformudur. Bütçe hazırlamadan 
            gerçekleşme takibine, varyans analizinden rolling forecast süreçlerine kadar 
            finansal planlamanızı optimize eder ve kontrol altında tutar.
          </p>
          
          <div className="features-grid">
            <div className="feature-card">
              <h3>📊 Akıllı Bütçe Planlama</h3>
              <p>Geçmiş veriler ve trend analizleri kullanarak otomatik bütçe önerileri 
              oluşturur, senaryolu planlama ile farklı durumları değerlendirin.</p>
            </div>
            <div className="feature-card">
              <h3>🔍 Gerçek Zamanlı Takip</h3>
              <p>Bütçe vs gerçekleşen analizleri ile finansal performansınızı anlık 
              olarak izleyin ve sapmaları erken tespit edin.</p>
            </div>
            <div className="feature-card">
              <h3>📈 Rolling Forecast</h3>
              <p>Dinamik tahminleme modelleri ile gelecek dönemleri öngörün, 
              değişen koşullara hızla adapte olan esnek bütçeler oluşturun.</p>
            </div>
          </div>

          <ul className="service-list">
            <li>Çok boyutlu bütçe planlama ve senaryo modelleme</li>
            <li>Otomatik varyans analizi ve sapma raporları</li>
            <li>Rolling forecast ve dinamik tahminleme araçları</li>
            <li>Departman bazlı bütçe dağıtımı ve onay süreçleri</li>
            <li>Finansal dashboard'lar ve executive raporlama</li>
          </ul>
        </motion.div>

        {/* CTA Bölümü */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="cta-section"
        >
          <h2>İş Analitiği Çözümlerimiz Hakkında Bilgi Alın</h2>
          <p>
            Logo Mind Insight, Logo Mind Navigator ve Logo Mind Budget çözümlerimiz hakkında detaylı bilgi almak 
            ve işletmeniz için en uygun çözümü seçmek için bizimle iletişime geçin.
          </p>
          <button className="btn btn-primary" onClick={handleContactClick}>İletişime Geçin</button>
        </motion.div>
      </div>
    </div>
  );
};

export default IsAnalitigi;
