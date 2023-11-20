import React from 'react'
import { Container } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel';

function Hero() {
  return (
    <Container>
        <Carousel>
     
      <Carousel.Item>
        <img src="https://images.samsung.com/is/image/samsung/assets/in/home/Neo_Qled_8K_Without-Text_1440X640.jpg?imwidth=1366" alt="" />
        <Carousel.Caption>
        <div className='col-6'></div>
         <div className='col-6 ' style={{marginLeft:'60%',marginTop:'-50%'}}>
              <div className='hero'>
                <h1 style={{textAlign:'left'}}>Neo QLED</h1>
                <h1 style={{textAlign:'left'}}>Big Offers.</h1>
                <h1 style={{textAlign:'left'}}>Big Savings.</h1>
                <h1 style={{textAlign:'left'}}>Big Celebration.</h1>
                <p className='mt-3' style={{textAlign:'left',color:'white',fontSize:'20px'}}>
                Avail benifits up to ₹ 149499
              </p>
              <button className='btn btn-light rounded-4' style={{marginLeft:'-80%'}}>Buy Now</button>
              </div>
              
         </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img src="https://images.samsung.com/is/image/samsung/assets/in/home/SBS_HomePage_1440X6402.jpg?imwidth=1366" alt="" />
        <Carousel.Caption>
        <div className='col-6'></div>
         <div className='col-6 ' style={{marginLeft:'60%',marginTop:'-50%'}}>
              <div className='hero'>
                <h1 style={{textAlign:'left',color:'black'}}>BESPOKE Side by Side</h1>
                <h1 style={{textAlign:'left',color:'black'}}>Big Offers.</h1>
                
                <p className='mt-3' style={{textAlign:'left',color:'white',fontSize:'20px'}}>
                Avail benifits up to ₹ 149499
              </p>
              <button className='btn btn-light rounded-4' style={{marginLeft:'-80%'}}>Buy Now</button>
              </div>
              
         </div>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
    </Container>
  )
}

export default Hero