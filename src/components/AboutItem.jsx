// import Link from "next/link";
// import { AboutCardLayoutWrapper } from "../components/Layout/AboutCardLayoutWrapper";

// export const AboutItem = () => {
//   const APP_ITEMS = [
//     {
//       href: "https://manga-management-1-1.vercel.app/",
//       title: "📖 Manga-list",
//       description: "",
//     },
//     {
//       href: "https://next-todo-2-0.vercel.app/",
//       title: "📝 Todo-app 2",
//       description: "",
//     },
//     {
//       href: "https://counter-app-theta.vercel.app/",
//       title: "📝 Todo-app 1",
//       description: "",
//     },
//     {
//       href: "https://my-auth-rho.vercel.app/",
//       title: "🔑 My-Auth",
//       description: "",
//     },
//     {
//       href: "https://count-app.vercel.app/",
//       title: "🔢 Count-App",
//       description: "",
//     },
//     {
//       href: "https://practice-api-operations.vercel.app/",
//       title: "🏹 Hit the json",
//       description: "",
//     },
//   ];
//   const NEWTHING_ITEMS = [
//     {
//       href: "https://fireworks-indol.vercel.app/",
//       title: "🎆 Fireworks",
//       description: "",
//     },
//     {
//       href: "https://dnd-kit.vercel.app/",
//       title: "🤖 Dnd kit",
//       description: "",
//     },
//     {
//       href: "https://react-countdown-chi.vercel.app/",
//       title: "⏰ Clircle-timer",
//       description: "",
//     },
//     {
//       href: "https://json-server-pearl.vercel.app/",
//       title: "📦 Mockapi",
//       description: "",
//     },
//   ];
//   NEWTHING_ITEMS;
//   return (
//     <div>
//       <AboutCardLayoutWrapper>
//         <p className="text-2xl text-center mb-5">The app I made</p>
//         {APP_ITEMS.map((item) => {
//           return (
//             <Link key={item.href} href={item.href}>
//               <a>
//                 <div className="mb-3">
//                   {item.title ? (
//                     <h2 className="mx-3 text-xl">{item.title}</h2>
//                   ) : null}
//                   {item.description ? (
//                     <p className="text-sm text-center">{item.description}</p>
//                   ) : null}
//                 </div>
//               </a>
//             </Link>
//           );
//         })}
//       </AboutCardLayoutWrapper>
//       <AboutCardLayoutWrapper>
//         <p className="text-2xl text-center mb-5">Try New thing</p>
//         {NEWTHING_ITEMS.map((item) => {
//           return (
//             <Link key={item.href} href={item.href}>
//               <a>
//                 <div className="mb-3">
//                   {item.title ? (
//                     <h2 className="mx-3 text-xl">{item.title}</h2>
//                   ) : null}
//                   {item.description ? (
//                     <p className="text-sm text-center">{item.description}</p>
//                   ) : null}
//                 </div>
//               </a>
//             </Link>
//           );
//         })}
//       </AboutCardLayoutWrapper>
//     </div>
//   );
// };