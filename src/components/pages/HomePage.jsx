import productsHomepage from "../../assets/products-homepage.jpg";

export default function HomePage() {
  return (
    <section className="flex justify-center text-center mt-2">
      <div>
        {" "}
        <h2>Benvenuti nel nostro e-shop!</h2>
        <img
          className="m-2 w-100"
          src={productsHomepage}
          alt="prodotti homepage"
        />
      </div>
    </section>
  );
}
