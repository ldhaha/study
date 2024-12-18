import Home from './pages/home';
import Profile from './pages/profile';
import { useState, useEffect } from 'react';
import { store } from './store';
import { addCountAction } from './store/actionCreator';
function App() {
  const [count, setCount] = useState(store.getState().count);
  useEffect(() => {
    console.log('更新了');
    store.subscribe(() => {
      setCount(store.getState().count);
    });
  }, []);

  const addCount = () => {
    store.dispatch(addCountAction(1));
  };
  return (
    <div className='App' style={{ display: 'flex' }}>
      <h2>{count}</h2>
      <div>
        <button onClick={() => addCount()}>主页增加count1</button>
      </div>
      <Home />
      <Profile />
    </div>
  );
}

export default App;
