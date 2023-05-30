import React, { useState } from 'react'

function Tabs({tabs}) {
    let [curr,setCurr] = useState(tabs[0].title);

    function myFunc(title){
        setCurr(title);
    }


  return (
    <div>
        <ul>
            {
                tabs.map((obj,idx)=>{
                    return(
                    <li onClick={()=>myFunc(obj.title)}>{obj.title}</li>
                    )
                })
            }
        </ul>

        <p>This is the content for the {curr}</p>
    </div>
  )
}

export default Tabs