
import NavBar from '../components/navBar/navBar'
import Banner from '../components/Banner/Banner';
import RowPost from '../components/RowPost/RowPost';
import Footer from '../components/Footer/Footer';
import{Action,orginals,romance,comedy,doc,horror} from '../url'


function Home() {
  return (
   <div className='newdiv'>
    <NavBar/>
    <Banner/>
    <RowPost url={orginals} title='Top Rated '/>
    <RowPost url={Action} title='Action'  isSmall/>
    <RowPost url={comedy} title='Comedy'  isSmall/>
    <RowPost url={romance} title='Romance'  isSmall/>
    <RowPost url={horror} title='Horror'  isSmall/>
    <RowPost url={doc} title='Documentries'  isSmall/>
    <Footer/>
   </div>
  );
}

export default Home;
