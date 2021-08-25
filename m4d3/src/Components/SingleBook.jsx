import {Container, Card, Row, Col} from 'react-bootstrap'
import fantasybooks from './Data/fantasy.json'
import './SingleBook.css'

const SingleBook =  () => (fantasybooks.map(book =>  {
    <Container>
            <Row className="justify-content-center">
                <Col xs={12} sm={6} md={4} className="mb-2" key={book.asin}>
                    <Card id={book.asin} className="wholeCard">
                        <Card.Img variant="top" src={book.img} style={{height: "16rem" }} className="img-fluid" alt="bookimage"/>
                            <Card.Body >
                                <Card.Title id="bookTitle">{book.title}</Card.Title>
                            </Card.Body>
                    </Card> 
                </Col>
            </Row>
    </Container>
}

)
)

export default SingleBook


