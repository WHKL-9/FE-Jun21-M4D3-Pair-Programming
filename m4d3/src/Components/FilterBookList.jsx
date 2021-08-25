import {Form, Button} from 'react-bootstrap'

const FilterBook = () => ( <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Search</Form.Label>
    <Form.Control type="text" placeholder="Search for books" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
)

export default FilterBook