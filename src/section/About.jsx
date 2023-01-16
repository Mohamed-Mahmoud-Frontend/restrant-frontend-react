import './About.css'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
function About() {
  return (
    <Form className='m-2'>
<h3>contact us</h3>

      <Row className="ms-3">
      <Col sm={12}>
        <Form.Group  controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        </Col>
        <Col sm={12}>
        <Form.Group  controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
   </Col>   
   </Row>

      <Button  className='m-3' variant="danger" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default About;
