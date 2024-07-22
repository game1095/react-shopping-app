import "./Header.css";
import { useCart } from "../context/CartContext";
export default function Header() {
  const { amount } = useCart();
  return (
    <header>
      <p>Shopping Application</p>
      <p>จำนวนสินค้าในตะกร้า : {amount} ชิ้น</p>
    </header>
  );
}
