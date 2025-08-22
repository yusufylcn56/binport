import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './Pages.css';

const ProjeCozumleri = () => {
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
        <h1>📋 Proje Çözümleri</h1>
        <p>Proje yönetimi ve özel çözümlerle işletmenizi güçlendirin</p>
      </div>

      <div className="page-content">
        {/* Hazine Yönetimi Bölümü */}
        <motion.div
          id="hazine-yonetimi"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="content-section"
        >
          <h2>💎 Hazine Yönetimi</h2>
          <p>
            Hazine Yönetimi çözümümüz, işletmenizin finansal kaynaklarını optimize etmek ve 
            nakit akışını verimli bir şekilde yönetmek için tasarlanmış kapsamlı bir platformdur. 
            Likidite yönetiminden risk analizine, yatırım planlamasından finansal raporlamaya 
            kadar tüm hazine işlemlerinizi profesyonel düzeyde gerçekleştirin.
          </p>
          
          <div className="features-grid">
            <div className="feature-card">
              <h3>💰 Nakit Akış Yönetimi</h3>
              <p>Günlük, haftalık ve aylık nakit akış projeksiyonları ile likidite 
              planlaması yapın, fazla nakit değerlendirme fırsatlarını yakalayın.</p>
            </div>
            <div className="feature-card">
              <h3>📈 Risk Yönetimi</h3>
              <p>Kur riski, faiz riski ve kredi riski analizleri ile finansal riskleri 
              önceden tespit edin ve koruma stratejileri geliştirin.</p>
            </div>
            <div className="feature-card">
              <h3>🏦 Banka İlişkileri</h3>
              <p>Çoklu banka hesap yönetimi, otomatik banka mutabakatı ve 
              elektronik bankacılık entegrasyonu ile verimli bankacılık işlemleri.</p>
            </div>
          </div>

          <ul className="service-list">
            <li>Kapsamlı nakit akış planlama ve projeksiyonu araçları</li>
            <li>Otomatik banka hesap mutabakatı ve işlem takibi</li>
            <li>Finansal risk analizi ve hedge stratejileri</li>
            <li>Yatırım portföyü yönetimi ve performans analizi</li>
            <li>Hazine raporları ve üst yönetim dashboardları</li>
          </ul>
        </motion.div>

        {/* B2B Sistemleri Bölümü */}
        <motion.div
          id="b2b-sistemleri"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="content-section"
        >
          <h2>🔗 B2B Sistemleri</h2>
          <p>
            B2B Sistemleri çözümümüz, işletmeler arası ticari süreçleri dijitalleştiren 
            ve otomatikleştiren kapsamlı bir platformdur. Tedarikçi yönetiminden müşteri 
            portallarına, elektronik belge değişiminden entegre iş süreçlerine kadar 
            B2B operasyonlarınızın tamamını modernize eder.
          </p>
          
          <div className="features-grid">
            <div className="feature-card">
              <h3>🤝 İş Ortağı Portalları</h3>
              <p>Tedarikçiler ve müşteriler için özel portaller oluşturun, 
              sipariş süreçlerini otomatikleştirin ve iş ortaklarınızla seamless işbirliği sağlayın.</p>
            </div>
            <div className="feature-card">
              <h3>📋 EDI Entegrasyonu</h3>
              <p>Elektronik Veri Değişimi (EDI) ile iş ortaklarınızla otomatik 
              belge alışverişi yapın, manuel işlemleri minimize edin.</p>
            </div>
            <div className="feature-card">
              <h3>🔄 API Yönetimi</h3>
              <p>RESTful API'ler ile farklı sistemleri entegre edin, 
              gerçek zamanlı veri senkronizasyonu ve iş süreçlerini otomatikleştirin.</p>
            </div>
          </div>

          <ul className="service-list">
            <li>Tedarikçi ve müşteri portal çözümleri geliştirme</li>
            <li>EDI ve elektronik belge değişim sistemi kurulumu</li>
            <li>API geliştirme ve sistem entegrasyon hizmetleri</li>
            <li>B2B e-ticaret platformu tasarım ve geliştirme</li>
            <li>İş süreci otomasyonu ve workflow yönetimi</li>
          </ul>
        </motion.div>

        {/* Veri Toplama ve Raporlama Bölümü */}
        <motion.div
          id="veri-toplama-raporlama"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="content-section"
        >
          <h2>📊 Veri Toplama ve Raporlama</h2>
          <p>
            Veri Toplama ve Raporlama çözümümüz, işletmenizin farklı kaynaklarından gelen 
            verileri merkezi bir platformda toplayarak, anlamlı raporlar ve analizler 
            üretmenizi sağlar. Big Data teknolojileri ve gelişmiş analitik araçları ile 
            verilerinizi stratejik kararlarınızın temeli haline getirin.
          </p>
          
          <div className="features-grid">
            <div className="feature-card">
              <h3>🔄 Veri Entegrasyonu</h3>
              <p>Farklı sistemlerden (ERP, CRM, e-ticaret, sosyal medya) verileri 
              otomatik olarak toplayın ve merkezi veri ambarında birleştirin.</p>
            </div>
            <div className="feature-card">
              <h3>📈 İnteraktif Dashboardlar</h3>
              <p>Gerçek zamanlı görselleştirmeler, drill-down analizler ve 
              özelleştirilebilir KPI dashboardları ile verilerinizi canlı tutun.</p>
            </div>
            <div className="feature-card">
              <h3>🤖 Akıllı Analitik</h3>
              <p>Makine öğrenmesi algoritmaları ile trend analizi, tahminleme 
              ve anomali tespiti yaparak proaktif kararlar alın.</p>
            </div>
          </div>

          <ul className="service-list">
            <li>Çoklu veri kaynağı entegrasyonu ve ETL süreçleri</li>
            <li>Özelleştirilebilir dashboard ve raporlama araçları</li>
            <li>Gerçek zamanlı veri analizi ve görselleştirme</li>
            <li>Otomatik rapor üretimi ve e-posta dağıtımı</li>
            <li>Predictive analytics ve makine öğrenmesi modelleri</li>
          </ul>
        </motion.div>

        {/* CTA Bölümü */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="cta-section"
        >
          <h2>Proje Çözümlerimiz Hakkında Bilgi Alın</h2>
          <p>
            Hazine Yönetimi, B2B Sistemleri ve Veri Toplama ve Raporlama çözümlerimiz hakkında detaylı bilgi almak 
            ve işletmeniz için en uygun çözümü seçmek için bizimle iletişime geçin.
          </p>
          <button className="btn btn-primary" onClick={handleContactClick}>İletişime Geçin</button>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjeCozumleri;
