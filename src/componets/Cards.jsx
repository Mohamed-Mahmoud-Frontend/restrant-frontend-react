import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Header.css'
import {  Col, Container, Row  } from 'react-bootstrap'

function Cards() {
  return (
    <>
    <Container>
    <Row>
    <Col>
    <div className='last-2'>
         <h1>Explore our foods.</h1>
      <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, pariatur! consectetur adipisicing elit. Quia
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, pariatur! consectetur adipisicing elit. QuiaLorem ipa, pariatur! consectetur adipisicing elit. Quia</span>
    
    </div>

    <div className='cards'> 
    <div className='card-item '>
         <Col  lg={4} md={6} sm={12}> 
         <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src="/images/01.jpg" />
      <Card.Body>
        <Card.Title>Rainbow vegetable sandwich</Card.Title>
        <Card.Text>
time 15-20minutes servese 1
        </Card.Text>
        <h5>10.50 <del>9.00</del></h5>
        <Button variant="danger">Order now</Button>
        </Card.Body>
    </Card>
</Col>
    </div> 
 
    <div className='card-item '>
      <Col  lg={4} md={6} sm={12}> 
<Card style={{ width: '20rem' }}>
<Card.Img variant="top" src="/images/02.jpg" />
<Card.Body>
<Card.Title>Rainbow vegetable sandwich</Card.Title>
<Card.Text>
time 15-20minutes servese 1
</Card.Text>
<h5>10.50 <del>9.00</del></h5>
<Button variant="danger">Order now</Button>
</Card.Body>
</Card>
</Col>
    </div>
    <div className='card-item '>
  <Col  lg={4} md={6} sm={12}> 
<Card style={{ width: '20rem' }}>
<Card.Img variant="top" src="/images/03.jpg" />
<Card.Body>
<Card.Title>Rainbow vegetable sandwich</Card.Title>
<Card.Text>
time 15-20minutes servese 1
</Card.Text>
<h5>10.50 <del>9.00</del></h5>

<Button variant="danger">Order now</Button>
</Card.Body>
</Card>
</Col>

</div>



        
    </div>

    </Col>
    </Row>
    </Container>


</>
  );
}

export default Cards;