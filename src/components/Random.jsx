

import useGif from '../useGif'

const Random = () => {
  const {gif, fetchGif} = useGif(); 
  
  return (
    <div className='container'>
      <img src={gif} alt="Random Gif cat gif" />
      <button onClick={fetchGif}>CLICK FOR NEW ONE</button>
    </div>
  )
}

export default Random;