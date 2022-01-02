

export default function BrowseHighlight({items}) {
   return (
      <div className="browse-section ash-bg">
        <div className="browse-slider-section mt--140">
            <div className="container">
                <div className="section-header-2 cl-white mb-4">
                    <div className="left">
                        <h6 className="title pl-0 w-100">Browse the highlights</h6>
                    </div>
                    <div className="slider-nav">
                        <a href="#0" className="bro-prev"><i className="flaticon-left-arrow"></i></a>
                        <a href="#0" className="bro-next active"><i className="flaticon-right-arrow"></i></a>
                    </div>
                </div>
                <div className="m--15">
                    <div className="browse-slider owl-theme owl-carousel">
                       {
                          items.map((item, key) => {
                             return (
                              <a href="#0" className="browse-item" key={key}>
                                 <img src={item.img} alt="auction"/>
                                 <span className="info">{item.name}</span>
                              </a>
                             )
                          })
                       }
                    </div>
                </div>
            </div>
        </div>
    </div>
   )
}