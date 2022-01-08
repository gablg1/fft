import ramza from './ramza.png';
import { Stage, Layer, Rect, Text } from 'react-konva';
import './App.css';
import _ from 'lodash';
import {URLImage} from './utils';

function App() {
  const [width, height, spaceBetween] = [80, 80, 10];

  const line = _.range(10);
  const cols = _.range(10);

  const [posX, posY] = [3, 3];
  const [horizontalOffset, verticalOffset] = [height + spaceBetween, width + spaceBetween];

  return (
    <div className="App">
      <header className="App-header">
        <p>FFT do Markin</p>
        <Stage width={1000} height={1000}>

          <Layer>
            <Rect x={0} y={0} width={3} height={3} fill={'red'} />

            {cols.map(y =>
              line.map(x =>
                <Rect x={x * horizontalOffset} y={y * verticalOffset} width={width} height={height} fill={'blue'} />
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


