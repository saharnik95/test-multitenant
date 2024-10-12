interface Product {
    id: number;
    name: string;
    price: string;
  }
  
  const ProductCardDesignA = ({ product }: { product: Product }) => (
    <div className="productCardA">
      <h3>{product.name}</h3>
      <p>Price: {product.price}</p>
    </div>
  );
  
  export default ProductCardDesignA;