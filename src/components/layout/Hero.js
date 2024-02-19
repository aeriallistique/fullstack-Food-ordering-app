import Image from "next/image"
import Right from "../icons/Right"


export default function Hero(){
  return(
      <section className="hero mt-4" >
        <div className="py-12">
          <h1 className="text-4xl semibold ">
            Everything<br/> 
            is better<br/>
            with &nbsp; 
            <span className="text-primary">
              Pizza
            </span>
          </h1>
          <p className="my-6 text-gray-500 text-sm">
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