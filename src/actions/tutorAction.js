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
} from "./types";

export const getTutors = () => {
  return {
    type: GET_TUTORS,
  };
};
export const deleteTutor = (id) => {
  return {
    type: DELETE_TUTOR,
    payload: id,
  };
};
export const addTutor = (tutor) => {
  return {
    type: ADD_TUTOR,
    payload: tutor,
  };
};
export const toggleModal = () => {
  return {
    type: TOGGLE_MODAL,
  };
};
export const getTutor = (id) => {
  return {
    type: GET_TUTOR,
    payload: id,
  };
};
export const updateTutor = (tutor) => {
  return {
    type: UPDATE_TUTOR,
    payload: tutor,
  };
};
export const clearTutor = () => {
  return {
    type: CLEAR_TUTOR,
  };
};
export const getFilteredTutors = () => {
  return {
    type: GET_FILTERED_TUTORS,
  };
};
export const updateFilterCriteria = (criteria) => {
  return {
    type: UPDATE_FILTER_CRITERIA,
    payload: criteria,
  };
};
export const updateFilteredTutors = (filteredTutors) => {
  return {
    type: UPDATE_FILTERED_TUTORS,
    payload: filteredTutors,
  };
};
export const refreshFilteredTutors = () => {
  return {
    type: REFRESH_FILTERED_TUTORS
  }
}
export const addFilteredTutor = (filteredTutor) => {
  return {
    type: ADD_FILTERED_TUTOR,
    payload: filteredTutor
  }
}
