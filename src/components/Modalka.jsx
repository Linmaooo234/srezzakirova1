import React, { useState } from 'react';
import Modal from 'react-modal';
import s from './Modal.module.css';

Modal.setAppElement('#root'); 

export function OrderFormModal({ isOpen, onClose, product }) {
    const [formData, setFormData] = useState({ name: '', phone: '' });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Форма отправлена', formData);
        onClose(); 
    };

    return (
        <Modal className={s.mODALKA} isOpen={isOpen} onRequestClose={onClose}>
        <div className={s.soderzhanie}>
            <h2 className={s.zagolovmodal}>Заявка на товар: {product.title}</h2>
            <form className={s.ModalkaSoder} onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Ваше имя" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                />
                  <input 
                    type="text" 
                    name="name" 
                    placeholder="Ваша фамилия" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                />
                  <input 
                    type="text" 
                    name="name" 
                    placeholder="Ваше отчество" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                />

                <input 
                    type="tel" 
                    name="phone" 
                    placeholder="Ваш телефон" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    required 
                />
                <button className={s.btm} type="submit">Отправить заявку</button>
                <button className={s.btm} type="button" onClick={onClose}>Закрыть</button>
            </form>
            </div>
        </Modal>
    );
}