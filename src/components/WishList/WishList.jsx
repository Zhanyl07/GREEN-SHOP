import React from 'react'
import "./WishList.scss"
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import xdd from '../../assets/svg/x.svg'
import banner from "../../assets/image/banner.png"

function WishList() {
    const {items} = useSelector((state) => state.wishlist)
    const dispatch = useDispatch()

  return (
    <div>
      <div className='wishlist container'>
        <div className='top-wishlist'>
            <p>Wishlist ({items.length}) </p>
            <button>Move All To Bag</button>
        </div>
        <div className='products'>
            {
                items.map((data) => (
                    <div className='card'>
                        <div className='card-img'>
                            <div className='send'>
                                <p>-35%</p>
                                <img onClick={() => dispatch(deleteWish(data.id))} src={xdd} alt="" />
                            </div>
                            <div className='image'>
                                <img src={banner} alt="" />
                            </div>
                            <button className='button'>
                                <span>Add To Cart</span>
                            </button>
                        </div>
                        <div className='card-texts'>
                            <h2>{data.name}</h2>
                            <div className='price'>
                                <p>$960</p>
                                <del>$1160</del>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
      </div>

    </div>
  )
}

export default WishList