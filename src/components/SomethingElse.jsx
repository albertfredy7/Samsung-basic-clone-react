import React from 'react'
import { Container } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

function SomethingElse() {
  return (
    <Container className='mt-5' style={{position:'relative'}}>
        <div>
        <h1 className='text-center my-5'>Looking for something else?</h1>
        <center>
            <InputGroup className=' w-25 justify-content-center'>
                
                <InputGroup.Text ><i class="fa-solid fa-magnifying-glass"></i></InputGroup.Text>
                <Form.Control aria-label="Dollar amount (with dot and two decimal places)" placeholder='Search Keyword' />
                
          </InputGroup>
          <div className='mt-3 d-flex justify-content-center'>
            <Button variant="outline-secondary" className='rounded-5 me-3' style={{fontSize:'11px'}}>Galaxy Z Flip 5</Button>
            <Button variant="outline-secondary" className='rounded-5 me-3' style={{fontSize:'11px'}}>Galaxy Z Fold5</Button>
            <Button variant="outline-secondary" className='rounded-5 me-3' style={{fontSize:'11px'}}>QLED 8k</Button>
            <Button variant="outline-secondary" className='rounded-5 me-3' style={{fontSize:'11px'}}>UHD TVs</Button>
            <Button variant="outline-secondary" className='rounded-5 me-3' style={{fontSize:'11px'}}>Eco bubble</Button>
         </div>
        </center>

        <div class="description mt-5">
			<p>* 5G Devices are 5G ready, connectivity dependent on network availability.</p>
            <p>* Images shown here are for representational purpose only, actual may vary. All features, specifications and prices are subject to change without prior notice. Model availability may vary from location to location.</p>
            <p>* Image stipulated for representation purpose only. Cashback subject to maximum capping limit. Third party finance offers are at the sole discretion of the partners/NBFC/financiers. 10% cashback applicable as per limits: Infinte variant: ₹&lrm; 5000 monthly, ₹&lrm; 20000 annually, Signature variant: ₹&lrm; 2500 monthly, ₹&lrm; 10000 annually.</p>
            <p>* EMI computed on ₹&lrm; 250290 down payment, 30 months No Cost EMI on the MRP/Price of ₹&lrm; 339990 for 1 Unit of 65QN800C.</p>
            <p>* S Pen Fold Edition sold separately and is only compatible with Z Fold5, Z Fold4 and Z Fold3. Flex mode supported at angles between 75˚ and 115˚.</p>
            <p>* Galaxy Tab S9, Tab S9+, Tab S9 Ultra is rated as IP68. Based on test condition for submersion in up to 1.5 meter of fresh water for up to 30 mins. Not advised for beach or pool use.</p>
            <p>* Image simulated. S Pen Fold Edition sold separately and is only compatible with Galaxy Z Fold4 and Galaxy Z Fold3.</p>
            <p>* Watch screen image simulated for illustrative purpose. Availability of colours, sizes, models, and watch bands may vary by country or carrier.</p>
            <p>* T&amp;C Apply. Cashback at the sole discretion of the issuer / NBFC.</p>
            <p>&nbsp;</p>

		</div>

        </div>
    </Container>
  )
}

export default SomethingElse