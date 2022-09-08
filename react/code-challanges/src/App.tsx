// DEPENDENCY
import { Link, Outlet } from 'react-router-dom'

function App() {

  return (
    <div className="App">

      <header className="App-hader">
        <h1>Code Challanges</h1>

        <nav className="App-nav">
          <Link to="/color-renderer">Color Renderer</Link>
        </nav>

      </header>

      <Outlet />
    </div>
  )
}

export default App
