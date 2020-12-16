//
// ::::::: Importaciones
//

// Creamos dicho INDEX JS  para importar todas las PAGES y luego ser exportadas
// A fin de mantener la APP JS clean (Importaremos los nombres unicamente)

import Home from './HomePage';
import About from './AboutPage';
import Error from './ErrorPage';
import PrivateRoute from './PrivateRoute';
import Products from './ProductsPage';
import SingleProduct from './SingleProductPage';
import Cart from './CartPage';
import Checkout from './CheckoutPage';

export {
  Home,
  About,
  Error,
  PrivateRoute,
  Products,
  SingleProduct,
  Cart,
  Checkout,
};
