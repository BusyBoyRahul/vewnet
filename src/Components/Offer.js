import React from 'react'

export default function Offer() {
  return (
    <div>

        <div className="container brands">
            <img className='brand m-3 mt-3' src="https://cdn.eyemyeye.com/desktop/images/offers/offer-zone.jpg" alt="" />
            <img className='brand m-3 mt-3' src="https://cdn.eyemyeye.com/desktop/images/offers/Home_Page_Offer_Thumb_1000_1.jpg" alt="" />
            <img className='brand m-3 mt-3' src="https://cdn.eyemyeye.com/desktop/images/offers/1200_Home_Offer_Thumb9123.jpg" alt="" />
            <img className='brand m-3 mt-3' src="https://cdn.eyemyeye.com/desktop/images/offers/Home_Offer_Thumb23.jpg" alt="" />
        </div>

        <div className="container text-center mt-5">
            <h2><u>Stuck Somewhere? Try Our Guides!</u></h2>
            <p>Peek into our quick guides that'll make you a 'Pro' at your purchase every time!</p>

            <div className="container-fluid stucks">
                
                <div className="stuck">
                    <img className='w-100' src="https://cdn.eyemyeye.com/desktop/images/static-page/home/face-guide.jpg" alt="" />
                    <h5 className='fs-5 mt-3'>Size & Fit Guide</h5>
                </div>

                <div className="stuck">
                    <img className='w-100' src="https://cdn.eyemyeye.com/desktop/images/static-page/home/prescription-guide.jpg" alt="" />
                    <h5 className='fs-5 mt-3'>Perscription Guide</h5>
                </div>

                <div className="stuck">
                    <img className='w-100' src="https://cdn.eyemyeye.com/desktop/images/static-page/home/face-shape.jpg" alt="" />
                    <h5 className='fs-5 mt-3'>Frame & Face Shape Guide</h5>
                </div>
            </div>
        </div>
      
    </div>
  )
}
