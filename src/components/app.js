import React, {Component}  from 'react'

import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup'
import ListGroup from 'react-bootstrap/ListGroup'
import Row from 'react-bootstrap/Row'

export class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			userInput: "",
			list: []
		}
		console.log(props)
	}

	updateInput(value) {
		this.setState({
			userInput: value,
		})
	}
	addItem() {
		if (this.state.userInput !== '') {
			const userInput = {
				id: Math.random(),
				value: this.state.userInput
			};
			console.log(this.addItem);
			const list = [...this.state.list];
			list.push(userInput);

			this.setState({
				list,
				userInput: ""
			});
		}
	}

	deleteItem(key) {
		const list = [...this.state.list];
		const updateList = list.filter(item => item.id !== key);
		this.setState({
			list: updateList,
		});
		console.log(updateList);
	}
	render() {
		return (<Container>
			<Row style={{
				display: "flex",
				justifyContent: "content",
				alignItem: 'center',
				fontSize: '3rem',
				fontweight: 'bolder'
			}}>To Do List
			</Row>
			<hr />
			<Row>
				<Col md={{ span: 5, offset: 4 }}>
					<InputGroup className="mb-3">
						<FormControl
							placeholder="add item . . . "
							size="lg"
							value={this.state.userInput}
							onChange={item => this.updateInput(item.target.value)}
							aria-label="add something"
							aria-describedby="basic-addon2"
						/>
						<InputGroup>
							<Button
								variant="dark"
								size="lg"
								onClick={() => this.addItem()}
							>
								ADD
							</Button>
						</InputGroup>
					</InputGroup>
				</Col>
			</Row>
			<Row>
				<Col md={{ span: 5, offset: 4 }}>
					<ListGroup>
						{/* map over and print items */}
						{this.state.list.map(item => {
							return (
								<ListGroup.Item variant="dark" action
									onClick={() => this.deleteItem(item.id)}>
									{item.value}
								</ListGroup.Item>
							)
						})}
					</ListGroup>
				</Col>
			</Row>
		</Container>
		);
	}
}
