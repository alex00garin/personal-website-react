import React, { useState, useEffect } from 'react'

const TopUpButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <button
      className={`top-up-button fixed bottom-10 right-10 z-50 ${isVisible ? 'show' : ''}`}
      onClick={scrollToTop}
      style={{ display: isVisible ? 'block' : 'none' }}
    >
      <svg className='w-7 h-7 text-black dark:text-white' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 14 8'>
        <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='1' d='M13 7 7.674 1.3a.91.91 0 0 0-1.348 0L1 7' />
      </svg>
    </button>
  )
}

export default TopUpButton
