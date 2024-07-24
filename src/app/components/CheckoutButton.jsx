// not completed yet
// import { store } from "../lib/store";
// import { config } from "../../config";

const CheckoutBtn = ({ products }) => {
  // const { currentUser } = store();
  // const publishableKey =
  //   "pk_test_51PWdLHKMztBLVeWcnAmD76Kho5WePBJleYTv7IIBk6TiAwmEL8TjP7CenwBI2rFHVnBYT0LIr6IR7WqkYijqtfrF00W96lGlPV";
  // const stripePromise = loadStripe(publishableKey);

  const handleCheckout = async () => {};
  return (
    <div className="mt-6">
      {currentUser ? (
        <button
          onClick={handleCheckout}
          type="submit"
          className="w-full rounded-md border border-transparent bg-gray-800 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-black focus:outline-none focus:ring-2 focus:ring-skyText focus:ring-offset-2 focus:ring-offset-gray-50 duration-200"
        >
          Checkout
        </button>
      ) : (
        <button className="w-full text-base text-white text-center rounded-md border border-transparent bg-gray-500 px-4 py-3 cursor-not-allowed">
          Checkout
        </button>
      )}
      {!currentUser && (
        <p className="mt-2 text-sm font-medium text-red-500 text-center">
          Need to sign in to make checkout
        </p>
      )}
    </div>
  );
};

export default CheckoutBtn;
