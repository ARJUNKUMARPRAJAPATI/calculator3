
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Wrapper from "./src/components/Wrapper";
import Screen from "./src/components/Screen";
import ButtonBox from './src/components/ButtonBox'
import Button from './src/components/Button'
import CalcProvider from "./src/context/CalcContext";

const btnValues = [
  ["❌", "➕➖", "%", "➗"],
  [7, 8, 9, "✖️"],
  [4, 5, 6, "➖"],
  [1, 2, 3, "➕"],
  [0, ".", "="],
];

function App() {
  return (
    <CalcProvider>
      <Wrapper>
        <Screen />
        <ButtonBox>
          {btnValues.flat().map((btn, i) => (
            <Button
              value={btn}
              key={i}
            />
          ))}
        </ButtonBox>
      </Wrapper>
    </CalcProvider>
  );
}

export default App;
