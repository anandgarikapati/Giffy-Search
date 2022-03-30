import React, {useState, useEffect, Fragment} from 'react'

// APIKEY from GIFFYAPI
let APIKEY = 'd1DzBwj37M0wCthBHcyfOrK9YmuSBJGy'

function Giff ({txt}) {
     // used setStates for state management
    const [search, setsearch] = useState('')
    const [images, setImages] = useState([])
    const [img1, setImg1] = useState([]) 
    const [text, setText] = useState('')
    
    let URL = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=10&q=${search}`

    const changeHandler = (e) => {
        setsearch(e.target.value) 
    }

    const submitHandler = (e) => {
        e.preventDefault()
        
        let res = fetch(URL).then((response) => response.json())
            // .then((data) => console.log(data))
            .then((reslut) => {
                setImages(reslut.data.map((gif) => {
                    return gif.images.fixed_height_small.url
                        }))
                    })
                   
        setsearch('')
    }
    const clickHandler = (e) => {
        setText(txt)
        console.log(e)
        console.log(e.target.src)
        setImg1(e.target.src)
    }
    return(
        <div>
            <div>
                <h1>Giff Search</h1>
            </div>
            <div>
                <form onSubmit={submitHandler}>
                    <input placeholder='Enter a Word' type='text' value={search} onChange={changeHandler}></input><br></br>
                    <button>Search</button>
                </form>
            </div>
            <h1>{}</h1>
            <div className='imagesection'>
                {
                    images.map((img) => {
                        return(
                            <React.Fragment>
                               
                                <img src={img}
                                     onClick={clickHandler}
                                ></img>
                                
                            </React.Fragment>
                        )
                    })
                }
            </div>
           <div className='listmain'>
             <div className='list'>
               <h2>{text}</h2>
               <img src={img1}></img>
             </div>
           </div>
          
        </div>
    )
}
export default Giff