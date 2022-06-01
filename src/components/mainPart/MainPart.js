import './MainPart.css';
import Phone from '../../resourses/img/phone.png';
import React from 'react';

export default function MainPart() {
    return (
        <div className='main-part'>
            <div className='main-part_wrapper'>
                <div className="main-part_text">
                    <div className="main-part_text_block">
                        <span className="small-text">DOTRZYJDO</span>
                        <span className="medium-text">+500 000</span>
                        <span className="small-text"><span className="blue">Unikalnych użytkowników </span>
                            miesięcznie</span>
                    </div>
                    <div className="main-part_text_block">
                        <span className="big-text">+1.5 MLN</span>
                        <span className="small-text"><span className="blue">Odsłon </span>
                            miesięcznie</span>
                    </div>
                    <div className="main-part_text_block last_block">
                        <span className="small-text">Przedstaw swoją ofertę</span>
                        <span className="under-medium-text">+15 000</span>
                        <span className="small-text blue">Adresów mailowych</span>
                    </div>
                </div>
                <div className='main-part_image'>
                    <img className="phone" src={Phone} alt='phone'></img>
                </div>
            </div>
        </div>
    )
}