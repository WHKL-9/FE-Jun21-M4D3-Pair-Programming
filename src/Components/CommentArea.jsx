import {Component} from 'react'
import CommentList from './CommentList'

class CommentArea extends Component {

    state = {
        comments: [] // comments will go here
    }

    //fetch will happen in ComponentDidMount
    componentDidMount= async()=> {
        try {
            const response = await fetch('https://striveschool-api.herokuapp.com/api/comments/' + this.props.asin,{
            method: "GET",    
            headers: {
                    Authorization:
                        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZjE4YzJkNTI2MjAwMTViNmRjOTIiLCJpYXQiOjE2Mjk5Nzk4NzEsImV4cCI6MTYzMTE4OTQ3MX0.toA8bdyZsBb5aPonu0nClzpLS6mWByQPNxBLp-1ApvM",
                }  
            })
            
            if(response.ok){
                const comments = await response.json()
                  //and remember to setState for the comment
                this.setState({comments})
                // alternatively this.setState({comments:comments})
            } else {
                alert("Cannot get comment. Our bad! ")
            }
        } catch (error) {
            console.log(error)
        }
    }
    render(){
        return (
            <div>
                {/* CommentList will receive an array of comments */}
                {/* now we passed in the latest comments in our state here to comment list */}
                <CommentList commentsToShow={this.state.comments}/>
            </div>
        )
    }
}

export default CommentArea