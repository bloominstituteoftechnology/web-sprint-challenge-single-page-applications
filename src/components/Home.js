import { Link, Route } from 'react-router-dom';
import styled from 'styled-components';

const headerImgUrl = "https://www.iwmbuzz.com/wp-content/uploads/2022/04/here-are-some-countries-with-the-most-delicious-cuisine-have-you-tried-them-all.jpg";
const imgHeight = "30vh";

const HomeStyle = styled.div`

    .home-header {
        background-image: url("${headerImgUrl}");
        background-size: cover;
        height: ${imgHeight};

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        

        h2 {
            background-color: rgba(255, 255, 255, 0.8);
            margin: 1rem;
            padding: 2%;
            font-size: 2rem;
            font-family: "Gill Sans", sans serif;
        }

        button {
            border-radius: 10px;
            font-size: 1rem;
            padding: 1%;
        }
    }

    .home-button-link {
        padding: 1rem;
        background-color: white;
        text-decoration: none;
        font-family: "Arial", sans-serif;
        color: black;
        border: 2px solid black;
        border-radius: 10px;
    }

`;

export default function Home(props) {


    return (
        <HomeStyle>
            <div className="home-header">
                <h2>Your favorite food, delivered while coding!</h2>
                <Link to="/pizza" class="home-button-link">Pizza?</Link>
            </div>
        </HomeStyle>
    )
}