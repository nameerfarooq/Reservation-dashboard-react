import React from 'react'

function Sidebar() {
    return (
        <div className='Sidebar'>
            <div className='SidebarIn'>


                <div className='SidebarInner'>
                    <div>
                        <div className='Sidetxt1'>
                            LODGN
                        </div>
                        <div className='Sidenavitems'>
                            <a className='active' href="">Current requests</a>
                            <a href="">Ongoing stays</a>
                            <a href="">Previous stays</a>
                            <a href="">Reports</a>
                        </div>
                    </div>
                    <div className='logoutholder'>
                        <div className='Logoutbtn'>
                            Log-out
                        </div>
                        <div className='helpdesktxt'>
                            Help-desk
                            <br />
                            786-874 9988
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar