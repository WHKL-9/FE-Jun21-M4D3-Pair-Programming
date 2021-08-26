import { FormControl, InputGroup } from "react-bootstrap";

const SetComment = ({ onChange }) => (
	<InputGroup>
		<FormControl
			as="textarea"
			name="comment"
			aria-label="With textarea"
			placeholder="What do you think about this book?"
			onChange={onChange}
		/>
	</InputGroup>
);

export default SetComment;
