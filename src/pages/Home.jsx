import '../css/Home.css';
import { Link } from 'react-router-dom';
import logo  from '../assets/img/logo.png';

function Home() {

    return(
        <main className='main-homepage'>
            <div className='logoContainer'>
                <img src={logo} alt='Wealth Health logo' className='animated-logo'/>
                <h1>Wealth Health</h1>
            </div>

            <div>
                <Link to={'/create'} className='btn create-employee-link'>Create New Employee</Link>
                <Link to={'/list'} className='btn list-employee-link'>View Current Employees</Link>
            </div>
        </main>
    )
}

export default Home