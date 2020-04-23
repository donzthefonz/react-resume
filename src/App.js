import React from 'react';
import Header from './components/header/header';
import About from './components/about/about';
import Resume from './components/resume/resume';
import Portfolio from './components/portfolio/portfolio';
import Testimonials from './components/testimonials/testimonials';
import ContactUs from './components/contact/contact';
import Footer from './components/footer/footer';
import resumeData from './resumeData';
import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="App">
            <Header resumeData={resumeData}/>
            <About resumeData={resumeData}/>
            <Resume/>
            <Portfolio/>
            {/*<Testimonials/>*/}
            <ContactUs resumeData={resumeData}/>
            <Footer/>
        </div>
    );

}

export default App;
