import Filter from "./Filter";
import Record from "./Record";

export default function Main() {
  return (
    <main className="flex flex-col items-center pb-4">
      <Filter />
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        <Record />
        <Record />
        <Record />
        <Record />
        <Record />
        <Record />  
      </section>
    </main>
  );
}
