import { data } from "../data";
import * as _ from 'lodash'
import {
  GET_TUTORS,
  ADD_TUTOR,
  DELETE_TUTOR,
  TOGGLE_MODAL,
  GET_TUTOR,
  UPDATE_TUTOR,
  CLEAR_TUTOR,
  GET_FILTERED_TUTORS,
  UPDATE_FILTER_CRITERIA,
  UPDATE_FILTERED_TUTORS,
  REFRESH_FILTERED_TUTORS,
  ADD_FILTERED_TUTOR
} from "../actions/types";

let initialState = {
  tutors: data,
  tutor: {},
  isModalOpen: false,
  filterCriteria: {},
};

initialState['filteredTutors'] = initialState.tutors


export default function (state = initialState, action) {
  switch (action.type) {
    case GET_TUTORS:
      return {
        ...state,
      };
    case DELETE_TUTOR:
      return {
        ...state,
        tutors: state.tutors.filter((tutor) => tutor._id != action.payload),
      };
    case ADD_TUTOR:
      return {
        ...state,
        tutors: [action.payload, ...state.tutors],
      };
    case TOGGLE_MODAL:
      return {
        ...state,
        isModalOpen: !state.isModalOpen,
      };
    case GET_TUTOR:
      return {
        ...state,
        tutor: state.tutors.filter((tutor) => tutor._id === action.payload)[0],
      };
    case UPDATE_TUTOR:
      return {
        ...state,
        tutors: state.tutors.map((tutor) =>
          tutor._id === action.payload._id ? (tutor = action.payload) : tutor
        ),
      };
    case CLEAR_TUTOR:
      return {
        ...state,
        tutor: {}
      }
    case GET_FILTERED_TUTORS:
      return {
        ...state,
      }
    case UPDATE_FILTER_CRITERIA:
      return {
        ...state,
        filterCriteria: {...state.filterCriteria, ...action.payload}
      }
    case UPDATE_FILTERED_TUTORS:
      return {
        ...state,
        filteredTutors: action.payload
      }
    case REFRESH_FILTERED_TUTORS: 
      return {
        ...state,
        filteredTutors: _.intersectionBy(state.tutors, state.filteredTutors, "_id")
      }
    case ADD_FILTERED_TUTOR:
      return {
        ...state,
        filteredTutors: [action.payload, ...state.filteredTutors]
      }
    default:
      return state;
  }
}
