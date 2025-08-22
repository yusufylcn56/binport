import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './Pages.css';

const IkCozumleri = () => {
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
        <h1>👥 İK Çözümleri</h1>
        <p>İnsan kaynakları yönetimi çözümleri ile ekibinizi güçlendirin</p>
      </div>

      <div className="page-content">
        {/* J-Guar IK Bölümü */}
        <motion.div
          id="j-guar-ik"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="content-section"
        >
          <h2>🛡️ J-Guar IK</h2>
          <p>
            J-Guar IK, işletmenizin insan kaynakları süreçlerini güvenli ve verimli bir şekilde 
            yönetmenizi sağlayan kapsamlı bir İK yönetim sistemidir. Personel takibinden performans 
            değerlendirmesine, eğitim planlamasından yasal uyumluluk raporlamasına kadar tüm 
            İK ihtiyaçlarınızı tek platformda çözer.
          </p>
          
          <div className="features-grid">
            <div className="feature-card">
              <h3>👤 Personel Yönetimi</h3>
              <p>Çalışan bilgilerini merkezi bir veritabanında güvenle saklayın, 
              özlük dosyalarını dijitalleştirin ve personel hareketlerini takip edin.</p>
            </div>
            <div className="feature-card">
              <h3>📊 Performans Takibi</h3>
              <p>Hedef belirleme, performans değerlendirme ve kariyer planlama araçları 
              ile çalışanlarınızın gelişimini sistematik olarak yönetin.</p>
            </div>
            <div className="feature-card">
              <h3>🔒 Güvenlik ve Uyumluluk</h3>
              <p>KVKK uyumlu veri güvenliği, yasal raporlama gereksinimleri ve 
              yetkilendirme sistemleri ile tam güvenlik sağlar.</p>
            </div>
          </div>

          <ul className="service-list">
            <li>Kapsamlı personel dosyası ve özlük işleri yönetimi</li>
            <li>İzin, mesai ve devamsızlık takip sistemleri</li>
            <li>Performans değerlendirme ve hedef yönetimi modülleri</li>
            <li>Eğitim planlama ve sertifika takip sistemleri</li>
            <li>İK analitikleri ve stratejik raporlama araçları</li>
          </ul>
        </motion.div>

        {/* Bordro Plus Bölümü */}
        <motion.div
          id="bordro-plus"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="content-section"
        >
          <h2>💰 Bordro Plus</h2>
          <p>
            Bordro Plus, işletmenizin maaş ve bordro süreçlerini tam otomatik olarak yöneten 
            gelişmiş bir bordro yazılımıdır. Karmaşık maaş hesaplamalarından yasal kesintilere, 
            SGK işlemlerinden vergi beyannamelerine kadar tüm bordro işlemlerinizi hatasız ve 
            zamanında gerçekleştirir.
          </p>
          
          <div className="features-grid">
            <div className="feature-card">
              <h3>🧮 Otomatik Hesaplama</h3>
              <p>Maaş, prim, mesai, izin ve tüm yasal kesintileri otomatik hesaplar, 
              insan hatası riskini sıfıra indirir ve zamandan tasarruf sağlar.</p>
            </div>
            <div className="feature-card">
              <h3>📋 Yasal Uyumluluk</h3>
              <p>SGK, vergi dairesi ve diğer resmi kurumlara ait tüm beyanname ve 
              bildirimleri otomatik olarak hazırlar ve gönderir.</p>
            </div>
            <div className="feature-card">
              <h3>📱 Self Servis Portal</h3>
              <p>Çalışanlar kendi bordro bilgilerini, izin bakiyelerini görüntüleyebilir 
              ve çeşitli taleplerini online olarak iletebilirler.</p>
            </div>
          </div>

          <ul className="service-list">
            <li>Kapsamlı maaş hesaplama ve bordro hazırlama sistemi</li>
            <li>SGK, vergi ve diğer yasal bildirimlerin otomatik hazırlanması</li>
            <li>Çalışan self servis portalı ve mobil erişim</li>
            <li>Maliyet merkezi ve departman bazlı raporlama</li>
            <li>Banka entegrasyonu ve otomatik maaş transferi</li>
          </ul>
        </motion.div>

        {/* Tiger HR Bölümü */}
        <motion.div
          id="tiger-hr"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="content-section"
        >
          <h2>🐅 Tiger HR</h2>
          <p>
            Tiger HR, modern işletmelerin insan kaynakları ihtiyaçlarını karşılamak için 
            tasarlanmış entegre bir İK yönetim platformudur. İşe alımdan emekliliğe kadar 
            çalışan yaşam döngüsünün her aşamasını destekler ve İK departmanınızın 
            stratejik ortağı olur.
          </p>
          
          <div className="features-grid">
            <div className="feature-card">
              <h3>🎯 Yetenek Yönetimi</h3>
              <p>İşe alım süreçlerinden performans değerlendirmesine, kariyer planlamasından 
              yedekleme planlarına kadar tüm yetenek yönetimi süreçlerini optimize eder.</p>
            </div>
            <div className="feature-card">
              <h3>📚 Öğrenme ve Gelişim</h3>
              <p>E-öğrenme platformu, eğitim takvimi ve sertifika yönetimi ile çalışanlarınızın 
              sürekli gelişimini destekler ve takip eder.</p>
            </div>
            <div className="feature-card">
              <h3>📈 İK Analitiği</h3>
              <p>Çalışan memnuniyeti, devir oranları, performans metrikleri ve İK KPI'ları 
              ile veri odaklı İK kararları almanızı sağlar.</p>
            </div>
          </div>

          <ul className="service-list">
            <li>Kapsamlı işe alım ve onboarding süreçleri yönetimi</li>
            <li>360 derece performans değerlendirme ve hedef takibi</li>
            <li>E-öğrenme platformu ve eğitim yönetimi sistemi</li>
            <li>Çalışan memnuniyet anketleri ve geri bildirim araçları</li>
            <li>İK dashboard'u ve stratejik raporlama araçları</li>
          </ul>
        </motion.div>

        {/* CTA Bölümü */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="cta-section"
        >
          <h2>İK Çözümlerimiz Hakkında Bilgi Alın</h2>
          <p>
            J-Guar IK, Bordro Plus ve Tiger HR çözümlerimiz hakkında detaylı bilgi almak 
            ve işletmeniz için en uygun çözümü seçmek için bizimle iletişime geçin.
          </p>
          <button className="btn btn-primary" onClick={handleContactClick}>İletişime Geçin</button>
        </motion.div>
      </div>
    </div>
  );
};

export default IkCozumleri;
