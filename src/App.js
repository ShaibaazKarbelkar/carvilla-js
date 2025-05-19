import logo from './logo.svg';
import './App.css';
import Info from './components/Info.js';
import Header from './components/Header.js';
import Banner from './components/Banner.js';
import Featured from './components/Featured.js';
import Client from './components/Client.js';
import Footer from './components/Footer.js';

const banner={
    heading:"get your desired car in reasonable price",
    desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor<br /> incididunt ut labore etuolore magna aliqua.",
    css:{
            backgroundImage: "url(./assets/images/welcome-hero/welcome-banner.jpg)",
            backgroundSize: "cover",
            textAlign: "center",
            alignItems: "center",
            padding: "15% 0 30%",
            height: "641px",
            width: "100%",
            marginTop: "-72px",
    },
    btnText:"Contact US"
}

const info = [
    {
        imgPath: "./assets/images/car.png",
        imgAltTitle: "Largest Dealership of car",
        title: "Largest Dealership of car",
        desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit out den fugit sed quia",
        css: {
            backgroundColor: "#e3e3e3"
        }
    },
    {
        imgPath: "./assets/images/insurance.png",
        imgAltTitle: "Largest Dealership of car",
        title: "Largest Dealership of car",
        desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit out den fugit sed quia",
        css: {
            backgroundColor: "#00cc99"
        }
    },
    {
        imgPath: "./assets/images/repair.png",
        imgAltTitle: "Insurance Support",
        title: "Insurance Support",
        desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit out den fugit sed quia",
        css: {
            backgroundColor: "#00ffff"
        }
    }
]

const featured = {
    subHeading: "Checkout the Featured Cars",
    heading: "Featured Cars",
    cards: [
        {
            imgPath: "./assets/images/new-cars-model/ncm1.png",
            imgAltTitle: "Chevrolet Camaro WMV20",
            desc: "Model 2017 3100 MI 240HP<br />Automatic",
            heading: "Chevrolet Camaro WMV20",
            price: "$66,575",
            detailsDesc: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non."
        },
        {
            imgPath: "./assets/images/new-cars-model/ncm2.png",
            imgAltTitle: "BMW 6 Series",
            desc: "Model 2017 3100 MI 240HP<br />Automatic",
            heading: "BMW 6-Series Gran Coupe",
            price: "$89,395",
            detailsDesc: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non."
        },
        {
            imgPath: "./assets/images/new-cars-model/ncm3.png",
            imgAltTitle: "Ferrari",
            desc: "Model 2017 3100 MI 240HP<br />Automatic",
            heading: "Ferrari",
            price: "$99,500",
            detailsDesc: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non."
        },
        {
            imgPath: "./assets/images/new-cars-model/ncm3.png",
            imgAltTitle: "Ferrari",
            desc: "Model 2017 3100 MI 240HP<br />Automatic",
            heading: "Ferrari",
            price: "$99,500",
            detailsDesc: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non."
        }
    ]
}

const client = [
    {
        imgPath: "./assets/images/brand/br1.png",
        imgAltTitle: "BMW 6 SERIES"
    },
    {
        imgPath: "./assets/images/brand/br2.png",
        imgAltTitle: "BMW 6 SERIES"
    },
    {
        imgPath: "./assets/images/brand/br3.png",
        imgAltTitle: "BMW 6 SERIES"
    },
    {
        imgPath: "./assets/images/brand/br4.png",
        imgAltTitle: "BMW 6 SERIES"
    },
    {
        imgPath: "./assets/images/brand/br5.png",
        imgAltTitle: "BMW 6 SERIES"
    },
    {
        imgPath: "./assets/images/brand/br6.png",
        imgAltTitle: "BMW 6 SERIES"
    }
]

const footer = [
    {
        imgPath: "./assets/images/social/fb.png",
        altTitle: "facebook",
        link: "https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2F"
    },
    {
        imgPath: "./assets/images/social/ig.png",
        altTitle: "Instagram",
        link: "https://www.instagram.com/"
    },
    {
        imgPath: "./assets/images/social/lin.png",
        altTitle: "linkedin",
        link: "https://www.linkedin.com/login?fromSignIn=true&trk=guest_homepage-basic_nav-header-signin"
    },
    {
        imgPath: "./assets/images/social/pin.png",
        altTitle: "pinterest",
        link: "https://in.pinterest.com/"
    },
    {
        imgPath: "./assets/images/social/WA.png",
        altTitle: "whatsapp",
        link: "https://www.whatsapp.com/"
    }
]

function App() {
    return (
        <>
            <a className="floating-btn" href="">/\</a>

            {/* header start */}

            <Header />

            {/* header end */}
            <main>
                {/* banner start */}

                {
                        banner.length != 0 ?
                            <Banner banner={banner} />
                            :
                            <></>
                    }
                {/* <Banner /> */}

                {/* banner end */}

                <div className="custom-container">

                    {/* info Start */}
                    {
                        info.length != 0 ?
                            <Info info={info} />
                            :
                            <></>
                    }
                    {/* <Info info={info}/> */}

                    {/* info end */}

                    {/*  featured cars start  */}

                    {
                        featured.length != 0 ?
                            <Featured featured={featured} />
                            :
                            <></>
                    }
                    {/* <Featured /> */}

                    {/*  featured cars end */}

                    {/*  client start */}

                    {
                        client.length != 0 ?
                            <Client client={client} />
                            :
                            <></>
                    }
                    {/* <Client /> */}

                    {/*  client end */}
                </div>
            </main>
            {/* footer start*/}

            {
                footer.length != 0 ?
                    <Footer footer={footer} />
                    :
                    <></>
            }
            {/* <Footer /> */}

            {/* footer end */}
        </>
    );
}

export default App;
