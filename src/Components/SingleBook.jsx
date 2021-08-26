import {Card, Form, Button, InputGroup, FormControl} from 'react-bootstrap'
import './SingleBook.css'
import {Component} from 'react'
import SetComment from './SetComment'
import SetRating from './SetRating'


class SingleBook extends Component {

    state = {
        
        // checkBook: false,
        selected: false,
        //declare comment as empty array in state
        info:{
        comment: "",
        rating: "",
        elementId:"0316438960"
        }
       
    }


   onChange = (comment, rating) =>{
     SetComment(this.comment)
     SetRating(this.rating)
   }

    SetComment(comment){
        this.setState(comment)
        console.log(comment)
    }

    SetRating(rating){
        this.setState(rating)
        console.log(rating)
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        console.log(this.state)

        try {
            let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/", {
                method: "POST",
                body: JSON.stringify(this.state.info),
                headers:{
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZjE4YzJkNTI2MjAwMTViNmRjOTIiLCJpYXQiOjE2Mjk5Nzk4NzEsImV4cCI6MTYzMTE4OTQ3MX0.toA8bdyZsBb5aPonu0nClzpLS6mWByQPNxBLp-1ApvM",
                    "Content-Type": "application/json",
                }
            })
            if (response.ok){
                alert("Your Comment and Rating are added successfully")

                this.setState({
                    comment: "",
                    rating: ""
                })
            }else{
                alert("Your comment and rating was not added. Please try again")
            }

        }
        catch(error){
            console.log(error)

        }
    }

    

    //fill the state
    // componentDidMount = async () => {

    //     try {
    //         let response = await fetch ("https://striveschool-api.herokuapp.com/api/comments/",{
    //         method:"POST", 
    //         headers:{
    //             "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZjE4YzJkNTI2MjAwMTViNmRjOTIiLCJpYXQiOjE2Mjk5Nzk4NzEsImV4cCI6MTYzMTE4OTQ3MX0.toA8bdyZsBb5aPonu0nClzpLS6mWByQPNxBLp-1ApvM",
    //             "Content-Type": "application/json",
    //         }
    //         })
    //         if(response.ok){
    //             let comment = await response.json()
    //             alert("Comment is successfully added")
    //         }else{
    //             alert("An error occured in the server. Comment is not added.")
    //         }
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    render() {

    return (
    
            <div>
                <Card key={this.props.book.asin} id={this.props.book.asin} className="SingleCard text-center mb-5"
                onClick={()=>this.setState({selected: !this.state.selected})}
                style={{border: this.state.selected? '3px solid blue' : 'none'}}>
                    <Card.Img variant="top" src={this.props.book.img} style={{height: "16rem" }} className="img-fluid" alt="bookimage"/>
                        <Card.Body >
                            <Card.Title id="bookTitle">{this.props.book.title}</Card.Title>
                           
                        </Card.Body>
                </Card>

                { 
                        // {/* comment and rating section */}
                        //     {/* only show comment and rating on select */}
                                this.state.selected &&
                                <div>
                                    <Form onSubmit = {this.handleSubmit} className="CommentSection w-50 mx-auto">
                                        <SetComment onChange={this.onChange}/>
                                        <SetRating onChange={this.onChange}/>
                                        <InputGroup className="my-1">
                                        <FormControl as="textarea" aria-label="With textarea" defaultValue={this.props.book.asin}/>
                                        </InputGroup>

                                        <Button className="mr-2 mb-2" variant="primary" type="submit">
                                            Add Comment
                                        </Button>

                                        <Button className="mb-2" variant="success" type="button">
                                            Check out comments
                                        </Button>
                                    </Form>
                                </div>
                            }
            </div>
            
       )

    

}
}

export default SingleBook