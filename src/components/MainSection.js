import React from 'react';
import '../App.css';

const MainSection = () => {
  return (
  <>

  <section className="hero">
        <div className="hero-content">
            <h1>A Modern Bank Card  <br></br> For A Modern World</h1>
            <p>This Modern Bank Card Embraces The Era Of Contactless Payments, Enabling Swift And Effortless Transactions With Just A Tap Or Wave. No More Fumbling For Cash Or Struggling With Outdated Payment Methods.</p>
            <button className="explore-more">Explore More</button>
            <div className='stretch'>
        <img src="companies.svg" alt='companies'/>
       </div>
        </div>
        <div className="hero-image">
            <img src="1.png" alt="Bank Card" className='' />
        </div>
    </section>

  </>
  );
};

export default MainSection;
