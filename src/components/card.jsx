import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export function OneCard({ title, price, image, id, quantity, color }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
        {price}
        </Card.Text>
        <Card.Text>
        Цвет: {color}
        </Card.Text>
        <Card.Text>
        Количество: {quantity}
        </Card.Text>
        <Button variant="primary"><Link to={`/tovar/${id}`}>Открыть товар</Link></Button>
      </Card.Body>
    </Card>
  );
}