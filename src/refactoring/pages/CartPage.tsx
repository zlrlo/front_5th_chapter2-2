import { CartSection, ProductSection } from '../widgets';

interface Props {}

export const CartPage = ({}: Props) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">장바구니</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProductSection />
        <CartSection />
      </div>
    </div>
  );
};
