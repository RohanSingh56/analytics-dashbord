import './App.css'

type Page = 'overview' | 'transactions'


function App() {

  return (
    <div className="dashboard-shell" id="overview">
      <div className="dashboard-main">
        <header className="topbar">
          <div className="breadcrumb">
            <span>Workspace</span>
            <span className="breadcrumb-divider" aria-hidden="true">/</span>
          </div>
          <div className="topbar-profile" aria-label="Signed in as Jordan Davis">
            <span className="profile-name">Jordan Davis</span>
            <span className="profile-avatar" aria-hidden="true">JD</span>
          </div>
        </header>
        
      </div>
    </div>
  )
}

export default App
