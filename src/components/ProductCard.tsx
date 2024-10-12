import dynamic from 'next/dynamic';
import { FC } from 'react';

const productCardMap = {
  'ProductCardDesignA': dynamic(() => import('./products/ProductCardDesignA')),
  'ProductCardDesignB': dynamic(() => import('./products/ProductCardDesignB')),
};

interface Product {
  id: number;
  name: string;
  price: string;
}

interface ProductCardProps {
  product: Product;
  config: {
    productCard: string;
  };
}

const ProductCard: FC<ProductCardProps> = ({ product, config }) => {
  const ProductCardComponent = productCardMap[config.productCard as keyof typeof productCardMap ] || productCardMap['ProductCardDesignA'];
  return <ProductCardComponent product={product} />;
};

export default ProductCard;