import cover from "../assets/vinyl1.png";

export default function Record() {
  return (
    <article className="relative flex w-65 flex-col items-center gap-3 overflow-hidden rounded-md bg-neutral-700 pb-4 md:w-55">
      <img src={cover} alt="Vinyl disk cover" className="w-full" />
      <p className="absolute top-0 left-0 rounded-br-sm bg-red-700 px-3">
        rock
      </p>
      <h2 className="text-xl font-semibold">Selling dogma</h2>
      <p className="my-3 text-sm font-medium">The clouds</p>
      <p className="text-neutral-200 text-sm">$44.33</p>
      <button className="rounded-sm bg-red-700 px-4 py-2 font-medium">
        Add to cart
      </button>
    </article>
  );
}
