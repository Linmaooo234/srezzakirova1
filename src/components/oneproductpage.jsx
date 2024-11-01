import { useParams } from 'react-router-dom';
import s from './Product.module.css';
import React, { useState } from 'react';
import { OrderFormModal } from './Modalka';

const products = [
    {
        id: 1,
        title: 'ANIMALISM Flamingo white',
        price: 2100,
        image: 'https://alltowall.ru/upload/shop_5/1/0/9/item_10973/s751_interior.webp',
        quantity: 0,
        category: 'Красивые',
        description:'В сюжете «ANIMALISM Flamingo black» грациозные фламинго неспешно прогуливаются на фоне пруда. Монохромный рисунок, выполненный одной тонкой графичной линией, смотрится стильно и лаконично. Универсальный принт подходит для спальни, гостиной, детской ребёнка любого возраста.'
    },

    {
        id: 2,
        title: 'Тропический лес',
        price: 2100,
        image: 'https://alltowall.ru/upload/shop_5/1/1/9/item_11995/s754_interior.webp',
        quantity: 20,
        category: 'Красивые',
        description:'Новое прочтение детских обоев с животными: монохромный принт с жирафом, зеброй, лемуром и игривыми обезьянками — это «Тропический лес». Такие обои станут украшением детской в вашем доме или ярким акцентом в интерьере детского сада, клиники, школы. Цвет сюжета можно изменить на любой другой без доплат.'
    },
    {
        id: 3,
        title: 'Сирин',
        price: 1200,
        image: 'https://alltowall.ru/upload/shop_5/1/1/9/item_11989/s753_interior.webp',
        quantity: 44,
        category: 'Уродские',
        description:'Фантазийный принт по мотивам русских народных сказок.Обои, с изображением плодовых деревьев и красных девиц в образах сказочных птиц, украсят комнату ребёнка и напомнят о любимых книгах из детства.'
    },
    {
        id: 4,
        title: 'ANIMALISM Leopard',
        price: 1400,
        image: 'https://alltowall.ru/upload/shop_5/1/0/9/item_10974/s752_interior.webp',
        quantity: 42,
        category: 'Красивые',
        description:'Золотистая светлая гамма сюжета «ANIMALISM Fur» и оригинальный рисунок, вдохновлённый окрасом экзотических животных – решение для любителей смелых акцентных интерьеров. Обои подойдут для гостиной, спальни, кабинета или комнаты подростка.'
    },

    {
        id: 5,
        title: 'ANIMALISM Zebras',
        price: 5400,
        image: 'https://alltowall.ru/upload/shop_5/1/0/9/item_10965/s749_interior.webp',
        quantity: 24,
        category: 'Уродские',
        description:'Обои «ANIMALISM Zoo» с элементом игры: как быстро малыш сможет найти своих любимых животных среди силуэтов? Здесь есть слоны, жирафы, верблюды, обезьяны и многие другие обитатели саванны. Минималистичная стилистика сюжета позволит вписать его в любой интерьер, а тёплая цветовая гамма сделает детскую уютной.'
    },
    {
        id: 6,
        title: 'Французский сад',
        price: 3200,
        image: 'https://alltowall.ru/upload/shop_5/9/9/7/item_9978/s741_interior.webp',
        quantity: 0,
        category: 'Красивые',
        description:'Обои «ANIMALISM Spots» в нежной пудровой гамме – идеальное решение для тех, кто предпочитает спокойные интерьеры в тёплых оттенках. Анималистичный абстрактный принт будет отлично смотреться в гостиной, спальне или комнате подростка.'
    }
    
];

export function ProductPage() {
    const { id } = useParams();
    const product = products.find((product) => product.id === Number(id));
    
    const [isModalOpen, setModalOpen] = useState(false);

    if (!product) {
        return <h2>Товар не найден</h2>;
    }

    const handleOrderClick = () => {
        setModalOpen(true);
    };

    return (
        <div className={s.Productda}>
            <img className={s.ProductImage} src={product.image} alt={product.title} />
            <div className={s.Producttext}>
                <h1 className={s.ProductTitle}>{product.title}</h1>
                <p className={s.ProductDesc}>{product.description}</p>
                <div className={s.btnopis}>
                    <h3 className={s.ProductTsena}>{product.price}₽</h3>
                    {product.quantity === 0 ? (
                        <button onClick={handleOrderClick} className={s.AddKorzin}>Заказать</button>
                    ) : (
                        <button className={s.AddKorzin}>Добавить в корзину</button>
                    )}
                </div>
            </div>
            <OrderFormModal
                isOpen={isModalOpen} 
                onClose={() => setModalOpen(false)} 
                product={product} 
            />
        </div>
    );
}