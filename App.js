import React, {useState} from 'react'
import './App.css'

const LikeButton = () => {
  const [liked, setLiked] = (false)
  const toggleLiked = () => setLiked(!liked)
  return (
    <button className='likeButton' onClick={toggleLiked}>
    {liked ? 'いいね済' : 'いいね前'}
    </button>
  )
}
export default App
