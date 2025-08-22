import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './Pages.css';

const ErpCozumleri = () => {
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
        <h1>📊 ERP Çözümleri</h1>
        <p>Kurumsal kaynak planlama çözümleri ile işletmenizi dijitalleştirin</p>
      </div>

      <div className="page-content">
        {/* J-Platform Bölümü */}
        <motion.div
          id="j-platform"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="content-section"
        >
          <h2>🚀 J-Platform</h2>
          <p>
            J-Platform, modern işletmelerin dijital dönüşüm süreçlerini hızlandıran kapsamlı bir 
            entegrasyon platformudur. Farklı sistemler arasında sorunsuz veri akışı sağlayarak, 
            iş süreçlerinizi optimize eder ve operasyonel verimliliğinizi artırır.
          </p>
          
          <div className="features-grid">
            <div className="feature-card">
              <h3>🔗 Sistem Entegrasyonu</h3>
              <p>Mevcut ERP, CRM ve diğer iş uygulamalarınızı tek platformda birleştirerek 
              veri tutarlılığı sağlar ve manuel işlemleri minimize eder.</p>
            </div>
            <div className="feature-card">
              <h3>⚡ Gerçek Zamanlı Veri</h3>
              <p>Anlık veri senkronizasyonu ile tüm departmanlarınız güncel bilgilerle 
              çalışır ve hızlı karar verme süreçlerini destekler.</p>
            </div>
            <div className="feature-card">
              <h3>📊 İleri Düzey Analitik</h3>
              <p>Güçlü raporlama ve analitik araçları ile iş performansınızı izleyin, 
              trendleri analiz edin ve stratejik kararlar alın.</p>
            </div>
          </div>

          <ul className="service-list">
            <li>API tabanlı sistem entegrasyonu ve veri migrasyonu</li>
            <li>Özelleştirilebilir dashboard ve raporlama araçları</li>
            <li>Bulut tabanlı güvenli altyapı ve 7/24 teknik destek</li>
            <li>İş akışı otomasyonu ve süreç optimizasyonu</li>
            <li>Mobil uyumlu arayüz ve uzaktan erişim imkanı</li>
          </ul>
        </motion.div>

        {/* Tiger Wings Enterprise Bölümü */}
        <motion.div
          id="tiger-wings-enterprise"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="content-section"
        >
          <h2>🐅 Tiger Wings Enterprise</h2>
          <p>
            Tiger Wings Enterprise, büyük ölçekli işletmelerin karmaşık iş süreçlerini yönetmek 
            için tasarlanmış kapsamlı bir kurumsal kaynak planlama çözümüdür. Gelişmiş modüler 
            yapısı ile sektör özel ihtiyaçları karşılar ve ölçeklenebilir altyapısı ile işletmenizin 
            büyümesine paralel olarak gelişir.
          </p>
          
          <div className="features-grid">
            <div className="feature-card">
              <h3>🏢 Kurumsal Ölçek Yönetimi</h3>
              <p>Çok lokasyonlu, çok şirketli yapıları destekleyen güçlü altyapı ile 
              büyük organizasyonların kompleks gereksinimlerini karşılar.</p>
            </div>
            <div className="feature-card">
              <h3>🔧 Modüler Yapı</h3>
              <p>Finans, İnsan Kaynakları, Üretim, Satış ve Pazarlama modülleri ile 
              iş süreçlerinizin tamamını entegre bir şekilde yönetin.</p>
            </div>
            <div className="feature-card">
              <h3>🌐 Global Uyumluluk</h3>
              <p>Çok para birimi, çok dil desteği ve uluslararası muhasebe standartları 
              ile global operasyonlarınızı sorunsuz yürütün.</p>
            </div>
          </div>

          <ul className="service-list">
            <li>Kapsamlı finansal yönetim ve konsolidasyon özellikleri</li>
            <li>İleri düzey üretim planlama ve tedarik zinciri yönetimi</li>
            <li>Çok boyutlu iş zekası ve performans yönetimi araçları</li>
            <li>Kurumsal güvenlik ve yetkilendirme sistemleri</li>
            <li>API entegrasyonu ile üçüncü parti sistem bağlantıları</li>
          </ul>
        </motion.div>

        {/* Tiger Enterprise Bölümü */}
        <motion.div
          id="tiger-enterprise"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="content-section"
        >
          <h2>🏢 Tiger Enterprise</h2>
          <p>
            Tiger Enterprise, orta ve büyük ölçekli işletmelerin operasyonel mükemmelliği 
            hedeflediği kapsamlı bir ERP çözümüdür. Güçlü altyapısı, esnek konfigürasyon 
            seçenekleri ve sektörel uzmanlaşma ile işletmenizin tüm süreçlerini optimize eder 
            ve rekabet avantajı sağlar.
          </p>
          
          <div className="features-grid">
            <div className="feature-card">
              <h3>💼 Entegre İş Yönetimi</h3>
              <p>Satış, satın alma, stok, üretim ve finans süreçlerini tek platformda 
              yönetir, veri tutarlılığı sağlar ve operasyonel verimliliği artırır.</p>
            </div>
            <div className="feature-card">
              <h3>📈 Performans İzleme</h3>
              <p>Gerçek zamanlı KPI takibi, detaylı raporlama ve analitik araçları ile 
              işletme performansınızı sürekli izleyin ve iyileştirin.</p>
            </div>
            <div className="feature-card">
              <h3>🔄 Süreç Otomasyonu</h3>
              <p>İş akışı otomasyonu ile rutin işlemleri minimize eder, hata riskini 
              azaltır ve çalışan verimliliğini maksimize eder.</p>
            </div>
          </div>

          <ul className="service-list">
            <li>Tam entegre muhasebe ve mali işler yönetimi</li>
            <li>Gelişmiş stok ve depo yönetimi sistemleri</li>
            <li>CRM entegrasyonu ile müşteri ilişkileri yönetimi</li>
            <li>İnsan kaynakları ve bordro yönetimi modülleri</li>
            <li>Mobil erişim ve bulut tabanlı çalışma imkanı</li>
          </ul>
        </motion.div>

        {/* Tiger Wings Bölümü */}
        <motion.div
          id="tiger-wings"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="content-section"
        >
          <h2>🦅 Tiger Wings</h2>
          <p>
            Tiger Wings, hızla büyüyen orta ölçekli işletmelerin dinamik ihtiyaçlarına 
            özel olarak tasarlanmış esnek ve ölçeklenebilir bir ERP çözümüdür. Kolay 
            kullanım, hızlı implementasyon ve maliyet etkinliği ile işletmenizi dijital 
            dönüşüm yolculuğunda destekler.
          </p>
          
          <div className="features-grid">
            <div className="feature-card">
              <h3>🚀 Hızlı Kurulum</h3>
              <p>Önceden yapılandırılmış iş süreçleri ve sezgisel kurulum sihirbazı ile 
              kısa sürede sistemi devreye alın ve hemen kullanmaya başlayın.</p>
            </div>
            <div className="feature-card">
              <h3>💡 Kullanıcı Dostu</h3>
              <p>Modern ve sezgisel arayüz tasarımı ile minimum eğitim gereksinimi, 
              maksimum kullanıcı memnuniyeti ve yüksek adaptasyon oranı sağlar.</p>
            </div>
            <div className="feature-card">
              <h3>📱 Mobil Öncelikli</h3>
              <p>Tablet ve smartphone uyumlu responsive tasarım ile her yerden, 
              her zaman işletmenizin nabzını tutun ve kritik kararları alın.</p>
            </div>
          </div>

          <ul className="service-list">
            <li>Hızlı satış ve satın alma süreçleri yönetimi</li>
            <li>Otomatik stok takibi ve kritik seviye uyarıları</li>
            <li>Basitleştirilmiş muhasebe ve finansal raporlama</li>
            <li>Müşteri ve tedarikçi ilişkileri yönetimi</li>
            <li>Bulut tabanlı güvenli veri saklama ve yedekleme</li>
          </ul>
        </motion.div>

        {/* Tiger3 Bölümü */}
        <motion.div
          id="tiger3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="content-section"
        >
          <h2>🐯 Tiger3</h2>
          <p>
            Tiger3, küçük ve orta ölçekli işletmeler için özel olarak geliştirilmiş, 
            uygun maliyetli ve kullanımı kolay bir ERP çözümüdür. Temel iş süreçlerinizi 
            dijitalleştirmenin en pratik yolu olan Tiger3, büyüme potansiyelinizi 
            destekleyecek esneklik ve güvenilirlik sunar.
          </p>
          
          <div className="features-grid">
            <div className="feature-card">
              <h3>💰 Maliyet Etkin</h3>
              <p>Küçük işletmeler için uygun fiyatlandırma modeli ile profesyonel 
              ERP çözümlerinin avantajlarından uygun maliyetle yararlanın.</p>
            </div>
            <div className="feature-card">
              <h3>🎯 Odaklanmış Çözüm</h3>
              <p>Gereksiz karmaşıklıktan uzak, temel iş ihtiyaçlarına odaklanmış 
              modüller ile hızlı öğrenme ve yüksek verimlilik sağlar.</p>
            </div>
            <div className="feature-card">
              <h3>📊 Akıllı Raporlama</h3>
              <p>Otomatik raporlar ve görselleştirmeler ile işletmenizin durumunu 
              anlık olarak izleyin ve bilinçli kararlar alın.</p>
            </div>
          </div>

          <ul className="service-list">
            <li>Temel muhasebe ve fatura yönetimi özellikleri</li>
            <li>Basit stok takibi ve satış süreçleri</li>
            <li>Müşteri ve tedarikçi kayıtları yönetimi</li>
            <li>Otomatik yedekleme ve veri güvenliği</li>
            <li>Ücretsiz eğitim ve kurulum desteği</li>
          </ul>
        </motion.div>

        {/* B2B Bayi Sipariş Sistemi Bölümü */}
        <motion.div
          id="b2b-bayi-siparis"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="content-section"
        >
          <h2>🛒 B2B Bayi Sipariş Sistemi</h2>
          <p>
            B2B Bayi Sipariş Sistemi, distribütörler ve bayiler için özel olarak tasarlanmış 
            kapsamlı bir e-ticaret platformudur. Geleneksel sipariş süreçlerini dijitalleştirerek, 
            bayi ağınızla daha verimli çalışmanızı sağlar ve satış hacminizi artırır.
          </p>
          
          <div className="features-grid">
            <div className="feature-card">
              <h3>🌐 Online Sipariş Platformu</h3>
              <p>Bayileriniz 7/24 online sipariş verebilir, stok durumunu kontrol edebilir 
              ve sipariş geçmişlerini takip edebilirler.</p>
            </div>
            <div className="feature-card">
              <h3>💳 Esnek Ödeme Seçenekleri</h3>
              <p>Kredi kartı, havale, çek ve vadeli ödeme seçenekleri ile bayilerinize 
              uygun ödeme kolaylığı sağlayın.</p>
            </div>
            <div className="feature-card">
              <h3>📋 Otomatik Süreç Yönetimi</h3>
              <p>Sipariş onayından teslimat takibine kadar tüm süreçler otomatik olarak 
              yönetilir ve taraflar bilgilendirilir.</p>
            </div>
          </div>

          <ul className="service-list">
            <li>Bayi özel fiyat listeleri ve indirim yönetimi</li>
            <li>Gerçek zamanlı stok sorgulama ve rezervasyon</li>
            <li>Detaylı sipariş takibi ve kargo entegrasyonu</li>
            <li>Bayi performans raporları ve analitik araçları</li>
            <li>Mobil uyumlu responsive tasarım ve uygulama</li>
          </ul>
        </motion.div>

        {/* CTA Bölümü */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="cta-section"
        >
          <h2>ERP Çözümlerimiz Hakkında Bilgi Alın</h2>
          <p>
            J-Platform, Tiger Wings Enterprise, Tiger Enterprise, Tiger Wings, Tiger3 ve B2B Bayi Sipariş Sistemi 
            çözümlerimiz hakkında detaylı bilgi almak ve işletmeniz için en uygun çözümü seçmek için bizimle iletişime geçin.
          </p>
          <button className="btn btn-primary" onClick={handleContactClick}>İletişime Geçin</button>
        </motion.div>
      </div>
    </div>
  );
};

export default ErpCozumleri;
