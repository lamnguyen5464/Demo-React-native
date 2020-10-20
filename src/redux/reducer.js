import produce from 'immer';

//reducer
export const reducer = (state = { value: 1 }, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case 'UP':
        draft = { value: state.value + 1 };
        return draft;
      case 'DOWN':
        draft = { value: state.value - 1 };
        return draft;
    }
  });
}