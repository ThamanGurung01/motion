import React from 'react'
  const useIsMobile = (breakpoint: number =1024):boolean | null => {
  const [isMobile, setIsMobile] = React.useState<boolean | null>(null);
    React.useEffect(()=>{
    const checkMobile = () => setIsMobile(window.innerWidth <= breakpoint);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
    },[breakpoint])
  return isMobile;
}
export default useIsMobile