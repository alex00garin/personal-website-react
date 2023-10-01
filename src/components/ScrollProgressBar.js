import React, { useState, useEffect } from 'react'

const ScrollProgressBar = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0)

  const handleScroll = () => {
    const windowHeight = window.innerHeight
    const documentHeight = document.documentElement.scrollHeight
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop

    const calculatedScrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100

    setScrollPercentage(calculatedScrollPercentage)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div
      className='scroll-progress-bar h-[1px] bg-black dark:bg-white'
      style={{ width: `${scrollPercentage}%`, behavior: 'smooth' }}
    />
  )
}

export default ScrollProgressBar
