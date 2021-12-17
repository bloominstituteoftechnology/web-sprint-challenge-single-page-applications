import React, { Fragment } from 'react'
import Hero from '../hero/Hero'
import PageCards from '../pageCards/PageCards'
import FeaturedDeal from "../featuredDeal/FeaturedDeal";
import OrderCards from "../orderCard/OrderCard";

const MainPage = () => {
    return (
        <Fragment>
            <Hero />
            <PageCards />
            <FeaturedDeal />
            <OrderCards />
        </Fragment>
    )
}

export default MainPage