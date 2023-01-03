import "./Sidebar.css";

const Sidebar = () => {
    return (
        <nav className="sidebar">
            <section className="buttons sidebar-item">
                <h1 className="sidebar-header">Home</h1>
                <h1 className="sidebar-header">Login</h1>
            </section>
            <section className="account sidebar-item">
                <h1 className="sidebar-header">EdgyCedgie</h1>
                <h1 className="sidebar-header">Wins: 420</h1>
                <h1 className="sidebar-header">Losses: 0</h1>
            </section>
        </nav>
    );
};

export default Sidebar;
