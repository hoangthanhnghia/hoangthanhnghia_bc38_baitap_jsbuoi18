// var soNguyen = [];
// function myFunction() {
//     var list = document.getElementsByTagName('UL')[0];
//     list.getElementsByTagName('li')[0].innerHTML = 'Buoi';
// }

// -----------bai1----------------
var soNguyenEx1 = [];

function ex1() {
    var tong = 0;
    themSo = +document.getElementById('txtThemSo').value;
    soNguyenEx1.push(themSo,);
    console.log(soNguyenEx1);
    // tìm số dương trong mảng => cộng lại 
    for(var i = 0; i < soNguyenEx1.length; i++){
        if(soNguyenEx1[i] > 0){
            tong = tong + soNguyenEx1[i];          
        }
    }
    console.log('Tổng các số dương trong mảng là: ' + tong);
}
// ex1()
// -----------bai2----------------
var soNguyenEx2 = [];

function ex2() {
    var soDuong = 0;
    demSo = +document.getElementById('txtDemSo').value;
    soNguyenEx2.push(demSo,);
    console.log(soNguyenEx2);
    //
    for(var i = 0; i < soNguyenEx2.length; i++){
        if(soNguyenEx2[i] > 0){
            soDuong++;
        }
    }
    console.log('có ' + soDuong + ' số dương trong mảng');
}
// ex2()

// -----------bai3----------------
var soNguyenEx3 = [];

function ex3() {
    min = +document.getElementById('txtMin').value;
    soNguyenEx3.push(min,);
    console.log(soNguyenEx3);
    //
    minNumber = soNguyenEx3[0];
    for(var i = 1; i < soNguyenEx3.length; i++){
        if( minNumber > soNguyenEx3[i]){
            minNumber = soNguyenEx3[i];
        }
    }
    console.log('số nhỏ nhất trong mảng là: ' + minNumber);
}

// -----------bai4----------------
var soNguyenEx4 = [];

function ex4() {
    soDuongNN = +document.getElementById('soDuongNN').value;
    soNguyenEx4.push(soDuongNN,);
    console.log(soNguyenEx4);
    //
    soDuongNhoNhat = soNguyenEx4[0];
    for(var i = 1; i < soNguyenEx4.length; i++){
        if( soDuongNhoNhat > soNguyenEx4[i] && soNguyenEx4[i] > 0){
            soDuongNhoNhat = soNguyenEx4[i];
        }
    }
    console.log('số dương nhỏ nhất trong mảng là: ' + soDuongNhoNhat);
}

// -----------bai5----------------
var soNguyenEx5 = [];

function ex5(){
    soChanCC = +document.getElementById('soChanCC').value;
    soNguyenEx5.push(soChanCC,);
    console.log(soNguyenEx5);
    //
    soChanCuoiCung = -1;
    for(var i = 0; i < soNguyenEx5.length; i++){
        if(soNguyenEx5[i] % 2 === 0 && soNguyenEx5[i] > 0){
            soChanCuoiCung = soNguyenEx5[i];           
        }
    }
    
    console.log('số chẵn cuối cùng trong mảng là: ' + soChanCuoiCung);
}

// -----------bai6----------------








// -----------bai7----------------
var soNguyenEx7 = [];
var soTangDan = [];

function ex7() {
    tangDan = +document.getElementById('tangDan').value;
    soNguyenEx7.push(tangDan,);
    console.log(soNguyenEx7);
    //
    soNguyenEx7.sort(function(a, b) {
        return a - b;
    }
    );
    console.log(soNguyenEx7);
}

    // firstNumber = soNguyenEx7[0];
    // minNumber = soNguyenEx7[0];
    // rong = 0;
    // for(var i = 1; i < soNguyenEx7.length; i++){
    //     if( minNumber > soNguyenEx7[i]){
    //         rong = soNguyenEx7[i];
    //         soTangDan.push(rong);
    //         console.log(soTangDan);

    //     }else{
    //         soTangDan.push(minNumber);
    //         return minNumber;
    //     }

    // }
    // soTangDan.push();
    
    // console.log(soTangDan);

    // console.log('sắp xếp tăng dần: ' + soTangDan);

    // ascending = '';
    // for( var i = 1; i < soNguyenEx7.length; i++) {       
    //     if( firstNumber > soNguyenEx7[i]) {
    //         ascending = soNguyenEx7[i];

    //     }
        
    // }

// -------------bai8-----------------
var soNguyenEx8 = [];

function ex8() {
    var soNT = +document.getElementById('txtSNT').value;
    soNguyenEx8.push(soNT,);
    console.log(soNguyenEx8);
    //
    var flag = true;
    for (var i = 0; i < soNguyenEx8.length; i++){
        if( soNguyenEx8[i] < 2){
                    // console.log('khong phai snt');
                flag = false;
                }else if( soNguyenEx8[i] === 2){
                        // console.log( soNguyenEx8[i] + ' la so nguyen to');
                }else if ( soNguyenEx8[i] % 2 === 0){
                    // console.log('khong phai snt');
                }else{
                    if( soNguyenEx8[i] % 1 === 0 && soNguyenEx8[i] % soNguyenEx8[i] === 0)
                    console.log( soNguyenEx8[i] + ' la so nguyen to dau tien trong mang');
                    break;
                }
            }


            if( flag === false) {
                console.log('1 khong phai la snt');
                
            }
    }
    // var flag = true;
    // nếu <2 thì ko phải là snt
    // for( var i = 0; i < soNguyenEx8.length; i++){
    //     if( soNguyenEx8[i] < 2){
    //         flag = false;
    //     }else if( soNguyenEx8[i] === 2){
    //             flag = true;
    //     }else if ( soNguyenEx8[i] % 2 === 0){
    //             flag = false;
    //     }else{
    //         for (var n = 3; n < soNguyenEx8.length; n+=2){
    //                     if ( soNT % n === 0){
    //                         flag = false;
    //                         break;
    //                     }
    //     }
    // }
    //     if (flag === true){
    //                 console.log('so nguyen to dau tien la:' + soNT);
    //             }else{
    //                 console.log('khong phai la so ngto');
    //             }
    //         }
    
    //     }

    

// ----------------bai9----------------------
var soNguyenEx9 = [];

function ex9() {
   kiemTraSN = +document.getElementById('kiemTraSN').value;
   soNguyenEx9.push(kiemTraSN,);
   console.log(soNguyenEx9);
   //
   var dem = 0;
   for( var i = 0; i < soNguyenEx9.length; i++){
    
     if(Number.isInteger(soNguyenEx9[i]) === true) {
        dem++;
     }
   }
   console.log('có ' + dem + ' số nguyên');
}

// -------------bai10------------------
var soNguyenEx10 = [];

function ex10() {
    duongAm = +document.getElementById('duongAm').value;
    soNguyenEx10.push(duongAm,);
    console.log(soNguyenEx10);
    //
    demDuong = 0;
    demAm = 0;
    for (var i = 0; i < soNguyenEx10.length; i++){
        if(soNguyenEx10[i] > 0){
            demDuong++;
        }else if(soNguyenEx10[i] < 0){
            demAm++;          
        }
    }
    if(demDuong > demAm){
        console.log('số dương nhiều hơn số âm');
    }else if( demDuong === demAm){
        console.log('số dương bằng số âm');
    }else{
        console.log('số âm nhiều hơn số dương');
    }
}








