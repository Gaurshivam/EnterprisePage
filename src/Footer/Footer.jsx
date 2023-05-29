import React from 'react';
import './Footer.css'
import FooterCard from './FooterCard';

const Footer = () => {
    const Img = "https://www.viacomcbsanz.com/wp-content/uploads/2020/09/Rocket-SQ.jpg";
    const Img1 = "https://i.pinimg.com/736x/44/04/c7/4404c73e053ec356dd63c00a3aa50f38.jpg";
    const Img2 = "https://www.thorisoshuttle.co.za/images/whyus2.png";
  return (
    <div className='Footer'>
      <FooterCard Img={Img}  Numbers="2,500" content="Eneterprise organizations successfully launched"/>
      <FooterCard Img={Img1} Numbers="45,000" content="Enterprise users onbaorded seamlessly"/>
      <FooterCard Img={Img2} Numbers="200,000+" content="Profession trained on product and strategy."/>
    </div>
  );
}

export default Footer;
