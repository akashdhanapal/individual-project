import React from 'react'
import { Carousel, CarouselItem } from 'react-bootstrap'
import image1 from "../images/image1.jpeg"
import Tranport from './Tranport'


export default function Home() {
  return (
    <div>
      <Carousel>
        <CarouselItem>
            <img src={image1}style={{ height: '500px', width: '750px' }}/>
        </CarouselItem>
        <CarouselItem>
        <img src={image1} style={{ height: '500px', width: '750px' }}/>  
        </CarouselItem>
        <CarouselItem>
        <img src={image1} style={{ height: '500px', width: '750px' }}/>
        </CarouselItem>
      </Carousel>

      <Tranport/>
      
    </div>
  )
}
