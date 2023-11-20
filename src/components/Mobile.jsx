import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Badge from 'react-bootstrap/Badge';

function Mobile() {
  return (
    <Container>
        <div className='mt-5 w-100' style={{height:'600px'}}>
            
        <div className='d-flex'>
  <Col>
    <div style={{ position: 'relative' }}>
      <Badge className='m-3' bg="primary" style={{ position: 'absolute' }}>New</Badge>
      <img className='rounded-4' src="https://images.samsung.com/is/image/samsung/assets/in/home/Galaxy_Z_Filp5_684x684.jpg?$684_684_JPG$" alt="" style={{ width: '620px' }} />
      
    </div>
  </Col>

  <Col>
    <Row>
      <div className='d-flex gap-3'>
        <div style={{ position: 'relative' }}>
          <Badge className='m-3' bg="primary" style={{ position: 'absolute' }}>New</Badge>
          <img className='rounded-4' src="https://images.samsung.com/is/image/samsung/assets/in/home/1115/A34_SmallTile_296x352.jpg?$330_330_JPG$" alt="" style={{ width: '300px' }} />
          
        </div>
        <div style={{ position: 'relative' }}>
          <Badge className='m-3' bg="primary" style={{ position: 'absolute' }}>New</Badge>
          <img className='rounded-4' src="https://images.samsung.com/is/image/samsung/assets/in/home/1115/S23_Lime_330x330.jpg?$330_330_JPG$" alt="" style={{ width: '300px' }} />
          
        </div>
      </div>
    </Row>

    <Row>
      <div className='d-flex gap-3 mt-3'>
        <div style={{ position: 'relative' }}>
          <img className='rounded-4' src="https://images.samsung.com/is/image/samsung/assets/in/home/Galaxy_S23FE_330x330.jpg?$330_330_JPG$" alt="" style={{ width: '300px' }} />
          
        </div>
        <div style={{ position: 'relative' }}>
          <img className='rounded-4' src="https://images.samsung.com/is/image/samsung/assets/in/home/1115/S23Ultra_Exclusive_Color_small_Tile_330X330.jpg?$330_330_JPG$" alt="" style={{ width: '300px' }} />
          
        </div>
      </div>
    </Row>
  </Col>
</div>

            
        </div>
    </Container>
  )
}

export default Mobile