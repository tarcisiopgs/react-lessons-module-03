/**
 *
 * @type {{ADD_SUCCESS: string, ADD_FAILURE: string, ADD_REQUEST: string}}
 */
export const Types = {
  ADD_REQUEST: "favorites/ADD_REQUEST",
  ADD_SUCCESS: "favorites/ADD_SUCCESS",
  ADD_FAILURE: "favorites/ADD_FAILURE"
};

/**
 * Initial state
 * @type {{data: Array, loading: boolean, error: null}}
 */
const INITIAL_STATE = {
  loading: false,
  data: [],
  error: null
};

/**
 * Reducer
 * @param state
 * @param action
 * @returns {({data: Array, loading: boolean, error: null}&{data: *[], loading: boolean, error: null})|({data: Array, loading: boolean, error: null}&{loading: boolean})|({data: Array, loading: boolean, error: null}&{error: *, loading: boolean})|{data: Array, loading: boolean, error: null}}
 */
export default function favorites(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return {
        ...state,
        loading: true
      };
    case Types.ADD_SUCCESS:
      return {
        ...state,
        data: [...state.data, action.payload.data],
        loading: false,
        error: null
      };
    case Types.ADD_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false
      };
    default:
      return state;
  }
}

/**
 * Actions
 * @type {{addFavoriteRequest: (function(*): {payload: {repository: *}, type: string}), addFavoriteSuccess: (function(*): {payload: {data: *}, type: string}), addFavoriteFailure: (function(*): {payload: {error: *}, type: string})}}
 */
export const Creators = {
  addFavoriteRequest: repository => ({
    type: Types.ADD_REQUEST,
    payload: {
      repository
    }
  }),
  addFavoriteSuccess: data => ({
    type: Types.ADD_SUCCESS,
    payload: {
      data
    }
  }),
  addFavoriteFailure: error => ({
    type: Types.ADD_FAILURE,
    payload: {
      error
    }
  })
};
