import React from 'react';

const FooterCard = (props) => {
  return (
    <div>
      <img src={props.Img} height={100} width={160} alt="FooterImg" />
      <h1>{props.Numbers}</h1>
      <p>{props.content}</p>
    </div>
  );
}

export default FooterCard;
