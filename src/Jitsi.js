import React from 'react'
import {JitsiMeeting} from '@jitsi/react-sdk';

export default function Jitsi() {

    const myStyle={
        display:"grid",
        height:"100vh",
        flexDirection:"column",
    }

    // const roomName = 'Room_Name';
    const domain = 'meet.jit.si';
    const options = {
        roomName: "Room_Name",
        width: '100%',
        height: '100vh',
        parentNode: document.querySelector('#jitsi-container'),
    };

    const configOverwrite={
        startWithAudioMuted:true,
        startWithVideoMuted:true,
        prejoinPageEnabled: true,
        enableNoisyMicDetection:true,
        disableModeratorIndicator: false,
        disableInviteFunctions:true,
        disableDeepLinking:false,
    };

    return (
        <div style={myStyle}>
        <JitsiMeeting
        roomName={options.roomName}
        domain={domain}
        userInfo={{displayName: "Lokesh"}}
        configOverwrite = {configOverwrite}
        />
        </div>
    );
}
  
