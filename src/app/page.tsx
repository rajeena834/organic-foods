"use client"

//export const dynamic = "force-dynamic";

import { Button } from '@/components/ui/button';
import React, {  useState } from 'react'
import { Input } from "@/components/ui/input"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { SignIn, SignUp } from '@clerk/nextjs';
import { useSearchParams } from 'next/navigation';

function Homepage() {
  const [openSignInForm, setOpenSignInForm] = useState(false);
  const searchParams = useSearchParams();
  const formType = searchParams.get("formType")
  const menuItems = [
    {
      name: "Home",
      path: "/"
    },
    {
      name: "About",
      path: "/about"

    },
    {
      name: "Services",
      path: "/services"

    },
    {
      name: "Contact",
      path: "/contact"

    }
  ]
  return (
     <div className='lg:px-20 px-5 py-10'>
   
      
      <div className='flex justify-between items-center'>
        <h1 className='font-bold text-3xl text-primary'>S.O.F</h1>

        <div className='flex gap-5'>
          {menuItems.map((item, index) => (
            <div key={index} className='text-sm text-gray-600 font-semibold'>
              {item.name}

            </div>

          ))}
          <Button onClick={() => setOpenSignInForm(true)}>SignIn</Button>

        </div>
      </div>
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-5 min-h-[80vh] items-center">
        <div className="col-span-1">
          <div>
            <h1 className=" text-2xl lg:text-4xl font-bold text-primary">
              SHEY - <b className="text-orange-600">ORGANIC</b> - FOODS
            </h1>
            <p className="text-gray-600 text-sm font-semibold">
              Shey-Organic-Foods is a platform that connects farmers to buyers
              and provides a platform for farmers to sell their produce directly
              to consumers. Here you can find fresh farm produce at affordable
              prices.
            </p>
          </div>
        </div>
        <div className="col-span-1 flex justify-center lg:justify-end">
          <img
             //src="https://next-supa-agri-marketplace.vercel.app/hero.jpg"

             src='images/fruits and vegetables.webp'
            className="w-auto h-190 object-contain"
          />
        </div>
           
     
      </div>



 
      <Sheet open={openSignInForm} onOpenChange={setOpenSignInForm}>

        <SheetContent className='min-w-[500px] flex justify-center items-center'>
          <SheetHeader>
            <SheetTitle></SheetTitle>

          </SheetHeader>
          <div>
            {formType == "signup" ? (<SignUp routing='hash'
              signInUrl='/?formType=signin' />) : (<SignIn routing='hash'
              signUpUrl='/?formType=signup'/>)}
          </div>
        </SheetContent>
      </Sheet>
       
    </div> 
  )
}

export default Homepage 

// "use client";

// export const dynamic = "force-dynamic";

// import { Button } from '@/components/ui/button';
// import React, { useState, Suspense } from 'react';
// import {
//   Sheet,
//   SheetContent,
//   SheetHeader,
//   SheetTitle,
// } from "@/components/ui/sheet";
// import { SignIn, SignUp } from '@clerk/nextjs';
// import { useSearchParams } from 'next/navigation';

// function Homepage() {
//   const [openSignInForm, setOpenSignInForm] = useState(false);
//   const searchParams = useSearchParams();
//   const formType = searchParams.get("formType");

//   const menuItems = [
//     { name: "Home", path: "/" },
//     { name: "About", path: "/about" },
//     { name: "Services", path: "/services" },
//     { name: "Contact", path: "/contact" }
//   ];

//   return (
//     <div className='lg:px-20 px-5 py-10'>
//       <div className='flex justify-between items-center'>
//         <h1 className='font-bold text-3xl text-primary'>S.O.F</h1>

//         <div className='flex gap-5 items-center'>
//           {menuItems.map((item, index) => (
//             <div key={index} className='text-sm text-gray-600 font-semibold'>
//               {item.name}
//             </div>
//           ))}
//           <Button onClick={() => setOpenSignInForm(true)}>SignIn</Button>
//         </div>
//       </div>

//       <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-5 min-h-[80vh] items-center">
//         <div>
//           <h1 className="text-2xl lg:text-4xl font-bold text-primary">
//             SHEY - <b className="text-orange-600">ORGANIC</b> - FOODS
//           </h1>
//           <p className="text-gray-600 text-sm font-semibold">
//             Shey-Organic-Foods connects farmers to buyers directly.
//           </p>
//         </div>

//         <div className="flex justify-center lg:justify-end">
//           <img
//             src='images/fruits and vegetables.webp'
//             className="w-auto h-190 object-contain"
//           />
//         </div>
//       </div>

//       <Suspense fallback={null}>
//         <Sheet open={openSignInForm} onOpenChange={setOpenSignInForm}>
//           <SheetContent className='min-w-[500px] flex justify-center items-center'>
//             <SheetHeader>
//               <SheetTitle></SheetTitle>
//             </SheetHeader>

//             <div>
//               {formType === "signup" ? (
//                 <SignUp routing='hash' signInUrl='/?formType=signin' />
//               ) : (
//                 <SignIn routing='hash' signUpUrl='/?formType=signup' />
//               )}
//             </div>
//           </SheetContent>
//         </Sheet>
//       </Suspense>
//     </div>
//   );
// }

// export default Homepage;