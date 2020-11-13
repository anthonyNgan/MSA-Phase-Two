import React from 'react';
import Model from 'react-body-highlighter';

const Healing = () => {

    return(
        <Model
        data={[
          { name: 'Bench Press', muscles: ['chest', 'triceps', 'front-deltoids'] },
          { name: 'Push Ups', muscles: ['chest'] },
        ]}
        style={{ width: '20rem', padding: '5rem' }}
        />
    )
}

export default Healing;