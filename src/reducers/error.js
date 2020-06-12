import { GET_ERRORS } from "../action/types";
import Swal from 'sweetalert2'

const initialState = {};
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return action.payload;
      Swal.fire({
        icon: `error`,
        title: `Sorry`,
        text: `Something Went Wrong!`
      })

    default:
      return state;
  }
}