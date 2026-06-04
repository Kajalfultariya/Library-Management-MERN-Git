import React from "react";

const Header =({setSidebarOpen,sidebarOpen,currentPage,studentInfo})=>{
    return(
        <header className="header">
          <div className="header-left">
            <button className="menu-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>
              ☰
            </button>
            <h1>{currentPage === 'dashboard' ? '📊 Dashboard' :
              currentPage === 'browse' ? '🔍 Browse Books' :
                currentPage === 'borrowed' ? '📖 My Borrowed Books' :
                  '👤 My Profile'}</h1>
          </div>
          <div className="header-right">
            <div className="user-info">
              <span className="user-name">{studentInfo.name}</span>
              <div className="user-avatar">👨‍🎓</div>
            </div>
          </div>
        </header>

    )
}

export default Header