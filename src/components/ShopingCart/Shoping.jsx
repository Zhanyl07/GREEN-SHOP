import React from 'react';
import { Link } from 'react-router-dom';
import './Shoping.scss'; 
import productcheck from '../../assets/image/productcheck.png';
import green from '../../assets/image/g.png';
import deleteimg from '../../assets/svg/delete.svg';
import { useSelector, useDispatch } from 'react-redux';
import { removeCart, updateCart } from '../../redux/Cart/CartSlice';

function Shopping() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.carts.ali); // Получаем корзину из Redux

  // Обработчик изменения количества товара
  const handleQuantityChange = (productId, action) => {
    const productIndex = cartItems.findIndex(item => item.id === productId);
    if (productIndex !== -1) {
      const updatedCart = [...cartItems];
      const product = updatedCart[productIndex];
      
      if (action === "increase") {
        updatedCart[productIndex] = { ...product, quantity: product.quantity + 1 };
      } else if (action === "decrease" && product.quantity > 1) {
        updatedCart[productIndex] = { ...product, quantity: product.quantity - 1 };
      }

      dispatch(updateCart(updatedCart)); // Обновляем корзину в Redux
    }
  };

  // Обработчик удаления товара из корзины
  const handleRemoveProduct = (productId) => {
    dispatch(removeCart(productId)); // Удаляем товар из корзины
  };

  // Функция для форматирования цены
  const formatPrice = (price) => {
    const parsedPrice = parseFloat(price);
    return isNaN(parsedPrice) ? 0 : parsedPrice; // Если не число, возвращаем 0
  };

  // Рассчитываем итоговую стоимость корзины
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (formatPrice(item.price) * item.quantity), 0);
  };



  
  return (
    <div className='shopping'>
      <div className="home-shopping">
        <Link className='shopping-home' to="/">Home</Link> / 
        <Link className='shopping-shop' to="/shop">Shop</Link> /
        <Link className='shopping-cart' to="/shop">Shopping Cart</Link>
      </div>

      <div className="all-shopping">
        <div className="info-shopping">
          <p>Products</p>
          <p className='price'>Price</p>
          <p className='quantity'>Quantity</p>
          <p className='total'>Total</p>

          <div className="text1">
            <p> Cart Totals</p>
          </div>
        </div>

        <div className="line"></div>

        <div className="rglt">
          <div className="shopping-left">
            {cartItems.map((product) => (
              <div className="product-shopping" key={product.id}>
                <img src={productcheck} alt="Product" />
                <div className="shopping-daisy">
                  <div className="pro-shopping">
                    <p>{product.name}</p>
                  </div>
                  <div className="sku-shopping">
                    <p>SKU:</p>
                    <span>{product.sku}</span>
                  </div>
                </div>

                <div className="shop-price">
                  <span>${formatPrice(product.price).toFixed(2)}</span>
                </div>

                <div className="quantity-shopping">
                  <button onClick={() => handleQuantityChange(product.id, "decrease")}>-</button>
                  <p>{product.quantity}</p>
                  <button onClick={() => handleQuantityChange(product.id, "increase")}>+</button>
                </div>

                <div className="shopping-price">
                  <span>${(formatPrice(product.price) * product.quantity).toFixed(2)}</span>
                </div>

                <div className="shopping-delete">
                  <img src={deleteimg} alt="delete" onClick={() => handleRemoveProduct(product.id)} />
                </div>
              </div>
            ))}
          </div>

          <div className="shopping-right">
            <div className="line1"></div>

            <div className="coupon">
              <p>Coupon Apply</p>
            </div>
            <div className="right">
              <input type="text" placeholder='Enter coupon code here...' />
              <button>Apply</button>
            </div>

            <div className="sub-shoping">
              <div className="sub-text">
                <p>Subtotal</p>
                <span className='two'>${calculateTotal().toFixed(2)}</span>
              </div>

              <div className="sub-text1">
                <p>Coupon Discount</p>
                <span className='two'>(-) 00.00</span>
              </div>

              <div className="sub-text2">
                <p>Shipping</p>
                <span className='two'>$16.00</span>
              </div>

              <div className="link">
                <Link>
                  <p>View shipping charge</p>
                </Link>
              </div>
            </div>

            <div className="sub-text3">
              <p>Total</p>
              <span className='two'>${(calculateTotal() + 16).toFixed(2)}</span>
            </div>

            <div className="proseed">
              <Link to="/productcheckout">
                <button>Proceed To Checkout</button>
              </Link>
              <Link>
                <p>Continue Shopping</p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="releted1">
        <h3>You may be interested in</h3>
        <div className="line1"></div>

        <div className="oll1">
          {[...Array(8)].map((_, i) => (
            <div className="rel-product1" key={i}>
              <img src={green} alt="related" />
              <div className="rel-text1">
                <p>Beach Spider Lily</p>
                <span>$129.00</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Shopping;
