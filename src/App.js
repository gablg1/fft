import ramza from './ramza.png';
import { Stage, Layer, Rect } from 'react-konva';
import './App.css';
import _ from 'lodash';
import {URLImage} from './utils';
import {useEffect, useState} from 'react';


function App() {
  const [loading, setLoading] = useState(true);
  const [position, setPosition] = useState({x: 5, y: 5});


  const [width, height, spaceBetween] = [80, 80, 5];

  const [nLines, nCols] = [10, 10];
  const [line, cols] = [_.range(nLines), _.range(nCols)];

  const [horizontalOffset, verticalOffset] = [height + spaceBetween, width + spaceBetween];


  useEffect(() => {
    const checkPosition = (newPos, oldPos) => {
      if (newPos.x < 0 || newPos.x >= nCols || newPos.y < 0 || newPos.y >= nLines) {
        return oldPos;
      } else {
        return newPos;
      }
    }

    const handleKeyDown = (e) => {
      if (e.keyCode === 37) {
        setPosition(prevPosition =>
          checkPosition(_.extend({}, prevPosition, {x: prevPosition.x - 1}), prevPosition)
        );
      } else if (e.keyCode === 38) {
        setPosition(prevPosition =>
          checkPosition(_.extend({}, prevPosition, {y: prevPosition.y - 1}), prevPosition)
        );
      } else if (e.keyCode === 39) {
        setPosition(prevPosition =>
          checkPosition(_.extend({}, prevPosition, {x: prevPosition.x + 1}), prevPosition)
        );
      } else if (e.keyCode === 40) {
        setPosition(prevPosition =>
          checkPosition(_.extend({}, prevPosition, {y: prevPosition.y + 1}), prevPosition)
        );
      } else {
        return;
      }
      e.preventDefault();
    };

    if (loading) {
      document.addEventListener('keydown', handleKeyDown);
      setLoading(false);
    }
  }, [loading, nCols, nLines]);

  return (
    <div className="App">
      <header className="App-header">
        <p>FFT do Markin</p>
        <Stage width={horizontalOffset * nCols} height={verticalOffset * nLines}>

          <Layer onKeyPress={e => console.log(e)}>
            <Rect x={0} y={0} width={3} height={3} fill={'red'} />

            {cols.map(y =>
              line.map(x =>
                <Rect key={`${x},${y}`} stroke="blue" fill="#00969c"
                  x={x * horizontalOffset} y={y * verticalOffset} width={width} height={height} />
              )
            )}

            <URLImage src={ramza} x={position.x * horizontalOffset} y={position.y * verticalOffset} width={width} height={height} />
          </Layer>
        </Stage>

      </header>
    </div>
  );
}

export default App;


