import { Logo } from "./Logo";
import Image from "next/image";
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

export const Banner = ({ resBanner }) => {
  const { theme, setTheme } = useTheme()

  return (
    <>
      <div className="banner-container">
        <Image
          src={theme === 'light' ? `https:${resBanner[0].fields.bannerImage.fields.file.url}` : `https:${resBanner[0].fields.bannerImageDark.fields.file.url}`}
          alt="Banner image"
          layout="fill"
          objectFit="cover"
          objectPosition="50% 30%"
          quality={100}
          priority={true}
        />
        <div className="banner-content">
          <div className="banner--logo-wrapper">
            <Logo />
          </div>
          <h2 className="banner-text">
            {resBanner[0].fields.bannerDescription}
            <span className="banner-text-author">
              <br />- {resBanner[0].fields.bannerTextAuthor} -
            </span>
          </h2>
        </div>
      </div>
    </>
  );
};
