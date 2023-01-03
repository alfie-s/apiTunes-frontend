import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// return details for header that will stay on both pages
const Header = () => {
   return (
      <div>
         <div className='headerCont'>
            <div className='header'>
               {/* Heading */}
               APiTunes
            </div>
            <div className='favBtnCont'>
               {/*display favourites button in header*/}
               <Link to='/favourites'>
                  <Button className='favBtn'>Favourites</Button>
               </Link>
            </div>
         </div>
      </div>
   )
}
export default Header
