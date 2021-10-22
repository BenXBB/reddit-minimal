import "./Header.css"

function Header() {
    return (
        <div className="header">
            <img alt="reddit icon" src="https://cdn-icons-png.flaticon.com/512/52/52053.png" />
            REDDIT<span>Minimal</span>
            <form>
                <input id="searchField" type="text" placeholder="Search Posts" />
                <button type="button">
                    <img id="searchButton" alt="search button" src="https://cdn-icons-png.flaticon.com/512/622/622669.png" />
                </button>
            </form>
        </div>
    )
}

export default Header;