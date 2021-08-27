import {
	Card,
	Form,
	Button,
	InputGroup,
	FormControl,
	ListGroup,
} from "react-bootstrap";
import "./SingleBook.css";
import CommentArea from "./CommentArea";
import { Component } from "react";
import SetComment from "./SetComment";
import SetRating from "./SetRating";
import AddComment from "./AddComment"

class SingleBook extends Component {
	state = {
		// checkBook: false,
		selected: false,
		comments: [],
		//declare comment as empty array in state
		info: {
			comment: "",
			rate: 1,
			elementId: "0316438960",
		},
	};

	onChange = (e) => {
		this.setState({
			info: {
				//cloning the current state of all properties in info
				...this.state.info,
				//replacing the ones in info with a change in event 
				[e.target.name]: e.target.value,
			},
		});
	};
	//fetch the comments in a function and call the function in componentdidmount later 
	//so that we don't have to refresg the page to see the most updated comment
	fetchComments = async () => {
		try {
			const response = await fetch(
				`https://striveschool-api.herokuapp.com/api/comments/` +
					this.props.book.asin,
				{
					headers: {
						Authorization:
							"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZjE4YzJkNTI2MjAwMTViNmRjOTIiLCJpYXQiOjE2Mjk5Nzk4NzEsImV4cCI6MTYzMTE4OTQ3MX0.toA8bdyZsBb5aPonu0nClzpLS6mWByQPNxBLp-1ApvM",
						"Content-Type": "application/json",
					},
				}
			);
			if (response.ok) {
				const comments = await response.json();
				this.setState({ comments: comments });
				console.log({ comments });
			}
		} catch (error) {
			alert("couldnt fetch comments!");
		}
	};
	handleSubmit = async (e) => {
		e.preventDefault();

		try {
			let response = await fetch(
				"https://striveschool-api.herokuapp.com/api/comments",
				{
					method: "POST",
					body: JSON.stringify({
						...this.state.info,
						elementId: this.props.book.asin,
						rate: parseInt(this.state.info.rate),
					}),
					headers: {
						Authorization:
							"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZjE4YzJkNTI2MjAwMTViNmRjOTIiLCJpYXQiOjE2Mjk5Nzk4NzEsImV4cCI6MTYzMTE4OTQ3MX0.toA8bdyZsBb5aPonu0nClzpLS6mWByQPNxBLp-1ApvM",
						"Content-Type": "application/json",
					},
				}
			);
			if (response.ok) {
				alert("Your Comment and Rating are added successfully");

				this.setState({
					comment: "",
					rate: "",
				});
				//passing fetch comment function as a prop 
				this.fetchComments();
			} else {
				alert("Your comment and rating was not added. Please try again");
			}
		} catch (error) {
			console.log(error);
		}
	};

	componentDidMount() {
		if (this.state.selected) {
			this.fetchComments();
		}
	}

	

	render() {
		return (
			<div>
				<Card
					key={this.props.book.asin}
					id={this.props.book.asin}
					className="SingleCard text-center mb-5"
					onClick={() => this.setState({ selected: !this.state.selected })}
					style={{ border: this.state.selected ? "3px solid blue" : "none" }}
				>
					<Card.Img
						variant="top"
						src={this.props.book.img}
						style={{ height: "16rem" }}
						className="img-fluid"
						alt="bookimage"
					/>
					<Card.Body>
						<Card.Title id="bookTitle">{this.props.book.title}</Card.Title>
					</Card.Body>
				</Card>

				{
					// {/* comment and rating section */}
					//     {/* only show comment and rating on select */}
					this.state.selected && (
						<div>
							{/* Stefano's method */}
							{/* we need to pass a prop named 'asin' in the asin to comment area  */}
							{/* taking the state in CommentArea.jsx and Addcomment.jsx*/}
							<CommentArea asin={this.props.book.asin}/>
							<AddComment asin={this.props.book.asin}/>

							<hr/>
							{/* my method with Ubeyt's code */}
							{/* taking the state in SingleBook.jsx */}
							<Form
								onSubmit={this.handleSubmit}
								className="CommentSection w-50 mx-auto"
							>
								<SetComment onChange={this.onChange} />
								<SetRating onChange={this.onChange} />
								<InputGroup className="my-1">
									<FormControl
										as="textarea"
										aria-label="With textarea"
										defaultValue={this.props.book.asin}
									/>
								</InputGroup>

								<Button className="mr-2 mb-2" variant="primary" type="submit">
									Add Comment
								</Button>
{/* 
								<Button className="mb-2" variant="success" type="button">
									Check out comments
								</Button> */}
							</Form>
							<ListGroup>
								{this.state.comments.map((comment) => (
									<ListGroup.Item key={comment._id}>
										{Array.from({ length: comment.rate }).map((x) => `⭐️`)}{" "}
										{comment.comment}
									</ListGroup.Item>
								))}
							</ListGroup>
						</div>
					)
				}
			</div>
		);
	}
}

export default SingleBook;
