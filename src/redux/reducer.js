import DISHES from "../data/dishes";
import COMMENTS from "../data/comments";

const initialState = {
  dishes: DISHES,
  comments: COMMENTS,
  selectedItem: null,
  modalState: false,
};

const Reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "MODAL_TOGGLE":
      return { ...state, ...payload };

    case "ITEM_SET":
      return { ...state, ...payload };

    default:
      return state;
  }
};

export default Reducer;
