import React from 'react'

function SkillCard() {
  return (
  <div className="relative card bg-base-200 shadow-lg w-80 pt-16 pb-8 px-8 overflow-visible">
  {/* Logo/Image, half-outside effect */}
  <img 
    src="react.png"
    alt="Logo"
    className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full z-10 shadow-lg border-4 border-base-100"
  />

  {/* Name or Title */}
  <h2 className="text-2xl font-bold text-center mt-4 mb-2">React JS</h2>

  {/* Badge */}
  <div className="flex justify-center mb-3">
    <span className="badge badge-accent badge-lg">Frontend</span>
  </div>

  {/* Radial Progress */}
  <div className="flex justify-center mb-4">
    <div 
      className="radial-progress text-primary" 
      style={{"--value": 85, "--size": "4rem", "--thickness": "8px"}}
      role="progressbar"
    >
      85%
    </div>
  </div>

  {/* Card Content */}
  <div className="text-center text-base-content">
    <p>Building interactive user interfaces and seamless SPA experiences using React.</p>
  </div>
</div>


  )
}

export default SkillCard
