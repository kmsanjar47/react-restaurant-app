import React, { useState } from "react";
import MenuItemCard from "../MenuItemCard";
import DISHES from "../../dishes";
import MenuItemInfoCard from "../MenuItemInfoCard";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, ModalBody, Button, ModalFooter } from "reactstrap";
const Menu = () => {
  const [menuData] = useState(DISHES);
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalState, setModalState] = useState(false);

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
  return (
    <div className="container">
      <div className="row">{menuItems}</div>
      <div>
        <Modal
          isOpen={modalState}
          toggle={toggleModal}
          centered={true}
          fullscreen={"xl"}
        >
          <ModalBody>
            <MenuItemInfoCard selectedItem={selectedItem} />
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
