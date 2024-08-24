import { v4 as uuidv4 } from "uuid";
let initialState = {
  contactList: [],
  keyword: "",
};

function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "ADD_CONTACT":
      return {
        ...state,
        contactList: [
          ...state.contactList,
          {
            id: uuidv4(),
            name: payload.name,
            phoneNumber: payload.phoneNumber,
          },
        ],
      };
    case "SEARCH":
      return {
        ...state,
        keyword: payload.keyword,
      };
    case "DELETE_CONTACT":
      return {
        ...state,
        contactList: state.contactList.filter(
          (contact) => contact.id !== payload.id
        ),
      };
    default:
      return {
        ...state,
      };
  }
}
export default reducer;
