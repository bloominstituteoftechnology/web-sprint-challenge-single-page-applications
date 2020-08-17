import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
const Carousel = () => {
     const items = [
    {
      src: 'https://images.unsplash.com/photo-1594179047513-b4199480fe9d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      altText: 'Slide 1',
      caption: 'Our delicious sausage topping pizza',
      header: 'De la sausage',
      key: '1'
    },
    {
      src: 'https://images.unsplash.com/photo-1458642849426-cfb724f15ef7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      altText: 'Slide 2',
      caption: 'Delicious double cheesed peperoni pizza topped with olives',
      header: 'Olive de la pepi',
      key: '2'
    },
    {
      src: 'https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      altText: 'Slide 3',
      caption: 'Our totally biased out look on a parsley and basil flavored pizza for the the vegan community.',
      header: 'Vegans Suck',
      key: '3'
    }
  ];
  const thisExample = () => <UncontrolledCarousel items={items} />;
  return (
      <div>
  {thisExample()}
  </div>
  )
}
export default Carousel;