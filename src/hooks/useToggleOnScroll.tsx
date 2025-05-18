import { useEffect, useRef, useState } from "react"

export const useToggleOnScroll = () => {
  const [toggle, setToggle] = useState(true)
  const lastScrollValueRef = useRef(0)

  useEffect(() => {
    const scrollHandler = () => {
      const currentScroll = window.scrollY
      if (currentScroll > lastScrollValueRef.current) {
        setToggle(false)
      } else {
        setToggle(true)
      }
      lastScrollValueRef.current = currentScroll
    }

    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [toggle])

  return toggle
}