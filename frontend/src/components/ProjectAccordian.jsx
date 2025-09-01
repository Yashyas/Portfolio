import React from 'react'

function ProjectAccordian() {
  return (
  <div className="join join-vertical bg-base-100 ">
  <div className="collapse collapse-arrow join-item border-base-300 border">
    <input type="radio" name="my-accordion-4" defaultChecked />
    <div className="collapse-title font-semibold">How do I create an account?</div>
    <div className="collapse-content text-sm ">Click the "Sign Up" button in the top right corner and follow the registration process.
     <figure className='w-full max-w-full p-2'>
    <img
      className='w-full h-auto rounded-3xl'
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  </div>
  </div>
   <div className="collapse collapse-arrow join-item border-base-300 border">
    <input type="radio" name="my-accordion-4" defaultChecked />
    <div className="collapse-title font-semibold">How do I create an account?</div>
    <div className="collapse-content text-sm ">Click the "Sign Up" button in the top right corner and follow the registration process.
     <figure className='w-full p-2'>
    <img
      className='w-full rounded-3xl'
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  </div>
  </div>
  <div className="collapse collapse-arrow join-item border-base-300 border">
    <input type="radio" name="my-accordion-4" defaultChecked />
    <div className="collapse-title font-semibold">How do I create an account?</div>
    <div className="collapse-content text-sm ">Click the "Sign Up" button in the top right corner and follow the registration process.
     <figure className='w-full p-2'>
    <img
      className='w-full rounded-3xl'
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  </div>
  </div>
</div>
  )
}

export default ProjectAccordian
