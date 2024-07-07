import React from 'react';
import './features.css';
import fastOperationImg from '../images/personal-accounts.png';
import connectedAccountsImg from '../images/connected-accounts.png';
import essentialBankImg from '../images/essential-bank.png';
import infoBankImg from '../images/info-bank.png';

const Features = () => {
  return (
    <section className="features">
      <h2 className="h2-f">
        
        Up-To-Date And Fast Banking <br/> Services In One Place
        
      </h2>
      <div className="feature-list">
        <div className="feature-item">
          <h3>Types Of Business And <br />Personal Accounts</h3>
          <p>You can easily open any type of account, including personal and business, and use all the services you need easily and online. We will update and add global services for you.</p>
          <img src={fastOperationImg} alt="Fast Operation" />
        </div>
        <div className="feature-item">
          <h3>Opening Of Essential< br /> Bank Account</h3>
          <p>It is not impossible to open an account in an online and simple way with just two clicks. You can now save your time and create a fast and safe bank account for yourself or your loved ones.</p>
          <img src={essentialBankImg} alt="Essential Bank" />
          
        </div>
        <div className="feature-item">
          <h3>Information And Data Of <br />Bank Accounts</h3>
          <p>See the most detailed information of your bank account without deducing money. You can easily manage account information and even better to manage your account information and status.</p>
          <img src={infoBankImg} alt="Information Bank" />
        </div>
      </div>
    </section>
  );
};

export default Features;

