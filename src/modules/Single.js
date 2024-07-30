import axios from 'axios';
import $ from 'jquery';
class Single {
    constructor() {
        this.resultDiv = $("#container__single");
        //Lấy query (slug) truyện từ đường dẫn
        this.query = new URLSearchParams(window.location.search).get("q");
        console.log(this.query);
        //Call Event khi mà DOM được khởi tạo
        this.event();
    }

    event() {
        $(document).on("ready", this.getResults.bind(this));
    }

    getResults() {
        //Xử lý đi call API

        axios.get("https://otruyenapi.com/v1/api/truyen-tranh/" + this.query)
            .then((response) => {
                console.log(response.data.data.item);
               
               let single = response.data.data.item;
               let html = '';
               html = `
                 <div class="metabox metabox--position-up metabox--with-home-link">
                       <p><a class="metabox__blog-home-link" href="#"><i class="fa fa-home" aria-hidden="true"></i> ${single.name}</a> <span class="metabox__main">
                        Posted by ${single.author[0]}
                       </span></p>
                  </div>
                  <div class="generic-content">
                          ${single.content}
                  </div>
               `;

                this.resultDiv.html(html);
               
            }).catch((error) => {
                console.log(error);
            })
    }
}

export default Single;