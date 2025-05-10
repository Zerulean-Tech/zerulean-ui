import './App.scss'
import logo from '/logo_plain-nobg.png'

const App = () => {

  return (
    <>
      <div>
        <a href="https://www.zerulean.ph" target="_blank">
          <img src={logo} className="logo" alt="Zerulean logo" />
        </a>
      </div>
      <h1>Zerulean-UI</h1>
      <div className="card">
        <p>
          Execute <code>npm run storybook</code> to start the Storybook
          development server.
        </p>
      </div>
    </>
  )
}

export default App
