import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCount, decreaseCount } from './redux/actions/counter-actions';


function App() {

  const count = useSelector(state => state.myCounterReducer.count);
  const dispatch = useDispatch();

  const handleIncreaseCount = () =>{
    dispatch(increaseCount())
  }
  const handleDecreaseCount = () =>{
    dispatch(decreaseCount())
  }

  return (
    <div className="App">
      <div>Count: {count}</div>
      <button onClick={handleIncreaseCount}>increment</button>
      <button onClick={handleDecreaseCount}>decrease</button>
    </div>
  );
}

export default App;
