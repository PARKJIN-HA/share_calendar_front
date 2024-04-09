import React from 'react';

const IconButton = ({ icon, onClick, alt }) => {
    return (
        <button onClick={onClick}>
            <img src={icon} alt={alt} />
        </button>
    );
};

export default IconButton;