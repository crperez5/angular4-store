export const ActionTypes = {
  SECOND: "SECOND",
  HOUR: "HOUR",
  PERSON: "PERSON",
  PERSON_RESET: "PERSON_RESET"
};

export const SecondIncreased = { type: ActionTypes.SECOND, payload: 1 };
export const HourIncreased = { type: ActionTypes.HOUR, payload: 1 };
export const PersonIncreased = { type: ActionTypes.PERSON, payload: "" };
export const PersonReset = { type: ActionTypes.PERSON_RESET, payload: "" };
