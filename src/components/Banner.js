import { useState } from "react";

function Banner({banner}) {

    // const banner={
    //     heading:"get your desired car in reasonable price",
    //     desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor<br /> incididunt ut labore etuolore magna aliqua.",
    //     css:{
    //             backgroundImage: "url(./assets/images/welcome-hero/welcome-banner.jpg)",
    //             backgroundSize: "cover",
    //             textAlign: "center",
    //             alignItems: "center",
    //             padding: "15% 0 30%",
    //             height: "641px",
    //             width: "100%",
    //             marginTop: "-72px",
    //     },
    //     btnText:"Contact US"                
    // }

    // const heading = get your desired car in reasonable price
    const [ heading, setHeading ] =useState("get your desired car in reasonable price")

    const [ show, setShow] =useState(true)

    // to change the value of heading
    const changeHeading = () => {
        setHeading("New Value");
        // setShow(!show)
        if( show == true){
            setShow(false)
        }else{
            setShow(true)
        }
    }

    return(
        <section className="banner-section">
            <div className="banner" style={banner.css}>
                <h1>{banner.heading}</h1>
                {
                    show == true ?
                        <p dangerouslySetInnerHTML={{__html: banner.desc}}></p>
                    :
                    <></>
                }
                <button onClick={changeHeading}>{banner.btnText}</button>
                <h2 style={{color: "white"}}>{heading}</h2>
            </div>
        </section>
    );
}

export default Banner;