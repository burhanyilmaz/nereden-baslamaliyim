import React from 'react';
import FieldCard from '../FieldCard/FieldCard';
import { Grid } from 'rmwc/Grid';

const ComputerFields = () => {
    return (
        <div className="computerField">
            <h2 className="title">Alanlar</h2>
            <div className="cardContainer">
                <Grid>
                    <FieldCard />
                    <FieldCard />
                    <FieldCard />
                    <FieldCard />
                    <FieldCard />
                    <FieldCard />
                </Grid>
            </div>
        </div>
    );
}

export default ComputerFields;