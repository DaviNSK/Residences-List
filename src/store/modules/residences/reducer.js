export default function residences(state = [], action) {
  switch (action.type) {
    case 'SET_RESIDENCES':
      return [...action.residences];

    default:
      return state;
  }
}
