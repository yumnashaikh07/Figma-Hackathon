import Herobanner from "@/components/herobanner";
import Header from "@/components/header";
import Herosection from "@/components/herosection";

export default function Home() {
  return (
    <main>
      <div className="md:bg-slate-900">
      <Herobanner/></div>
      <Header/>
      <Herosection/></main>
  );
}
