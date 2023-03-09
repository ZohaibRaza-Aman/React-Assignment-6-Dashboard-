import { useState } from "react"
import { useEffect } from "react";
import SelectLabels from "../components/Dropdown";


function DropDL () {
    const [data,SetData] = useState([])
    let StudentsData = [
        {
            ID:'A21',
            Name:'Ayaz',
            Sec:'A',
        }
        ,
        {
            ID:'A22',
            Name:'Nasir',
            Sec:'B',
        }
        ,
        {
            ID:'A23',
            Name:'Imran',
            Sec:'C',
        }
        ,
        {
            ID:'A24',
            Name:'Jaweed',
            Sec:'D',
        }
        ,
        {
            ID:'A25',
            Name:'Rehan',
            Sec:'E',
        },
    ];
    let dataSave =()=>{
        SetData([StudentsData])
        
    }

    useEffect(()=>{
        dataSave()
    },[])

    return(
        <>
        <div>
            <h1>Dropdownn</h1>
            <SelectLabels data={StudentsData}/>
        </div>
        </>
    );
};

export default DropDL;