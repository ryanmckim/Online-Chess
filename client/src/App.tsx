import React from "react";
import "./App.css";
import Header from "./components/Header";
import Chessboard from "./components/Chessboard";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

function App() {
    return (
        <div className="main-content">
            <Sidebar />
            <main className="app">
                <Header />
                <Chessboard />
                <Footer />
            </main>
        </div>
    );
}

export default App;
