import React, {useState} from 'react';
import {FaTrash} from 'react-icons/fa';

function Cotegories(props:any) {

    // @ts-ignore
    // let [cotegories,setCotegories] = useState<>('all'|'chairs'|'sofas'|'tables'|'light')
    let [cotegories,setCotegories] = useState<any>([
        {key:'all',
            name:'all'
        },
        {key:'chairs',
            name:'chairs'
        },
        {key:'sofas',
            name:'sofas'
        },
        {key:'tables',
            name:'tables'
        },
        {key:'light',
            name:'light'
        }
    ])


    return (

        <div className={"cotegories"} >
            {cotegories.map((el:any)=>(
                <div key={el.key} onClick={()=>{props.chooseCotegories(el.key)}}>
                    {el.name}
                </div>
            ))}

         </div>


    );
}

export default Cotegories;
