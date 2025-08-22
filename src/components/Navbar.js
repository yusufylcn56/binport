import React, { useState, useEffect } from 'react';
import { ChevronDown, Sun, Moon } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [solutionsDropdown, setSolutionsDropdown] = useState(false);
  const [eSolutionsDropdown, setESolutionsDropdown] = useState(false);
  const [kobiSubmenu, setKobiSubmenu] = useState(false);
  const [erpSubmenu, setErpSubmenu] = useState(false);
  const [ikSubmenu, setIkSubmenu] = useState(false);
  const [isAnalitigiSubmenu, setIsAnalitigiSubmenu] = useState(false);
  const [projeSubmenu, setProjeSubmenu] = useState(false);
  const [isgSubmenu, setIsgSubmenu] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [hoverTimeouts, setHoverTimeouts] = useState({});

  useEffect(() => {
    // Local storage'dan tema tercihini al
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    
    if (newTheme) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = (dropdownType) => {
    // Önceki timeout'u temizle
    if (hoverTimeouts[dropdownType]) {
      clearTimeout(hoverTimeouts[dropdownType]);
    }
    
    // 0.3 saniye sonra dropdown'ı aç
    const timeout = setTimeout(() => {
      if (dropdownType === 'services') {
        setServicesDropdown(true);
        setSolutionsDropdown(false);
        setESolutionsDropdown(false);
        setKobiSubmenu(false);
        setErpSubmenu(false);
        setIkSubmenu(false);
        setIsAnalitigiSubmenu(false);
        setProjeSubmenu(false);
        setIsgSubmenu(false);
      } else if (dropdownType === 'solutions') {
        setSolutionsDropdown(true);
        setServicesDropdown(false);
        setESolutionsDropdown(false);
        setKobiSubmenu(false);
        setErpSubmenu(false);
        setIkSubmenu(false);
        setIsAnalitigiSubmenu(false);
        setProjeSubmenu(false);
        setIsgSubmenu(false);
      } else if (dropdownType === 'eSolutions') {
        setESolutionsDropdown(true);
        setServicesDropdown(false);
        setSolutionsDropdown(false);
        setKobiSubmenu(false);
        setErpSubmenu(false);
        setIkSubmenu(false);
        setIsAnalitigiSubmenu(false);
        setProjeSubmenu(false);
        setIsgSubmenu(false);
      } else if (dropdownType === 'kobiSubmenu') {
        setKobiSubmenu(true);
      } else if (dropdownType === 'erpSubmenu') {
        setErpSubmenu(true);
      } else if (dropdownType === 'ikSubmenu') {
        setIkSubmenu(true);
      } else if (dropdownType === 'isAnalitigiSubmenu') {
        setIsAnalitigiSubmenu(true);
      } else if (dropdownType === 'projeSubmenu') {
        setProjeSubmenu(true);
      } else if (dropdownType === 'isgSubmenu') {
        setIsgSubmenu(true);
      }
    }, 300);
    
    setHoverTimeouts(prev => ({
      ...prev,
      [dropdownType]: timeout
    }));
  };

  const handleMouseLeave = (dropdownType) => {
    // Timeout'u temizle
    if (hoverTimeouts[dropdownType]) {
      clearTimeout(hoverTimeouts[dropdownType]);
    }
    
    // 0.2 saniye sonra dropdown'ı kapat
    setTimeout(() => {
      if (dropdownType === 'services') {
        setServicesDropdown(false);
      } else if (dropdownType === 'solutions') {
        setSolutionsDropdown(false);
      } else if (dropdownType === 'eSolutions') {
        setESolutionsDropdown(false);
      } else if (dropdownType === 'kobiSubmenu') {
        setKobiSubmenu(false);
      } else if (dropdownType === 'erpSubmenu') {
        setErpSubmenu(false);
      } else if (dropdownType === 'ikSubmenu') {
        setIkSubmenu(false);
      } else if (dropdownType === 'isAnalitigiSubmenu') {
        setIsAnalitigiSubmenu(false);
      } else if (dropdownType === 'projeSubmenu') {
        setProjeSubmenu(false);
      } else if (dropdownType === 'isgSubmenu') {
        setIsgSubmenu(false);
      }
    }, 200);
  };

  const toggleServicesDropdown = () => {
    setServicesDropdown(!servicesDropdown);
    // Diğer dropdown'ları kapat
    setSolutionsDropdown(false);
    setESolutionsDropdown(false);
    setKobiSubmenu(false);
    setErpSubmenu(false);
    setIkSubmenu(false);
    setIsAnalitigiSubmenu(false);
    setProjeSubmenu(false);
    setIsgSubmenu(false);
  };

  const toggleSolutionsDropdown = () => {
    setSolutionsDropdown(!solutionsDropdown);
    // Diğer dropdown'ları kapat
    setServicesDropdown(false);
    setESolutionsDropdown(false);
    setKobiSubmenu(false);
    setErpSubmenu(false);
    setIkSubmenu(false);
    setIsAnalitigiSubmenu(false);
    setProjeSubmenu(false);
    setIsgSubmenu(false);
  };

  const toggleESolutionsDropdown = () => {
    setESolutionsDropdown(!eSolutionsDropdown);
    // Diğer dropdown'ları kapat
    setServicesDropdown(false);
    setSolutionsDropdown(false);
    setKobiSubmenu(false);
    setErpSubmenu(false);
    setIkSubmenu(false);
    setIsAnalitigiSubmenu(false);
    setProjeSubmenu(false);
    setIsgSubmenu(false);
  };

  // Mobil dropdown toggle fonksiyonları
  const toggleKobiSubmenu = () => {
    setKobiSubmenu(!kobiSubmenu);
  };

  const toggleErpSubmenu = () => {
    setErpSubmenu(!erpSubmenu);
  };

  const toggleIkSubmenu = () => {
    setIkSubmenu(!ikSubmenu);
  };

  const toggleIsAnalitigiSubmenu = () => {
    setIsAnalitigiSubmenu(!isAnalitigiSubmenu);
  };

  const toggleProjeSubmenu = () => {
    setProjeSubmenu(!projeSubmenu);
  };

  const toggleIsgSubmenu = () => {
    setIsgSubmenu(!isgSubmenu);
  };

  const scrollToTop = () => {
    // Önce smooth scroll dene
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Eğer smooth scroll çalışmazsa, instant scroll yap
    setTimeout(() => {
      if (window.scrollY > 0) {
        window.scrollTo({ top: 0, behavior: 'auto' });
      }
    }, 100);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleKobiNavigation = (sectionId) => {
    setIsOpen(false);
    
    // Eğer KOBİ sayfasında değilsek, önce KOBİ sayfasına git
    if (location.pathname !== '/kobi-cozumleri') {
      navigate('/kobi-cozumleri');
      // Sayfa yüklendikten sonra scroll işlemini yap
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 500);
    } else {
      // KOBİ sayfasındaysak direkt scroll yap
      scrollToSection(sectionId);
    }
  };

  const handleErpNavigation = (sectionId) => {
    setIsOpen(false);
    
    // Eğer ERP sayfasında değilsek, önce ERP sayfasına git
    if (location.pathname !== '/erp-cozumleri') {
      navigate('/erp-cozumleri');
      // Sayfa yüklendikten sonra scroll işlemini yap
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 500);
    } else {
      // ERP sayfasındaysak direkt scroll yap
      scrollToSection(sectionId);
    }
  };

  const handleIkNavigation = (sectionId) => {
    setIsOpen(false);
    
    // Eğer İK sayfasında değilsek, önce İK sayfasına git
    if (location.pathname !== '/ik-cozumleri') {
      navigate('/ik-cozumleri');
      // Sayfa yüklendikten sonra scroll işlemini yap
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 500);
    } else {
      // İK sayfasındaysak direkt scroll yap
      scrollToSection(sectionId);
    }
  };

  const handleIsAnalitigiNavigation = (sectionId) => {
    setIsOpen(false);
    
    // Eğer İş Analitiği sayfasında değilsek, önce İş Analitiği sayfasına git
    if (location.pathname !== '/is-analitigi') {
      navigate('/is-analitigi');
      // Sayfa yüklendikten sonra scroll işlemini yap
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 500);
    } else {
      // İş Analitiği sayfasındaysak direkt scroll yap
      scrollToSection(sectionId);
    }
  };

  const handleProjeNavigation = (sectionId) => {
    setIsOpen(false);
    
    // Eğer Proje sayfasında değilsek, önce Proje sayfasına git
    if (location.pathname !== '/proje-cozumleri') {
      navigate('/proje-cozumleri');
      // Sayfa yüklendikten sonra scroll işlemini yap
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 500);
    } else {
      // Proje sayfasındaysak direkt scroll yap
      scrollToSection(sectionId);
    }
  };

  const handleIsgNavigation = (sectionId) => {
    setIsOpen(false);
    
    // Eğer İSG sayfasında değilsek, önce İSG sayfasına git
    if (location.pathname !== '/isg-cozumleri') {
      navigate('/isg-cozumleri');
      // Sayfa yüklendikten sonra scroll işlemini yap
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 500);
    } else {
      // İSG sayfasındaysak direkt scroll yap
      scrollToSection(sectionId);
    }
  };

  const handleNavigation = (action) => {
    setIsOpen(false);
    
    // Eğer anasayfada değilsek, önce anasayfaya git
    if (location.pathname !== '/') {
      navigate('/');
      // Sayfa yüklendikten sonra scroll işlemini yap
      setTimeout(() => {
        if (action === 'top') {
          scrollToTop();
        } else if (action === 'about') {
          setTimeout(() => scrollToSection('about'), 200);
        } else if (action === 'contact') {
          setTimeout(() => scrollToSection('contact'), 200);
        }
      }, 300);
    } else {
      // Anasayfadaysak direkt scroll yap
      if (action === 'top') {
        scrollToTop();
      } else if (action === 'about') {
        scrollToSection('about');
      } else if (action === 'contact') {
        scrollToSection('contact');
      }
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-content">
          <div className="navbar-brand">
            <button onClick={() => handleNavigation('top')} className="brand-link">
              <h2>Binport</h2>
              <span className="brand-subtitle">Bilişim Teknolojileri</span>
            </button>
          </div>
          
          <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
            <button className="nav-link" onClick={() => handleNavigation('top')}>Ana Sayfa</button>
            
            <div className="nav-dropdown" onMouseLeave={() => handleMouseLeave('solutions')}>
              <button 
                className="nav-link dropdown-toggle"
                onClick={toggleSolutionsDropdown}
                onMouseEnter={() => handleMouseEnter('solutions')}
              >
                Çözümler
                <ChevronDown size={16} />
              </button>
                             <div 
                 className={`dropdown-menu ${solutionsDropdown ? 'active' : ''}`}
                 onMouseEnter={() => handleMouseEnter('solutions')}
                 onMouseLeave={() => handleMouseLeave('solutions')}
               >
                 <div 
                   className="dropdown-item-with-submenu"
                   onMouseEnter={() => handleMouseEnter('kobiSubmenu')}
                   onMouseLeave={() => handleMouseLeave('kobiSubmenu')}
                 >
                   <Link to="/kobi-cozumleri" className="dropdown-item" onClick={(e) => { 
                     if (window.innerWidth <= 768) {
                       e.preventDefault();
                       toggleKobiSubmenu();
                     } else {
                       setIsOpen(false); 
                       scrollToTop();
                     }
                   }}>
                     🏢 KOBİ Çözümleri
                     <span className="submenu-arrow">▶</span>
                   </Link>
                   <div className={`submenu ${kobiSubmenu ? 'active' : ''}`}>
                     <button 
                       className="submenu-item" 
                       onClick={() => handleKobiNavigation('logo-go3')}
                     >
                       💼 Logo GO3
                     </button>
                     <button 
                       className="submenu-item" 
                       onClick={() => handleKobiNavigation('logo-go-wings')}
                     >
                       🚀 Logo GO Wings
                     </button>
                     <button 
                       className="submenu-item" 
                       onClick={() => handleKobiNavigation('start-3')}
                     >
                       ⭐ Start 3
                     </button>
                   </div>
                 </div>

                 <div 
                   className="dropdown-item-with-submenu"
                   onMouseEnter={() => handleMouseEnter('erpSubmenu')}
                   onMouseLeave={() => handleMouseLeave('erpSubmenu')}
                 >
                   <Link to="/erp-cozumleri" className="dropdown-item" onClick={(e) => { 
                     if (window.innerWidth <= 768) {
                       e.preventDefault();
                       toggleErpSubmenu();
                     } else {
                       setIsOpen(false); 
                       scrollToTop();
                     }
                   }}>
                     📊 ERP Çözümleri
                     <span className="submenu-arrow">▶</span>
                   </Link>
                   <div className={`submenu ${erpSubmenu ? 'active' : ''}`}>
                     <button 
                       className="submenu-item" 
                       onClick={() => handleErpNavigation('j-platform')}
                     >
                       🚀 J-Platform
                     </button>
                     <button 
                       className="submenu-item" 
                       onClick={() => handleErpNavigation('tiger-wings-enterprise')}
                     >
                       🐅 Tiger Wings Enterprise
                     </button>
                     <button 
                       className="submenu-item" 
                       onClick={() => handleErpNavigation('tiger-enterprise')}
                     >
                       🏢 Tiger Enterprise
                     </button>
                     <button 
                       className="submenu-item" 
                       onClick={() => handleErpNavigation('tiger-wings')}
                     >
                       🦅 Tiger Wings
                     </button>
                     <button 
                       className="submenu-item" 
                       onClick={() => handleErpNavigation('tiger3')}
                     >
                       🐯 Tiger3
                     </button>
                     <button 
                       className="submenu-item" 
                       onClick={() => handleErpNavigation('b2b-bayi-siparis')}
                     >
                       🛒 B2B Bayi Sipariş Sistemi
                     </button>
                   </div>
                 </div>
                 <div 
                   className="dropdown-item-with-submenu"
                   onMouseEnter={() => handleMouseEnter('ikSubmenu')}
                   onMouseLeave={() => handleMouseLeave('ikSubmenu')}
                 >
                   <Link to="/ik-cozumleri" className="dropdown-item" onClick={(e) => { 
                     if (window.innerWidth <= 768) {
                       e.preventDefault();
                       toggleIkSubmenu();
                     } else {
                       setIsOpen(false); 
                       scrollToTop();
                     }
                   }}>
                     👥 İK Çözümleri
                     <span className="submenu-arrow">▶</span>
                   </Link>
                   <div className={`submenu ${ikSubmenu ? 'active' : ''}`}>
                     <button 
                       className="submenu-item" 
                       onClick={() => handleIkNavigation('j-guar-ik')}
                     >
                       🛡️ J-Guar IK
                     </button>
                     <button 
                       className="submenu-item" 
                       onClick={() => handleIkNavigation('bordro-plus')}
                     >
                       💰 Bordro Plus
                     </button>
                     <button 
                       className="submenu-item" 
                       onClick={() => handleIkNavigation('tiger-hr')}
                     >
                       🐅 Tiger HR
                     </button>
                   </div>
                 </div>
                 <div 
                   className="dropdown-item-with-submenu"
                   onMouseEnter={() => handleMouseEnter('projeSubmenu')}
                   onMouseLeave={() => handleMouseLeave('projeSubmenu')}
                 >
                   <Link to="/proje-cozumleri" className="dropdown-item" onClick={(e) => { 
                     if (window.innerWidth <= 768) {
                       e.preventDefault();
                       toggleProjeSubmenu();
                     } else {
                       setIsOpen(false); 
                       scrollToTop();
                     }
                   }}>
                     📋 Proje Çözümleri
                     <span className="submenu-arrow">▶</span>
                   </Link>
                   <div className={`submenu ${projeSubmenu ? 'active' : ''}`}>
                     <button 
                       className="submenu-item" 
                       onClick={() => handleProjeNavigation('hazine-yonetimi')}
                     >
                       💎 Hazine Yönetimi
                     </button>
                     <button 
                       className="submenu-item" 
                       onClick={() => handleProjeNavigation('b2b-sistemleri')}
                     >
                       🔗 B2B Sistemleri
                     </button>
                     <button 
                       className="submenu-item" 
                       onClick={() => handleProjeNavigation('veri-toplama-raporlama')}
                     >
                       📊 Veri Toplama ve Raporlama
                     </button>
                   </div>
                 </div>
                 <div 
                   className="dropdown-item-with-submenu"
                   onMouseEnter={() => handleMouseEnter('isgSubmenu')}
                   onMouseLeave={() => handleMouseLeave('isgSubmenu')}
                 >
                   <Link to="/isg-cozumleri" className="dropdown-item" onClick={(e) => { 
                     if (window.innerWidth <= 768) {
                       e.preventDefault();
                       toggleIsgSubmenu();
                     } else {
                       setIsOpen(false); 
                       scrollToTop();
                     }
                   }}>
                     🛡️ İSG Çözümleri
                     <span className="submenu-arrow">▶</span>
                   </Link>
                   <div className={`submenu ${isgSubmenu ? 'active' : ''}`}>
                     <button 
                       className="submenu-item" 
                       onClick={() => handleIsgNavigation('e-logo-isg')}
                     >
                       ⚡ E Logo İSG
                     </button>
                     <button 
                       className="submenu-item" 
                       onClick={() => handleIsgNavigation('is-sagligi-guvenligi')}
                     >
                       🔒 İş Sağlığı ve Güvenliği
                     </button>
                   </div>
                 </div>
                 <div 
                   className="dropdown-item-with-submenu"
                   onMouseEnter={() => handleMouseEnter('isAnalitigiSubmenu')}
                   onMouseLeave={() => handleMouseLeave('isAnalitigiSubmenu')}
                 >
                   <Link to="/is-analitigi" className="dropdown-item" onClick={(e) => { 
                     if (window.innerWidth <= 768) {
                       e.preventDefault();
                       toggleIsAnalitigiSubmenu();
                     } else {
                       setIsOpen(false); 
                       scrollToTop();
                     }
                   }}>
                     📈 İş Analitiği Çözümleri
                     <span className="submenu-arrow">▶</span>
                   </Link>
                   <div className={`submenu ${isAnalitigiSubmenu ? 'active' : ''}`}>
                     <button 
                       className="submenu-item" 
                       onClick={() => handleIsAnalitigiNavigation('logo-mind-insight')}
                     >
                       🧠 Logo Mind Insight
                     </button>
                     <button 
                       className="submenu-item" 
                       onClick={() => handleIsAnalitigiNavigation('logo-mind-navigator')}
                     >
                       🧭 Logo Mind Navigator
                     </button>
                     <button 
                       className="submenu-item" 
                       onClick={() => handleIsAnalitigiNavigation('logo-mind-budget')}
                     >
                       💰 Logo Mind Budget
                     </button>
                   </div>
                 </div>
               </div>
            </div>



            <div className="nav-dropdown" onMouseLeave={() => handleMouseLeave('eSolutions')}>
              <button 
                className="nav-link dropdown-toggle"
                onClick={toggleESolutionsDropdown}
                onMouseEnter={() => handleMouseEnter('eSolutions')}
              >
                E-Çözümler
                <ChevronDown size={16} />
              </button>
                             <div 
                 className={`dropdown-menu ${eSolutionsDropdown ? 'active' : ''}`}
                 onMouseEnter={() => handleMouseEnter('eSolutions')}
                 onMouseLeave={() => handleMouseLeave('eSolutions')}
               >
                 <Link to="/e-fatura" className="dropdown-item" onClick={() => { setIsOpen(false); scrollToTop(); }}>
                   📄 E-Fatura
                 </Link>
                 <Link to="/e-arsiv" className="dropdown-item" onClick={() => { setIsOpen(false); scrollToTop(); }}>
                   📁 E-Arşiv
                 </Link>
                 <Link to="/e-defter" className="dropdown-item" onClick={() => { setIsOpen(false); scrollToTop(); }}>
                   📚 E-Defter
                 </Link>
                 <Link to="/e-mutabakat" className="dropdown-item" onClick={() => { setIsOpen(false); scrollToTop(); }}>
                   🔄 E-Mutabakat
                 </Link>
                 <Link to="/e-irsaliye" className="dropdown-item" onClick={() => { setIsOpen(false); scrollToTop(); }}>
                   📦 E-İrsaliye
                 </Link>
                 <Link to="/logo-connect-banka" className="dropdown-item" onClick={() => { setIsOpen(false); scrollToTop(); }}>
                   🏦 Logo Connect Banka
                 </Link>
                 <Link to="/logo-connect-fda" className="dropdown-item" onClick={() => { setIsOpen(false); scrollToTop(); }}>
                   📊 Logo Connect FDA
                 </Link>
                 <Link to="/logo-connect-b2b" className="dropdown-item" onClick={() => { setIsOpen(false); scrollToTop(); }}>
                   🔗 Logo Connect B2B
                 </Link>
                 <Link to="/go-garanti" className="dropdown-item" onClick={() => { setIsOpen(false); scrollToTop(); }}>
                   🛡️ Go Garanti
                 </Link>
                 <Link to="/e-ekstre" className="dropdown-item" onClick={() => { setIsOpen(false); scrollToTop(); }}>
                   📋 E-Ekstre
                 </Link>
               </div>
            </div>

            <div className="nav-dropdown" onMouseLeave={() => handleMouseLeave('services')}>
              <button 
                className="nav-link dropdown-toggle"
                onClick={toggleServicesDropdown}
                onMouseEnter={() => handleMouseEnter('services')}
              >
                Hizmetler
                <ChevronDown size={16} />
              </button>
                             <div 
                 className={`dropdown-menu ${servicesDropdown ? 'active' : ''}`}
                 onMouseEnter={() => handleMouseEnter('services')}
                 onMouseLeave={() => handleMouseLeave('services')}
               >
                 <Link to="/egitim" className="dropdown-item" onClick={() => { setIsOpen(false); scrollToTop(); }}>
                  📚 Eğitim
                </Link>
                 <Link to="/destek" className="dropdown-item" onClick={() => { setIsOpen(false); scrollToTop(); }}>
                  🛠️ Destek
                </Link>
                 <Link to="/kurumsal-hizmetler" className="dropdown-item" onClick={() => { setIsOpen(false); scrollToTop(); }}>
                  🏢 Kurumsal Hizmetler
                </Link>
                 <Link to="/bakim" className="dropdown-item" onClick={() => { setIsOpen(false); scrollToTop(); }}>
                  🔧 Bakım
                </Link>
                 <Link to="/lisans" className="dropdown-item" onClick={() => { setIsOpen(false); scrollToTop(); }}>
                  📄 Lisans
                </Link>
                 <Link to="/projeler" className="dropdown-item" onClick={() => { setIsOpen(false); scrollToTop(); }}>
                  🚀 Projeler
                </Link>
              </div>
            </div>

            <button className="nav-link" onClick={() => handleNavigation('about')}>Hakkımızda</button>
            <button className="nav-link" onClick={() => handleNavigation('contact')}>İletişim</button>
            
            {/* Theme Toggle Button */}
            <button className="theme-toggle" onClick={toggleTheme} title={isDarkMode ? 'Light Mode' : 'Dark Mode'}>
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            
            <button className="btn btn-primary" onClick={() => handleNavigation('contact')}>Destek Talebi</button>
          </div>
          
          <button className={`navbar-toggle ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
