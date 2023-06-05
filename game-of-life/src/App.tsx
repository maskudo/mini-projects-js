/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useCallback, useRef, useState } from 'react';

function getEmptyGrid(size: number): number[][] {
  const res = [];
  for (let i = 0; i < size; i += 1) {
    const inner = [];
    for (let j = 0; j < size; j += 1) {
      inner.push(0);
    }
    res.push(inner);
  }
  return res;
}
const neighbours = [
  [0, 1],
  [0, -1],
  [1, 0],
  [1, 1],
  [1, -1],
  [-1, 1],
  [-1, 0],
  [-1, -1],
];

const gridSize = 50;
function App() {
  const [isRunning, setIsRunning] = useState(false);
  const [grid, setGrid] = useState(getEmptyGrid(gridSize));
  const runningRef = useRef(isRunning);
  runningRef.current = isRunning;

  const runSimulation = useCallback(() => {
    if (!runningRef.current) {
      return;
    }
    setGrid((g) => {
      const gridCopy = JSON.parse(JSON.stringify(g));
      for (let i = 0; i < gridSize; i += 1) {
        for (let j = 0; j < gridSize; j += 1) {
          let aliveNeighbours = 0;
          neighbours.forEach(([x, y]) => {
            const newI = i + x;
            const newJ = j + y;
            if (newI >= 0 && newI < gridSize && newJ >= 0 && newJ < gridSize) {
              aliveNeighbours += g[newI][newJ];
            }
          });
          if (aliveNeighbours < 2 || aliveNeighbours > 3) {
            gridCopy[i][j] = 0;
          } else if (gridCopy[i][j] === 0 && aliveNeighbours === 3) {
            gridCopy[i][j] = 1;
          }
        }
      }
      return gridCopy;
    });
    setTimeout(runSimulation, 1000);
  }, []);
  return (
    <div className="container">
      <button
        type="button"
        onClick={() => {
          setIsRunning(!isRunning);
          if (!isRunning) {
            runningRef.current = true;
            runSimulation();
          }
        }}
      >
        {isRunning ? 'Stop' : 'Start'}
      </button>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${gridSize}, 20px)`,
          border: 'solid black 1px',
          margin: '1% 20px',
        }}
      >
        {grid.map((row, i) =>
          row.map((col, j) => (
            <div
              onClick={() => {
                const newGrid = JSON.parse(JSON.stringify(grid));
                newGrid[i][j] = grid[i][j] ? 0 : 1;
                setGrid(newGrid);
              }}
              className="col"
              key={`key${i}-${j}`}
              style={{
                width: 20,
                border: 'solid black 1px',
                height: 20,
                backgroundColor: grid[i][j] ? 'red' : undefined,
              }}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default App;
