
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/menu/SectionHeaders";

export default function Home() {
  return (
    <>
     
      <Hero />
      <HomeMenu />
      <section className="text-center my-16">
        <SectionHeaders 
          subHeader={"Our Story"}
          mainHeader={"About us"}
        />
        <div className="text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
          <p >
            Lorem, ipsum dolor sit amet consectetur 
            adipisicing elit. Fugiat ratione vitae consequuntur 
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Sequi itaque alias dolore laudantium sint impedit. 
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur 
            adipisicing elit. Fugiat ratione vitae consequuntur 
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Sequi itaque alias dolore laudantium sint impedit. 
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur!
          </p>
        </div>
      </section>
      <section className="text-center my-8">
      <SectionHeaders 
          subHeader={"Don\'t hesitate"}
          mainHeader={"Contact us"}
        />
        <div className="mt-8">
          <a className="text-4xl underline text-gray-500" href="tel:+440837294762">
            +44 0837 294762
          </a>
        </div>
      </section>
      
    </>
  );
}
