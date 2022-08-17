
import React from 'react'
import CardItem from './CardItem'
import './Cards.css';


function Cards() {
  return (
    <div className='cards'>
        <h1> Check out these EPIC designs</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>

            <ul className='cards__items'>
                    <CardItem
                   
                     src='./images/pic4.jpg'
                     text='Explore the new upcoming cherish designs of your Choice'
                     label='Western Top'
                     path='/products'
                  
                    />
                     <CardItem
                     
                     src='images/pic5.jpg'
                     text='Explore the new upcoming cherish designs of your Choice'
                     label='Silk Top'
                     path='/products'
                  
                    />
                    
                                
                </ul>

                <ul className='cards__items'>
                    <CardItem
                     
                     src='images/pic1.jpg'
                     text='Explore the new upcoming cherish designs of your Choice'
                     label='Silk Shirt'
                     path='/products'
                  
                    />
                     <CardItem
                     
                     src='images/pic2.jpg'
                     text='Explore the new upcoming cherish designs of your Choice'
                     label='Cotton Top'
                     path='/products'
                  
                    />
                     <CardItem
                     
                     src='images/pic3.jpg'
                     text='Explore the new upcoming cherish designs of your Choice'
                     label='Simple Shirt '
                     path='/products'
                  
                    />
                    
                </ul>
              
                <ul className='cards__items'>
                    <CardItem
                   
                     src='./images/pic4.jpg'
                     text='Explore the new upcoming cherish designs of your Choice'
                     label='Elegant design '
                     path='/products'
                  
                    />
                     <CardItem
                     
                     src='images/pic5.jpg'
                     text='Explore the new upcoming cherish designs of your Choice'
                     label='luxury Silk'
                     path='/products'
                  
                    />
                    
                                
                </ul>
                
                    
                                
          
                              
                
            </div>
        </div>

    </div>
  )
};

export default Cards;