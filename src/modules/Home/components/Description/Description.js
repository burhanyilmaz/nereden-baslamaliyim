import React from 'react';
import { Button } from 'rmwc/Button';

const Description = () => {
    return (
        <div className="descriptionContainer">
            <img className="descriptionImage" src="https://image.flaticon.com/icons/svg/910/910403.svg" />
            <h1 className="descriptionTitle">Nereden Başlamayım</h1>
            <p className="descriptionDetail">Bilgisayar Dünyasına Nereden Başlamalıyım Diyorsan Doğru Yerdesin</p>
            <p className="descriptionAction">Kararsızlığı kenera bırakıp hedefe yönelme zamanı</p>
            <Button style={{ color: '#000' }} outlined>Hadi Gelişmek İstediğin Alanını Seç</Button>
        </div>
    );
}

export default Description;