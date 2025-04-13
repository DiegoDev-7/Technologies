import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"
import Main from "./02Main"

const Root = () => (
    <BrowserRouter>
        <App />
    </BrowserRouter>
)


//1.
    /* useNavigate */
const App = () => {
    const navigate = useNavigate()

    const goToEstilosCondicionales = () => {
        console.log("About to navigate away. Time for some last words!")
        navigate("/about")
    }

    const GoToHome = () => {
        console.log("Welcome to the home")
        navigate("/")
    }

    return (
        <Routes>
            <Route path="/" element={<Home EstilosCondicionales={goToEstilosCondicionales} />} />
            <Route path="/about" element={<About GoHome={GoToHome} />} />
            <Route path="/Main" element={<Main />} />
        </Routes>
    )
}

//2.
const Home = ({ EstilosCondicionales }) => (
    <>
        <h1>Home, sweet home!</h1>
        <button onClick={EstilosCondicionales}>Navigate</button>
    </>
)

//3.
const About = ({ GoHome }) => {
    const location = useNavigate()
    return (
        <>
            <h1>About Page</h1>
            <button onClick={GoHome}>Navigate</button>
            <button onClick={() => location("/Main")}>Main</button>
        </>
    )
}

export default Root
