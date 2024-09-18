import Header from "../components/Header/Header";
import HeroSection from "../components/Hero_section/HeroSection";

export default function Home() {
  return (
    <div className="Home flex flex-col">
      <Header/>
      <HeroSection/>
    </div>
  )
}
