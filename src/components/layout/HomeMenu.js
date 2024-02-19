import Image from "next/image"
import MenuItem from "../menu/MenuItem";
import SectionHeaders from "../menu/SectionHeaders";

export default function HomeMenu(){
  return(
    <section>
      <div className="absolute right-0 left-0 w-full justify-start">
        <div className=" absolute left-0 -top-[70px] text-left -z-10">
          <Image src={'/salad.jpg'} width={109} height={189}
              objectFit={'contain'} alt={'salad'}  />
        </div>
        <div className="absolute  -top-[100px] right-0 -z-10">
          <Image src={'/salad.jpg'} width={107} height={195} 
              objectFit={'contain'} alt={'salad'}  />
        </div>
      </div>
      <div className="text-center mb-4">
       <SectionHeaders subHeader={"check out"} mainHeader={'Menu'} />
      </div>
      <div className="grid grid-cols-3 gap-4">
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </section>
  )
}