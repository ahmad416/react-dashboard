import './Gidget.scss';
import {
    PersonOutline,
    ShoppingCartOutlined,
    KeyboardArrowUp,
    MonetizationOnOutlined,
    AccountBalanceWalletOutlined
} from "@mui/icons-material";

interface Gidget {
    title: string;
    isMoney: boolean;
    link: string;
    icon: any
}

type WidgetProps  = {
    type: string
}

const Gidget = ({ type }: WidgetProps) => {
    let data: Gidget = {} as Gidget;
    const amount = 100;
    const diff = 20;

    switch (type)  {
        case 'user':
            data = {
                title: 'USERS',
                isMoney: false,
                link: 'See all users',
                icon: (
                    <PersonOutline
                        className='icon'
                        style={{
                            color: 'crimson',
                            backgroundColor: 'rgba(255, 0, 0, 0.2)'
                        }}
                    />
                )

            };
            break;
        case 'order':
            data = {
                title: 'Orders',
                isMoney: false,
                link: 'See all orders',
                icon: (
                    <ShoppingCartOutlined
                        className='icon'
                        style={{
                            color: 'crimson',
                            backgroundColor: 'rgba(255, 0, 0, 0.2)'
                        }}
                    />
                )

            };
            break;
        case 'earning':
            data = {
                title: 'Earnings',
                isMoney: true,
                link: 'View net earnings',
                icon: (
                    <MonetizationOnOutlined
                        className='icon'
                        style={{
                            color: 'crimson',
                            backgroundColor: 'rgba(255, 0, 0, 0.2)'
                        }}
                    />
                )

            };
            break;
        case 'balance':
            data = {
                title: 'Balance',
                isMoney: true,
                link: 'See details',
                icon: (
                    <AccountBalanceWalletOutlined
                        className='icon'
                        style={{
                            color: 'crimson',
                            backgroundColor: 'rgba(255, 0, 0, 0.2)'
                        }}
                    />
                )

            };
            break;
    }
    return (
        <div className='widget'>
            <div className="left">
                <span className="title">{data?.title}</span>
                <span className="counter">
                    { data.isMoney && '$'} {amount}
                </span>
                <span className="link">{ data.link}</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUp/>
                    { diff} %
                </div>
                { data.icon}
            </div>
        </div>
    )
}

export default Gidget;
