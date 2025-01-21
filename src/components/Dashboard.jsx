import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';


const Dashboard = () => {

    return (
        <Container>
        <Row>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Project Youths Restore</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Number of youths</Card.Subtitle>
                <Card.Text>1,534</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Gender Based Violence</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">This month</Card.Subtitle>
                <Card.Text>3,456</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>New Users</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">This month</Card.Subtitle>
                <Card.Text>2,145</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    )

}

export default Dashboard;
