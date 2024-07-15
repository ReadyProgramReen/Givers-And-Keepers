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
                <hr />
                </div>

                <p className="price">$1500</p>
                <span>ONE PHOTOGRAPHER</span>
                <hr />
                <h3>6 Hours Coverage</h3>
                <p>Unlimited Image Taken</p>
                <p>Digital Hi-Res Images</p>


                
            </div>

            <div className="package_b chart">
                <div className="price-info">
                <h5 className='price-title' >Package B</h5>
                <hr />
                <hr />
                </div>
                <p className="price">$2500</p>
                <span>TWO PHOTOGRAPHER</span>

                <hr />
                <h3>9<span>Hours Coverage</span></h3>
                <p>Unlimited Image Taken</p>
                <p>Digital Hi-Res Images</p>



            </div>
            <div className="package_c chart">
                <div className="price-info">
                 <h5 className='price-title' >Package C</h5>
                    <hr />
                    <hr />
                </div>
                <p className="price">$7100</p>
                <hr />
                <h3>FULL DAY<span>Hours Coverage</span></h3>
                <p>Unlimited Image Taken</p>
                <p>Digital Hi-Res Images</p>
            </div>

        </div>


    </div>
  )
}

export default Price