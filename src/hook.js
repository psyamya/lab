import React,{useState} from "react";
const Counter=()=>{
    const Students=[
        {
            id:'1',
            name:'A',
            course:'B-tech'
        },
        {
            id:'2',
            name:'B',
            course:'B-tech'
        },
        {
            id:'3',
            name:'C',
            course:'B-tech'
        }
    ];
    const[Studentslist,setName]=useState(Students)
return(
    <>
    <div>
        {
          Studentslist.map((x)=>{
            return(
                <h4 key={x.id} >{x.name}</h4>
                
            )
          })
        }
         </div>
    <button onClick={()=>setName([])}>clear</button>
   </>
)
}
export default Counter