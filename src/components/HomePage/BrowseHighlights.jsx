

export default function BrowseHighlight({items}) {
   return (
      <div class="browse-section ash-bg">
        <div class="browse-slider-section mt--140">
            <div class="container">
                <div class="section-header-2 cl-white mb-4">
                    <div class="left">
                        <h6 class="title pl-0 w-100">Browse the highlights</h6>
                    </div>
                    <div class="slider-nav">
                        <a href="#0" class="bro-prev"><i class="flaticon-left-arrow"></i></a>
                        <a href="#0" class="bro-next active"><i class="flaticon-right-arrow"></i></a>
                    </div>
                </div>
                <div class="m--15">
                    <div class="browse-slider owl-theme owl-carousel">
                       {
                          items.map((item, key) => {
                             return (
                              <a href="#0" class="browse-item" key={key}>
                                 <img src={item.img} alt="auction"/>
                                 <span class="info">{item.name}</span>
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