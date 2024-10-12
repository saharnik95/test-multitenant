interface Product {
    id: number;
    name: string;
    price: string;
  }
  
  const ProductCardDesignB = ({ product }: { product: Product }) => (
    <div className="productCardB">
      <h3>{product.name}</h3>
      <p>Price: {product.price}</p>
    </div>
  );
  
  export default ProductCardDesignB;