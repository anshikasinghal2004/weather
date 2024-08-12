export default function metersToKilo(visiblityMeter:number):string{
    const visiblityKilometer=visiblityMeter/1000;
    return `${visiblityKilometer.toFixed(0)}km`;
}