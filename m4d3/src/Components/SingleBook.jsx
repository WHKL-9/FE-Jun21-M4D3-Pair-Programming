/* import {Container, Card, Row, Col} from 'react-bootstrap'
import fantasybooks from './Data/fantasy.json'
import './SingleBook.css'


const SingleBook =  () => {
    return <Container>
        <Row>
            {
                fantasybooks.map( book=> (
                    <Col xs={12} sm={6} md={4} className="mb-2" key={book.asin}>
                    <Card id={book.asin} className="wholeCard">
                        <Card.Img variant="top" src={book.img} style={{height: "16rem" }} className="img-fluid" alt="bookimage"/>
                            <Card.Body >
                                <Card.Title id="bookTitle">{book.title}</Card.Title>
                            </Card.Body>
                    </Card> 
                </Col>  
                ))
            }
        </Row>
    </Container>
}

export default SingleBook
*/

import {Container, Card, Row, Col, Form} from 'react-bootstrap'
import fantasybooks from './Data/fantasy.json'
import './SingleBook.css'
import {Component} from 'react'

class SingleBook extends Component {

    state = {
        checkBook: true,
    }

    render() {

    return <Container>
        <Row>
            {
                fantasybooks.map( book=> (
                    <Col xs={12} sm={6} md={4} className="mb-2" key={book.asin}>
                    <Card id={book.asin} className="wholeCard">
                        <Card.Img variant="top" src={book.img} style={{height: "16rem" }} className="img-fluid" alt="bookimage"/>
                            <Card.Body >
                                <Card.Title id="bookTitle">{book.title}</Card.Title>
                                <Form>
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check 
                                    type="checkbox" 
                                    label="I have read this book"
                                    checked={this.state.checkBook}
                                    />
                                </Form.Group>
                                </Form>
                            </Card.Body>
                    </Card> 
                </Col>  
                ))
            }
        </Row>
    </Container>
}
}

export default SingleBook