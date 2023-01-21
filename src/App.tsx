import { useFetch } from './hook/useFetch/useFetch';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import { Zboruri } from './pages/Zboruri/Zborur';


const url: string =
  "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/64989ad8-dc80-4cad-bd6d-870ba0be2f4d/roundtrip.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230121T043818Z&X-Amz-Expires=86400&X-Amz-Signature=23445a1cca2920fede2f9689350b648ac68be34fadde629f975d552ca03cbb9a&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22roundtrip.json%22&x-id=GetObject";


function App() {

  const {data_db, pendign, error} = useFetch(url);

  

  return (

    <BrowserRouter>

    <Routes>
      <Route path='/zboruri' element={<Zboruri data={data_db} 
                                               pending={pendign}
                                               error={error}
            />}></Route>
    </Routes>


    <div className="App">
     
    </div>

    </BrowserRouter>
  )
}

export default App
