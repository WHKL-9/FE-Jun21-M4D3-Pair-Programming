import { InputGroup, FormControl} from 'react-bootstrap'

const SetRating = ({onChange}) => (
    <InputGroup className="my-1">
      <FormControl as="textarea" aria-label="With textarea" placeholder="Rate this book(from 1-5)"
      onChange = {(e) => onChange(e.target.value)}/>
    </InputGroup>
)

export default SetRating
