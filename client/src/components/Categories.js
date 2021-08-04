import { Link } from 'react-router-dom'
import '../styles.css'

const Categories = () => {
    return (
        <div className='categories'>
            <div className='categories__container'>
                <h1>Product Selection</h1>
                <button className="categories__btn categories__speedcubes">
                    <Link to='/products/speedcubes'>
                        <span>3x3 Speedcubes</span>
                    </Link>
                </button>
                <button className="categories__btn categories__wca">
                    <Link to='/products/wca'>
                        <span>WCA Puzzles</span>
                    </Link>
                </button>
                <button className="categories__btn categories__large">
                    <Link to='/products/large'>
                        <span>8x8+/Megaminx+</span>
                    </Link>
                </button>
                <button className="categories__btn categories__cuboid">
                    <Link to='/products/cuboid'>
                        <span>Cuboids</span>
                    </Link>
                </button>
            </div>
        </div>
    )
}

export default Categories
