import { FormControl, InputGroup } from "react-bootstrap";

const SetRating = ({ onChange }) => (
	<InputGroup className="my-1">
		<FormControl
			as="select"
			name="rate"
			placeholder="Rate this book!"
			onChange={onChange}
		>
			<option value={1}>1</option>
			<option value={2}>2</option>
			<option value={3}>3</option>
			<option value={4}>4</option>
			<option value={5}>5</option>
		</FormControl>
	</InputGroup>
);

export default SetRating;
