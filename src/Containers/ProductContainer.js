import products from '../Components/pages/Products'
import {connect} from 'react-redux'
import {addToCart} from '../Service/Action/Action'
import Products from '../Components/pages/Products'

const mapStateToProps=state=>({
    // data:state.cardItems
})
const mapDispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data))

})
export default connect(mapStateToProps,mapDispatchToProps)(Products)