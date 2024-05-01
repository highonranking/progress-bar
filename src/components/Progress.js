import React,{useEffect,useState} from 'react'

const Progress = () => {
    const [widthLength, setWidthLength] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(()=>{

        const intervalId = setInterval(()=>{
            if(!isPaused){
            if(widthLength>=100){
                clearInterval(intervalId);
            }
            else{
                setWidthLength(widthLength+1);
            }
        }
        }, 50)
        
        console.log("here");

        return () => clearInterval(intervalId);

    },[widthLength, isPaused])

    const handleClick = () => {
        setIsPaused(!isPaused);
        if(widthLength===100){
            setWidthLength(0);
        }
    }
  return (
    <div className='p-12'>
        <div className='my-2 font-semibold'>Progress Bar</div>
        <div    
       
        className='bg-pink-100 rounded-lg flex  relative'>
            <span 
         style={{
            width:`${widthLength}%`,
        }}

       
        className='absolute h-6 rounded-lg text-center  bg-red-500 '></span>
        <span
        style={{
        color:  `${widthLength<=50 ? 'black': 'white'}`

        }}
        className='abolute z-[10] flex mx-auto'>{widthLength}%</span></div>

        <button onClick={() => handleClick()} className='my-12 py-2 px-6 bg-gray-700 text-white rounded-md hover:bg-white border-gray-700 border hover:shadow-lg hover:text-gray-700 shadow-sm'>Pause/Play/Reset</button>
    </div>
  )
}

export default Progress;