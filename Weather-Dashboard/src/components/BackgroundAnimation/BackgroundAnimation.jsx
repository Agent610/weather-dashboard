import "./BackgroundAnimation.css";

function BackgroundAnimation({ condition }) {
  const getWeatherTheme = () => {
    const weather = condition?.toLowerCase();

    if (weather?.includes("clear")) {
      return "sunny";
    }

    if (weather?.includes("cloud") || weather?.includes("overcast")) {
      return "cloudy";
    }

    if (weather?.includes("rain") || weather?.includes("drizzle")) {
      return "rainy";
    }

    if (weather?.includes("snow")) {
      return "snowy";
    }

    if (weather?.includes("thunder")) {
      return "stormy";
    }

    return "default";
  };

  return <div className={`background-animation ${getWeatherTheme()}`} />;
}

export default BackgroundAnimation;
