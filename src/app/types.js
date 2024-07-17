// types.js
import PropTypes from "prop-types";

export const HighlightsType = {
  _id: PropTypes.number.isRequired,
  _base: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  buttonTitle: PropTypes.string.isRequired,
};

export const CategoryProps = {
  _id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  _base: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export const ProductProps = {
  _id: PropTypes.number.isRequired,
  _base: PropTypes.string.isRequired,
  reviews: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  overView: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isStock: PropTypes.bool.isRequired,
  isNew: PropTypes.bool.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  discountedPrice: PropTypes.number.isRequired,
  regularPrice: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  category: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
};

export const BlogProps = {
  _id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  _base: PropTypes.string.isRequired,
};

export const UserTypes = {
  currentUser: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export const OrderTypes = {
  orderItems: PropTypes.arrayOf(PropTypes.shape(ProductProps)).isRequired,
  paymentId: PropTypes.string.isRequired,
  paymentMethod: PropTypes.string.isRequired,
  userEmail: PropTypes.string.isRequired,
};
