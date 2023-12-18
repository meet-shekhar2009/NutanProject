import './Style.css';
import cartshopping from '../images/cart-shopping-solid.svg';
const Header = () => {

    return (
        <div className='header'>
            <div className='title'><h2>MY MYNTRA</h2></div>
            <div><img className='image' height='50' src={cartshopping}></img></div>
        </div>
    )
}
export default Header;