import React, {useState, useEffect, Fragment} from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { AiOutlineClose } from 'react-icons/ai'


import { UserAuth } from '../../context/AuthContext'
import { db } from '../../firebase'
import {updateDoc, doc, onSnapshot} from 'firebase/firestore'

const ShowAccount = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [movies, setMovies] = useState([])

  const {user} = UserAuth()
  
  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (res) => {
      setMovies(res.data()?.saveShows)
      setIsLoading(false)
  });
   
  }, [user?.email])


  // SLide bar
  const sliderLeft = () => {
    let sliderLeft = document.getElementById('slider')
    sliderLeft.scrollLeft = sliderLeft.scrollLeft - 500
}

const slideRight = () => {
    let sliderLeft = document.getElementById('slider')
    sliderLeft.scrollLeft = sliderLeft.scrollLeft + 500
}

const movieRef = doc(db, 'users', `${user?.email}`)

const deleteShow = async (showId) => {
  try {
    const result = movies.filter(movie => movie.id !== showId)

    updateDoc(movieRef, {
      saveShows: result
    })
  } catch (error) {
    console.log(error)
  }
}

if(isLoading) {
  return <div>Loading ...</div>
}
  return (
    <>
        <h2 className='text-white font-bold md:text-xl p-4'>My Shows</h2> 
        <div className='relative flex items-center group'>
          {movies === undefined ? <Fragment>
                  <h2 className='text-white text-xl text-center'>You not choose any show !!</h2>
                </Fragment> :
                <Fragment>
                  <MdChevronRight onClick={slideRight} className='bg-white right-0 rounded-full opacity-50 hover:opacity-100 absolute cursor-pointer z-10 hidden group-hover:block' size={40} />
            <div id={'slider'}className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                {movies.map((movie) => (
                    <div key={movie.id} className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
                    <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500/${movie.img}`} alt={movie.title} />
                    <div className='absolute top-0 left-0 w-full h-full hover:bg-black/70 opacity-0 hover:opacity-100 text-white'>
                    <p className='white-space-normal text-xs md:text-sm font-bold flex items-center justify-center h-full text-center'>{movie.title}</p>
                    <p 
                    onClick={() => deleteShow(movie.id)}
                    className='text-xl sm:text-2xl absolute top-3 right-3 hover:text-gray-500'><AiOutlineClose /></p>
                    </div>
                </div>
                    ))}
            </div>
            <MdChevronLeft onClick={sliderLeft} className='bg-white left-0 rounded-full opacity-50 hover:opacity-100 absolute cursor-pointer z-10 hidden group-hover:block' size={40} />
                </Fragment>
                }
        </div>
    </>
  )
}

export default ShowAccount
