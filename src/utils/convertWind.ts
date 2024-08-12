export default function convertWind(speedInMeter:number):string{
    const speedKilo=speedInMeter*3.6;
    return `${speedKilo.toFixed(0)}km/h`;
}