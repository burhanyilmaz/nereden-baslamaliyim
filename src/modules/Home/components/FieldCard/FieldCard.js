import React from 'react';
import { GridCell } from 'rmwc/Grid';

const FieldCard = () => {
    return (
        <GridCell span="4">
            <div className="fieldCard">
                <img className="image" src="https://png.icons8.com/dotty/50/000000/web.png" />
                <h3 className="title" >Web Geliştirme </h3>
            </div>
        </GridCell>
    );
}

export default FieldCard;