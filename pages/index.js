import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Home() {
  const [catImage, setCatImage] = useState('');

  useEffect(() => {
    fetchCatImage();
  }, []);

  const fetchCatImage = async () => {
    try {
      const res = await axios.get('https://api.thecatapi.com/v1/images/search');
      setCatImage(res.data[0].url);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button onClick={fetchCatImage}>別の写真</button>
      <h1>catAPI使用  ランダムで猫の写真または、GIF画像がでます</h1>
      {catImage && <img src={catImage} alt="cat" />}
    </div>
    
  );
}
