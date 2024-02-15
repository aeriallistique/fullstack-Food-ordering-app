import Image from "next/image"
import Right from "../icons/Right"


export default function Hero(){
  return(
      <section className="grid grid-cols-2">
        <div className="py-8">
          <h1 className="text-4xl semibold">
            Everything is better with Pizza
          </h1>
          <p className="my-4 text-gray-500">
            Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Mollitia ullam, 
            aperiam minima molestiae ipsam.
          </p>
          <div className="flex gap-4 text-sm">
            <button className="bg-primary uppercase flex items-center text-white px-4 py-2 rounded-full ">
              Order Now
              <Right />
            </button>
            <button className="flex gap-2 py-2 text-gray-600 semibold">
              Learn More
              <Right/>
            </button>
          </div>
        </div>
        
        <div className="relative">
          <Image 
            src={'/pizza.png'} 
            layout={'fill'} 
            objectFit={'contain'} 
            alt={'pizza'}
          />
        </div>
        
      </section>
    
  )
}