export default function ScrollTop() {
   return (
      <>
         <div className="overlayer" id="overlayer">
         <div className="loader">
               <div className="loader-inner"></div>
         </div>
         </div>
         <a href="#0" className="scrollToTop"><i className="fas fa-angle-up"></i></a>
         <div className="overlay"></div>
      </>
   )
}