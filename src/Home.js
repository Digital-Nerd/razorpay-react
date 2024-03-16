import React from 'react'

export default function Home() {
    const style1={
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        margin: "auto",
        // marginTop:"70px",
        width:"10%",
        height:"70px"
    }
  return (
    <div>
      Welcome home...
      <div style={style1}>

      <button style={{marginBottom: "10px"}}><a href="/razorpay">razorpay</a></button>
      <button><a href="/jitsi">jitsi</a></button>
      </div>
    </div>
  )
}
