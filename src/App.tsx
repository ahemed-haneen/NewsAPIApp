import { Route, Routes } from 'react-router-dom';
import './App.css'
import BlogPosts from './Components/BlogPosts';

function App() {
  return (
    <div className="flex flex-col h-full gap-8 p-8">
      <header>
        <h1>News Feed</h1>
      </header>
      <Routes>
      <Route path="/" element={
        <main className="h-full overflow-y-scroll">
          <BlogPosts />
        </main>
      } />
      <Route path="/posts/:id" element={"Not Done"} />
      </Routes>
    </div>
  )
}

export default App
