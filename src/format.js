export function formatAmount(amount, currency) {
    return amount.toLocaleString("da-DK", { style: 'currency', currency: 'DKK' , currencyDisplay: "code"}) //+ " " + currency;
}