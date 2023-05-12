import Delete from './Delete.svg'
import Trash from './Trash.svg'
import React, { useEffect, useRef, useState } from 'react'
const ToDo = () => {
    const [inputV,setInputV] = useState('') //User input text
    const [task,setTask] = useState([]) //Updating todo lists
    const handleTask = (e) =>{
        setInputV(e.target.value) //Setting value
    }
    function addTask(){
        
        setTask((task)=>{
            const updatetask = [...task,inputV] //updating list 
            setInputV(''); //After on sentence this will empty the textarea
            return updatetask 
        })
 
    }
    function handleRm(k){ //function to remove each list
        const updateList = task.filter((ele,id)=>{ 
            return k!==id;
        })

        setTask(updateList); //Setting list state to setTask
    }
    
    
    function removeAll(){
        setTask([]) //Removes every list
    }  
    const element = useRef(null);
    useEffect(()=>{
        element.current.focus(); //direct focus on text area after refresh or starting page
    });
        
    
  return (
    <>
    <div>
        <h1 className='headline'>TODO list</h1>
        <label><b>Enter your task here: </b></label>
        <input type='text' onChange={handleTask} value={inputV} ref={element}/> 
        {/* //ref(refrence) is used to implement the focus() method */}
        <button className='add-task' type='submit' onClick={addTask} >Add Task</button>
        <h2 className='listitem'>---Tasks---</h2>
        {task!==[] && task.map((work,k)=>{ //making map of the list and store evry single list to 'work' and k is k(which is unique for every list)
            return(
                <div className='tasks1'>
                <h3 key={k} className='tasks'>{work}<img src={Delete} alt='trash' onClick={()=>handleRm(k)}/></h3>
                </div>
                
            )
        })

        }
    </div>
    {task.length>=1 &&
    <button className='btnL' onClick={removeAll} ><img className='RMA' src={Trash} alt=''/>REMOVE ALL</button>
    }
    <p>&copy;Copyright and All Right Reserved @lalit_pagare__ 2023 - 2025</p>
    </>
  )
}
export default ToDo;