import History from '../Components/History'
import NotFound from '../Components/NotFound'
import Header from '../Components/Header'
import FormTopup from '../Components/FormTopup'
import '../Assets/App.css'

import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
          <Route path="/" element={<FormTopup />}></Route>
          <Route path="/riwayat" element={<History />}></Route>
          <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;