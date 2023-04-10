import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";
import React from "react";

export function Section({ cart}) {

  const cardContents = [
    {
      sale: false,
      name: "Fancy Product",
      price: "$40.00 - $80.00",
      review: "",
      button: "View options",
    },
    {
      sale: true,
      name: "Special Item",
      price: "$̶20̶.̶0̶0̶  $18.00",
      review: "⭐⭐⭐⭐⭐",
      button: "Add to cart",
    },
    {
      sale: true,
      name: "Sale Item",
      price: "$̶5̶0̶.̶0̶0̶  $25.00",
      review: "",
      button: "Add to cart",
    },
    {
      sale: false,
      name: "Popular Item",
      price: "$40.00",
      review: "⭐⭐⭐⭐⭐",
      button: "Add to cart",
    },
    {
      sale: true,
      name: "Sale Item",
      price: "$̶5̶0̶.̶0̶0̶  $25.00",
      review: "",
      button: "Add to cart",
    },
    {
      sale: false,
      name: "Fancy Product",
      price: "$40.00 - $80.00",
      review: "",
      button: "View options",
    },
    {
      sale: true,
      name: "Special Item",
      price: "$̶20̶.̶0̶0̶  $18.00",
      review: "⭐⭐⭐⭐⭐",
      button: "Add to cart",
    },
    {
      sale: false,
      name: "Popular Item",
      price: "$40.00",
      review: "⭐⭐⭐⭐⭐",
      button: "Add to cart",
    },
  ];
  return (
    <section className='py-5'>
      <div className='container px-4 px-lg-5 mt-5'>
        <div className='row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center'>
          {cardContents.map((crd, index) => (
            <Cards key={index} card={crd} cart={cart} />
          ))}
        </div>
      </div>
    </section>
  );
}
function Cards({ card,  cart }) {
  return (
    <div className='col mb-5'>
      <Card className='card h-100'>
        {card.sale ? (
          <Badge className='badge bg-dark text-white position-absolute'>
            Sale
          </Badge>
        ) : null}

        <Card.Img
          variant='top'
          src='https://dummyimage.com/450x300/dee2e6/6c757d.jpg' />
        <Card.Body className=' card-body text-center p-4'>
          <Card.Title>{card.name}</Card.Title>
          {card.review ? (
            <div className='d-flex justify-content-center small text-warning mb-2'>
              {card.review}
            </div>
          ) : null}
          <Card.Text className='fw-bolder'>{card.price}</Card.Text>

        </Card.Body>
          <Button className="card-btn mx-auto mb-3" onClick={cart} variant='outline-dark' >{card.button}</Button>
      </Card>
    </div>
  );
}
