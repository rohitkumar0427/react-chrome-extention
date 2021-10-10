import './reminder.css';
import { useState } from 'react';
export const Reminder = () => {
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
  
 
    const handleChangeH = (e) => {
      
        setHours(Number(e.target.value))
    }
    const handleChangeM = (e) => {
      
        setMinutes(Number(e.target.value))
    }
    const handleChangeS = (e) => {
      
        setSeconds(Number(e.target.value))
    }
   
   
    
    const handleSubmit = () => {
       
      
     
            console.log(hours, minutes, seconds)
        interval(1000);
        
       
        
        
    }

  

  

      var clearId
    function interval(time) {
        
      clearId = setInterval(() => {
            setSeconds(prev => {
                if (prev === 0) {
              
                    setMinutes(p => {
                       
                        if (p === 0) {
                            setHours(h => {
                                   if (h === 0) {
                                       setSeconds(0);
                                       setMinutes(0);
                                       setHours(0);
                                       clearInterval(clearId)
                                        alert('Times up') 
                                          // alertM()
                                   }
                                       return h-1
                               })
                               return p = 59
                        }
                        return p - 1
                        
                })
                    return  prev = 59;
                }
                return prev - 1;
            });

     }, time)  
    }

    const handleReset = () => {
      window.location.reload(false)
    }
    

    const handleFocus = (e) => {
        e.target.value = null;
    }
    return (
        <div className="reminderContainer">
            <div className="reminderWrapper">
                <div className="reminderTop">
                   <h1 className="reminderTitle">TIMER</h1> 
                </div>
                <div className="clockContainer">
                   <input type="number" placeholder="00"  max="100" min="0" className="rhours"  onFocus={handleFocus}  onChange={handleChangeH} value={hours} /><span className="clockSpan">:</span>
                    <input type="number" max="60" min="0" defaultValue="00" onFocus={handleFocus} placeholder="00" className="rhours" value={minutes} onChange={handleChangeM} /><span className="clockSpan">:</span>
                        <input type="number"  placeholder="00" max="60" min="0" className="rhours" value={seconds} onChange={handleChangeS}  onFocus={handleFocus} />
                      
                    <div className="buttons">
                        <button onClick={handleSubmit} className="startButton">START</button>
                        <button onClick={handleReset} className="resetButton">RESET</button>
                     </div>
                </div>
               
            </div>
        </div>
    )
}


/*{
  "name": "Productivity Extension",
  "description": "Build an Extension!",
  "version": "1.0",
  "manifest_version": 3,
  "icons": {
    "16": "darwinFav16.ico",
    "48": "darwinFav48.ico",
    "128": "darwinFav128.ico"
  },
  "chrome_url_overrides": {
    "newtab": "index.html"
  }
}*/


// setHours(h => {
//     if (h === 0) {
//         setSeconds(0);
//         setMinutes(0);
//         return  clearInterval(clearId)
//     }
//     return h-1
// })
// return p = 59


// function interval(time) {
//     const clearId = setInterval(() => {
//            setSeconds(prev => {
//                if (prev === 0) {
             
//                    setMinutes(p => {
                      
//                        if (p === 0) {
//                           setSeconds(0);
//                          return  clearInterval(clearId)
//                        }
//                        return p - 1
                       
//                })
//                    return  prev = 59;
//                }
//                return prev - 1;
//            });

//     }, time)  
//    }
