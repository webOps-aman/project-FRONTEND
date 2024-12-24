
function App() {
  return (
    <>
      <section className='navbar-section'>
        <div className='container-fluid navbar-container'>
          <div className='row navbar-row'>
            <div className='col-md-12'>
{/* ----------navbar start here---------- */}
                <nav className="navbar navbar-expand-lg  fixed-top">
                    <div className="container">
                        <div className="offset-md-1">
                            <a className="navbar-brand" href="#">Brand Name</a>
                        </div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 offset-md-5">
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item me-2">
                                    <a className="nav-link" href="#">About Us</a>
                                </li>
                                <li className="nav-item me-2">
                                    <a className="nav-link" href="#">Services</a>
                                </li>
                                <li className="nav-item me-2">
                                    <a className="nav-link" href="#">Portfolio</a>
                                </li>
                                <li className="nav-item me-2">
                                    <a className="nav-link" href="#">Team</a>
                                </li>
                                <li className="nav-item me-2">
                                    <a className="nav-link" href="#">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
{/* ----------navbar end here---------- */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
