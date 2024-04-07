let sayi = prompt("Haftanın kaçıncı günündesin")

switch(sayi)
{
    case "1":
        console.log("Günlerden Pazartesi");
        break;

    case "2":
        console.log("Günlerden Salı");
        break;

    case "3":
        console.log("Günlerden Çarşamba");
        break;

    case "4":
        console.log("Günlerden Perşembe");
        break;

    case "5":
        console.log("Günlerden Cuma");
        break;

    case "6":
        console.log("Günlerden Cumartesi");
        break;

    case "7":
        console.log("Günlerden Pazar");
        break;
    
    default:
        console.log("Girilen sayı 1-7 arasında olmalıdır")
    
}