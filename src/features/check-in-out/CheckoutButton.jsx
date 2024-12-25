import Button from "../../ui/Button";
import useCheckout from "../check-in-out/useCheckout";

function CheckoutButton({ bookingId }) {
  const { checkout, isCheckingOut } = useCheckout();

  return (
    <Button
      variation="primary"
      onClick={() => checkout(bookingId)}
      disabled={isCheckingOut}
      size="small"
    >
      Check out
    </Button>
  );
}

export default CheckoutButton;
