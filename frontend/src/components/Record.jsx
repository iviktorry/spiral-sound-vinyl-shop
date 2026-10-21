import cover from "../assets/vinyl1.png";

export default function Record() {
  return (
    <article className="flex w-70 flex-col items-center gap-4 rounded-sm bg-neutral-600 pb-4">
      <img src={cover} alt="Vinyl disk cover" className="w-full" />
      <h2>Selling dogma</h2>
      <p>The clouds</p>
      <p>$44.33</p>
      <button>Add to cart</button>
    </article>
  );
}
