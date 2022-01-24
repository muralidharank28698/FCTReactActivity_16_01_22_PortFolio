import React from 'react'
import "./Product_container.css"
// import Productimage from "../../assets/p1.jpg"
const Product_container = () => {
    return (
        <div className='box_container'>
            <div className='box'>
                <div className='image'>
                    <img src={require('../../assets/product_1.png')}></img>
                </div>
                <div className='info'>
                    <h3 className='title'>Apple iphone</h3>
                    <div className='subinfo'>
                        <div className='Price'>
                            <div className='offer__price'><p>List Price: ₹8000.00/-</p></div>
                            <div className='original__price'>Price:<span>₹12000.00/-</span></div>
                        </div>
                        {/* <div className='stars'>
                            <span>2</span>
                            <span>2</span>
                            <span>2</span>
                        </div> */}
                    </div>
                    <div className='fullinfo'>
                        <table className='rwd-table'>
                            <tbody>
                                <tr>
                                    <th>Model Name</th>
                                    <td>IPhone 12 Pro Max</td>
                                </tr>
                                <tr>
                                    <th>Brand</th>
                                    <td> Apple</td>
                                </tr>
                                <tr>
                                    <th>Form Factor</th>
                                    <td>Smartphone</td>
                                </tr>
                                <tr>
                                    <th>Operating System</th>
                                    <td>IOS 12</td>
                                </tr>
                                <tr>
                                    <th>Color</th>
                                    <td> Pacific Blue</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className='box'>
                <div className='image'>
                    <img src={require('../../assets/product_2.png')}></img>
                </div>
                <div className='info'>
                    <h3 className='title'>HP Stream 14-Inch Laptop</h3>
                    <div className='subinfo'>
                        <div className='Price'><div className='offer__price'><p>List Price: $272.99/-</p></div>
                            <div className='original__price'>Price:<span>$372.99/-</span></div>
                        </div>
                        {/* <div className='stars'>
                            <span>2</span>
                            <span>2</span>
                            <span>2</span>
                            <span>2</span>
                        </div> */}
                    </div>
                    <div className='fullinfo'>
                        <table className='rwd-table'>
                            <tbody>
                                <tr>
                                    <th>Capacity</th>
                                    <td>4GB RAM</td>
                                </tr>
                                <tr>
                                    <th>Brand</th>
                                    <td>HP</td>
                                </tr>
                                <tr>
                                    <th>Screen Size</th>
                                    <td>14 Inches</td>
                                </tr>
                                <tr>
                                    <th>Operating System</th>
                                    <td>Windows 10 Home</td>
                                </tr>
                                <tr>
                                    <th>Color</th>
                                    <td>Rose Pink</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className='box'>
                <div className='image'>
                    <img src={require('../../assets/product_3.png')}></img>

                </div>
                <div className='info'>
                    <h3 className='title'>Sunon Office Table</h3>
                    <div className='subinfo'>
                        <div className='Price'><div className='offer__price'><p>List Price: ₹5,999.00/-</p></div>
                            <div className='original__price'>Price:<span>₹11,800.00/-</span></div>
                        </div>
                        {/* <div className='stars'>
                            <span>2</span>
                            <span>2</span>
                            <span>2</span>
                            <span>2</span>
                        </div> */}
                    </div>
                    <div className='fullinfo'>
                        <table className='rwd-table'>
                            <tbody>
                                <tr>
                                    <th>Desk design</th>
                                    <td>Writing Desk</td>
                                </tr>
                                <tr>
                                    <th>Brand</th>
                                    <td>Sunon</td>
                                </tr>
                                <tr>
                                    <th>Shape</th>
                                    <td>Rectangular</td>
                                </tr>
                                <tr>
                                    <th>Special Feature</th>
                                    <td>Adjustable</td>
                                </tr>
                                <tr>
                                    <th>Top Material</th>
                                    <td>Engineered Wood</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className='box'>
                <div className='image'>
                    <img src={require('../../assets/product_4.png')}></img>

                </div>
                <div className='info'>
                    <h3 className='title'>Featherlite Fabric Arm Chair</h3>
                    <div className='subinfo'>
                        <div className='Price'><div className='offer__price'><p>List Price: ₹₹6,695.00/-</p></div>
                            <div className='original__price'>Price:<span>₹82,800.00/-</span></div>
                        </div>
                        {/* <div className='stars'>
                            <span>2</span>
                            <span>2</span>
                            <span>2</span>
                            <span>2</span>
                        </div> */}
                    </div>
                    <div className='fullinfo'>
                        <table className='rwd-table'>
                            <tbody>
                                <tr>
                                    <th>Room Type</th>
                                    <td>Office</td>
                                </tr>
                                <tr>
                                    <th>Brand</th>
                                    <td>Featherlite</td>
                                </tr>
                                <tr>
                                    <th>Material</th>
                                    <td>Fabric</td>
                                </tr>
                                <tr>
                                    <th>Special Feature</th>
                                    <td>Adjustable</td>
                                </tr>
                                <tr>
                                    <th>Color</th>
                                    <td>Black</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className='box'>
                <div className='image'>
                    <img src={require('../../assets/product_5.png')}></img>

                </div>
                <div className='info'>
                    <h3 className='title'>Sony Bravia 108 cm</h3>
                    <div className='subinfo'>
                        <div className='Price'><div className='offer__price'><p>List Price: ₹66,490.00/-</p></div>
                            <div className='original__price'>Price:<span>₹74,800.00/-</span></div>
                        </div>
                        {/* <div className='stars'>
                            <span>2</span>
                            <span>2</span>
                            <span>2</span>
                            <span>2</span>
                        </div> */}
                    </div>
                    <div className='fullinfo'>
                        <table className='rwd-table'>
                            <tbody>
                                <tr>
                                    <th>Screen Size</th>
                                    <td>43 Inches</td>
                                </tr>
                                <tr>
                                    <th>Brand</th>
                                    <td>Sony</td>
                                </tr>
                                <tr>
                                    <th>Connector</th>
                                    <td>Bluetooth,Wi-Fi,USB</td>
                                </tr>
                                <tr>
                                    <th>Model Name</th>
                                    <td>KD-43X80J</td>
                                </tr>
                                <tr>
                                    <th>Refresh Rate</th>
                                    <td>60 Hz</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className='box'>
                <div className='image'>
                    <img src={require('../../assets/product_6.png')}></img>

                </div>
                <div className='info'>
                    <h3 className='title'>Entwino Assembled Desktop</h3>
                    <div className='subinfo'>
                        <div className='Price'><div className='offer__price'><p>List Price: ₹11,499.00/-</p></div>
                            <div className='original__price'>Price:<span>₹19,800.00/-</span></div>
                        </div>
                        {/* <div className='stars'>
                            <span>2</span>
                            <span>2</span>
                            <span>2</span>
                            <span>2</span>
                        </div> */}
                    </div>
                    <div className='fullinfo'>
                        <table className='rwd-table'>
                            <tbody>
                                <tr>
                                    <th>CPU Model</th>
                                    <td>Core 2 Duo</td>
                                </tr>
                                <tr>
                                    <th>Brand</th>
                                    <td>ENTWINO</td>
                                </tr>
                                <tr>
                                    <th>Screen Size</th>
                                    <td>15.1 Inches</td>
                                </tr>
                                <tr>
                                    <th>RAM Memory</th>
                                    <td>4 GB</td>
                                </tr>
                                <tr>
                                    <th>CPU</th>
                                    <td>Intel</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product_container