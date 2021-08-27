// just for receiving and displaying comment
import {ListGroup} from 'react-bootstrap'
import SingleComment from './SingleComment'

//destructure the parameter we passed in from this.state.comments in CommentArea
const CommentList = ({commentsToShow}) =>
(
    <ListGroup>
        {commentsToShow.map(comment =>(
            //we are creating a prop name 'comment' which value will be the comment we are mapping
            <SingleComment comment={comment} key={comment._id}/>
        ))}
    
    </ListGroup>
    )


export default CommentList
