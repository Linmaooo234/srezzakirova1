import Carousel from 'react-bootstrap/Carousel';
import s from './slider.module.css';

export function SliderCarousel() {
  return (
    <Carousel className={s.SliderLol} data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://alltowall.ru/upload/shop_5/9/9/4/item_9949/s738_interior.webp"
          alt="First slide"
        />
        <Carousel.Caption>
          <h1>First slide label</h1>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://alltowall.ru/upload/shop_5/9/9/2/item_9928/s735_interior.webp"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h1>Second slide label</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://alltowall.ru/upload/shop_5/9/9/2/item_9928/s735_interior.webp"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h1>Third slide label</h1>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
