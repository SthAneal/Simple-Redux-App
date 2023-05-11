import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../redux/index";
import { increment, decrement, incrementByAmount, reset } from "../redux/cartSlice";

import "../assets/scss/cart.scss";

export const Cart = () => {
    const dispatch = useDispatch();
    const cartValue = useSelector((state: RootState) => state.cart.value);

    const increaseCounter = () => {
        // console.log(increment());
        dispatch(increment());
    };

    const decreaseCounter = () => {
        dispatch(decrement());
    };

    const increaseByAmount = (num:number) => {
        // console.log(incrementByAmount(2));

        dispatch(incrementByAmount(num));
        // dispatch({ type: 'cart/incrementByAmount', payload: 2 });
    };

    const incrementAsync = (amount:number) => {
        setTimeout(() => {
            dispatch(incrementByAmount(amount))
        }, 3000)
    }

    const resetCounter = ()=>{
        dispatch(reset());
    }

  


    return (
        <div className="cart">
            <div className="value">{cartValue}</div>
            <div className="cart-action">
                <span className="btn" onClick={increaseCounter}>+</span>
                <span className="btn" onClick={decreaseCounter}>-</span>
            </div>
            <div className="btn" onClick={()=>increaseByAmount(2)}>update by 2</div>
            <div className="btn" onClick={()=>incrementAsync(3)}>update 3 Async</div>
            <div className="btn" onClick={()=>resetCounter()}>reset</div>

        </div>
    )
}