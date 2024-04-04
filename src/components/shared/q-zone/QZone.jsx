import React from 'react';

const QZone = ({ image, text }) => {
    return (
        <div className='mb-6'>
            <div className="card bg-base-200 shadow-xl p-2">
                <figure><img src={image} alt={text} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{text}</h2>
                </div>
            </div>
        </div>
    );
};

export default QZone;