export default function HeroSection({title}) {
   return (
      <div className="hero-section style-2 pb-lg-400">
         <div className="container">
               <ul className="breadcrumb">
                  <li>
                     <a href="index.html">Home</a>
                  </li>
                  <li>
                     <span>{title}</span>
                  </li>
               </ul>
         </div>
         <div className="bg_img hero-bg bottom_center" data-background="/assets/images/banner/hero-bg.png"></div>
      </div>
   )
}