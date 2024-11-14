import { TopNavbar, BottomNavbar, Banner, Games } from "../../components";

const Homepage = () => {
  return (
    <div>
      <header>
        <TopNavbar />
      </header>
      <main className="mt-[60px]">
        <section>
          <Banner />
        </section>
        <section>
          <Games />
        </section>
      </main>
      <footer className="w-full fixed bottom-0">
        <BottomNavbar />
      </footer>
    </div>
  );
};

export default Homepage;
