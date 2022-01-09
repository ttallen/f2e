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
        if(item.Picture.PictureUrl1 == undefined || item.Picture.PictureDescription1 == undefined){
            console.log("沒圖");
            str += `            
            <div class="col-xl-3 col-lg-4 col-sm-6 col-12 my-3">
                <div class="card shadow">
                    <img src="images/unsplash02.jpg" class="card-img-top" alt="...">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title text-truncate">${item.ScenicSpotName}</h5>
                        <span class="d-flex align-items-center mb-3">
                            <img class="" src="images/location.svg" alt="noImg">
                            <p class="card-text text-truncate ml-1">${item.Address}</p>
                        </span>
                        <a href="#" class="btn mt-3">了解更多</a>
                    </div>
                </div>
            </div>`
            return;
        } else if(item.Address == undefined) {
            console.log("沒地址");
            str += `            
            <div class="col-xl-3 col-lg-4 col-sm-6 col-12 my-3">
                <div class="card shadow">
                <img src="${item.Picture.PictureUrl1}" class="card-img-top" alt="${item.Picture.PictureDescription1}">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title text-truncate">${item.ScenicSpotName}</h5>
                        <span class="d-flex align-items-center mb-3">
                            <img class="" src="images/location.svg" alt="">
                            <p class="card-text text-truncate ml-1">無資料</p>
                        </span>
                        <a href="#" class="btn mt-3">了解更多</a>
                    </div>
                </div>
            </div>`
            return;
        }
        str += `
        <div class="col-xl-3 col-lg-4 col-sm-6 col-12 my-3">
            <div class="card shadow">
                <img src="${item.Picture.PictureUrl1}" class="card-img-top" alt="${item.Picture.PictureDescription1}">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title text-truncate">${item.ScenicSpotName}</h5>
                    <span class="d-flex align-items-center mb-3">
                        <img class="" src="images/location.svg" alt="">
                        <p class="card-text text-truncate ml-1">${item.Address}</p>
                    </span>
                    <a href="#" class="btn mt-3">了解更多</a>
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
            if(item.Picture.PictureUrl1 == undefined || item.Picture.PictureDescription1 == undefined){
                console.log("沒圖");
                str += `            
                <div class="col-xl-3 col-lg-4 col-sm-6 col-12 my-3">
                    <div class="card shadow">
                        <img src="images/unsplash02.jpg" class="card-img-top" alt="...">
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title text-truncate">${item.ScenicSpotName}</h5>
                            <span class="d-flex align-items-center mb-3">
                                <img class="" src="images/location.svg" alt="noImg">
                                <p class="card-text text-truncate ml-1">${item.Address}</p>
                            </span>
                            <a href="#" class="btn mt-3">了解更多</a>
                        </div>
                    </div>
                </div>`
                return;
            } else if(item.Address == undefined) {
                console.log("沒地址");
                str += `            
                <div class="col-xl-3 col-lg-4 col-sm-6 col-12 my-3">
                    <div class="card shadow">
                    <img src="${item.Picture.PictureUrl1}" class="card-img-top" alt="${item.Picture.PictureDescription1}">
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title text-truncate">${item.ScenicSpotName}</h5>
                            <span class="d-flex align-items-center mb-3">
                                <img class="" src="images/location.svg" alt="">
                                <p class="card-text text-truncate ml-1">無資料</p>
                            </span>
                            <a href="#" class="btn mt-3">了解更多</a>
                        </div>
                    </div>
                </div>`
                return;
            }
            str += `
            <div class="col-xl-3 col-lg-4 col-sm-6 col-12 my-3">
                <div class="card shadow">
                    <img src="${item.Picture.PictureUrl1}" class="card-img-top" alt="${item.Picture.PictureDescription1}">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title text-truncate">${item.ScenicSpotName}</h5>
                        <span class="d-flex align-items-center mb-3">
                            <img class="" src="images/location.svg" alt="">
                            <p class="card-text text-truncate ml-1">${item.Address}</p>
                        </span>
                        <a href="#" class="btn mt-3">了解更多</a>
                    </div>
                </div>
            </div>`
        });

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