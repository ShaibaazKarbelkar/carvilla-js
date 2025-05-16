function Featured({featured}) {

    // const featured = {
    //     subHeading: "Checkout the Featured Cars",
    //     heading: "Featured Cars",
    //     cards:[
    //     {
    //         imgPath: "./assets/images/new-cars-model/ncm1.png",
    //         imgAltTitle: "Chevrolet Camaro WMV20",
    //         desc: "Model 2017 3100 MI 240HP<br />Automatic",
    //         heading: "Chevrolet Camaro WMV20",
    //         price: "$66,575",
    //         detailsDesc: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non."
    //     },
    //     {
    //         imgPath: "./assets/images/new-cars-model/ncm2.png",
    //         imgAltTitle: "BMW 6 Series",
    //         desc: "Model 2017 3100 MI 240HP<br />Automatic",
    //         heading: "BMW 6-Series Gran Coupe",
    //         price: "$89,395",
    //         detailsDesc: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non."
    //     },
    //     {
    //         imgPath: "./assets/images/new-cars-model/ncm3.png",
    //         imgAltTitle: "Ferrari",
    //         desc: "Model 2017 3100 MI 240HP<br />Automatic",
    //         heading: "Ferrari",
    //         price: "$99,500",
    //         detailsDesc: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non."
    //     },
    //     {
    //         imgPath: "./assets/images/new-cars-model/ncm3.png",
    //         imgAltTitle: "Ferrari",
    //         desc: "Model 2017 3100 MI 240HP<br />Automatic",
    //         heading: "Ferrari",
    //         price: "$99,500",
    //         detailsDesc: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non."
    //     }
    // ]
    // }

    return (
        <section>
            {/* <!-- Heading --> */}
            <div className="featured">
                <p>{featured.subHeading}</p>
                <h3>{featured.heading}</h3>
                <hr className="bottom-line" />
            </div>
            <div className="row">
                {/* <!-- card 1 --> */}
                {
                    featured.cards?.map((f,index) => {
                        return (
                            <div className="col-md-3" key={index}>
                                <div className="small-card">
                                    <img src={f.imgPath} alt={f.imgAltTitle} title={f.imgAltTitle} />
                                    <p dangerouslySetInnerHTML={{__html: f.desc}}></p>
                                </div>
                                <div className="details">
                                    <h6>{f.heading}</h6>
                                    <p className="price">{f.price}</p>
                                    <p className="details-info">{f.detailsDesc}</p>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </section>
    );
}

export default Featured;