import HomePage from "./components/HomePage"
import { ThemeProvider } from "./components/Theme/ThemeContext"

const App = () => {
  return (
    <ThemeProvider>
    <HomePage/>
    </ThemeProvider>
  )
}

export default App