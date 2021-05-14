import React,{ useState, useEffect,useRef, createContext} from 'react'
import {io} from 'socket.io-client'
import Peer from 'simple-peer'




const SocketContext = createContext()

const socket = io("https://warm-wildwood-81069.herokuapp.com") 
 

const ContextProvider = ({children})=>{

    const [stream, setStream] = useState(null)
    // const [id, setId] = useState('')
    const [call, setCall] = useState({})
    const [callAccepted, setCallAccepted] = useState(false)
    const [callEnded, setCallEnded] = useState(false)
    const [name, setName] = useState('')
    const [me, setMe] = useState('')
     
    const myVideo = useRef()
    const userVideo = useRef()
    const connectionRef = useRef() 

    useEffect(() => {
        navigator.mediaDevices.getUserMedia({video: true, audio: true})
        .then((currentStream) =>{
            setStream(currentStream)
            
            myVideo.current.srcObject = currentStream ;
        })

        socket.on('me', (id) =>  setMe(id))
        
        console.log(me)

        socket.on("callUser", ({from, signal, name: callerName})=>{
            setCall({isRecieved: true, from,signal,name: callerName})
        })
    }, [])



    //// to pick up the incoming call

    const answerCall =()=>{
        setCallAccepted(true)

        const peer = new Peer({initiator: false, trickle: false, stream})

        peer.on('signal', (data)=>{
            socket.emit('answerCall', {signal: data, to: call.from})
        })

        peer.on('stream', (currentStream) =>{
            userVideo.current.srcObject = currentStream
        })

        peer.signal(call.signal)

        connectionRef.current = peer
    }





    ///// to call a user

    const callUser =(id)=>{

        const peer = new Peer({initiator: true, trickle: false, stream})


        peer.on('signal', (data)=>{
            socket.emit('callUser', {userToCall:id, name, from: me, signalData: data})
        })

        socket.on('callAccepted', (signal)=>{
            setCallAccepted(true)

            peer.signal(signal)
        })

        connectionRef.current = peer

    }



    //// to hang/end the call

    const leaveCall =()=>{
        setCallEnded(true)

        connectionRef.current.destroy() ;

        window.location.reload()
    }


    return (
   <SocketContext.Provider value={{stream,call,callAccepted,setName,me, callEnded, name, stream, myVideo, userVideo,connectionRef, answerCall, leaveCall, callUser}}>
    {children} 
   </SocketContext.Provider>
    )


}

export  {ContextProvider, SocketContext}