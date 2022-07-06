import './Wigget.css';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import BalanceIcon from '@mui/icons-material/Balance';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const Widget = ({type}) => {

    let data;

    switch (type) {
        case 'user':
            data = {
                title:'USER',
                price : '100$',
                details:'See all users',
                icon:() => <PersonOutlineIcon className='icon'
                style={{
                    backgroundColor: "rgba(218, 165, 32, 0.2)",
                    color: "goldenrod",
                  }}
                />
            }
           break;
        case 'order': 
            data = {
                title:'ORDERS',
                price : '80$',
                details:'View All Orders',
                icon: () => <AddShoppingCartIcon className = 'icon'
                style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
                />
            }
        break; 
        case 'earn': 
            data = {
                title:'EARNINGS',
                price : '80$',
                details:'View net earnings',
                icon: () => <CurrencyExchangeIcon className = 'icon'
                    style={{
                        color: "crimson",
                        backgroundColor: "rgba(255, 0, 0, 0.2)",
                    }}
                />
            }
        break; 
        case 'balance': 
        data = {
            title:'Balances',
            price : '70$',
            details:'See details',
            icon: () => <BalanceIcon className = 'icon'
                style={{
                    backgroundColor: "rgba(128, 0, 128, 0.2)",
                    color: "purple",
                }}
            />
        }
    break;  
        default:
            break;
    }

    const {title, price, details, icon} = data;
    return (
        <section className = 'widget'>
            <div className='head'>
                <p className='title'>{title}</p>
                <p className='head_icon'><span><KeyboardArrowUpIcon className='icon'/></span> 20%</p>
            </div>
            <div className='price'>
                {price}
            </div>
            <footer>
                <p>{details}</p>
                <p>{icon()}</p>
            </footer>
        </section>
    )    
}

export default Widget;