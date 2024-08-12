import axios from 'axios';
import $ from 'jquery';

let instance;
class Single {

    constructor() {
        if (instance) {
            throw new Error("New instance cannot be created!!");
        }

        instance = this;
       
        this.resultDiv = $("#container__single");
        //Lấy phần tử chapters
        this.chapterDiv = $(".title__chapter");
        this.dataChapterDiv = $(".content__chapter");
       
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
                let chapters = response.data.data.item.chapters[0].server_data;
                let single = response.data.data.item;
                let results = '';
                let html = '';
                let chaptersHTML = '';
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

                //render chapter
                chapters.forEach((item) => {
                    chaptersHTML += `
                      <a id="button_chapter" data='${item.chapter_api_data}'>Chapter ${item.chapter_name}</a>
                    `
                } );

                this.chapterDiv.html(chaptersHTML);


                //Handle show data belong to Chapter 
                let domain = '';
                let chapterPath = '';
                let contents = '';
                let chapterData = '';
                
                //Bắt sự kiện click cho nút chappters
                let buttonChapters = document.querySelectorAll("#button_chapter");

                buttonChapters.forEach((element) => {
                    element.addEventListener("click", (e) => {
                       this.dataChapterDiv.html("");
                       results = '';
                       chapterData =  e.target.getAttribute("data");
                       $.ajax({
                           url: chapterData,
                           method: "GET",
                           success : (response) => {
                            console.log(response);
                            contents = response.data.item.chapter_image;
                            domain = response.data.domain_cdn;
                            chapterPath = response.data.item.chapter_path;
                            //Loop to item for contents 
                            contents.forEach((item) => {
                                results += `
                                  <img src=${domain}/${chapterPath}/${item.image_file} alt=${item.image_page} />
                                `
                            });
                               this.dataChapterDiv.html(results);
                           }
                       })
                    })
                })




              

            }).catch((error) => {
                console.log(error);
            })
    }



}

export default Single;