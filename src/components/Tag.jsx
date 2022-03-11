import { useState } from 'react'

import useGif from '../useGif'

const Tag = () => {
  const [tag, setTag] = useState('dogs');
  const {gif, fetchGif} = useGif(tag);
  
  
  return (
    <div className='container'>
      <img src={gif} alt={`Random ${tag} GIF`} />
      <input value={tag} onChange={(e) => setTag(e.target.value)} />
      <button onClick={() => fetchGif(tag)}>Click FOR NEW ONE</button>
    </div>
  )
}

export default Tag;