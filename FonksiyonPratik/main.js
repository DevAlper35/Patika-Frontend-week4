var hesapA = {
    ad : "Sena Turan",
    hesapNo : "12365478",
    bakiye : 2000,
    ekHesap : 1000
}

var hesapB = {
    ad : "Emel Turan",
    hesapNo : "32165478",
    bakiye : 3000,
    ekHesap : 2000
}

function paraCek (hesap,miktar){
    console.log(`Merhaba ${hesap.ad}`);
    if(hesap.bakiye >= miktar){
        console.log("Paranızı alabilirsiniz")
    }else{
        console.log("Ek hesaptan kullanılacaktır")
    }

}

paraCek(hesapA,2000)