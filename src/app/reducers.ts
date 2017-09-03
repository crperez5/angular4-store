import { ActionTypes } from "./actions";

export const clock = (
  state = new Date(),
  action = { type: ActionTypes.SECOND, payload: 1 }
) => {
  let returnedDate;
  switch (action.type) {
    case ActionTypes.SECOND:
      returnedDate = new Date(state);
      returnedDate.setSeconds(state.getSeconds() + action.payload);
      break;
    case ActionTypes.HOUR:
      returnedDate = new Date(state);
      returnedDate.setHours(state.getHours() + action.payload);
      break;
    default:
      returnedDate = state;
  }

  return returnedDate;
};

const defaultPeople = [
  { name: "Sara", time: clock() },
  { name: "John", time: clock() },
  { name: "Nancy", time: clock() },
  { name: "Trace", time: clock() }
];
export const people = (state = defaultPeople, action) => {
  let result = defaultPeople;

  switch (action.type) {
    case ActionTypes.PERSON_RESET:
      return state.map(p => {
        if (p.name === action.payload.name) {
          return {
            name: action.payload.name,
            time: action.payload.time
          };
        }
        return p;
      });
    case ActionTypes.PERSON:
      return state.map(p => {
        if (p === action.payload) {
          return {
            name: p.name,
            time: clock(p.time, { type: ActionTypes.HOUR, payload: 5 })
          };
        }
        return p;
      });
    default:
      result = state;
  }

  return result;
};
