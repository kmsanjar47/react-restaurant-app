import React from "react";
import { Form, FormGroup, Label, Button, Input } from "reactstrap";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    comments: state.comments,
    selectedItem: state.selectedItem,
  };
};
const CommentForm = ({ comments, selectedItem }) => {
  // dishId: 0,
  //         id: 0,
  //         rating: 5,
  //         comment: "Imagine all the eatables, living in conFusion!",
  //         author: "Shanto",
  //         date: "2018-10-16T17:57:28.556094Z"

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
          <Label for="rating">Rating</Label>
          <Input
            value={this.state.email}
            onChange={this.onChangeHandler}
            id="rating"
            name="rating"
            placeholder="Enter Rating(Out of 5)"
            type="text"
          />
        </FormGroup>

        <FormGroup>
          <Label for="comment">Text Area</Label>
          <Input
            id="comment"
            name="comment"
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
};

export default connect(mapStateToProps)(CommentForm);
