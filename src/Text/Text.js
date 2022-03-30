import React, {useState} from 'react'
import './Text.css'
import Giff from '../Giff/Giff'

function Text () {
    // used setStates for state management
    const [text, setText] = useState('')
    const [newEntry, setNewEntry] = useState([])
    const changeText = (e) => {
        setText(e.target.value)
    }
    // submitHandle function when user submits
    const submitHandle = (e) => {
        e.preventDefault()
       let newData = {text}
        setNewEntry([...newEntry, newData])
        setText('')
    }
    return(
        <div className='main'>
            <div>
                <h1>Text Message</h1>
            </div>
            <div>
               <form onSubmit={submitHandle}>
                 <input placeholder='Enter Message' type='text' value={text} onChange={changeText}></input><br></br>  
                 <button>Submit</button>
               </form> 
            </div>
            {/* map method for iterating through newEntry */}
            <div>
                {
                    newEntry.map((item) => {
                        // console.log(item)
                        return(
                            <div>
                                <h1>{item.text}</h1>
                            </div>
                        )
                    })
                }
            </div>
            <Giff txt={text} set={setText}/>
        </div>
    )
}
export default Text