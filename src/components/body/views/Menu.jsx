import React, { useState } from "react";
import MenuItemCard from "../MenuItemCard";
import DISHES from "../../../data/dishes";
import MenuItemInfoCard from "../MenuItemInfoCard";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, ModalBody, Button, ModalFooter } from "reactstrap";
import COMMENTS from "../../../data/comments";
const Menu = () => {
  document.title = "Menu";
  const [menuData] = useState(DISHES);
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalState, setModalState] = useState(false);
  const [commentsData] = useState(COMMENTS);

  let toggleModal = () => {
    setModalState(!modalState);
  };

  let onItemSelect = (item) => {
    setSelectedItem(item);
    toggleModal();
  };
  const menuItems = menuData.map((menu) => {
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

  const filteredCommentsArray = commentsData.filter((comment) => {
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

export default Menu;
