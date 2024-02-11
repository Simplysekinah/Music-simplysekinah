import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { useNavigate,useParams } from 'react-router-dom'

const Homepage = () => {
    const [first, setfirst] = useState([])
    const endpoint ="https://robo-music-api.onrender.com/music/my-api"
    const navigate=useNavigate()
    useEffect(() => {
        axios.get(endpoint).then((response)=>{
            console.log(response);
            setfirst(response.data)
        })
    }, [])
    
    let route = useParams()
    let id = route.id
    const page=(id)=>{
       console.log(id);
        // console.log(id)
        navigate(`/play/${id}`)
    }
  return (
    <>
       <div className='home-body p-3'>
            <div className=''>
                {first&&
                    first.map((element,index)=>(
                        <div key={index} className='container mb-2 d-flex align-items-center songs rounded-2' onClick={(()=>page(element.id))} >
                            <div><img src={element.songImage} className='rounded-3 my-3 more' alt="" width={100} /></div>
                            <div className='mx-5'>
                                <div className=''>{element.songTitle}</div>
                                <div className=''>{element.artistName}</div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div> 
    </>
  )
}

export default Homepage