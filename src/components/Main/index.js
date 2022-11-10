import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {requests} from '../../untils/RequesApi'


const Main = () => {
    const [movies, setMovies] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const moive = movies[Math.floor(Math.random() * movies.length)]
    
    const getApi = async() => {
        try {
            const data = await axios.get(requests.requestPopular)
            setMovies(data.data.results)
            setIsLoading(false)
        } catch (error) {
            console.log(error)
        }
        
    }

    useEffect(() => {
        getApi()
    }, [])

    const truncatString = (str, num) => {
        if(str.length > num) {
            return str.slice(0, num) + ' ...'
        } else {
            return str
        }
    }

    if(isLoading) {
        return <div className='text-center text-white'>Loading ...</div>
    } else {
  return (
    <div className='w-full h-[550px] text-white'>
        <div className='w-full h-full'>
            <div className='absolute w-full h-[550px] bg-gradient-to-r from-black'></div>
            <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${moive?.backdrop_path}`} alt={moive?.title} />
        </div>
        <div className='absolute top-[20%] p-4 md:p-8'>
            <h2 className='text-3xl md:text-4xl'>{moive?.title}</h2>
            <div className='my-4'>
                <button className='border bg-gray-300 text-black border-gray-300 py-2 px-5'>Play</button>
                <button className='border text-white border-gray-300 py-2 px-5 ml-4'>Watch Later</button>
            </div>
            <p className='text-gray-400 text-sm'>Release: {moive?.release_date}</p>
            <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>{truncatString(moive?.overview, 200)}</p>
        </div>
    </div>
  )}
}

export default Main
