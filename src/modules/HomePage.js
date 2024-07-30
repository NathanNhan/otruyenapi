import axios from 'axios';
import $ from 'jquery';
class HomePage {
    constructor() {
        //Lấy phần tử thẻ div cha chứa danh sách render
        this.resultDiv = $('.container__event-sumary');
        //Call Event khi mà DOM được khởi tạo
        this.event();
    }

    event() {
        $(document).on("ready", this.getResults.bind(this));
    }

    getResults() {
        //Xử lý đi call API
    
        axios.get("https://otruyenapi.com/v1/api/home")
          .then((response) => {
            let results = response.data.data.items.slice(0,6);
            //Hiển thị danh sách truyện ra trang chủ 
            let html = '';
            results.forEach(truyen => {
                html += `
                  <div class="event-summary">
             <a class="event-summary__date t-center" href="#">
               <span class="event-summary__month">
                 <img src="https://otruyenapi.com/uploads/comics/${truyen.thumb_url}" width="45" height="56" />
               </span>
             </a>
             <div class="event-summary__content">
               <h5 class="event-summary__title headline headline--tiny"><a href="${someUniqueName.myPermalink}?q=${truyen.slug}">${truyen.name}</a></h5>
             </div>
           </div>
                `
            });
            //console.log(results);
            this.resultDiv.html(html);
          }).catch((error) => {
            console.log(error);
          })
    }
}

export default HomePage;