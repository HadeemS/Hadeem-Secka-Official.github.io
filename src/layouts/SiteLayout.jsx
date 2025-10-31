import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function SiteLayout({ children }){
  return (
    <div className="site">
      <a className="skip-link" href="#main">Skip to content</a>
      <Nav />
      {children}
      <Footer />
    </div>
  )
}