import Nav from '../components/Nav'
import Footer from '../components/Footer'


export default function SiteLayout({ children }){
return (
<div className="site">
<Nav />
<main className="container">
{children}
</main>
<Footer />
</div>
)
}