var itemsPerPage,productListData=[{id:1,wishList:!1,productImg:"../assets/images/products/img-8.png",productTitle:"World's most expensive t shirt",category:"Fashion",price:"354.99",discount:"25%",rating:"4.9",arrival:!0,color:["success","info","warning","danger"]},{id:2,wishList:!1,productImg:"../assets/images/products/img-15.png",productTitle:"Like Style Women Black Handbag",category:"Fashion",price:"742.00",discount:"0%",rating:"4.2",arrival:!1,color:["light","dark"]},{id:3,wishList:!0,productImg:"../assets/images/products/img-1.png",productTitle:"Black Horn Backpack For Men Bags 30 L Backpack",category:"Grocery",price:"150.00",discount:"25%",rating:"3.8",arrival:!0,color:["primary","danger","secondary"]},{id:4,wishList:!1,productImg:"../assets/images/products/img-7.png",productTitle:"Innovative education book",category:"Kids",price:"96.26",discount:"0%",rating:"4.7",arrival:!1},{id:5,wishList:!1,productImg:"../assets/images/products/img-4.png",productTitle:"Sangria Girls Mint Green & Off-White Solid Open Toe Flats",category:"Kids",price:"96.26",discount:"75%",rating:"4.7",arrival:!0,color:["success","danger","secondary"]},{id:6,wishList:!1,productImg:"../assets/images/products/img-5.png",productTitle:"Lace-Up Casual Shoes For Men",category:"Fashion",price:"229.00",discount:"0%",rating:"4.0",arrival:!1,color:["danger"]},{id:7,wishList:!1,productImg:"../assets/images/products/img-6.png",productTitle:"Striped High Neck Casual Men Orange Sweater",category:"Fashion",price:"120.00",discount:"48%",rating:"4.8",arrival:!1,size:["s","m","l","xl"]},{id:8,wishList:!0,productImg:"../assets/images/products/img-9.png",productTitle:"Lace-Up Casual Shoes For Men",category:"Kids",price:"229.00",discount:"15%",rating:"2.4",arrival:!1,color:["light","warning"]},{id:9,wishList:!1,productImg:"../assets/images/products/img-10.png",productTitle:"Printed, Typography Men Round Neck Black T-shirt",category:"Fashion",price:"81.99",discount:"0%",rating:"4.9",arrival:!0,color:["dark","light"]},{id:10,wishList:!1,productImg:"../assets/images/products/img-12.png",productTitle:"Carven Lounge Chair Red",category:"Furniture",price:"209.99",discount:"0%",rating:"4.1",arrival:!1,color:["secondary","dark","danger","light"]},{id:11,wishList:!1,productImg:"../assets/images/products/img-3.png",productTitle:"Ninja Pro Max Smartwatch",category:"Watches",price:"309.09",discount:"20%",rating:"3.5",arrival:!1,color:["secondary","info"]},{id:12,wishList:!1,productImg:"../assets/images/products/img-2.png",productTitle:"Opinion Striped Round Neck Green T-shirt",category:"Fashion",price:"126.99",discount:"0%",rating:"4.1",arrival:!0,color:["success"]}],prevButton=document.getElementById("page-prev"),nextButton=document.getElementById("page-next"),currentPage=1;function loadProductList(e,t){var a=Math.ceil(e.length/itemsPerPage);if(a<(t=t<1?1:t)&&(t=a),document.getElementById("product-grid")){document.getElementById("product-grid").innerHTML="";for(var r,i=(t-1)*itemsPerPage;i<t*itemsPerPage&&i<e.length;i++)e[i]&&(n=e[i].wishList?"active":"",c=1,e[i].color?(o='<ul class="clothe-colors list-unstyled hstack gap-1 mb-3 flex-wrap">',Array.from(e[i].color).forEach(function(t){c++,o+='<li>                                    <input type="radio" name="sizes'+e[i].id+'" id="product-color-'+e[i].id+c+'">                                    <label class="avatar-xxs btn btn-'+t+' p-0 d-flex align-items-center justify-content-center rounded-circle" for="product-color-'+e[i].id+c+'"></label>                                </li>'}),o+="</ul>"):e[i].size?(o='<ul class="clothe-size list-unstyled hstack gap-2 mb-3 flex-wrap">',Array.from(e[i].size).forEach(function(t){c++,o+='<li>                                    <input type="radio" name="sizes'+e[i].id+'" id="product-color-'+e[i].id+c+'">                                    <label class="avatar-xxs btn btn-soft-primary text-uppercase p-0 fs-12 d-flex align-items-center justify-content-center rounded-circle" for="product-color-'+e[i].id+c+'">'+t+"</label>                                </li>"}),o+="</ul>"):o='<div class="avatar-xxs mb-3">                                    <div class="avatar-title bg-light text-muted rounded cursor-pointer">                                        <i class="ri-error-warning-line"></i>                                    </div>                                </div>',l=e[i].discount.split("%")[0],d=e[i].price-e[i].price*l/100,u=0<l?(r='<div class="avatar-xs label">                                    <div class="avatar-title bg-danger rounded-circle fs-11">'+e[i].discount+"</div>                                </div>",'<h5 class="text-secondary mb-0">$'+d.toFixed(2)+' <span class="text-muted fs-12"><del>$'+e[i].price+"</del></span></h5>"):(r="",'<h5 class="text-secondary mb-0">$'+e[i].price+"</h5>"),p=document.getElementById("col-3-layout")?'<div class="col-xxl-3 col-lg-4 col-md-6">':'<div class="col-xxl-4 col-lg-4 col-md-6">',document.getElementById("product-grid").innerHTML+=p+'                        <div class="card ecommerce-product-widgets border-0 rounded-0 shadow-none overflow-hidden">                            <div class="bg-light bg-opacity-50 rounded py-4 position-relative">                                <img src="'+e[i].productImg+'" alt="" style="max-height: 200px;max-width: 100%;" class="mx-auto d-block rounded-2">                                <div class="action vstack gap-2">                                    <button class="btn btn-danger avatar-xs p-0 btn-soft-warning custom-toggle product-action '+n+'" data-bs-toggle="button">                                        <span class="icon-on"><i class="ri-heart-line"></i></span>                                        <span class="icon-off"><i class="ri-heart-fill"></i></span>                                    </button>                                </div>                                '+r+'                            </div>                            <div class="pt-4">                                <div>                                    '+o+'                                    <a href="#!">                                        <h6 class="text-capitalize fs-15 lh-base text-truncate mb-0">'+e[i].productTitle+'</h6>                                    </a>                                    <div class="mt-2">                                        <span class="float-end">'+e[i].rating+' <i class="ri-star-half-fill text-warning align-bottom"></i></span>                                        '+u+'                                    </div>                                    <div class="tn mt-3">                                        <a href="#!" class="btn btn-primary btn-hover w-100 add-btn"><i class="mdi mdi-cart me-1"></i> Add To Cart</a>                                    </div>                                </div>                            </div>                        </div>                    </div>')}if(document.getElementById("product-grid-right")){document.getElementById("product-grid-right").innerHTML="";for(var n,s,c,o,l,d,u,p,i=(t-1)*itemsPerPage;i<t*itemsPerPage&&i<e.length;i++)e[i]&&(n=e[i].wishList?"active":"",s=e[i].arrival?'<p class="fs-11 fw-medium badge bg-primary py-2 px-3 product-lable mb-0">Best Arrival</p>':"",c=1,e[i].color?(o='<ul class="clothe-colors list-unstyled hstack gap-1 mb-3 flex-wrap d-none">',Array.from(e[i].color).forEach(function(t){c++,o+='<li>                                    <input type="radio" name="sizes'+e[i].id+'" id="product-color-'+e[i].id+c+'">                                    <label class="avatar-xxs btn btn-'+t+' p-0 d-flex align-items-center justify-content-center rounded-circle" for="product-color-'+e[i].id+c+'"></label>                                </li>'}),o+="</ul>"):e[i].size?(o='<ul class="clothe-size list-unstyled hstack gap-2 mb-3 flex-wrap d-none">',Array.from(e[i].size).forEach(function(t){c++,o+='<li>                                    <input type="radio" name="sizes'+e[i].id+'" id="product-color-'+e[i].id+c+'">                                    <label class="avatar-xxs btn btn-soft-primary text-uppercase p-0 fs-12 d-flex align-items-center justify-content-center rounded-circle" for="product-color-'+e[i].id+c+'">'+t+"</label>                                </li>"}),o+="</ul>"):o='<div class="avatar-xxs mb-3 d-none">                                    <div class="avatar-title bg-light text-muted rounded cursor-pointer">                                        <i class="ri-error-warning-line"></i>                                    </div>                                </div>',l=e[i].discount.split("%")[0],d=e[i].price-e[i].price*l/100,u=0<l?'<h5 class="mb-0">$'+d.toFixed(2)+' <span class="text-muted fs-12"><del>$'+e[i].price+"</del></span></h5>":'<h5 class="mb-0">$'+e[i].price+"</h5>",p=document.getElementById("col-3-layout")?'<div class="col-xxl-3 col-lg-4 col-md-6">':'<div class="col-lg-4 col-md-6">',document.getElementById("product-grid-right").innerHTML+=p+'                    <div class="card overflow-hidden element-item">                        <div class="bg-light py-4">                            <div class="gallery-product">                                <img src="'+e[i].productImg+'" alt="" style="max-height: 215px;max-width: 100%;" class="mx-auto d-block">                            </div>                            '+s+'                            <div class="gallery-product-actions">                                <div class="mb-2">                                    <button type="button" class="btn btn-danger btn-sm custom-toggle '+n+'" data-bs-toggle="button">                                        <span class="icon-on"><i class="mdi mdi-heart-outline align-bottom fs-15"></i></span>                                        <span class="icon-off"><i class="mdi mdi-heart align-bottom fs-15"></i></span>                                    </button>                                </div>                                <div>                                    <button type="button" class="btn btn-success btn-sm custom-toggle" data-bs-toggle="button">                                        <span class="icon-on"><i class="mdi mdi-eye-outline align-bottom fs-15"></i></span>                                        <span class="icon-off"><i class="mdi mdi-eye align-bottom fs-15"></i></span>                                    </button>                                </div>                            </div>                            <div class="product-btn px-3">                                <a href="#!" class="btn btn-primary btn-sm w-75 add-btn"><i class="mdi mdi-cart me-1"></i> Add to Cart</a>                            </div>                        </div>                        <div class="card-body">                            <div>                                '+o+'                                <a href="#!">                                    <h6 class="fs-16 lh-base text-truncate mb-0">'+e[i].productTitle+'</h6>                                </a>                                <div class="mt-3">                                    <span class="float-end">'+e[i].rating+' <i class="ri-star-half-fill text-warning align-bottom"></i></span>                                    '+u+"                                </div>                            </div>                        </div>                    </div>                </div>")}selectedPage(),1==currentPage?prevButton.parentNode.classList.add("disabled"):prevButton.parentNode.classList.remove("disabled"),currentPage==a?nextButton.parentNode.classList.add("disabled"):nextButton.parentNode.classList.remove("disabled")}function selectedPage(){for(var t=document.getElementById("page-num").getElementsByClassName("clickPageNumber"),e=0;e<t.length;e++)e==currentPage-1?t[e].parentNode.classList.add("active"):t[e].parentNode.classList.remove("active")}function paginationEvents(){function t(){return Math.ceil(productListData.length/itemsPerPage)}prevButton.addEventListener("click",function(){1<currentPage&&loadProductList(productListData,--currentPage)}),nextButton.addEventListener("click",function(){currentPage<t()&&loadProductList(productListData,++currentPage)});var e=document.getElementById("page-num");e.innerHTML="";for(var a=1;a<t()+1;a++)e.innerHTML+="<div class='page-item'><a class='page-link clickPageNumber' href='javascript:void(0);'>"+a+"</a></div>";document.addEventListener("click",function(t){"A"==t.target.nodeName&&t.target.classList.contains("clickPageNumber")&&(currentPage=t.target.textContent,loadProductList(productListData,currentPage))}),selectedPage()}function searchResult(t){0==t.length?(document.getElementById("pagination-element").style.display="none",document.getElementById("search-result-elem").classList.remove("d-none")):(document.getElementById("pagination-element").style.display="flex",document.getElementById("search-result-elem").classList.add("d-none"));for(var e=document.getElementById("page-num"),a=(e.innerHTML="",Math.ceil(t.length/itemsPerPage)),r=1;r<a+1;r++)e.innerHTML+="<div class='page-item'><a class='page-link clickPageNumber' href='javascript:void(0);'>"+r+"</a></div>"}itemsPerPage=document.getElementById("col-3-layout")?12:9,loadProductList(productListData,currentPage),paginationEvents(),Array.from(document.querySelectorAll(".filter-list a")).forEach(function(a){a.addEventListener("click",function(){var t=document.querySelector(".filter-list a.active"),e=(t&&t.classList.remove("active"),a.classList.add("active"),a.querySelector(".listname").innerHTML),t=productListData.filter(t=>t.category===e);searchResult(t),loadProductList(t,currentPage)})});var searchProductList=document.getElementById("searchProductList"),slider=(searchProductList.addEventListener("keyup",function(){var t=searchProductList.value.toLowerCase();e=t;var e,t=productListData.filter(function(t){return-1!==t.productTitle.toLowerCase().indexOf(e.toLowerCase())});searchResult(t),loadProductList(t,currentPage)}),document.getElementById("product-price-range")),arraylist=(slider&&(noUiSlider.create(slider,{start:[0,2e3],step:10,margin:20,connect:!0,behaviour:"tap-drag",range:{min:0,max:2e3},format:wNumb({decimals:0,prefix:"$ "})}),minCostInput=document.getElementById("minCost"),maxCostInput=document.getElementById("maxCost"),filterDataAll="",slider.noUiSlider.on("update",function(t,e){var a=productListData,r=(e?maxCostInput.value=t[e]:minCostInput.value=t[e],maxCostInput.value.substr(2)),i=minCostInput.value.substr(2);searchResult(filterDataAll=a.filter(t=>parseFloat(t.price)>=i&&parseFloat(t.price)<=r)),loadProductList(filterDataAll,currentPage)}),minCostInput.addEventListener("change",function(){slider.noUiSlider.set([null,this.value])}),maxCostInput.addEventListener("change",function(){slider.noUiSlider.set([null,this.value])})),[]);function sortElementsByAsc(){loadProductList(productListData.sort(function(t,e){var a=t.discount.split("%")[0],t=t.price-t.price*a/100,a=e.discount.split("%")[0],e=e.price-e.price*a/100;return t<e?-1:e<t?1:0}),currentPage)}function sortElementsByDesc(){loadProductList(productListData.sort(function(t,e){var a=t.discount.split("%")[0],t=t.price-t.price*a/100,a=e.discount.split("%")[0],e=e.price-e.price*a/100;return e<t?-1:t<e?1:0}),currentPage)}function sortElementsById(){loadProductList(productListData.sort(function(t,e){t=parseInt(t.id),e=parseInt(e.id);return t<e?-1:e<t?1:0}),currentPage)}document.querySelectorAll("#discount-filter .form-check").forEach(function(a){var r=a.querySelector(".form-check-input").value;a.querySelector(".form-check-input").addEventListener("change",function(){a.querySelector(".form-check-input").checked?arraylist.push(r):arraylist.splice(arraylist.indexOf(r),1);var e,t=productListData;searchResult(filterDataAll=a.querySelector(".form-check-input").checked&&0==r?t.filter(function(t){if(t.discount)return t=t.discount.split("%"),parseFloat(t[0])<10}):a.querySelector(".form-check-input").checked&&0<arraylist.length?(e=Math.min.apply(Math,arraylist),t.filter(function(t){if(t.discount)return t=t.discount.split("%"),parseFloat(t[0])>=e})):productListData),loadProductList(filterDataAll,currentPage)})}),document.querySelectorAll("#rating-filter .form-check").forEach(function(a){var r=a.querySelector(".form-check-input").value;a.querySelector(".form-check-input").addEventListener("change",function(){a.querySelector(".form-check-input").checked?arraylist.push(r):arraylist.splice(arraylist.indexOf(r),1);var e,t=productListData;searchResult(filterDataAll=a.querySelector(".form-check-input").checked&&1==r?t.filter(function(t){if(t.rating)return t=t.rating,1==parseFloat(t)}):a.querySelector(".form-check-input").checked&&0<arraylist.length?(e=Math.min.apply(Math,arraylist),t.filter(function(t){if(t.rating)return t=t.rating,parseFloat(t)>=e})):productListData),loadProductList(filterDataAll,currentPage)})}),document.querySelectorAll("#color-filter li").forEach(function(t){var e=t.querySelector("input[type='radio']").value;t.querySelector("input[type='radio']").addEventListener("change",function(){var t=productListData.filter(function(t){if(t.color)return t.color.some(function(t){return t==e})});searchResult(t),loadProductList(t,currentPage)})}),document.querySelectorAll("#size-filter li").forEach(function(t){var e=t.querySelector("input[type='radio']").value;t.querySelector("input[type='radio']").addEventListener("change",function(){var t=productListData.filter(function(t){if(t.size)return t.size.some(function(t){return t==e})});searchResult(t),loadProductList(t,currentPage)})}),document.getElementById("sort-elem").addEventListener("change",function(t){t=t.target.value;"low_to_high"==t?sortElementsByAsc():"high_to_low"==t?sortElementsByDesc():""==t&&sortElementsById()});var minCostInput,maxCostInput,filterDataAll,productCategoryInput,productRatingInput,productDiscountInput,hidingTooltipSlider=document.getElementById("slider-hide");hidingTooltipSlider&&(noUiSlider.create(hidingTooltipSlider,{range:{min:0,max:2e3},start:[20,800],tooltips:!0,connect:!0,pips:{mode:"count",values:5,density:4},format:wNumb({decimals:2,prefix:"$ "})}),minCostInput=document.getElementById("minCost"),maxCostInput=document.getElementById("maxCost"),filterDataAll="",hidingTooltipSlider.noUiSlider.on("update",function(t,e){var a=productListData,r=(e?maxCostInput.value=t[e]:minCostInput.value=t[e],maxCostInput.value.substr(2)),i=minCostInput.value.substr(2);searchResult(filterDataAll=a.filter(t=>parseFloat(t.price)>=i&&parseFloat(t.price)<=r)),loadProductList(filterDataAll,currentPage)})),document.getElementById("select-category")&&(productCategoryInput=new Choices(document.getElementById("select-category"),{searchEnabled:!1})).passedElement.element.addEventListener("change",function(t){var e=t.detail.value;searchResult(t=t.detail.value?productListData.filter(t=>t.category===e):productListData),loadProductList(t,currentPage)},!1),document.getElementById("select-rating")&&(productRatingInput=new Choices(document.getElementById("select-rating"),{searchEnabled:!1,allowHTML:!0,delimiter:",",editItems:!0,maxItemCount:5,removeItemButton:!0})).passedElement.element.addEventListener("change",function(t){var e,a=productRatingInput.getValue(!0);searchResult(filterDataAll=1==t.detail.value?productListData.filter(function(t){if(t.rating)return t=t.rating,1==parseFloat(t)}):0<a.length?(e=Math.min.apply(Math,a),productListData.filter(function(t){if(t.rating)return t=t.rating,parseFloat(t)>=e})):productListData),loadProductList(filterDataAll,currentPage)},!1),document.getElementById("select-discount")&&(productDiscountInput=new Choices(document.getElementById("select-discount"),{searchEnabled:!1,allowHTML:!0,delimiter:",",editItems:!0,maxItemCount:5,removeItemButton:!0})).passedElement.element.addEventListener("change",function(t){var e,a=productDiscountInput.getValue(!0);searchResult(filterDataAll=0==t.detail.value?productListData.filter(function(t){if(t.discount)return t=t.discount.split("%"),parseFloat(t[0])<10}):0<a.length?(e=Math.min.apply(Math,a),productListData.filter(function(t){if(t.discount)return t=t.discount.split("%"),parseFloat(t[0])>=e})):productListData),loadProductList(filterDataAll,currentPage)},!1);