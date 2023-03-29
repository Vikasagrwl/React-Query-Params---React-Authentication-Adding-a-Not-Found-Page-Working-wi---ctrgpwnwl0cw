import React from 'react'
import { BrowserRouter, Routes, Route, useSearchParams } from 'react-router-dom';
import '../styles/App.css';

const Detail = ()=>{
  const [searchParam] = useSearchParams();

  return(
    <div className='details'>
      Employee {searchParam.get('id')} named {searchParam.get('name')} works as {searchParam.get('designation')}
    </div>
  )
}

const App = () => {
  //Write your code here

  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Detail />} />
      </Routes>
    </BrowserRouter>
  )
  
}

export default App;
