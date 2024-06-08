import "../assets/index.css"
import ShopItem from "../Component/ShopItem.jsx";
import {Helmet} from 'react-helmet';

function ShopPage() {
    return (
        <div>
            <Helmet>
                <title>Shop</title>
            </Helmet>
            <ShopItem/>
        </div>
    )
}

export default ShopPage;