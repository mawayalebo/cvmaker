const Header: React.FC = ()=>{
    return ( 
        <nav className="app-header-section">
            <div className="border-b border-b-solid border-b-gray-400 border-b-1 mx-2">
                <div className="p-5 max-w-4xl mx-auto">
                    <h1 className="app-title font-black text-4xl uppercase text-blue-300">cvmaker</h1>
                </div>
            </div>
        </nav>
     );
}

export default Header;