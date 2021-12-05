import { useEffect, useState } from "react"


const useMatchMedia = (query='(pointer: coarse)') => {
    const [isMatch, setisMatch] = useState(typeof window != 'undefined' ? window.matchMedia(query).matches : false)

    useEffect(() => { 
        const media = window.matchMedia(query)
        const listener = () => setisMatch(media.matches)
        media.addEventListener('change', listener)

        return () => media.removeEventListener('change', listener)
        
    }, [isMatch])

    return isMatch

}

export default useMatchMedia