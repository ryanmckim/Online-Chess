const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="buttons sidebar-item">
                <h1 className="sidebar-header">Home</h1>
                <h1 className="sidebar-header">Login</h1>
            </div>
            <div className="account sidebar-item">
                <h1 className="sidebar-header">EdgyCedgie</h1>
                <h1 className="sidebar-header">Wins: 420</h1>
                <h1 className="sidebar-header">Losses: 0</h1>
            </div>
        </div>
    );
};

export default Sidebar;
