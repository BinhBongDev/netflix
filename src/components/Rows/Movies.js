import React, { useState } from 'react'
import {FaHeart, FaRegHeart} from 'react-icons/fa'
import {UserAuth} from '../../context/AuthContext'
import { db } from '../../firebase'
import {arrayUnion, doc, updateDoc} from 'firebase/firestore'

const Movies = ({movie}) => {
    const [like, setLike] = useState(false)
    const [save, setSave] = useState(false)
    const {user} = UserAuth()

    const movieId = doc(db, 'users', `${user?.email}`)

    const saveShows = async () => {
      if(user?.email) {
        setLike(!like)
        setSave(true)
        await updateDoc(movieId, {
          saveShows: arrayUnion({
            id: movie.id,
            title: movie.title,
            img: movie.backdrop_path

          })
        })
      } else {
        alert('Please Login to save moive')
      }
    }
  return (
    <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
        <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt={movie.title} />
        <div className='absolute top-0 left-0 w-full h-full hover:bg-black/70 opacity-0 hover:opacity-100 text-white'>
            <p className='white-space-normal text-xs md:text-sm font-bold flex items-center justify-center h-full text-center'>{movie.title}</p>
            <p className='absolute top-4 left-4' onClick={saveShows}>
            {like ? <FaHeart color='red' size={20} /> : <FaRegHeart size={20} />}
            </p>
        </div>
    </div>
  )
}

export default Movies
