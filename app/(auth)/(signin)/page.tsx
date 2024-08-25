import Heading from "../../utils/Heading";
import Login from "../../components/Login";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <>
      <Heading
        title="OGs Games Login"
        description="OGS Games is company that sells card games."
        keywords="Card games, Games, and more."
      />
      <Login />
      <Footer />
    </>
  );
}
