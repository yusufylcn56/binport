import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './styles/shared.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Egitim from './pages/Egitim';
import Destek from './pages/Destek';
import KurumsalHizmetler from './pages/KurumsalHizmetler';
import Bakim from './pages/Bakim';
import Lisans from './pages/Lisans';
import Projeler from './pages/Projeler';
import KobiCozumleri from './pages/KobiCozumleri';
import ErpCozumleri from './pages/ErpCozumleri';
import IkCozumleri from './pages/IkCozumleri';
import ProjeCozumleri from './pages/ProjeCozumleri';
import IsgCozumleri from './pages/IsgCozumleri';
import IsAnalitigi from './pages/IsAnalitigi';
import EFatura from './pages/EFatura';
import EArsiv from './pages/EArsiv';
import EDefter from './pages/EDefter';
import EMutabakat from './pages/EMutabakat';
import EIrsaliye from './pages/EIrsaliye';
import LogoConnectBanka from './pages/LogoConnectBanka';
import LogoConnectFDA from './pages/LogoConnectFDA';
import LogoConnectB2B from './pages/LogoConnectB2B';
import GoGaranti from './pages/GoGaranti';
import EEkstre from './pages/EEkstre';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Services />
              <About />
              <Contact />
            </>
          } />
          <Route path="/egitim" element={<Egitim />} />
          <Route path="/destek" element={<Destek />} />
          <Route path="/kurumsal-hizmetler" element={<KurumsalHizmetler />} />
          <Route path="/bakim" element={<Bakim />} />
          <Route path="/lisans" element={<Lisans />} />
          <Route path="/projeler" element={<Projeler />} />
          <Route path="/kobi-cozumleri" element={<KobiCozumleri />} />
          <Route path="/erp-cozumleri" element={<ErpCozumleri />} />
          <Route path="/ik-cozumleri" element={<IkCozumleri />} />
          <Route path="/proje-cozumleri" element={<ProjeCozumleri />} />
          <Route path="/isg-cozumleri" element={<IsgCozumleri />} />
          <Route path="/is-analitigi" element={<IsAnalitigi />} />
          <Route path="/e-fatura" element={<EFatura />} />
          <Route path="/e-arsiv" element={<EArsiv />} />
          <Route path="/e-defter" element={<EDefter />} />
          <Route path="/e-mutabakat" element={<EMutabakat />} />
          <Route path="/e-irsaliye" element={<EIrsaliye />} />
          <Route path="/logo-connect-banka" element={<LogoConnectBanka />} />
          <Route path="/logo-connect-fda" element={<LogoConnectFDA />} />
          <Route path="/logo-connect-b2b" element={<LogoConnectB2B />} />
          <Route path="/go-garanti" element={<GoGaranti />} />
          <Route path="/e-ekstre" element={<EEkstre />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
