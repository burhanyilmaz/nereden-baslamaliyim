import React from 'react';
import { Button } from 'rmwc/Button';
import Round from 'react-round';

const Description = () => {
    return (
        <div className="descriptionContainer">
            <h1 className="descriptionTitle">Nereden Başlamayım</h1>
            <p className="descriptionDetail">Bilgisayar Dünyasına Nereden Başlamalıyım Diyorsan Doğru Yerdesin</p>
            <Button unelevated>Hadi Gelişmek İstediğin Alanını Seç</Button>
            <Round backgroundColor="#6941eeb3" position="300,120" size={40} />
            <Round backgroundColor="#000000b3" position="null,100,350" size={50} />
            <Round backgroundColor="#ff6059b3" position="null,null,50" size={100} />
            <Round backgroundColor="#ffff00b3" position="80,250" />
        </div>
    );
}

export default Description;