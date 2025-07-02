import Hero from "./Hero";

export default function Home() {
  return (
    <div className="flex w-full">
      <main className="flex-1 w-full">
        <section className="container w-full" id="home">
          <div className="outer-container w-full">
            <div className="inner-container">
              <div className="inner-inner-container"></div>
            </div>
            <Hero />
          </div>
        </section>
      </main>
    </div>
  );
}
