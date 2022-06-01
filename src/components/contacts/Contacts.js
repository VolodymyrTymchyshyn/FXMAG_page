import './Contacts.css';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import PeopleIcon from '@mui/icons-material/People';
import FormInput from './form/Form';
import React from 'react';


export default function Contacts() {
    return (
        <div className='contacts'>
            <div className='contacts_wrapper'>
                <div className="contacts-main_text">
                    Skontaktuj się z nami
                </div>
                <div className="contacts-main">
                    <div className="contacts-main_info">
                        <div className="contacts-main_info_mail">
                            <div className="contacts-main_info_items"><MailOutlineIcon />
                                <span className="small-text-contacts">example@gmail.pl</span></div>
                            <div className="contacts-main_info_items"><PhoneIcon />
                                <span className="small-text-contacts">+48 000 000 000</span></div>
                        </div>
                        <div className="contacts-main_info_mail">
                            <div className="contacts-main-avatar">
                                <PeopleIcon />
                            </div>
                            <div className="contacts-main_avatar_text">
                                <div className="small-text-contacts" style={{ 'margin-bottom': '5px' }}>Chętnie odpowiem na twoje pytania</div>
                                <div className="medium-text-contacts">Paweł Augustyn</div>
                                <div className="big-text-contacts">B2B MANAGER</div>
                            </div>
                        </div>
                    </div>



                    <div>
                        <FormInput />
                    </div>
                </div>
            </div>
        </div>
    )
}