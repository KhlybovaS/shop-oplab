export default function changeBadge() {
    let badgeCnt = 0;
    if (localStorage.getItem('shoppingCart').length) {
        let shoppingCart = JSON.parse(localStorage.getItem('shoppingCart') || "[]"); 
        badgeCnt = shoppingCart.length
    }
    console.log('badge=', badgeCnt);
    return badgeCnt;
}