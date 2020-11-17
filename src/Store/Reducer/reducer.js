const SET_LIVE_CHART_DATA = 'SET_LIVE_CHART_DATA'
const RESET_DATA = 'RESET_DATA'

export const setLiveChartData = (payload) => ({
  type: SET_LIVE_CHART_DATA,
  payload,
})

export const resetLiveChartData = (payload) => ({
  type: RESET_DATA
})

const initialState = {
  liveChart: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LIVE_CHART_DATA:
      return { ...state, liveChart: [ ...state.liveChart, action.payload] }
    case RESET_DATA:
      return initialState
    default:
      return { ...state }
  }
}

export default reducer