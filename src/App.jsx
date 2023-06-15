import { useState } from 'react'
import './App.css'

function App() {
  const [likes , setLikes] = useState([0,0,0]);

  const posts = ['첫번째 글' , '두번째 글' , '세번째 글']

  // 좋아요 버튼 클릭함수
  const btnLike = (i) => {    //(i) 은 역참조
    let copy = [...likes] // likes 배열 복사
    copy[i] += 1; // 클릭한 버튼의 번호 증가
    setLikes(copy)
  }

  return (
    <>
      <h1>map()</h1>
      
      {
        likes.map((like, i)=>{
          return (
            <div key={i}>
              <span>{posts[i]} | </span>
              <span onClick={() => btnLike(i)}> 좋아요 ❤</span>
              <span className='like'>{likes[i]}</span>
            </div>
          )
        })
      }
    </>
  )
}

export default App