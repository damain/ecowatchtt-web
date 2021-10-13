import React, {useEffect, useState} from 'react'

function VideoPlayer({videoId}) {
    const [width, setWidth] = useState(720)
    useEffect(()=>{
        const resize = () =>{
            console.log(window.innerWidth)
            setWidth(window.innerWidth)
        }
        resize()
        window.addEventListener("resize", resize)
        return ()=>window.removeEventListener("resize", resize)
    }, [])
    return (
        <div>

            <iframe id="ytplayer" type="text/html" width={`${width<720 ? width : 720}`} height="405"
            src={`https://www.youtube.com/embed/${videoId}?modestbranding=1`}
            frameborder="0" allowfullscreen />
            
        </div>
    )
}

export default VideoPlayer
