import React from 'react'
import { Button, Col, Container, Row  } from 'react-bootstrap'
import Cards from './Cards'
import './Header.css'
import Navigitionbar from './Navbar'
import Swioper from './Swioper'
const Headertop = () => {
  return (
    <>
    <section>
     <Container>
     <Row>

        <Col lg={5} sm={12} className='header_top'>
        <div>
              <h1>Good food choices are good investments </h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, pariatur! consectetur adipisicing elit. Quia</p>
              <Button  className=' ' variant="danger btn-header1 ">order now</Button>
      <Button className=' btn '  variant="outline-danger btn-header2">Learn more</Button>
    

        </div>
</Col>
    <Col lg={7} sm={12} className='header_top1'>
    <img src="/images/03.jpg" alt=""/>
    </Col>

     </Row>
     </Container>
    </section>

    <section className='num '>
        <Container>
   <Row>
    <div className='height-comp'>
  
    
    <Col lg={12} >
    <div className='height-comp_parent'>
    <div>
    <h1>9999+</h1>
    <h6>Saving</h6>
    </div>
    <div>
    <h1>5752+</h1>
    <h6>photo</h6>
    </div>
    <div>
    <h1>1440+</h1>
    <h6>rockets</h6>
    
    </div>
    <div>
    <h1>8880+</h1>
    <h6>globes </h6>
    
    </div>

    </div>
    </Col>
   
    </div> 
      </Row>
  
    </Container>
 </section>

    <section >

      <Container>
      <Row>
      <Col lg={5} className='header_top mt-5 '>
      <div className='sectionTwo'>
              <h1>we pride ourselves on making real food from the best ingredients.</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, pariatur! consectetur adipisicing elit. Quia</p>

      <Button  className=' ' variant="danger btn-header1 ">Learn More</Button>

      </div>

      </Col>
      
      <Col lg={7} className='header_top2 '>
      <img className='img-sec2' src="/images/02.jpg" alt=""/>
      </Col>
      </Row>
      </Container>
    </section>


    <section className='section-3'>
    <Container>
    <Row>

    
    <Col lg={7} className='header_top2 '>
    <img className='img-sec2' src="/images/5.png" alt=""/>
    </Col>
    <Col lg={5} className='header_top'>
    <div className='sectionTwo'>
            <h1>we make everything by hand with the best possible ingredienst.</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, pariatur! consectetur adipisicing elit. Quia</p>
<span><i class="fa-solid fa-check"></i> Etiam sed dolor ac diam volutpat</span>
<span><i class="fa-solid fa-check"></i> Erat volutpat aliquet imprediet</span>
<span><i class="fa-solid fa-check"></i> purus a adio finibus bibendum </span>

    <Button  className=' ' variant="danger btn-header1 ">Learn More</Button>

    </div>

    </Col>
    </Row>
    </Container>
  </section>
  <section className='last-section'>

  <Container>
  <Row>
  <Col sm={12} >   
  <div className='last'>
       <h1>when a man's </h1>
    <span>Lorem ipsum</span>
  
  </div>
</Col>
  <Col sm={12}>
  <img className='img-sec3'  src="/images/4.JPG" alt=""/>
  </Col>
  </Row>
  </Container>

    </section>



<Cards/>
 <Swioper/>
    </>

   
  )
}

export default Headertop
