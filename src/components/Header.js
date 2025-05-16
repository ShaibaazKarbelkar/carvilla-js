function Header(){
    return(
        <header>
        <div className="custom-container">
            <div className="row">
                <div className="col-md-5">
                    <div className="logo">
                        <h3>CARVILLA</h3>
                    </div>
                </div>
            <div className="col-md-7 center">
                <nav>
                    <a href="/">Home</a>
                    <a href="#">Service</a>
                    <a href="#">Featured Cars</a>
                    <a href="#">Brands</a>
                    <a href="#">Contact</a>
                </nav>
            </div>
            </div>
        </div>
    </header>
    );
}

export default Header;