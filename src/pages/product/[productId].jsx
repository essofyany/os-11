import { useRouter } from "next/router";

const SingleProductPage = () => {
  const { query } = useRouter();
  return (
    <div>
      SingleProductPage
      {query.productId}
    </div>
  );
};

export default SingleProductPage;
