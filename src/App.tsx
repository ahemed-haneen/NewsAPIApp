import './App.css'
import BlogPosts from './Components/BlogPosts';

function App() {
  return (
    <div className="flex flex-col h-full gap-8 p-8">
      <header>
        <h1>News Feed</h1>
      </header>
      <main className="h-full overflow-hidden">
        <BlogPosts />
      </main>
    </div>
  )
}

export default App
