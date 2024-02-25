const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
  const new_state = { ...state }
  switch (action.type) {
    case 'GOOD':
      new_state.good += 1
      break
    case 'OK':
      new_state.ok += 1
      break
    case 'BAD':
      new_state.bad += 1
      break
    case 'ZERO':
      new_state.good = 0
      new_state.ok = 0
      new_state.bad = 0
      break
    default: 
      break
  }
  return new_state
  
}

export default counterReducer
