import React, { useEffect, useState } from "react";
import { FaBell, FaRegCalendarAlt } from "react-icons/fa";

// WEATHER ICONS
import {
  WiDaySunny,
  WiNightClear,
  WiCloudy,
  WiRainMix,
  WiStormShowers,
  WiSnow,
  WiDayHaze,
} from "react-icons/wi";

import { profileAPI } from "../Api/api"; // ⭐ IMPORT PROFILE API

export default function Topbar() {
  const [currentTime, setCurrentTime] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  const [weather, setWeather] = useState(null);

  // ⭐ USER STATE
  const [user, setUser] = useState(null);

  // 🔵 FETCH USER PROFILE
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await profileAPI();
        setUser(res.data.user);
      } catch (err) {
        console.log("Profile Error:", err);
      }
    };
    fetchProfile();
  }, []);

  // 🔵 WEATHER FETCH
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch(
          "https://api.openweathermap.org/data/2.5/weather?q=Kolkata&appid=082f135195d80501379a461dbad34d4c&units=metric"
        );
        const data = await res.json();

        const hour = new Date().getHours();

        setWeather({
          temp: data.main?.temp,
          desc: data.weather[0]?.main,
          title: data.weather[0]?.description,
          hour: hour,
        });
      } catch (error) {
        console.log("Weather Error:", error);
      }
    };

    fetchWeather();
    const interval = setInterval(fetchWeather, 600000);

    return () => clearInterval(interval);
  }, []);

  // 🔵 SELECT WEATHER ICON
  const getWeatherIcon = () => {
    if (!weather) return null;

    const isNight = weather.hour >= 18 || weather.hour < 6;

    switch (weather.desc) {
      case "Clear":
        return isNight ? (
          <WiNightClear size={35} color="#ffcc00" />
        ) : (
          <WiDaySunny size={35} color="#ffaa00" />
        );

      case "Clouds":
        return <WiCloudy size={35} color="#6b7280" />;

      case "Rain":
        return <WiRainMix size={35} color="#3b82f6" />;

      case "Thunderstorm":
        return <WiStormShowers size={35} color="#facc15" />;

      case "Snow":
        return <WiSnow size={35} color="#93c5fd" />;

      case "Haze":
      case "Mist":
      case "Fog":
        return <WiDayHaze size={35} color="#191c24ff" />;

      default:
        return <WiCloudy size={35} color="#6b7280" />;
    }
  };

  // 🔵 DATE + TIME HANDLER
  useEffect(() => {
    const updateDateTime = () => {
      const date = new Date();

      const options = { month: "long", day: "numeric" };
      const formattedDate = date.toLocaleDateString("en-US", options);

      const weekday = date.toLocaleDateString("en-US", { weekday: "long" });

      const time = date.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });

      setCurrentDate(`${formattedDate}, ${weekday}`);
      setCurrentTime(time);
    };

    updateDateTime();
    const timer = setInterval(updateDateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="d-flex justify-content-between align-items-center px-4 py-3">
      
      {/* LEFT: DATE + TIME + WEATHER */}
      <div className="d-flex align-items-center gap-4">

        {/* Weather */}
        {weather && (
          <div className="d-flex align-items-center gap-2">
            {getWeatherIcon()}
            <div className="d-flex flex-column">
              <span className="fw-bold">{weather.temp}°C</span>
              <small className="text-muted">{weather.title}</small>
            </div>
          </div>
        )}

        {/* Date + Time */}
        <div className="d-flex align-items-center gap-3">
          <FaRegCalendarAlt size={22} className="text-dark" />
          <div className="d-flex flex-column">
            <span className="fw-bold" style={{ fontSize: "18px" }}>
              {currentDate}
            </span>
            <span className="text-muted" style={{ marginTop: "-4px" }}>
              {currentTime}
            </span>
          </div>
        </div>
      </div>

      {/* RIGHT: NOTIFICATION + USER */}
      <div className="d-flex align-items-center gap-4">

        {/* Notification */}
        <div className="position-relative">
          <FaBell size={22} className="text-dark" />
          <span
            className="badge bg-danger position-absolute top-0 start-100 translate-middle"
            style={{ fontSize: "10px" }}
          >
            3
          </span>
        </div>

        {/* USER PROFILE */}
        <div className="d-flex align-items-center">

          <img
            src={
              user?.profilePicture
                ? `https://ahaan-software.onrender.com/${user.profilePicture}`
                : "https://ahaanmedia.com/asc/All/blog-dp.png"
            }
            alt="user"
            className="rounded-circle me-2  shadow-lg "
            width="50"
            height="50"
          />

          <span className="me-3 fw-bold" style={{ fontSize: "16px" }}>
            {user?.name || "Loading..."}
          </span>

        </div>
      </div>
    </div>
  );
}
