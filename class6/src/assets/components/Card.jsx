import React from 'react'

const Card = () => {
    // * arr of obj

const teamData = [
  {
    username: "Ayaan Khan",
    role: "Designer",
    description: "Creative designer focusing on clean interfaces and user friendly digital experiences.",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
    price: "₹1,499",
    rating: 4.5
  },
  {
    username: "Sara Malik",
    role: "Developer",
    description: "Passionate frontend developer building responsive and interactive .",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    price: "₹1,999",
    rating: 4.7
  },
  {
    username: "Rohan Verma",
    role: "Developer",
    description: "Backend expert handling APIs, databases, and secure scalable server side logic.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    price: "₹2,499",
    rating: 4.6
  },
  {
    username: "Neha Sharma",
    role: "Marketer",
    description: "Marketing specialist improving brand visibility through SEO, ads, and analytics.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    price: "₹1,299",
    rating: 4.3
  },
  {
    username: "Arjun Patel",
    role: "Manager",
    description: "Strategic product manager aligning business goals with user needs.",
    image: "https://images.unsplash.com/photo-1552058544-f2b08422138a",
    price: "₹2,999",
    rating: 4.8
  },
  {
    username: "Zoya Ansari",
    role: "Creator",
    description: "Content creator crafting engaging stories, visuals, and brand driven messages.",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
    price: "₹999",
    rating: 4.4
  }
];




  return (
    <div className='flex p-5 gap-5 flex-wrap justify-start items-center'> 
       {teamData.map((e)=>{
        return <div className=' w-70 rounded-2xl overflow-hidden flex flex-col justify-between p-3  bordrer-gray-100 shadow-lg shadow-gray-500
'>
        <img className='h-55 w-full object-cover rounded-2xl object-center
' src={e.image} alt="" />

        {/* user */}
        <div className='px-2 mt-5'>
            <h2 className='text-2xl font-semibold'>{e.username}</h2>
            <p>{e.description}</p>
            <div className='flex justify-between mt-2 items-center'>
                <div className='flex flex-col justify-center items-center'>
                    <h5 className='text-lg'>{e.role}</h5>
                    <h6>role</h6>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <h5 className='text-lg'>{e.price}</h5>
                    <h6>Price</h6>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <h5 className='text-lg'>{e.rating}</h5>
                    <h6>Rating</h6>
                </div>
            </div>
        </div>

        {/* button */}
        <button className='bg-black text-white rounded-4xl py-2 mt-2'>Get in touch</button>
       </div>
       })}
    </div>
  )
}

export default Card