import React from 'react';
import {
    Toolbar,
    ToolbarRow,
    ToolbarSection,
} from 'rmwc/Toolbar';
import Logo from '../../../../resources/images/logo/128.png';

const Header = () => {
    return (
        <Toolbar className="headerContainer">
            <ToolbarRow>
                <ToolbarSection alignStart>
                    <img className="logo" src={Logo} />
                </ToolbarSection>
                <ToolbarSection shrinkToFit>
                    <div className="navLink">Anasayfa</div>
                    <div className="navLink">Yol Haritası</div>
                    <div className="navLink">İletişim</div>
                </ToolbarSection>
            </ToolbarRow>
        </Toolbar>
    );
}

export default Header;