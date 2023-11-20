import React from 'react'
import Fold5 from './Fold5';
import { useState } from 'react';
import { Container } from 'react-bootstrap'
import Flip5 from './Flip5';

function Mobiles() {
    const [number, setNumber] = useState(1);
    const handleClickNewFold5 = (e) => {
        e.preventDefault(); 
        setNumber((prevNumber) => (prevNumber === 1 ? 0 : 1));
      };
      const handleClickNewFlip5 = (e) => {
        e.preventDefault(); 
        setNumber((prevNumber) => (prevNumber === 2 ? 0 : 2));
      };

      const renderComponent = () => {
        switch (number) {
          case 1:
            return <Fold5/>;
            case 2:
                return <Flip5/>
          default:
            return null;
        }
      }
  return (
    <Container className='mt-5'>
        <div className='mt-5 p-5' style={{backgroundColor:'#f6f6f6',height:'1000px'}}> 
            <h1 className='text-center my-5'>Mobiles</h1>
            <div className='highlights-items'>
                <ul className='d-flex gap-4 justify-content-center'>
                    <li onClick={handleClickNewFold5}><a href=''>Galaxy Z Fold5</a></li>
                    <li onClick={handleClickNewFlip5}><a href=''>Galaxy Z Flip5 </a></li>
                    <li><a href=''>Galaxy Tab S9 Series</a></li>
                    <li><a href=''>Galaxy Book3 Series</a></li>
                    <li><a href=''>Galaxy Watch6</a></li>
                </ul>
            </div>
            <div>
            {renderComponent()}
            </div>
            
        </div>
    </Container>
  )
}

export default Mobiles