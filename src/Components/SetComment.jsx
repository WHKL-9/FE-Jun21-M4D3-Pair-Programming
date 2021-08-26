import { InputGroup, FormControl} from 'react-bootstrap'


 const SetComment= ({onChange}) => (
    <InputGroup >
        <FormControl as="textarea" aria-label="With textarea" placeholder="What do you think about this book?"
        onChange = {(e) => onChange(e.target.value)}/>
    </InputGroup>
   

)


export default SetComment
