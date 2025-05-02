import bryxLogo from '/bryx-ltd.png'
import './App.css'

function App() {

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={bryxLogo} className="logo" alt="Bryx logo"/>
        </a>
      </div>
      <h1>Log in to Bryx</h1>
      <form>
        <input type="email" placeholder="email"/>
        <input type="password" placeholder="password"/>
        <button type="submit">Submit</button>
        <p>
          Don't have an account? <a href="/register">Register here</a>
        </p>
      </form>
    </>
  )
}

export default App
