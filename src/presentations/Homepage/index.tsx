import { TopNavbar, BottomNavbar, Banner } from "../../components";

const Homepage = () => {
  return (
    <div>
      <header>
        <TopNavbar />
      </header>
      <main>
        <section>
          <Banner />
        </section>

        <section></section>
      </main>
      <footer className="w-full fixed bottom-0">
        <BottomNavbar />
      </footer>
    </div>
  );
};

export default Homepage;
