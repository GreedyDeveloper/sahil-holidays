export const formatINR = (amount) => {
    if (isNaN(amount)) return '';
    return '₹' + new Intl.NumberFormat('en-IN').format(amount);
};