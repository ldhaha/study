import React from 'react';
import { addCountAction } from '../store/actionCreator';
import { store } from '../store';
export default function home() {
  return (
    <div>
      <button onClick={() => store.dispatch(addCountAction(-1))}>
        home减1
      </button>
    </div>
  );
}
