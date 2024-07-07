import React from 'react';
import '../App.css';

const Features = () => {
  return (
    <section className="features">
        <h2>We Tried To Provide You With All Global Banking Services</h2>
        <p>We Made Every Effort To Ensure That You Have Access To A Comprehensive Range Of Global Banking Services. Our Aim Was To Provide You With A Seamless Banking Experience That Caters To Your Financial Needs Regardless Of Your Location.</p>
        <div className="feature-list">
            <div className="feature-item">
                <img src="fast-operation.png" alt="Fast Operation" />
                <h3>Simultaneous And Fast Operation</h3>
            </div>
            <div className="feature-item">
                <img src="connected-accounts.png" alt="Connected Accounts" />
                <h3>Can Be Connected To All Accounts</h3>
            </div>
            <div className="feature-item">
                <img src="advanced-encryption.png" alt="Advanced Encryption" />
                <h3>Strong And Advanced Encryption</h3>
            </div>
            <div className="feature-item">
                <img src="electronic-services.png" alt="Electronic Services" />
                <h3>Comprehensive Electronic Banking Services</h3>
            </div>
        </div>
    </section>
  );
};

export default Features;
