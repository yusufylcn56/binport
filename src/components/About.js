import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Clock, Target } from 'lucide-react';
import './About.css';

const About = () => {
  const stats = [
    {
      icon: <Award size={32} />,
      number: "500+",
      label: "Tamamlanan Proje"
    },
    {
      icon: <Users size={32} />,
      number: "1000+",
      label: "Mutlu Müşteri"
    },
    {
      icon: <Clock size={32} />,
      number: "20+",
      label: "Yıllık Deneyim"
    },
    {
      icon: <Target size={32} />,
      number: "100%",
      label: "Müşteri Memnuniyeti"
    }
  ];

  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="section-title">BİNPORT BİLİŞİM VE DANIŞMANLIK HİZMETLERİ</h3>
            <p className="about-description">
            Binport Bilişim ekibinin karakteristik özellikleri olan; özgüven, çalışma azmi, tecrübe ve liderlik 
            vasıflarımızla amacımız, müşterilerimizi rekabet ortamında her zaman bir adım önde tutmaktır.
            <br></br> <br></br>
            Kendi alanlarında uzman ve yaratıcı ekibi ile hizmet verdiği firmalar için en uygun online marka 
            stratejilerini belirleyerek bu stratejileri son teknoloji ve trendlerle uygulayarak firmanın marka 
            iletişimini yönetir ve sosyal medyada itibar yönetimine yönelik verdiği bu hizmetlerle markanıza artı değer katar.
            <br></br> <br></br>
            Alanında uzman ve tecrübeli ekibimiz ile siz değerli müşterilerimizin ihtiyaçlarına 
            en uygun maliyet ve zamanda cevap verebilecek projelere imza atmaktayız. Doğru iş, doğru ekip ve doğru kuruluş.
            </p>
            
            <div className="about-features">
              <div className="feature-item">
                <div className="feature-icon">🚀</div>
                <div>
                  <h4>Hızlı Teslimat</h4>
                  <p>Projelerinizi zamanında ve bütçe dahilinde teslim ediyoruz.</p>
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">💡</div>
                <div>
                  <h4>Yenilikçi Çözümler</h4>
                  <p>En son teknolojileri kullanarak özgün çözümler geliştiriyoruz.</p>
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">🤝</div>
                <div>
                  <h4>Güvenilir Ortaklık</h4>
                  <p>Uzun vadeli iş ortaklıkları kurarak sürdürülebilir başarı sağlıyoruz.</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="about-visual"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
                         <div className="about-visual-content">
               <div className="logo-section">
                 <img 
                   src="/binport-logo.png"
                   alt="Binport Logo" 
                   className="binport-logo"
                 />
               </div>
               <div className="about-image">
                 <img 
                   src="/binport-team.webp"
                   alt="Binport Ekibi" 
                   className="team-image"
                 />
               </div>
             </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="stats-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="stat-card"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="stat-icon">
                  {stat.icon}
                </div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
