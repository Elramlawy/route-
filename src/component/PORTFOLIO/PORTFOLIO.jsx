import React from 'react'
import img1 from '../../imges/poert1.png'
import img2 from '../../imges/port2.png'
import img from '../../imges/port3.png'
export default function PORTFOLIO() {
  return <>
    <h3 className='text-center py-5'>PORTFOLIO COMPONENT</h3>
    <div className='contianer'>
      <div className='row '>
        <div className=' d-flex text-center justify-content-center'>





          <div>            
            <div type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
              <img className='mx-3 ' src={img1} alt="img3" width={340} srcset="" />
            </div>       
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div type="button" className="" data-bs-dismiss="modal" aria-label=""></div>
                <div className="modal-body">
                  <img className='mx-5 ' src={img1} alt="img3" width={500} srcset="" />
                </div>
              </div>
            </div>
          </div>


          <div>            
            <div type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
              <img className='mx-5 ' src={img2} alt="img3" width={340} srcset="" />
            </div>       
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div type="button" className="" data-bs-dismiss="modal" aria-label=""></div>
                <div className="modal-body">
                  <img className='mx-5 ' src={img2} alt="img3" width={500} srcset="" />
                </div>
              </div>
            </div>
          </div>
  

          <div>            
            <div type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
              <img className='mx-3 ' src={img} alt="img3" width={340} srcset="" />
            </div>       
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div type="button" className="" data-bs-dismiss="modal" aria-label=""></div>
                <div className="modal-body">
                  <img className='mx-5 ' src={img} alt="img3" width={500} srcset="" />
                </div>
              </div>
            </div>
          </div>














        </div>
        <div className=' d-flex text-center justify-content-center py-3'>

        <div>            
            <div type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
              <img className='mx-3 ' src={img1} alt="img3" width={340} srcset="" />
            </div>       
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div type="button" className="" data-bs-dismiss="modal" aria-label=""></div>
                <div className="modal-body">
                  <img className='mx-5 ' src={img1} alt="img3" width={500} srcset="" />
                </div>
              </div>
            </div>
          </div>


          <div>            
            <div type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
              <img className='mx-5 ' src={img2} alt="img3" width={340} srcset="" />
            </div>       
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div type="button" className="" data-bs-dismiss="modal" aria-label=""></div>
                <div className="modal-body">
                  <img className='mx-5 ' src={img2} alt="img3" width={500} srcset="" />
                </div>
              </div>
            </div>
          </div>
  

          <div>            
            <div type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
              <img className='mx-3 ' src={img} alt="img3" width={340} srcset="" />
            </div>       
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div type="button" className="" data-bs-dismiss="modal" aria-label=""></div>
                <div className="modal-body">
                  <img className='mx-5 ' src={img} alt="img3" width={500} srcset="" />
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>

  </>


}
