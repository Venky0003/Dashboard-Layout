import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <header>
      <div className='flex align-center m-left-25'>
        <FontAwesomeIcon icon={faChartBar}/><h1><a href='/'className='m-left-15 text-white'>Dashboard</a></h1>
      </div>
    </header>
  );
}

export default Header;
