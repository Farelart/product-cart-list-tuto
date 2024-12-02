import { getImagePath } from "@/utils/paths";

export const menuItems = [
  {
    id: 1,
    image: {
      thumbnail: getImagePath("/assets/images/image-waffle-thumbnail.jpg"),
      mobile: getImagePath("/assets/images/image-waffle-mobile.jpg"),
      tablet: getImagePath("/assets/images/image-waffle-tablet.jpg"),
      desktop: getImagePath("/assets/images/image-waffle-desktop.jpg"),
    },
    name: "Waffle with Berries",
    category: "Waffle",
    price: 6.5,
  },
  {
    id: 2,
    image: {
      thumbnail: getImagePath(
        "/assets/images/image-creme-brulee-thumbnail.jpg"
      ),
      mobile: getImagePath("/assets/images/image-creme-brulee-mobile.jpg"),
      tablet: getImagePath("/assets/images/image-creme-brulee-tablet.jpg"),
      desktop: getImagePath("/assets/images/image-creme-brulee-desktop.jpg"),
    },
    name: "Vanilla Bean Crème Brûlée",
    category: "Crème Brûlée",
    price: 7.0,
  },
  {
    id: 3,
    image: {
      thumbnail: getImagePath("/assets/images/image-macaron-thumbnail.jpg"),
      mobile: getImagePath("/assets/images/image-macaron-mobile.jpg"),
      tablet: getImagePath("/assets/images/image-macaron-tablet.jpg"),
      desktop: getImagePath("/assets/images/image-macaron-desktop.jpg"),
    },
    name: "Macaron Mix of Five",
    category: "Macaron",
    price: 8.0,
  },
  {
    id: 4,
    image: {
      thumbnail: getImagePath("/assets/images/image-tiramisu-thumbnail.jpg"),
      mobile: getImagePath("/assets/images/image-tiramisu-mobile.jpg"),
      tablet: getImagePath("/assets/images/image-tiramisu-tablet.jpg"),
      desktop: getImagePath("/assets/images/image-tiramisu-desktop.jpg"),
    },
    name: "Classic Tiramisu",
    category: "Tiramisu",
    price: 5.5,
  },
  {
    id: 5,
    image: {
      thumbnail: getImagePath("/assets/images/image-baklava-thumbnail.jpg"),
      mobile: getImagePath("/assets/images/image-baklava-mobile.jpg"),
      tablet: getImagePath("/assets/images/image-baklava-tablet.jpg"),
      desktop: getImagePath("/assets/images/image-baklava-desktop.jpg"),
    },
    name: "Pistachio Baklava",
    category: "Baklava",
    price: 4.0,
  },
  {
    id: 6,
    image: {
      thumbnail: getImagePath("/assets/images/image-meringue-thumbnail.jpg"),
      mobile: getImagePath("/assets/images/image-meringue-mobile.jpg"),
      tablet: getImagePath("/assets/images/image-meringue-tablet.jpg"),
      desktop: getImagePath("/assets/images/image-meringue-desktop.jpg"),
    },
    name: "Lemon Meringue Pie",
    category: "Pie",
    price: 5.0,
  },
  {
    id: 7,
    image: {
      thumbnail: getImagePath("/assets/images/image-cake-thumbnail.jpg"),
      mobile: getImagePath("/assets/images/image-cake-mobile.jpg"),
      tablet: getImagePath("/assets/images/image-cake-tablet.jpg"),
      desktop: getImagePath("/assets/images/image-cake-desktop.jpg"),
    },
    name: "Red Velvet Cake",
    category: "Cake",
    price: 4.5,
  },
  {
    id: 8,
    image: {
      thumbnail: getImagePath("/assets/images/image-brownie-thumbnail.jpg"),
      mobile: getImagePath("/assets/images/image-brownie-mobile.jpg"),
      tablet: getImagePath("/assets/images/image-brownie-tablet.jpg"),
      desktop: getImagePath("/assets/images/image-brownie-desktop.jpg"),
    },
    name: "Salted Caramel Brownie",
    category: "Brownie",
    price: 4.5,
  },
  {
    id: 9,
    image: {
      thumbnail: getImagePath("/assets/images/image-panna-cotta-thumbnail.jpg"),
      mobile: getImagePath("/assets/images/image-panna-cotta-mobile.jpg"),
      tablet: getImagePath("/assets/images/image-panna-cotta-tablet.jpg"),
      desktop: getImagePath("/assets/images/image-panna-cotta-desktop.jpg"),
    },
    name: "Vanilla Panna Cotta",
    category: "Panna Cotta",
    price: 6.5,
  },
];
