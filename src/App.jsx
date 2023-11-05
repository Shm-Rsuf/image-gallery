import { BrowserRouter, Route, Routes } from "react-router-dom"
import ImageGallery from "./components/ImageGallery"
import NotFound from "./pages/NotFound"

const HomePage = () => {
  return (
    <section className="w-full min-h-screen flex justify-center items-center sm:mb-10 mb-0 bg-slate-200">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<ImageGallery/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      </BrowserRouter>
    </section>
  )
}

export default HomePage