import Item from "./Item";
import { useCart } from "../context/CartContext";
import "../components/Cart.css";

export default function Cart() {
  const { products, total, formatMoney } = useCart();
  return (
    <div className="cart">
      <h1 className="center">
        {products.length > 0
          ? `ยอดชำระเงินรวม : ${formatMoney(total)} บาท`
          : "ไม่มีสินค้าในตระกร้า"}
      </h1>
      {products.map((data) => {
        return <Item key={data.id} {...data} />;
      })}
    </div>
  );
}
