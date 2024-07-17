import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/test1.png'
import user_2 from '../../assets/test2.png'
import user_3 from '../../assets/test3.png'
import user_4 from '../../assets/test4.png'
import user_5 from '../../assets/test5.png'



const Testimonials = () => {

    const slider = useRef();

    let tx = 0;


    // functionality for slide
    const slideForward = ()=>{
        if(tx > -50){
            tx -= 40;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    const slideBackward = ()=>{
        if(tx < 0){
            tx +=50;
        }
        slider.current.style.transform = `translateX(${tx}%)`;

        
    }


  return (
    <div className='testimonials'>
        
        <img className='back-btn'onClick={slideBackward} src={back_icon} alt="" />
        <img className='next-btn'  onClick={slideForward}  src={next_icon} alt="" />
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="client-info">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>Sarah and Michael Thompson</h3>
                                <span>October 12, 2023</span>
                            </div>
                        </div>
                        <p>Choosing Givers and Keepers was the best decision we made for our wedding day. Their team captured every
                             emotion and detail flawlessly. Looking through our photos feels like reliving the magic all over again! Their 
                            professionalism and creativity made the entire process stress-free, 
                            and their attention to detail ensured that no special moment was missed.</p>
                    </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="client-info">
                            <img src={user_5} alt="" />
                            <div>
                                <h3>Emily and James Rodriguez</h3>
                                <span> June 28, 2024</span>
                            </div>
                        </div>
                        <p>We couldn't have asked for a more talented and professional photographers than 
                            Alex from Maya from Givers and Keepers. They truly understood our vision and captured the essence of our love in 
                            every shot. Highly recommend! Their warm personality
                             and ability to put us at ease made our photo sessions enjoyable and natural, resulting in photographs
                              that exceeded our expectations."</p>
                    </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="client-info">
                            <img src={user_4} alt="" />
                            <div>
                                <h3>Olivia and Daniel Smith</h3>
                                <span>September 5, 2023</span>
                            </div>
                        </div>
                        <p>Working with Givers and Keepers was an absolute pleasure. They made us feel 
                            comfortable and relaxed, which translated into stunning photographs. Our family and
                             friends can't stop raving about how beautiful our wedding album turned out! Their 
                             dedication to capturing candid moments and attention to lighting and composition 
                             created images that perfectly reflect the joy and emotion of our day.</p>
                    </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="client-info">
                            <img src={user_3} alt="" />
                            <div>
                                <h3>Jessica and Andrew Wilson</h3>
                                <span>May 15, 2024</span>
                            </div>
                        </div>
                        <p>From the initial consultation to the final delivery of our photos,Givers and Keepers exceeded our 
                            expectations. They were attentive to every detail and went above and beyond to capture the most 
                            memorable moments of our special day
                            . Their professionalism and ability to adapt to changing circumstances ensured a
                             smooth and enjoyable experience for everyone involved.</p>
                    </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="client-info">
                            <img src={user_2} alt="" />
                            <div>
                                <h3>Samantha and Christopher Davis</h3>
                                <span>July 3, 2023</span>
                            </div>
                        </div>
                        <p>I cannot thank Giancarlo from Givers and Keepers enough for their incredible work. They have a remarkable eye for composition and light, 
                            and their passion for storytelling through photography is evident in every picture. Our wedding photos are simply breathtaking! 
                            Their patience and creativity allowed us to relax and enjoy
                             our day while they captured every meaningful moment with precision and artistry.</p>
                    </div>
                </li>
            </ul>
        </div>

    </div>
  )
}

export default Testimonials