import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Badge from 'react-bootstrap/Badge';

function TV() {
  return (
    <Container>
        <div className='mt-5 w-100' style={{height:'600px'}}>
            
        <div className='d-flex'>
  <Col>
    <div style={{ position: 'relative' }}>
      <Badge className='m-3' bg="primary" style={{ position: 'absolute' }}>New</Badge>
      <img className='rounded-4' src="https://images.samsung.com/is/image/samsung/assets/in/home/1115/QE1.C.jpg?$684_684_JPG$" alt="" style={{ width: '620px' }} />
      <h3 style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'black',marginTop:'30%'}}>Galaxy S23 FE</h3>
    </div>
  </Col>

  <Col>
    <Row>
      <div className='d-flex gap-3'>
        <div style={{ position: 'relative' }}>
          <Badge className='m-3' bg="primary" style={{ position: 'absolute' }}>New</Badge>
          <img className='rounded-4' src="https://images.samsung.com/is/image/samsung/assets/in/home/1115/SmallTile_330x330_UHD_4K_CUE.jpg?$330_330_JPG$" alt="" style={{ width: '300px' }} />
          
        </div>
        <div style={{ position: 'relative' }}>
          <Badge className='m-3' bg="primary" style={{ position: 'absolute' }}>New</Badge>
          <img className='rounded-4' src="https://images.samsung.com/is/image/samsung/assets/in/home/1115/aue65.jpg?$330_330_JPG$" alt="" style={{ width: '300px' }} />
          
        </div>
      </div>
    </Row>

    <Row>
      <div className='d-flex gap-3 mt-3'>
        <div style={{ position: 'relative' }}>
          <img className='rounded-4' src="https://images.samsung.com/is/image/samsung/assets/in/home/1115/SmallTile_330x330_Freestyle.jpg?$330_330_JPG$" alt="" style={{ width: '300px' }} />
          
        </div>
        <div style={{ position: 'relative' }}>
          <img className='rounded-4' src="https://images.samsung.com/is/image/samsung/assets/in/home/1115/SmallTile_330x330_Soundbar.jpg?$330_330_JPG$" alt="" style={{ width: '300px' }} />
          
        </div>
      </div>
    </Row>
  </Col>
</div>

            
        </div>
    </Container>
  )
}

export default TV