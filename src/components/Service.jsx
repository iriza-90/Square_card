import React from 'react';
import './service.css';
import fastOperationImg from '../images/fast-operation.png';
import connectedAccountsImg from '../images/connected-accounts.png';
import encryptionImg from '../images/encryption.png';
import electronicBankingImg from '../images/electronic-banking.png';

const SecondSection = () => {
  return (
    <section className="second-section">
      <div className="second-section-content">
        <div className="section-header">
          <div className="header-left">
            <h2 className="section-title">We Tried To Provide You With All Global Banking Services</h2>
          </div>
          <div className="header-right">
            <p className="section-description"><big>
              We made every effort to ensure that you have access to a comprehensive range of global banking services. 
              Our aim was to provide you with a seamless banking experience that caters to your financial needs regardless of your location.</big>
            </p>
            <button className="explore-button">Explore More</button>
          </div>
        </div>
        <div className="features">
          <div className="feature">
            <h3 className="feature-title">Simultaneous And Fast Operation</h3>
            <img src={fastOperationImg} alt="Fast Operation" className="feature-image" />
          </div>
          <div className="feature">
            <h3 className="feature-title">Can Be Connected To All Accounts</h3>
            <img src={connectedAccountsImg} alt="Connected Accounts" className="feature-image" />
          </div>
          <div className="feature">
            <h3 className="feature-title">Strong And Advanced Encryption</h3>
            <img src={encryptionImg} alt="Encryption" className="feature-image" />
          </div>
          <div className="feature">
            <h3 className="feature-title">Comprehensive Electronic Banking Services</h3>
            <img src={electronicBankingImg} alt="Electronic Banking" className="feature-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
