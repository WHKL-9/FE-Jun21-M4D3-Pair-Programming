import { Container, Card, Row, Col, Button } from "react-bootstrap";
import fantasybooks from "./Data/fantasy.json";
import scifibooks from "./Data/scifi.json";
import horrorbooks from "./Data/horror.json";
import historybooks from "./Data/history.json";
import romancebooks from "./Data/romance.json";
import FilterBook from "./FilterBookList";

import { Component } from "react";
import "./SingleBook.css";
import SingleBook from "./SingleBook";

class BookList extends Component {
	state = {
		SelectedCategory: fantasybooks,
		//state of query is now an empty string
		query: "",
	};

	onChange = (query) => {
		//updating the query's state  based on user's input
		this.setState({ query });

		//map and return the results we want as an array
		if (query) {
			const filteredBooks = this.state.SelectedCategory.filter((book) => {
				//check if our book list contains user input [book title]
				//make sure to check both in lower case
				return book.title.toLowerCase().includes(query.toLowerCase());
			});
			//updating our state in SelectedCategory based on our filtered results
			this.setState({ SelectedCategory: filteredBooks });
		} else {
			this.setState({ SelectedCategory: fantasybooks });
		}
	};

	// mandatory method for every class
	render() {
		return (
			<Container className="mb-5">
				<h2>Latest Release </h2>
				<>
					<Button
						onClick={() =>
							this.setState({
								SelectedCategory: fantasybooks,
							})
						}
						variant="outline-primary"
					>
						Fantasy
					</Button>{" "}
					<Button
						onClick={() =>
							this.setState({
								SelectedCategory: historybooks,
							})
						}
						variant="outline-secondary"
					>
						History
					</Button>{" "}
					<Button
						onClick={() =>
							this.setState({
								SelectedCategory: scifibooks,
							})
						}
						variant="outline-success"
					>
						SciFi
					</Button>{" "}
					<Button
						onClick={() =>
							this.setState({
								SelectedCategory: romancebooks,
							})
						}
						variant="outline-warning"
					>
						Romance
					</Button>{" "}
					<Button
						onClick={() =>
							this.setState({
								SelectedCategory: horrorbooks,
							})
						}
						variant="outline-danger"
					>
						Horror
					</Button>{" "}
				</>

				<FilterBook onChange={this.onChange} />
				{this.state.query}
				<Row className="justify-content-center">
					{
						// map books based on the current state
						this.state.SelectedCategory.map((book) => (
							//a unique key is needed
							<Col xs={12} sm={6} md={4} className="mb-2" key={book.asin}>
								<SingleBook book={book} />
							</Col>
						))
					}
				</Row>
			</Container>
		);
	}
}

export default BookList;
