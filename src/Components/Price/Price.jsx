import React from 'react'
import './Price.css'

const Price = () => {
  return (
    <div className='prices'>
        {/* <h2>Wedding Photgraphy Prices Packages</h2> */}
        <div className="price">
            <div className="package_a chart">
                <h5 className='price-title'>Package A</h5>
                <hr />

                <p className="amount">$ 1500</p>
                <h4>ONE PHOTOGRAPHER</h4>
                <hr />
                <div className="info">
                <h3><span>6</span> Hours Coverage</h3>
                <p>Unlimited Image Taken</p>
                <p>Digital Hi-Res Images</p>
                <p>11x14 enlargement</p>
                <p>16x20 enlargement</p>
                <h6>WITH 12x8 inch ALBUM</h6>

                </div>
                
            </div>

            <div className="package_b chart">
                <h5 className='price-title' >Package B</h5>
                <hr />
                <p className="amount">$ 2500</p>
                <h4>TWO PHOTOGRAPHER</h4>

                <hr />
                <div className="info">
                <h3><span>9</span> Hours Coverage</h3>
                <p>Unlimited Image Taken</p>
                <p>Digital Hi-Res Images</p>
                <p>11x14 enlargement</p>
                <p>16x20 enlargement</p>
                <p>24x36 enlargement</p>
                <h6>WITH 12x8 inch ALBUM</h6>
                </div>


            </div>
            <div className="package_c chart">
                 <h5 className='price-title' >Package C</h5>
                    <hr />
                <p className="amount">$ 4000</p>
                <h4>TWO PHOTOGRAPHER</h4>

                <hr />
                <div className="info">
                <h3><span>Full Day</span> Hours Coverage</h3>
                <p>Unlimited Image Taken</p>
                <p>Digital Hi-Res Images</p>
                <p>11x14 enlargement</p>
                <p>16x20 enlargement</p>
                <p>24x36 enlargement</p>
                <h6>WITH 12x8 inch ALBUM</h6>
                </div>
            </div>

        </div>


    </div>
  )
}

export default Price