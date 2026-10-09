import Image from "next/image";
import Link from "next/link";
import AddToCartButton from "./AddToCartButton";

export default function DishList({ dishes }) {
  return (
    <div className="dish-list">
      {dishes.map((dish) => (
        <article className="dish-card" key={dish.id}>
          <Image
            src={dish.image}
            alt={dish.imageAlt}
            width={800}
            height={600}
            sizes="(max-width: 700px) 100vw, 800px"
          />
          <h3>{dish.name}</h3>
          <p>{dish.category}</p>
          <p>{dish.description}</p>
          <div className="dish-actions">
            <Link href={`/menu/${dish.id}`}>View details</Link>
            <AddToCartButton dish={dish} />
          </div>
        </article>
      ))}
    </div>
  );
}
