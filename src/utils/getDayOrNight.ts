export default function getDayOrNightIcon(
    iconName: string,
    dateTimeString: string
):string{
const hours= new Date(dateTimeString).getHours();
const isDayTime= hours >= 6 && hours < 18; //consider day time frpm 6am to 6pm
return isDayTime ? iconName.replace(/.$/, "d"): iconName.replace(/.$/, "n");
}