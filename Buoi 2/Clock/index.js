function Dong_ho() {
    var gio = document.getElementById("gio");
    var phut = document.getElementById("phut");
    var giay = document.getElementById("giay");
    var Gio_hien_tai = new Date().getHours();
    var Phut_hien_tai = new Date().getMinutes();
    var Giay_hien_tai = new Date().getSeconds();
    if (Gio_hien_tai<10){
        gio.innerHTML ='0' + Gio_hien_tai;
    } else gio.innerHTML = Gio_hien_tai;
    
    if (Phut_hien_tai<10){
        phut.innerHTML ='0' + Phut_hien_tai;
    } else phut.innerHTML = Phut_hien_tai;
    
    if (Giay_hien_tai<10){
        giay.innerHTML ='0' + Giay_hien_tai;
    } else giay.innerHTML = Giay_hien_tai;
}
var Refresh = setInterval(Dong_ho, 1000);