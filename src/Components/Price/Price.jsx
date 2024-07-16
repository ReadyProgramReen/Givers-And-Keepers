import React from 'react'
import './Price.css'

const Price = () => {
  return (
    <div className='prices'>
        <h2>Wedding Photgraphy Prices Packages</h2>
        <div className="price">
            <div className="package_a chart">
                <div className="price-info">
                <h5 className='price-title'>Package A</h5>
                <hr />
                </div>

                <p className="price">$1500</p>
                <span>ONE PHOTOGRAPHER</span>
                <hr />
                <h3>6 Hours Coverage</h3>
                <p>Unlimited Image Taken</p>
                <p>Digital Hi-Res Images</p>
                <p>11x14 enlargement</p>
                <p>16x20 enlargement</p>
                <h6>WITH 12x8 inch ALBUM</h6>


                
            </div>

            <div className="package_b chart">
                <div className="price-info">
                <h5 className='price-title' >Package B</h5>
                <hr />
                </div>
                <p className="price">$2500</p>
                <span>TWO PHOTOGRAPHER</span>

                <hr />
                <h3>9<span>Hours Coverage</span></h3>
                <p>Unlimited Image Taken</p>
                <p>Digital Hi-Res Images</p>
                <p>11x14 enlargement</p>
                <p>16x20 enlargement</p>
                <p>24x36 enlargement</p>
                <h6>WITH 12x8 inch ALBUM</h6>



            </div>
            <div className="package_c chart">
                <div className="price-info">
                 <h5 className='price-title' >Package C</h5>
                    <hr />
                </div>
                <p className="price">$4000</p>
                <span>TWO PHOTOGRAPHER</span>

                <hr />
                <h3>FULL DAY<span>Hours Coverage</span></h3>
                <p>Unlimited Image Taken</p>
                <p>Digital Hi-Res Images</p>
                <p>11x14 enlargement</p>
                <p>16x20 enlargement</p>
                <p>24x36 enlargement</p>
                <h6>WITH 12x8 inch ALBUM</h6>
            </div>

        </div>


    </div>
  )
}

export default Price