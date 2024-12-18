import { Link } from 'react-router-dom';
import ResturantImage from '../Images/Resturant.jpg';
import PizzaHutImage from '../Images/PizzaHut.jpg';
import DominosImage from '../Images/Dominos.jpg';
import Via313Image from '../Images/Via313.jpg';
import {
    Card,
    CardImg,
    CardImgOverlay,
    CardTitle,
    CardGroup,
    CardBody,
    CardSubtitle,
    CardText,
    Button,
} from "reactstrap";



export default function HomePage() {

    return (
        <div className='container'>
            <Card inverse className='mb-3'>
                <CardImg
                    alt="Resturant dinning area"
                    src={ResturantImage}
                    style={{
                        height: 270
                    }}
                    width="100%"
                />
                <CardImgOverlay style={{ backgroundColor: "rgba(0,0,0,0.3)" }}>
                    <CardTitle tag="h5">
                        Enjoy your favorite resturant at home, while doing what you love.
                    </CardTitle>
                </CardImgOverlay>
            </Card>
            <h4 className='text-center'>Let's find your next meal</h4>
            <CardGroup className='mb-3'>
                <Card className='rounded-end'>
                    <CardImg
                        alt="Pizza Hut store front"
                        src={PizzaHutImage}
                        top
                        width="100%"
                        height="62.8%"

                    />
                    <CardBody>
                        <CardTitle tag="h5">
                            Pizza Hut
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            No one outpizzas the hut
                        </CardSubtitle>
                        <CardText className='mb-0'>
                            20-30 minutes
                        </CardText>
                        <CardText>
                            $2.99 Delivery Fee
                        </CardText>
                        <Link to="/OrderForm">
                            <Button>
                                Order Now
                            </Button>
                        </Link>
                    </CardBody>
                </Card>
                <Card className='mx-2 border-start rounded'>
                    <CardImg
                        alt="Pizza"
                        src={Via313Image}
                        top
                        width="100%"
                        height="62.8%"
                    />
                    <CardBody>
                        <CardTitle tag="h5">
                            Via313
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            Detroit Style pizza
                        </CardSubtitle>
                        <CardText className='mb-0'>
                            20-30 minutes
                        </CardText>
                        <CardText>
                            $2.99 Delivery Fee
                        </CardText>
                        <Link to="/OrderForm">
                            <Button>
                                Order Now
                            </Button>
                        </Link>
                    </CardBody>
                </Card>
                <Card className='border-start rounded-start'>
                    <CardImg
                        alt="Dominos pizza kitchen"
                        src={DominosImage}
                        top
                        width="100%"
                        height="62.8%"
                    />
                    <CardBody>
                        <CardTitle tag="h5">
                            Domino's Pizza
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            Get the door, it's Domino's
                        </CardSubtitle>
                        <CardText className='mb-0'>
                            20-30 minutes
                        </CardText>
                        <CardText>
                            $2.99 Delivery Fee
                        </CardText>
                        <Link to="/OrderForm">
                            <Button>
                                Order Now
                            </Button>
                        </Link>
                    </CardBody>
                </Card>
            </CardGroup>
        </div>

    )



}



