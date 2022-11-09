import axios from 'axios'
import React, {useState, useEffect} from 'react'
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'
import Movies from './Movies'

const Rows = ({title, fetchURL, rowId}) => {
    const [movies, setMovies] = useState([])
    const [isLoading, setIsLoading] =useState(true)


    useEffect(() => {
        const fetchData = async() => {
            const data = await axios.get(fetchURL)
            setMovies(data.data.results)
            setIsLoading(false)
        }
        fetchData()
    }, [fetchURL])


    // SLide bar
    const sliderLeft = () => {
        let sliderLeft = document.getElementById('slider' + rowId)
        sliderLeft.scrollLeft = sliderLeft.scrollLeft - 500
    }

    const slideRight = () => {
        let sliderLeft = document.getElementById('slider' + rowId)
        sliderLeft.scrollLeft = sliderLeft.scrollLeft + 500
    }

    if(isLoading) {
        return <div>Loading ...</div>
    }
  return (
    <>
        <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2> 
        <div className='relative flex items-center group'>
            <MdChevronRight onClick={slideRight} className='bg-white right-0 rounded-full opacity-50 hover:opacity-100 absolute cursor-pointer z-10 hidden group-hover:block' size={40} />
            <div id={'slider' + rowId}className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                {movies.map((movie) => (
                    <Movies key={movie.id} movie={movie} />
                    ))}
            </div>
            <MdChevronLeft onClick={sliderLeft} className='bg-white left-0 rounded-full opacity-50 hover:opacity-100 absolute cursor-pointer z-10 hidden group-hover:block' size={40} />
        </div>
    </>
  )
}

export default Rows
