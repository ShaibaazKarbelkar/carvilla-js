function Footer({footer}) {

    // const footer = [
    //     {
    //         imgPath: "./assets/images/social/fb.png",
    //         altTitle: "facebook",
    //         link: "https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2F"
    //     },
    //     {
    //         imgPath: "./assets/images/social/ig.png",
    //         altTitle: "Instagram",
    //         link: "https://www.instagram.com/"
    //     },
    //     {
    //         imgPath: "./assets/images/social/lin.png",
    //         altTitle: "linkedin",
    //         link: "https://www.linkedin.com/login?fromSignIn=true&trk=guest_homepage-basic_nav-header-signin"
    //     },
    //     {
    //         imgPath: "./assets/images/social/pin.png",
    //         altTitle: "pinterest",
    //         link: "https://in.pinterest.com/"
    //     },
    //     {
    //         imgPath: "./assets/images/social/WA.png",
    //         altTitle: "whatsapp",
    //         link: "https://www.whatsapp.com/"
    //     }
    // ]

    return (
        <footer>
            <div className="custom-container">
                <div className="row">
                    <div className="col-md-6">
                        <p className="footer-p">&copy; Copyright Designed And Developed By HardReload</p>
                    </div>
                    <div className="col-md-6">
                        <div className="footer-icons">
                            {
                                footer.map((f, index) => {
                                    return (
                                        <a href={f.link} target="_blank" key={index}> 
                                            <img src={f.imgPath} alt={f.altTitle} title={f.altTitle} />
                                        </a>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;