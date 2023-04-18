import { useState } from "react"
import Map from "./Map";

const WorldMap = () => {
    const [zoomLevel, setZoomLevel] = useState(0);
    return(
        <>
            Zoom level: {zoomLevel}x
            <button onClick={() => setZoomLevel(zoomLevel + 1)}>+</button>
            <button onClick={() => setZoomLevel(zoomLevel - 1)}>-</button>
            <hr/>
            <Map zoomLevel={zoomLevel}/>
        </>
    )
}
export default WorldMap;