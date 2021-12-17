import React, { Fragment } from 'react'

const PageCards = () => {
    return (
        <Fragment>
            <div className='card'>
      <div className='card__image'>
        <img src='https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80' />
      </div>
    </div>
    <div className='card'>
      <div className='card__image'>
        <img src='https://images.unsplash.com/photo-1544982503-9f984c14501a?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=687&amp;q=80' />
      </div>
    </div>
    <div className='card'>
      <div className='card__content'>
        <p><em> Your favorite food.</em></p>
        <p>Delivered while you're coding.</p>
      </div>
    </div>
    <div className='card'>
      <div className='card__image'>
        <img src='https://images.unsplash.com/photo-1614442042855-e17d53875286?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjZ8fHBpenphfGVufDB8fDB8fA%3D%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60' />
      </div>
    </div>
        </Fragment>
    )
}

export default PageCards