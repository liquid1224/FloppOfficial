import React, { useEffect, useRef, useState } from "react";
import * as Vanilla from "./youtubeLoader.css";
import { useIsDarkModeContext } from "../styles/context";

type YouTubeLoaderProps = {
  src: string;
};
export const YouTubeLoader = ({ src }: YouTubeLoaderProps) => {
  //darkmode state
  const isDarkMode = useIsDarkModeContext();
  //intersecting state
  const [isIntersecting, setIsIntersecting] = useState(false);
  const youtubeRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: `0px`,
      threshold: 0.5,
    };
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        observer.unobserve(entry.target);
      }
    }, options);
    if (youtubeRef.current) observer.observe(youtubeRef.current);
    return () => {
      if (youtubeRef.current) observer.unobserve(youtubeRef.current);
    };
  }, []);
  return (
    <div ref={youtubeRef} className={`${Vanilla.YouTubeWrapper} ${isDarkMode ? Vanilla.YouTubeWrapperDark : ""}`}>
      {isIntersecting ? <iframe src={src} className={Vanilla.YouTube} loading="lazy" /> : <div className={Vanilla.YouTubePlaceHolder} />}
    </div>
  );
};
