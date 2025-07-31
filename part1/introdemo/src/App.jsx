import { useState } from 'react';


const Display = ({ counter }) => <div>{counter}</div>

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const App = () => {
  const [clicks, setClicks] = useState({
    left: 0, right: 0
  });
  const [allClicks, setAll] = useState([]);
  const [total, setTotal] = useState(0);

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'));
    const updatedLeft = clicks.left + 1;

    setClicks({ ...clicks, left: updatedLeft });
    setTotal(updatedLeft + clicks.right);
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'));
    const updatedRight = clicks.right + 1;

    setClicks({ ...clicks, right: updatedRight });
    setTotal(clicks.left + updatedRight);
  }

  return (
    <div>
      {clicks.left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {clicks.right}
      <p>{allClicks.join(' ')}</p>
      <p>{total}</p>
    </div>
  )
}

export default App;