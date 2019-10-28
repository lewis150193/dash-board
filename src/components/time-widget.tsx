import React from 'react';
// @ts-ignore
import IntervalTimer from 'react-interval-timer';

const TimeWidgetComponent = () => (
    <>
        <p className="display-inline" id="currentTime"></p>
        <IntervalTimer
            timeout={1000}
            callback={()=>{
                var today = new Date();
                var day = today.getDay();
                var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
                var hour = today.getHours();
                var minute = today.getMinutes();
                var second = today.getSeconds();
                var prepand = (hour >= 12)? " PM ":" AM ";
                hour = (hour >= 12)? hour - 12: hour;
                if (hour===0 && prepand===' PM ') { 
                    if (minute===0 && second===0) { 
                        hour=12;
                        prepand=' Noon';
                    } else { 
                        hour=12;
                        prepand=' PM';
                    } 
                } 
                if (hour===0 && prepand===' AM ') { 
                    if (minute===0 && second===0) { 
                        hour=12;
                        prepand=' Midnight';
                    } else { 
                        hour=12;
                        prepand=' AM';
                    } 
                }
                
                var timeObjects = document.querySelectorAll('#currentTime');
                for(var i=0; i<timeObjects.length; i++){
                    timeObjects[i].innerHTML = daylist[day]+', '+hour+':'+minute+':'+second+' '+prepand;
                }
            }}
            enabled={true}
            repeat={true}
        />
    </>
);


const TimeWidget: React.FC = () => {
    return (
        <TimeWidgetComponent/>
    )
};

export {
    TimeWidget
}
