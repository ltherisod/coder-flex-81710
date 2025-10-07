import { FaShoppingCart } from "react-icons/fa";
import {Badge} from 'react-bootstrap'

const CartWidgetRI = ()=>{
    return(
        <>
        <FaShoppingCart fontSize={'1.3rem'} />
        <Badge pill bg="danger">5</Badge>
        </>
    )
}

export default CartWidgetRI