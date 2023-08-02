import React from 'react';
import './HeaderSection.css'; 

const HeaderSection = (props) => {
    return (
        <div className='header-container'>
            <div className='header-title'>
                <div className='kotak-abu-title'></div>
                <h1 className='title-header'>{props.titleHeader}</h1>
            </div>
            <div className='header-sub-title'>
                <p className='sub-title'>{props.subTitle}</p>
            </div>
        </div>
      )
}

export default HeaderSection; 
