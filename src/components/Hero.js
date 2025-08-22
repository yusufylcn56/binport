import React, { useState } from 'react';
import { ArrowRight, Play, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import VideoModal from './VideoModal';
import './Hero.css';

const Hero = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDemoClick = () => {
    setIsVideoModalOpen(true);
  };
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-title">
              Dijital Dönüşümünüzü
              <span className="gradient-text"> Binport</span> ile Başlatın
            </h1>
            <p className="hero-description">
              Modern teknolojiler ile işletmenizi geleceğe taşıyoruz. 
              Web uygulamaları, mobil çözümler ve özel yazılım geliştirme hizmetlerimizle 
              dijital varlığınızı güçlendirin.
            </p>
            
            <div className="hero-features">
              <div className="feature">
                <CheckCircle size={20} />
                <span>Modern Teknolojiler</span>
              </div>
              <div className="feature">
                <CheckCircle size={20} />
                <span>%100 Garantili Çözüm Odaklı Çalışma</span>
              </div>
              <div className="feature">
                <CheckCircle size={20} />
                <span>7/24 Destek</span>
              </div>
            </div>
            
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={scrollToContact}>
                Ücretsiz Danışmanlık
                <ArrowRight size={18} />
              </button>
              <button className="btn btn-secondary" onClick={handleDemoClick}>
                <Play size={18} />
                Demo İzle
              </button>
            </div>
          </motion.div>
          
          <motion.div 
            className="hero-visual"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="hero-image">
              <img 
                src="/business-strategy.jpg" 
                alt="İş stratejisi ve veri analizi - Binport Bilişim Teknolojileri" 
                className="hero-main-image"
              />
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>
      
      {/* Video Modal */}
      <VideoModal 
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoUrl="https://www.youtube.com/watch?v=CgitRQXs8kk"
      />
    </section>
  );
};

export default Hero;
