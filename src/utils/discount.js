export const discount = (price, percent) => {
    return price - (price / 100 * percent);
}
