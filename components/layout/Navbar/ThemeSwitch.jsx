import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { BsFillBrightnessHighFill, BsFillMoonFill } from "react-icons/bs";

const ThemeSwitch = () => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()
    
    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
        setMounted(true)
    }, [])
    
    if (!mounted) {
        return null
    }
    
    return (
        <>
            {theme === 'dark' ? <BsFillBrightnessHighFill onClick={()=>setTheme('light')}/> : <BsFillMoonFill className='theme-icon' onClick={()=>setTheme('dark')}/>}
            
            {/* <select value={theme} onChange={e => setTheme(e.target.value)}>
                <option value="system">System</option>
                <option value="dark">Dark</option>
                <option value="light">Light</option>
            </select> */}
        </>
        
    )
}

export default ThemeSwitch