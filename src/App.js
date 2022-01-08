import ramza from './ramza.png';
import { Stage, Layer, Rect, Text } from 'react-konva';
import './App.css';
import _ from 'lodash';
import {URLImage} from './utils';

function App() {
  const [width, height, spaceBetween] = [80, 80, 5];

  const [nLines, nCols] = [10, 10];
  const [line, cols] = [_.range(nLines), _.range(nCols)];

  const [posX, posY] = [3, 3];
  const [horizontalOffset, verticalOffset] = [height + spaceBetween, width + spaceBetween];

  return (
    <div className="App">
      <header className="App-header">
        <p>FFT do Markin</p>
        <Stage width={horizontalOffset * nCols} height={verticalOffset * nLines}>

          <Layer>
            <Rect x={0} y={0} width={3} height={3} fill={'red'} />

            {cols.map(y =>
              line.map(x =>
                <Rect key={`${x},${y}`} stroke="blue" fill="#00969c"
                  x={x * horizontalOffset} y={y * verticalOffset} width={width} height={height} />
              )
            )}

            <URLImage src={ramza} x={posX * horizontalOffset} y={posY * verticalOffset} width={width} height={height} />
          </Layer>
        </Stage>

      </header>
    </div>
  );
}

export default App;


