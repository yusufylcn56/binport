import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  GraduationCap, 
  Headphones, 
  FolderOpen, 
  FileText, 
  Building2, 
  Wrench
} from 'lucide-react';
import './Services.css';

const Services = () => {
  const navigate = useNavigate();
  
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const services = [
    {
      icon: <GraduationCap size={32} />,
      title: "Eğitim",
      description: "Logo kullanıcıları, yetkili Logo İş Ortağı Binport Bilişim Teknolojilerinden Logo çözümleri hakkında yerinde eğitim hizmetleri alabilmektedirler.",
      features: ["Logo sistemleri ile iş süreçlerini daha verimli yönetme", 
        "Raporlama ve analizlerde dijital yetkinliği artırma", 
        "Ekip içi bilgi akışını teknoloji ile güçlendirme", 
        "Kurumsal sistemlerle kariyer gelişimine katkı sağlama"],
      path: "/egitim"
    },
    {
      icon: <Headphones size={32} />,
      title: "Destek",
      description: "Proje Danışmanlığı, Kullanıcı Eğitimleri, Uzak Bağlantı, Yerinde Destek, Tele-Destek, Veri Bakımı ile Network ve Veritabanı Danışmanlığı olmak üzere geniş bir yelpazede uygulanmaktadır.",
      features: ["Proje Danışmanlığı ve Kullanıcı Eğitimleri", 
        "Uzak Bağlantı ve Tele-Destek Hizmetleri", 
        "Yerinde Destek ve Veri Bakımı", 
        "Network ve Veritabanı Danışmanlığı"],
      path: "/destek"
    },
    {
      icon: <FolderOpen size={32} />,
      title: "Projeler",
      description: " Binport Bilişim Teknolojileri, işletmelerin iş süreçlerini ve özel ihtiyaçlarını analiz ederek bu ihtiyaçlara karşılık verebilecek en uygun çözümlerin işletmelerde kullanıma alınmasına yönelik, hizmetlerini sunmaktadır.",
      features: ["İş süreçlerini ve özel ihtiyaçları analiz etme", 
        "İhtiyaçlara uygun çözümler geliştirme", 
        "Çözümleri işletmede kullanıma alma", 
        "Kurumsal hizmet ve destek sağlama"],
      path: "/projeler"
    },
    {
      icon: <FileText size={32} />,
      title: "Lisans ",
      description: "Logo ürünlerinde yapılan tüm güncellemeler, mevzuatla ilgili değişiklikler ve hata giderici sürümler sadece LEM sözleşmesi kapsamındaki kullanıcılara sunulmaktadır.",
      features: ["Logo ürün güncellemeleri", 
        "Mevzuat değişikliklerine uyum", 
        "Hata giderici sürümler", 
        "LEM sözleşmesi kapsamında sunulan özel hizmet"],
      path: "/lisans"
    },
    {
      icon: <Building2 size={32} />,
      title: "Kurumsal Hizmetler",
      description: "Deneyimli ve uzman proje ekibimiz ile işletmelerin ihtiyaçlarına özel uygulamalar sunarken, danışmanlık, destek, eğitim, entegrasyon, hosting ve uygulama bakım hizmetlerini de sağlamaktadır.",
      features: ["Deneyimli proje ekibi ile özel uygulama geliştirme", 
        "Danışmanlık ve teknik destek hizmetleri", 
        "Kullanıcı eğitimleri ve entegrasyon", 
        "Hosting ve uygulama bakım hizmetleri"],
      path: "/kurumsal-hizmetler"
    },
    {
      icon: <Wrench size={32} />,
      title: "Bakım",
      description: "İş çözümlerinin sistemsel veya yapısal işleyişinin, sorunsuz ilerlemesi alınan danışmanlık hizmeti ve kalitesi ile doğrudan ilişkilidir. Süreç ne kadar standart ve disiplinli olursa, sorunlar o kadar az olacaktır.",
      features: ["Sistemsel ve yapısal işleyişin sorunsuz ilerlemesi", 
        "Danışmanlık hizmeti ile kaliteyi artırma", 
        "Standart ve disiplinli süreç yönetimi", 
        "Sorunları en aza indirme ve verimliliği artırma"],
      path: "/bakim"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="services" className="section services">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">Hizmetlerimiz</h2>
          <p className="section-subtitle">
            İşletmenizin dijital ihtiyaçlarını karşılamak için kapsamlı yazılım çözümleri sunuyoruz
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="services-grid"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="service-card card"
            >
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
                             <button 
                 className="btn btn-secondary service-btn"
                 onClick={() => {
                   navigate(service.path);
                   window.scrollTo(0, 0);
                 }}
               >
                 Detayları Gör
               </button>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="services-cta"
        >
          <div className="cta-content">
            <h3>Özel Projeniz mi Var?</h3>
            <p>İhtiyaçlarınıza özel çözümler geliştirmek için bizimle iletişime geçin.</p>
            <button className="btn btn-primary" onClick={scrollToContact}>Ücretsiz Danışmanlık Al</button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
