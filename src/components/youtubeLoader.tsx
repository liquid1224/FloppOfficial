import React, { useEffect, useRef, useState } from "react";
import * as Vanilla from "./youtubeLoader.css";
import { useIsDarkModeContext } from "../styles/context";

type YouTubeLoaderProps = {
  id: string;
};
export const YouTubeLoader = ({ id }: YouTubeLoaderProps) => {
  //darkmode state
  const isDarkMode = useIsDarkModeContext();
  //intersecting state
  const [isIntersecting, setIsIntersecting] = useState(false);
  //youtube ref object
  const youtubeRef = useRef<HTMLDivElement>(null);
  //start observing entry of the youtube element after rendering
  useEffect(() => {
    //observer option
    const options = {
      root: null,
      rootMargin: `0px`,
      threshold: 0.5,
    };
    //define observer
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        observer.unobserve(entry.target);
      }
    }, options);
    //observation of the youtube element
    if (youtubeRef.current) observer.observe(youtubeRef.current);
    return () => {
      if (youtubeRef.current) observer.unobserve(youtubeRef.current);
    };
  }, []);

  return (
    <div ref={youtubeRef} className={`${Vanilla.YouTubeWrapper} ${isDarkMode ? Vanilla.Dark : ""}`}>
      {isIntersecting ? (
        <iframe src={`https://www.youtube.com/embed/${id}`} className={`${Vanilla.YouTube} ${Vanilla.Contents}`} loading="lazy" />
      ) : (
        <div className={`${Vanilla.YouTube} ${Vanilla.PlaceHolder}`} />
      )}
    </div>
  );
};
