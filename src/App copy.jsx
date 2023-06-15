import { useState } from 'react'
import './App.css'
import Modal from './components/Modal'

function App() {
  // page 번호 (0 , 1 , 2)
  const [tab, setTab] = useState(0);  
  console.log(tab);

  const articleJSX = [
    (<article>
      <h1>HTML</h1>
      <p>Hyper Text Markup Language</p>
    </article>), // 배열 [0] 번
    (<article>
      <h1>CSS</h1>
      <p>Cascading Style Sheet</p>
    </article>), // 배열 [1] 번
    (<article>
      <h1>JavaScript</h1>
      <p>Web Programming Language</p>
    </article>) // 배열 [2] 번
  ]

  return (
    <>
      <h1>App</h1>
      <p>Tab UI</p>
      <div className='tab-ui'>

        <div className='tab-group'>
          <a 
            style={tab ===0 ? {color: 'white' , backgroundColor: 'black'} : null}
            href='#tab1'
            onClick={() => setTab(0)}>HTML</a>
          <a 
            style={tab ===1 ? {color: 'white' , backgroundColor: 'black'} : null} 
            href='#tab2' onClick={() => setTab(1)}>CSS</a>
          <a 
            style={tab ===2 ? {color: 'white' , backgroundColor: 'black'} : null} 
            href='#tab3' onClick={() => setTab(2)}>javascript</a>
        </div>
        
        <div className='tab-contents'>

          {tab === 0 && articleJSX[tab]}
          {tab === 1 && articleJSX[tab]}
          {tab === 2 && articleJSX[tab]}

        </div>

      </div>
    </>
  )
}
export default App
