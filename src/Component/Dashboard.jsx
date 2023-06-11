import React from 'react'
import vector from '../Assets/Images/vector.png'
function Dashboard() {
    return (
        <div className='Dashboard'>
            <div className='DashboardInner'>
                <div className='Dashtxt1'>
                    You currently  have 3 requests
                </div>
                <div className='DashSec1'>
                    <div className='DashSec1R1'>
                        <div className='Dashsec1r1c1'>
                            St Judes Hospital
                            <br />
                            <span className=''>
                                Sarasota,FL. 33178
                            </span>
                        </div>
                        <div className='Dashsec1r1c2'>
                            <div className='DateHolder'>
                                <div>
                                    10 <br />
                                    <span>
                                        October
                                    </span>
                                </div>
                            </div>
                            <div>
                                -
                            </div>
                            <div className='DateHolder'>
                                <div>
                                    17 <br />
                                    <span>
                                        December
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='Dashsec1r1c2 noborder'>
                            <div className='DateHolder txtleft '>
                                <div >
                                    20 Rooms <br />
                                    <span>
                                        10 Singles, 10 doubles
                                    </span>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='DashSec1R2'>
                        <div className='DashSec1R2C1'>
                            RECIEVED
                        </div>
                        <div className='DashSec1R2C2'>
                            NEGOTIATING

                        </div>
                        <div className='DashSec1R2C3'>
                            COMPLETED
                        </div>
                    </div>
                </div>
                <div className='DashSec2'>
                    <div className='DashSec1R1'>
                        <div className='Dashsec1r1c1'>
                            St Judes Hospital
                            <br />
                            <span className=''>
                                Sarasota,FL. 33178
                            </span>
                        </div>
                        <div className='Dashsec1r1c2'>
                            <div className='DateHolder'>
                                <div>
                                    10 <br />
                                    <span>
                                        October
                                    </span>
                                </div>
                            </div>
                            <div>
                                -
                            </div>
                            <div className='DateHolder'>
                                <div>
                                    17 <br />
                                    <span>
                                        December
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='Dashsec1r1c2 noborder'>
                            <div className='DateHolder txtleft '>
                                <div >
                                    20 Rooms <br />
                                    <span>
                                        10 Singles, 10 doubles
                                    </span>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='DashSec2R2'>
                        COMPLETED
                    </div>
                    <div className='CardsHolder'>
                        <div className='card1'>
                            <div className='card1tag'>
                                Rare Find
                            </div>
                            <div className='Card'>
                                <div className='CardImg'>

                                    <img src={vector} alt="" />
                                </div>
                                <p className='Holidaytxt'>Holiday Inn</p>
                                <div className='CardInner'>
                                    <div className='CardInnertxt'>
                                        1.5 miles away from joblocation.
                                    </div>
                                    <div className='CardInnerTxtHolder'>
                                        <div className='CardInnerTxtHoldert1'>
                                            Singles: $120 <br />
                                            Doubles: $145
                                        </div>
                                        <div className='BookBtn'>
                                            Book Now
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='Card'>
                            <div className='CardImg'>

                                <img src={vector} alt="" />
                            </div>
                            <p className='Holidaytxt'>Holiday Inn</p>
                            <div className='CardInner'>
                                <div className='CardInnertxt'>
                                    1.5 miles away from joblocation.
                                </div>
                                <div className='CardInnerTxtHolder'>
                                    <div className='CardInnerTxtHoldert1'>
                                        Singles: $120 <br />
                                        Doubles: $145
                                    </div>
                                    <div className='BookBtn'>
                                        Book Now
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='Card'>
                            <div className='CardImg'>

                                <img src={vector} alt="" />
                            </div>
                            <p className='Holidaytxt'>Holiday Inn</p>
                            <div className='CardInner'>
                                <div className='CardInnertxt'>
                                    1.5 miles away from joblocation.
                                </div>
                                <div className='CardInnerTxtHolder'>
                                    <div className='CardInnerTxtHoldert1'>
                                        Singles: $120 <br />
                                        Doubles: $145
                                    </div>
                                    <div className='BookBtn'>
                                        Book Now
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard