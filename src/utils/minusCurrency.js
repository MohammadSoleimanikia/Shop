export default function minusCurrency(num1,num2){
    const minus = (Math.round(num1*100)-Math.round(num2*100))
    return minus / 100;
}