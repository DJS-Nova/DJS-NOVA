import React from 'react'

function ImageCard({children, imgSrc, ...props}) {
  return (
    <div {...props} className = "mb-10 mx-12 relative w-64 max-w-xs overflow-hidden rounded-2xl shadow-lg group">
      <img src={imgSrc} alt="represents respective departments" className="transition-transform blur-[2px] group-hover:blur-none scale-110 duration-200 "/>

      <div className="absolute inset-0 flex-col items-center pt-16 bg-gradient-to-t translate-y-0 from-black/60 to-transparent hover:translate-y-40 duration-300 ease-in ">
        <div className="p-4 text-white">
            {children}
        </div>
      </div>
    </div>
  )
}

export default ImageCard
