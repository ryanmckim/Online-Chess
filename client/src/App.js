import "./App.css";
import Header from "./components/Header";
import Chessboard from "./components/Chessboard";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

function App() {
    return (
        <div className="main-content">
            <div className="sidebar">
                <Sidebar />
            </div>
            <div className="app">
                <Header />
                <Chessboard />
                <Footer />
            </div>
        </div>
    );
}

export default App;
