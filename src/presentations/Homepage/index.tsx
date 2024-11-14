import { TopNavbar, BottomNavbar, Banner, Games } from "../../components";
import { HomepageProvider } from "../../common/provider/HomepageProvider";

const Homepage = () => {
  return (
    <HomepageProvider>
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
    </HomepageProvider>
  );
};

export default Homepage;
