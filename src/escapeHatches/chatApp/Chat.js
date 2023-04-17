export const createConnection=(serverUrl, roomId)=>{
    return {
        connect(){
            console.log('✓ Connecting to "' + roomId + '" room at ' + serverUrl + '...')
        },
        disconnect(){
            console.log('X Disconnected from "' + roomId + '" room at ' + serverUrl);
        }
    }
}