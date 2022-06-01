import './SocialMedia.css';
import Youtube from '../../resourses/img/social/youtube.png';
import Twitter from '../../resourses/img/social/twitter.png';
import Facebook from '../../resourses/img/social/facebook.png';
import Inst from '../../resourses/img/social/inst.png';
import React from 'react';

export default function SocialMedia() {
    return (
        <div className="social-media">
            <div className="social-media_wrapper">
                <div className="social-media_main social-media-text">SPRAWDż NASZE <span>SOCIAL MEDIA</span></div>
                <div className="social-media_content">
                    <div className="social-media_content_item social-media-text">
                        <img src={Youtube} alt="youtube" className="social-img" />
                        <span style={{ 'color': '#5F0A0D' }}><span>35 000 </span> Subskrybentów</span>
                    </div>
                    <div className="social-media_content_item social-media-text">
                        <img src={Facebook} alt="youtube" className="social-img" />
                        <span style={{ 'color': '#327DBF' }} className="tab-text"><span>7000 </span>
                            <div>Fanów oraz<br /> członków grup</div></span>
                    </div>
                    <div className="social-media_content_item social-media-text">
                        <img src={Twitter} alt="youtube" className="social-img" />
                        <span style={{ 'color': '#5F9AD5' }}><span>3000 </span>Obserwujących</span>
                    </div>
                    <div className="social-media_content_item social-media-text">
                        <img src={Inst} alt="youtube" className="social-img" />
                        <span style={{ 'color': '#9253A6' }}><span>1000 </span>Obserwujących</span>
                    </div>

                </div>
            </div>
        </div>
    )
}

