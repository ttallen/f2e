function init() {
    getTourList();
}

init();

// 顯示所有旅遊列表
function getTourList() {
    axios.get(
        'https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?%24top=20&%24format=JSON',
        {
            headers: getAuthorizationHeader()
        }
    )
    .then(function (response) {
        console.log(response.data);
        let thisData = response.data;
        let search = `<div class="col-12">
        <p class="search mb-0">搜尋結果</p>
        </div>`
        let str = '';
        thisData.forEach(function(item) {
            str += `
            <div class="col-xl-3 col-lg-4 col-sm-6 col-12 my-3" data-aos="fade-up" data-aos-duration="1500">
                <div class="card shadow">
                    <div class="card-head">
                        <img src="${item.Picture.PictureUrl1 == undefined ? 'images/no_img.jpg' : item.Picture.PictureUrl1}" class="card-img-top" alt="${item.Picture.PictureDescription1 == undefined ? '預設圖片' : item.Picture.PictureDescription1}">
                    </div>
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title text-truncate">${item.ScenicSpotName == undefined ? '無標題' : item.ScenicSpotName}</h5>
                        <span class="d-flex align-items-center mb-3">
                            <img class="location mr-1" src="images/location.svg" alt="">
                            <p class="card-text text-truncate ml-1">${item.Address == undefined ? '無資料' : item.Address}</p>
                        </span>
                        <a href="#" class="btn mt-3 btnOpen">了解更多</a>
                    </div>
                </div>
            </div>
            <div class="card-page">
                <div>
                    <div class="close-card">
                        <img src="images/close.png" alt="">
                    </div>
                    <div class="card-content">
                        <div class="card-img">
                            <img src="${item.Picture.PictureUrl1 == undefined ? 'images/no_img.jpg' : item.Picture.PictureUrl1}" class="card-img-top" alt="${item.Picture.PictureDescription1 == undefined ? '預設圖片' : item.Picture.PictureDescription1}">
                        </div>
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title">${item.ScenicSpotName == undefined ? '無資料' : item.ScenicSpotName}</h5>
                            <span class="d-flex align-items-center mb-3">
                                <img class="location mr-1" src="images/location.svg" alt="">
                                <p class="card-text ml-1">${item.Address == undefined ? '無資料' : item.Address}</p>
                            </span>
                            <span class="d-flex align-items-center mb-3">
                                <img class="clock_icon mr-1" src="images/clock_icon.svg" alt="">
                                <p class="card-text ml-1">${item.OpenTime == undefined ? '無資料' : item.OpenTime}</p>
                            </span>
                            <p class="card-text">${item.Description == undefined ? '無' : item.Description}</p>
                        </div>
                    </div>
                </div>
            </div>`
        });

        list.innerHTML = search + str;
    })
    .catch(function (error) {
        console.log(error.response.data);
    }); 
}

// 縣市&景點類別搜尋
const citySelect = document.querySelector(".citySelect");
const categorySelect = document.querySelector(".categorySelect");
const send = document.querySelector(".send");
const list = document.querySelector(".list");

send.addEventListener("click",function(e) {
    const category = categorySelect.value;
    const city = citySelect.value;
    axios.get(`https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/${city}?%24filter=contains(Class1,'${category}')&%24top=20&%24format=JSON`,{
        headers: getAuthorizationHeader()
    })
    .then(function(response) {
        console.log(response.data);
        let thisData = response.data;
        let search = `<div class="col-12">
        <p class="search mb-0">搜尋結果</p>
        </div>`
        let str = '';
        thisData.forEach(function(item) {
            str += `
            <div class="col-xl-3 col-lg-4 col-sm-6 col-12 my-3" data-aos="fade-up" data-aos-duration="1500">
                <div class="card shadow">
                    <div class="card-head">
                        <img src="${item.Picture.PictureUrl1 == undefined ? 'images/no_img.jpg' : item.Picture.PictureUrl1}" class="card-img-top" alt="${item.Picture.PictureDescription1 == undefined ? '預設圖片' : item.Picture.PictureDescription1}">
                    </div>
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title text-truncate">${item.ScenicSpotName == undefined ? '無標題' : item.ScenicSpotName}</h5>
                        <span class="d-flex align-items-center mb-3">
                            <img class="location mr-1" src="images/location.svg" alt="">
                            <p class="card-text text-truncate ml-1">${item.Address == undefined ? '無資料' : item.Address}</p>
                        </span>
                        <a href="#" class="btn mt-3 btnOpen">了解更多</a>
                    </div>
                </div>
            </div>
            <div class="card-page">
                <div>
                    <div class="close-card">
                        <img src="images/close.png" alt="">
                    </div>
                    <div class="card-content">
                        <div class="card-img">
                            <img src="${item.Picture.PictureUrl1 == undefined ? 'images/no_img.jpg' : item.Picture.PictureUrl1}" class="card-img-top" alt="${item.Picture.PictureDescription1 == undefined ? '預設圖片' : item.Picture.PictureDescription1}">
                        </div>
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title">${item.ScenicSpotName == undefined ? '無資料' : item.ScenicSpotName}</h5>
                            <span class="d-flex align-items-center mb-3">
                                <img class="location mr-1" src="images/location.svg" alt="">
                                <p class="card-text ml-1">${item.Address == undefined ? '無資料' : item.Address}</p>
                            </span>
                            <span class="d-flex align-items-center mb-3">
                                <img class="clock_icon mr-1" src="images/clock_icon.svg" alt="">
                                <p class="card-text ml-1">${item.OpenTime == undefined ? '無資料' : item.OpenTime}</p>
                            </span>
                            <p class="card-text">${item.Description == undefined ? '無' : item.Description}</p>
                        </div>
                    </div>
                </div>
            </div>`
        });
        if(str == '') {
            str = `
            <div class="col-12 my-5 py-5 text-center">
               <h5 class="my-5">--無符合資料--</h5>
            </div>`
        }
        list.innerHTML = search + str;
    })
})

function getAuthorizationHeader() {
    let AppID = 'FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFFF';
    let AppKey = 'FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFFF';
    let GMTString = new Date().toGMTString();
    let ShaObj = new jsSHA('SHA-1', 'TEXT');
    ShaObj.setHMACKey(AppKey, 'TEXT');
    ShaObj.update('x-date: ' + GMTString);
    let HMAC = ShaObj.getHMAC('B64');
    let Authorization = 'hmac username=\"' + AppID + '\", algorithm=\"hmac-sha1\", headers=\"x-date\", signature=\"' + HMAC + '\"';
    return { 'Authorization': Authorization, 'X-Date': GMTString }; 
}