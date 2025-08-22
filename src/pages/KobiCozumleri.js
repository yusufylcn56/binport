import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './Pages.css';

const KobiCozumleri = () => {
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
        <h1>🏢 KOBİ Çözümleri</h1>
        <p>Küçük ve orta ölçekli işletmeler için özel tasarlanmış çözümler</p>
      </div>

      <div className="page-content">
        {/* Logo GO3 Bölümü */}
        <motion.div
          id="logo-go3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="content-section"
        >
          <h2>💼 Logo GO3</h2>
          <p>
            Logo GO3, küçük ve orta ölçekli işletmeler için özel olarak tasarlanmış kapsamlı bir ERP çözümüdür. 
            Modern teknoloji altyapısı ile işletmenizin tüm süreçlerini tek platformda yönetmenizi sağlar. 
            Kullanıcı dostu arayüzü ve esnek yapısı sayesinde her sektörden KOBİ'nin ihtiyaçlarına kolayca uyum sağlar.
          </p>
          
          <div className="features-grid">
            <div className="feature-card">
              <h3>🚀 Hızlı Kurulum</h3>
              <p>Plug & Play mantığı ile hızlı kurulum. Minimum 2 gün içinde sisteminiz kullanıma hazır hale gelir ve iş süreçlerinizi kesintisiz devam ettirebilirsiniz.</p>
            </div>
            <div className="feature-card">
              <h3>☁️ Bulut Tabanlı</h3>
              <p>Her yerden erişim imkanı sunan bulut altyapısı. Mobil cihazlarınızdan da işletmenizi yönetebilir, anlık raporlara ulaşabilirsiniz.</p>
            </div>
            <div className="feature-card">
              <h3>💰 Uygun Maliyet</h3>
              <p>KOBİ bütçesine uygun esnek ödeme seçenekleri. Kullandığınız kadar ödeyin, büyüdükçe genişletin prensibi ile maliyet kontrolünü elinizde tutun.</p>
            </div>
          </div>

          <ul className="service-list">
            <li>Satış ve Pazarlama Yönetimi - CRM entegrasyonu ile müşteri ilişkilerinizi güçlendirin</li>
            <li>Stok ve Depo Yönetimi - Gerçek zamanlı stok takibi ve otomatik sipariş uyarıları</li>
            <li>Finansal Raporlama - Anlık gelir-gider analizi ve karlılık raporları</li>
            <li>İnsan Kaynakları Modülü - Personel takibi, bordro hesaplama ve performans değerlendirme</li>
            <li>E-Ticaret Entegrasyonu - Online satış kanallarınızı tek merkezden yönetin</li>
            <li>Muhasebe Uyumluluğu - Mevcut muhasebe sisteminizle sorunsuz entegrasyon</li>
          </ul>
        </motion.div>

        {/* Logo GO Wings Bölümü */}
        <motion.div
          id="logo-go-wings"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="content-section"
        >
          <h2>🚀 Logo GO Wings</h2>
          <p>
            Logo GO Wings, büyüyen KOBİ'ler için geliştirilmiş gelişmiş ERP çözümüdür. 
            Logo GO3'ün güçlü altyapısına ek modüller ve ileri seviye özellikler ekleyerek, 
            daha karmaşık iş süreçlerinizi yönetmenizi sağlar. Şirketinizin büyüme yolculuğunda 
            ihtiyaç duyacağınız tüm araçları tek platformda sunar.
          </p>
          
          <div className="features-grid">
            <div className="feature-card">
              <h3>📊 Gelişmiş Analitik</h3>
              <p>İleri seviye iş zekası araçları ile detaylı performans analizleri yapın. Trend analizleri, tahminleme modelleri ve özelleştirilebilir dashboard'larla stratejik kararlar alın.</p>
            </div>
            <div className="feature-card">
              <h3>🔗 Çoklu Entegrasyon</h3>
              <p>E-ticaret platformları, CRM sistemleri, muhasebe yazılımları ve üçüncü parti uygulamalarla seamless entegrasyon. API desteği ile sınırsız genişleme imkanı.</p>
            </div>
            <div className="feature-card">
              <h3>🎯 Proje Yönetimi</h3>
              <p>Gantt şemaları, kaynak planlama, zaman takibi ve maliyet kontrolü ile projelerinizi baştan sona yönetin. Ekip performansını izleyin ve verimliliği artırın.</p>
            </div>
          </div>

          <ul className="service-list">
            <li>İleri Seviye CRM - Müşteri yaşam döngüsü yönetimi ve satış otomasyonu</li>
            <li>Tedarik Zinciri Yönetimi - Tedarikçi performans takibi ve otomatik sipariş sistemi</li>
            <li>Kalite Yönetim Sistemi - ISO standartlarına uygun kalite kontrol süreçleri</li>
            <li>İş Zekası Dashboard'ları - Gerçek zamanlı KPI takibi ve özelleştirilebilir raporlar</li>
            <li>Mobil Uygulama - iOS ve Android uygulamaları ile sahada çalışma imkanı</li>
            <li>Workflow Otomasyonu - İş süreçlerinizi otomatikleştirin ve onay mekanizmaları oluşturun</li>
          </ul>
        </motion.div>

        {/* Start 3 Bölümü */}
        <motion.div
          id="start-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="content-section"
        >
          <h2>⭐ Start 3</h2>
          <p>
            Start 3, yeni kurulan işletmeler ve girişimciler için özel olarak tasarlanmış 
            başlangıç seviyesi ERP çözümüdür. Minimal maliyet ile maksimum verimlilik sağlayarak, 
            işletmenizin ilk adımlarından itibaren profesyonel bir yapıya kavuşmanızı destekler. 
            Basit kurulum ve kullanım kolaylığı ile hemen işe başlayabilirsiniz.
          </p>
          
          <div className="features-grid">
            <div className="feature-card">
              <h3>💡 Basit & Etkili</h3>
              <p>Karmaşık özellikler yerine temel ihtiyaçlara odaklanmış tasarım. Sezgisel arayüz ile hiçbir eğitim almadan kullanmaya başlayın. Sadece 1 gün içinde aktif hale getirin.</p>
            </div>
            <div className="feature-card">
              <h3>💳 Ekonomik Paket</h3>
              <p>Startup bütçesine uygun özel fiyatlandırma. İlk 6 ay ücretsiz deneme, sonrasında aylık düşük abonelik bedeli. Büyüdükçe upgrade seçenekleri mevcuttur.</p>
            </div>
            <div className="feature-card">
              <h3>📈 Büyüme Desteği</h3>
              <p>İşletmeniz büyüdükçe sistem de birlikte gelişir. Logo GO3 veya GO Wings'e sorunsuz geçiş imkanı. Verilerinizi kaybetmeden upgrade edebilirsiniz.</p>
            </div>
          </div>

          <ul className="service-list">
            <li>Temel Muhasebe - Gelir-gider takibi, fatura oluşturma ve basit raporlama</li>
            <li>Müşteri Yönetimi - Temel CRM özellikleri ile müşteri kayıtları ve iletişim takibi</li>
            <li>Basit Stok Takibi - Ürün kayıtları, giriş-çıkış hareketleri ve kritik seviye uyarıları</li>
            <li>Satış Yönetimi - Teklif hazırlama, sipariş takibi ve satış raporları</li>
            <li>Mobil Erişim - Akıllı telefon uygulaması ile her yerden işinizi kontrol edin</li>
            <li>Destek Paketi - Kurulum, eğitim ve 7/24 teknik destek hizmeti dahil</li>
          </ul>
        </motion.div>

        {/* CTA Bölümü */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="cta-section"
        >
          <h2>KOBİ Çözümlerimiz Hakkında Bilgi Alın</h2>
          <p>
            Logo GO3, Logo GO Wings ve Start 3 çözümlerimiz hakkında detaylı bilgi almak 
            ve işletmeniz için en uygun çözümü seçmek için bizimle iletişime geçin.
          </p>
          <button className="btn btn-primary" onClick={handleContactClick}>İletişime Geçin</button>
        </motion.div>
      </div>
    </div>
  );
};

export default KobiCozumleri;
