import React, { useState } from 'react';
import s from './catalogtovarov.module.css'
import { OneCard } from './card';

const products = [
    {
        id: 1,
        color:'Серый',
        title: 'ANIMALISM Flamingo',
        price: 2100,
        image: 'https://alltowall.ru/upload/shop_5/1/0/9/item_10973/s751_interior.webp',
        quantity: 0,
        category: 'Красивые'
    },

    {
        id: 2,
        color:'Бирюзовый',
        title: 'Тропический лес',
        price: 2100,
        image: 'https://alltowall.ru/upload/shop_5/1/1/9/item_11995/s754_interior.webp',
        quantity: 20,
        category: 'Красивые'
    },
    {
        id: 3,
        color:'Бежевый',
        title: 'Сирин',
        price: 1200,
        image: 'https://alltowall.ru/upload/shop_5/1/1/9/item_11989/s753_interior.webp',
        quantity: 44,
        category: 'Уродские'
    },
    {
        id: 4,
        color:'Желтый',
        title: 'ANIMALISM Leopard',
        price: 1400,
        image: 'https://alltowall.ru/upload/shop_5/1/0/9/item_10974/s752_interior.webp',
        quantity: 42,
        category: 'Красивые'
    },

    {
        id: 5,
        color:'Серый',
        title: 'ANIMALISM Zebras',
        price: 5400,
        image: 'https://alltowall.ru/upload/shop_5/1/0/9/item_10965/s749_interior.webp',
        quantity: 24,
        category: 'Уродские'
    },
    {
        id: 6,
        color:'Серый',
        title: 'Французский сад',
        price: 3200,
        image: 'https://alltowall.ru/upload/shop_5/9/9/7/item_9978/s741_interior.webp',
        quantity: 0,
        category: 'Красивые'
    }
    
];

export function Catalogg(){
    const [searchTerm, setSearchTerm] = useState('');
    const [sortCriteria, setSortCriteria] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(''); 

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const sortProducts = (products) => {
        if (sortCriteria === 'priceAsc') {
            return products.sort((a, b) => a.price - b.price);
        } else if (sortCriteria === 'priceDesc') {
            return products.sort((a, b) => b.price - a.price);
        } else if (sortCriteria === 'quantityAsc') {
            return products.sort((a, b) => a.quantity - b.quantity);
        } else if (sortCriteria === 'quantityDesc') {
            return products.sort((a, b) => b.quantity - a.quantity);
        }
        return products;
    };

    const filterProducts = (products) => {
        if (selectedCategory) {
            return products.filter(product => product.category === selectedCategory);
        }
        return products; 
    };

    const filteredProducts = filterProducts(products).filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const sortedProducts = sortProducts(filteredProducts);

    return(
        <div className={s.catalogszag}>
        <h1 className={s.Zagolovktov}>Каталог товаров</h1>
        <div className={s.PoiskFiltr}>
            <input className={s.Pole}
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Поиск товаров..."
            />
            <select value={selectedCategory} onChange={handleCategoryChange}>
                <option value="">Все категории</option>
                <option value="Красивые">Красивые</option>
                <option value="Уродские">Урдоские</option>
            </select>
            <select className={s.Filtr} value={sortCriteria} onChange={(e) => setSortCriteria(e.target.value)}>
                <option value="">Без сортировки</option>
                <option value="priceAsc">Цена: по возрастанию</option>
                <option value="priceDesc">Цена: по убыванию</option>
            </select>
        </div>
    
    
    <div className={s.da}>
        {sortedProducts.map((product) => (
                <OneCard 
                    key={product.id}
                    id={product.id}
                    title={product.title} 
                    price={product.price} 
                    image={product.image} 
                    quantity={product.quantity} 
                    category={product.category}
                    color = {product.color}
                />
        ))}
    </div>
    </div>
    );
}