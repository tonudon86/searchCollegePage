import React from 'react'
import Play from './../img/Vector.png'
import Star from './../img/Vector (3).png'
import Heart from './../img/Vector (1).png'
import CollegeLogo from './../img/Rectangle 21.png'
import Download from './../img/Vector (2).png'
export const SingleResult = () => {
    return (
        <div  className="single-result">
                    <div className="upper-single">
                        <img src={Play} alt=""/>
                        <div className="upper-left">
                                <p>Featured</p>
                        </div>
                        <div className="upper-right">
                           <p> 4.0 <img src={Star} alt=""/></p>
                        </div>

                    </div>
                    <img className="upperimg" src={CollegeLogo} alt=""/>
                    <div className="lower-single">
                        <div className="like-button">
                            <img src={Heart} alt=""/>
                        </div>
                        <div className="detail-section">
                            
                              <div className="inner-detail">
                                  <h6> Average yearly Fee</h6>
                                  <p>8k - 72k</p>
                              </div>  

                              <div className="vertical-line">

                              </div>
                              <div className="inner-detail">
                                <h6> Available  Courses</h6>
                                <p>30 courses</p>
                            </div>  
                            <div className="vertical-line">

                            </div>

                            <div className="inner-detail"> 
                                <h6>Rank</h6>
                                <p>85</p>
                            </div>  
                        </div>

                        <hr/>
                        <div className="apply-div">
                           
                            <button className="download-button">
                             <img src={Download} alt=""/>
                                Brochure
                            </button>
                            <button className="apply-button">
                                Apply
                            </button>
                        </div>
                    </div>
                
                </div>
    )
}