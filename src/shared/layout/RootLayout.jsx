import Header from "../partial/Header"
import Footer from "../partial/Footer"
import Main from "../../pages/Main"

const RootLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Header />
        <Main />
      <Footer />
    </div>
  )
}

export default RootLayout