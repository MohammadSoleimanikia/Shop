export default function addCurrency(num1,num2) {
    const total = (Math.round(num1*100)+Math.round(num2*100))
    return total / 100;
  }
  