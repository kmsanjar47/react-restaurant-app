import React, { Component } from "react";
import { Form, FormGroup, Label, Button, Input } from "reactstrap";

export class Contact extends Component {
  constructor(props) {
    super(props);
    document.title = "Contact Us";
    this.state = {
      name: "",
      email: "",
      message: "",
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value,
    });
  };

  resetForm = () => {
    this.setState({
      name: "",
      email: "",
      message: "",
    });
  };
  onSubmitHandler = (e) => {
    console.log(this.state);
    this.resetForm();
    e.preventDefault();
  };
  render() {
    return (
      <div
        className="container"
        style={{
          padding: "24px 24px",
          textAlign: "start",
        }}
      >
        <Form>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input
              id="name"
              name="name"
              placeholder="Enter Name"
              type="text"
              value={this.state.name}
              onChange={this.onChangeHandler}
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input
              value={this.state.email}
              onChange={this.onChangeHandler}
              id="email"
              name="email"
              placeholder="Enter email"
              type="email"
            />
          </FormGroup>

          <FormGroup>
            <Label for="exampleText">Text Area</Label>
            <Input
              id="text"
              name="message"
              type="textarea"
              value={this.state.message}
              onChange={this.onChangeHandler}
            />
          </FormGroup>
          <Button
            color="success"
            onClick={(e) => {
              this.onSubmitHandler(e);
            }}
          >
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default Contact;
