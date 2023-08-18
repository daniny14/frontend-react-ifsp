import Header from "./Header"
import Footer from "./Footer"
import Content from "./Content"
import Sidebar from "./Sidebar"

const App = () => {
  return (
    <>
      <Header />
      <div id="main">
        <Sidebar />
        <Content />
      </div>
      <Footer />
    </>
  )
}

export default App