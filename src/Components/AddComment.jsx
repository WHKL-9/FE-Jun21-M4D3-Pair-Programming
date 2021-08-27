import {Component} from 'react'
import {Form, Button} from 'react-bootstrap'

class AddComment extends Component{
    state = {
        comment:{
        comment:"", //input for comment
        rate:1, //dropdown for rating - fix it for the user so they won't have a chance to make a mistake
        elementId: this.props.asin
        }
    }

    sendComment = async (e)=>{
        e.preventDefault()
        try {
            const response = await fetch('https://striveschool-api.herokuapp.com/api/comments/',{
            method: "POST",    
            body: JSON.stringify(this.state,),
            headers: {
                'Content-type' : 'application/json',
                Authorization:
                        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZjE4YzJkNTI2MjAwMTViNmRjOTIiLCJpYXQiOjE2Mjk5Nzk4NzEsImV4cCI6MTYzMTE4OTQ3MX0.toA8bdyZsBb5aPonu0nClzpLS6mWByQPNxBLp-1ApvM",
                }  
            })
            
            if(response.ok){
                alert("Comment was sent successfully")
            } else {
                alert("Something went wrong")
            }
        } catch (error) {
            console.log(error)
        }
    }

    render(){
        return (
            <Form onSubmit={this.sendComment}>
            {/* equivalent to <Form onSubmit={e => this.sendComment(e}> */}
            {/* each event will need a separate onchange  */}
            <Form.Group className="mb-3" >
                <Form.Control type="text" placeholder="Add Comment" className="bg-dark text-white"
                value={this.state.comment.comment}
                // onchange
                // 1.pass in the event
                // 2. set the state
                // 3. clone all state in the comment
                // 4. change only the object with user's input with event.target.value
                onChange = {e => this.setState({
                    ...this.state.comment,
                    comment: e.target.value
                })}/>
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Rating</Form.Label>
                <Form.Control as="select" value={this.state.comment.rate}
                //passed in the event on change and setState
                onChange = {e => this.setState({
                    ...this.state.comment,
                    rate: e.target.value
                })}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                </Form.Control>
            </Form.Group>


            <Button variant="primary" type="submit">
                Submit
            </Button>

            </Form>
        )
    }
}

export default AddComment;