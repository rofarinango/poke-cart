import logo from '../../pokeBanner.svg'
import { useNavigate } from 'react-router-dom';
const Logo = () => {
    const navigate = useNavigate();
    return(
        <div onClick={()=>navigate('/')}>
            <img src={logo} alt='logo' style={{ cursor: 'pointer' }}/>
        </div>
        
    );
}

export default Logo;