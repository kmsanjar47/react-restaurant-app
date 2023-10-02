import React from "react";
import MenuItemCard from "../MenuItemCard";
import MenuItemInfoCard from "../MenuItemInfoCard";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, ModalBody, Button, ModalFooter } from "reactstrap";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    selectedItem: state.selectedItem,
    modalState: state.modalState,
  };
};

const Menu = ({ dispatch, dishes, comments, modalState, selectedItem }) => {
  document.title = "Menu";

  let toggleModal = () => {
    dispatch({
      type: "MODAL_TOGGLE",
      payload: { modalState: !modalState },
    });
  };

  let onItemSelect = (item) => {
    dispatch({
      type: "ITEM_SET",
      payload: { selectedItem: item },
    });
    toggleModal();
  };
  const menuItems = dishes.map((menu) => {
    return (
      <MenuItemCard
        key={menu.id}
        id={menu.id}
        imageUrl={menu.image}
        description={menu.description}
        label={menu.label}
        name={menu.name}
        item={menu}
        onClick={onItemSelect}
      />
    );
  });

  const filteredCommentsArray = comments.filter((comment) => {
    if (selectedItem != null && selectedItem.id == comment.dishId) {
      return comment;
    }
  });
  return (
    <div className="container">
      <div className="row">{menuItems}</div>
      <div>
        <Modal
          isOpen={modalState}
          toggle={toggleModal}
          centered={true}
          fullscreen={true}
        >
          <ModalBody>
            <MenuItemInfoCard
              selectedItem={selectedItem}
              comments={filteredCommentsArray}
            />
          </ModalBody>
          <ModalFooter>
            <Button color="success" onClick={toggleModal}>
              Add to cart
            </Button>
            <Button color="danger" onClick={toggleModal}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(Menu);
