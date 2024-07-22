import "./Item.css";
import { useCart } from "../context/CartContext";

export default function Item(props) {
  const { id, name, price, image, quantity } = props;
  const { formatMoney, removeItem , addQuantity , removeQuantity } = useCart();
  return (
    <div className="card">
      <img src={image} alt={name} />
      <div className="product">
        <p className="name">ชื่อสินค้า : {name}</p>
        <p className="price">ราคาสินค้า : {formatMoney(price)} บาท</p>
      </div>
      <div className="quantity">
        <button onClick={()=> addQuantity(id)}>+</button>
        <input type="text" value={quantity} disabled />
        <button onClick={() => removeQuantity(id)}>-</button>
      </div>
      <div className="total-price">{formatMoney(quantity * price)}</div>
      <button onClick={()=>removeItem(id)}>ลบสินค้า</button>
    </div>
  );
}
