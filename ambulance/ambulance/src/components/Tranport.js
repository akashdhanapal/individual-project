import React from 'react'

export default function Tranport() {
    return (
        <div>
            <section style={{backgroundColor:"orchid",}}>
                <div className="col-12 row m-0 p-0">
                    <h4 className="m__citys">
                        <span> AmbulanceTransportation</span> Successfully running in the cities </h4>
                    <div className="col-12 row m-0 p-0">
                        <div className='col-3' style={{ display: "flex" }}>
                            <ul className="cities__grid">
                                <li>Delhi NCR</li>
                                <li>Mumbai</li>
                                <li>Bangalore</li>
                                <li>Hyderabad</li>
                                <li>Chennai</li>
                                <li>Kolkata</li>
                            </ul>
                        </div>
                        <div className='col-3' style={{ display: "flex" }}>
                            <ul className="cities__grid">
                                <li>Pune</li>
                                <li>Agra</li>
                                <li>Vijayawada</li>
                                <li>Durgapur</li>
                                <li>Ahmedabad</li>
                                <li>Jaipur</li>
                            </ul>
                        </div>
                        <div className='col-3' style={{ display: "flex" }}>
                            <ul className="cities__grid">
                                <li>Madurai</li>
                                <li>Guwahati</li>
                                <li>Thane</li>
                                <li>Ludhiana</li>
                                <li>Bhopal</li>
                                <li>Jodhpur</li>
                            </ul>
                        </div>
                        <div className='col-3' style={{ display: "flex" }}>
                            <ul className="cities__grid">
                                <li>Raipur</li>
                                <li>Surat</li>
                                <li>Chandigarh</li>
                                <li>Dehradun</li>
                                <li>Udaipur</li>
                                <li>Indore</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

