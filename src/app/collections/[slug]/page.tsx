import React from 'react';
import ProducContainer from './ProductContainer';
interface PageProps {
  params: Promise<{ slug: string }>; 
}
const ProductDetail = async ({ params }: PageProps) => {
  const { slug } = await params;
  return <ProducContainer slug={slug}/>;
};

export default ProductDetail;
