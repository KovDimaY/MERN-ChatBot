import { fromJS } from 'immutable';

const initialState = fromJS({
  discovered: true,
  name: true,
  position: true,
  location: true,
  contactInfo: true,
  age: true,
  nationality: true,
  aboutMe: true,
  languages: true,
  hobbies: {
    discovered: true,
    programming: true,
    sports: true,
    puzzles: true,
    numismatics: true,
    photography: true,
  },
});

export default (state = initialState, action) => {
  console.log("HomePage reducer: ", state, action);
  switch (action.type) {
    default:
      return state;
  }
};
