import React from 'react';

const TopEvents = ()=>{
    const HandleFooter = (value,e)=>{
        e.preventDefault();
        alert(value);
    };


return (
    <a href = "/" onClick = {(e)=>this.HandleFooter("Back to Home", e)}>Back to Home</a>
)

};

export default TopEvents;