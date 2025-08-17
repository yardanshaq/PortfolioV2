import Aurora from "./Aurora/Aurora";
import { useState, useEffect } from "react";

const PreLoader = () => {
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);
  const [fadeScreen, setFadeScreen] = useState(false);

  useEffect(() => {
    let timer = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setFadeScreen(true);
          setTimeout(() => setLoading(false), 1500); // fadeout smooth
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(timer);
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[10000] flex items-center justify-center overflow-hidden transition-opacity duration-[1300ms] ${
        fadeScreen
          ? "opacity-0 backdrop-blur-3xl bg-black"
          : "opacity-100 backdrop-blur-xl bg-black"
      }`}
    >
      {/* Aurora Background */}
      <div className="absolute inset-0 w-full h-full">
        <Aurora
          colorStops={["#577870", "#1F97A6", "#127B99"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center space-y-6 text-center">
        <p className="text-xl text-gray-300">Initializing your experience...</p>

        {/* Loading bar */}
        <div className="w-80 h-2 rounded-full bg-gray-800 overflow-hidden relative">
          <div
            className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 transition-all duration-300 ease-out"
            style={{ width: `${count}%` }}
          ></div>
        </div>

        {/* Percent */}
        <div className="text-white text-4xl font-bold">{count}%</div>
      </div>
    </div>
  );
};

export default PreLoader;
