import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Home = () => {

    const HomePage = styled.div`
        ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
            overflow: hidden;
            background-color: #333;
        }
        .logo {
            float: left;
            background-color: #EC3944;
            padding: 14px 16px;
        }
        .logo a {
            text-decoration: none;
            color: white;
            font-weight: bold;
        }
        .heroCardContainer{
            display: flex;
            justify-content: center;
            flex-direction: column;
        }
    `
    const HeroCard = styled.div`
        align-self: center;
        display: flex;
        justify-content: center;
        flex-direction: column;
        border: black 3px solid;
        border-radius: 10px;
        margin: 3rem;
        padding: 1rem;
        width: 30rem;
        height: 30rem;
        text-decoration: none;
        color: white;
        background-image: url('https://www.marcos.com/uploads/2018/03/7201_Marcos_AllMeat_RetinaMed_2.jpg');
        h1 {
            align-self: center;
            font-size: 4rem;
        }
        .orderNow{
            align-self: center;
            border: white 2px solid;
            border-radius: 10px;
            padding: .5rem;
        }
        a {
            align-self: center;
            text-decoration: none;
            color: white;
            font-weight: bold;
            font-size: 1.5rem;

        }
    `

return (
    <div>
        <HomePage>
            <ul>
                <li className='logo'><Link to={'/'}>Lambda Eats</Link></li>
            </ul>
            <div className='heroCardContainer'>
                <HeroCard>
                    <h1>
                        Pizza Time!
                    </h1>
                    <div className='orderNow'>
                        <Link to={'/pizza'}>
                            Order Now
                        </Link>
                    </div>
                </HeroCard>
            </div>

        </HomePage>
    </div>
)
}

export default Home