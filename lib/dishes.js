const dishes = [
  {
    id: "1",
    name: "Doro Wot",
    category: "Main Dishes",
    description: "Spicy Ethiopian chicken stew.",
    image: "/images/doro-wot.png",
    imageAlt: "Illustrated plate representing Doro Wot, a spicy Ethiopian chicken stew",
  },
  {
    id: "2",
    name: "Tibs",
    category: "Main Dishes",
    description: "Sauteed meat with vegetables and spices.",
    image: "/images/tibs.png",
    imageAlt: "Illustrated plate representing Ethiopian Tibs with sauteed meat and vegetables",
  },
  {
    id: "3",
    name: "Buna",
    category: "Drinks",
    description: "Traditional Ethiopian coffee.",
    image: "/images/buna.png",
    imageAlt: "Illustrated cup representing Buna, traditional Ethiopian coffee",
  },
];

export async function getDishes() {
  await new Promise((resolve) => setTimeout(resolve, 400));
  return dishes;
}

export async function getDishById(id) {
  await new Promise((resolve) => setTimeout(resolve, 200));
  return dishes.find((dish) => dish.id === id) ?? null;
}
