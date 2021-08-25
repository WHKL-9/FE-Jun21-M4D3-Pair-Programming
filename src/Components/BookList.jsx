import { Container, Card, Row, Col, Button } from "react-bootstrap";
import fantasybooks from "./Data/fantasy.json";
import scifibooks from "./Data/scifi.json";
import horrorbooks from "./Data/horror.json";
import historybooks from "./Data/history.json";
import romancebooks from "./Data/romance.json";
import FilterBook from "./FilterBookList";

import { Component } from "react";
import "./SingleBook.css";

class BookList extends Component {
	state = {
		SelectedCategory: fantasybooks,
		query: "",
	};
	onChange = (query) => {
		this.setState({ query });

		if (query) {
			const filtered = this.state.SelectedCategory.filter((book) => {
				return book.title.toLowerCase().includes(query.toLowerCase());
			});
			this.setState({ SelectedCategory: filtered });
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
								<Card id={book.asin} className="wholeCard">
									<Card.Img
										variant="top"
										src={book.img}
										style={{ height: "16rem" }}
										className="img-fluid"
										alt="bookimage"
									/>
									<Card.Body>
										<Card.Title id="bookTitle">{book.title}</Card.Title>
									</Card.Body>
								</Card>
							</Col>
						))
					}
				</Row>
			</Container>
		);
	}
}

export default BookList;
