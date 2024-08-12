import React from 'react';
import { LuEye } from "react-icons/lu";
import { FiDroplet } from "react-icons/fi";
import { FiSunrise } from "react-icons/fi";
import { FiSunset } from "react-icons/fi";
import { MdAir } from "react-icons/md";
import { ImMeter } from "react-icons/im";

export interface WeatherDetailProps {
    visibility?: string;
    humidity?: string;
    windSpeed?: string;
    airPressure?: string;
    sunrise?: string;
    sunset?: string;
}

const WeatherDetails: React.FC<WeatherDetailProps> = ({
    visibility = "25km",
    humidity = "61%",
    windSpeed = "7 km/h",
    airPressure = "1012 hPa",
    sunrise = "6:20",
    sunset = "18:48",
}) => {
    return (
        <>
            <SingleWeatherDetail
                icon={<LuEye />}
                information="Visibility"
                value={visibility}
            />
            <SingleWeatherDetail
                icon={<FiDroplet />}
                information="Humidity"
                value={humidity}
            />
            <SingleWeatherDetail
                icon={<MdAir />}
                information="Wind Speed"
                value={windSpeed}
            />
            <SingleWeatherDetail
                icon={<ImMeter />}
                information="Air Pressure"
                value={airPressure}
            />
            <SingleWeatherDetail
                icon={<FiSunrise />}
                information="Sunrise"
                value={sunrise}
            />
            <SingleWeatherDetail
                icon={<FiSunset />}
                information="Sunset"
                value={sunset}
            />
        </>
    );
}

export interface SingleWeatherDetailProps {
    information: string;
    icon: React.ReactNode;
    value: string;
}

const SingleWeatherDetail: React.FC<SingleWeatherDetailProps> = ({ information, icon, value }) => {
    return (
        <div className='flex flex-col justify-between gap-2 items-center text-xs font-semibold text-black/80'>
            <p className="whitespace-nowrap">{information}</p>
            <div className="text-3xl">{icon}</div>
            <p>{value}</p>
        </div>
    );
}

export default WeatherDetails;
