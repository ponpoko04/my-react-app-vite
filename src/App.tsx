// @vitest-environment happy-dom
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// import { expect, it } from "vitest";
// import { fireEvent, render, screen } from '@testing-library/react';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

// Point1: Vitestをバンドルに含めないように、`import.meta.vitest`のifの中に記述する
if(import.meta.vitest) {
  const { it, expect } = import.meta.vitest;
  // Point2: テストでしか利用しないライブラリをバンドルに含めないように、`import.meta.vitest`のifの中でdynamic importする
  const { fireEvent, screen, render } = await import('@testing-library/react');

  it("ボタンをクリックするとcountが+1される", () => {
    render(<App />)
  
    fireEvent.click(screen.getByText("count is 0"))
  
    expect(screen.getByText("count is 1").innerText).toBe("count is 1")
  })
}
