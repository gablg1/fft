import ramza from './ramza.png';
import { Stage, Layer, Rect, Text } from 'react-konva';
import './App.css';
import _ from 'lodash';

function App() {
  const [width, height, spaceBetween] = [50, 50, 10];

  const line = _.range(10);
  const cols = _.range(10);

  return (
    <div className="App">
      <header className="App-header">
        <img src={ramza} className="App-logo" alt="logo" />
        <p>
    Markin gosta de FFT
        </p>
        <Stage width={1000} height={1000}>

        <Layer>
          <Rect x={0} y={0} width={3} height={3} fill={'red'} />

          {cols.map(y =>
            line.map(x =>
              <Rect x={x * (width + spaceBetween)} y={y * (height + spaceBetween)} width={width} height={height} fill={'blue'} />
            )
          )}
          </Layer>
        </Stage>

      </header>
    </div>
  );
}

export default App;
