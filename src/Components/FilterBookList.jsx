import { Form } from "react-bootstrap";

const FilterBook = ({ onChange }) => (
	<Form className = "my-2">
		<Form.Group controlId="formBasicEmail">
			{/* <Form.Label>Search</Form.Label> */}
			<Form.Control
				onChange={(e) => onChange(e.target.value)}
				type="text"
				placeholder="Search for books"
			/>
		</Form.Group>
	</Form>
);

export default FilterBook;
