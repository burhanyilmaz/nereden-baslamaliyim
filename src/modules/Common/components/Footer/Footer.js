import React from 'react';
import Round from 'react-round';

const Footer = () => {
    return (
        <div className="footer">
            <Round backgroundColor="#f5a617de" position="null,null" size={30} />
            <div className="navigation">
                <h5>Anasayfa</h5>
                <h5>Yol Haritası</h5>
                <h5>İletişim</h5>
            </div>
            <div className="copyright">
                <h4>Nereden Başlamalıyım © 2018</h4>
            </div>
        </div>
    );
}

export default Footer;
