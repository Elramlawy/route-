import React from 'react'

export default function Footer() {
    return <>

        <div className="bg-primary py-5 text-center d-flex justify-content-around">
            <div>
                <span className="fw-4 fs-3 mx-5 px-5 text-light">LOCATION</span>
                <p className='text-light'>2215 John Daniel Drive</p>
                <p className='text-light'>Clark, MO 65243</p>
            </div>



            <div>
                <span className="fw-4 fs-3 mx-5 px-5 text-light">AROUND THE WEB</span>
                <i class="fa-brands fa-facebook"></i>
            </div>
            <div>
                <span className="fw-4 fs-3 mx-5 px-5 text-light">ABOUT FREELANCER</span>
                <p className='text-light'>Freelance is a free to use, licensed Bootstrap theme</p>
                <p className='text-light'>created by Route</p>
            </div>

        </div>

    </>
}
