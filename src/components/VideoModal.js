import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import './VideoModal.css';

const VideoModal = ({ isOpen, onClose, videoUrl }) => {
  const [isVideoLoaded, setIsVideoLoaded] = React.useState(false);

  // YouTube URL'den video ID'sini çıkar
  const getYouTubeId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const videoId = getYouTubeId(videoUrl);
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;

  // Modal açıldığında video loading state'ini reset et
  React.useEffect(() => {
    if (isOpen) {
      setIsVideoLoaded(false);
      // Fallback: 3 saniye sonra loading'i kaldır
      const fallbackTimer = setTimeout(() => {
        setIsVideoLoaded(true);
      }, 3000);
      
      return () => clearTimeout(fallbackTimer);
    }
  }, [isOpen]);

  // ESC tuşu ile modal kapatma
  React.useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        onClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      // Body scroll'u engelle
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!videoId) {
    return null;
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="video-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
        >
          <motion.div
            className="video-modal-container"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ duration: 0.4, type: "spring", damping: 25 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="video-modal-header">
              <h3 className="video-modal-title">
                🎬 Binport Demo Videosu
              </h3>
              <button 
                className="video-modal-close" 
                onClick={onClose}
                aria-label="Videoyu kapat"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="video-modal-content">
              <div className={`video-wrapper ${isVideoLoaded ? 'loaded' : ''}`}>
                {!isVideoLoaded && (
                  <div className="video-loading">
                    <div className="loading-spinner"></div>
                  </div>
                )}
                <iframe
                  src={embedUrl}
                  title="Binport Demo Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="video-iframe"
                  onLoad={() => setIsVideoLoaded(true)}
                ></iframe>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VideoModal;
