function client({client}) {

    // const client = [
    //     {
    //         imgPath: "./assets/images/brand/br1.png",
    //         imgAltTitle: "BMW 6 SERIES"
    //     },
    //     {
    //         imgPath: "./assets/images/brand/br2.png",
    //         imgAltTitle: "BMW 6 SERIES"
    //     },
    //     {
    //         imgPath: "./assets/images/brand/br3.png",
    //         imgAltTitle: "BMW 6 SERIES"
    //     },
    //     {
    //         imgPath: "./assets/images/brand/br4.png",
    //         imgAltTitle: "BMW 6 SERIES"
    //     },
    //     {
    //         imgPath: "./assets/images/brand/br5.png",
    //         imgAltTitle: "BMW 6 SERIES"
    //     },
    //     {
    //         imgPath: "./assets/images/brand/br6.png",
    //         imgAltTitle: "BMW 6 SERIES"
    //     }
    // ]

    return (
        <section className="client">
            <div className="row">
                {
                    client.map((c,index) => {
                        return (
                            <div className="col-md-2" key={index}>
                                <div className="client-logo">
                                    <img src={c.imgPath} alt={c.imgAltTitle} title={c.imgAltTitle} />
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </section>
    );
}

export default client;