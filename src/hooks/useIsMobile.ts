import React from 'react'
const useIsMobile = (breakpoint: number =1024):boolean => {
    const [isMobile, setIsMobile]=React.useState(
        typeof window !=="undefined" ? window.innerWidth <=breakpoint :false
    )
    React.useEffect(()=>{
    const handleResize = () => setIsMobile(window.innerWidth <= breakpoint);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    },[breakpoint])
  return isMobile;
}
export default useIsMobile