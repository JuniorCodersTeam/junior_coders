import {useEffect} from "react"
import { Logo } from "../components/Logo";
import Image from 'next/image'


export const Banner = ({resBanner}) => {

    useEffect(()=> {
        console.log(resBanner[0].fields)
    },[])

    

    return(
        <>
            <div className="banner-container">
            
                <Image
                    src={resBanner[0].fields.bannerImage.fields.file.url.replace("//", "https://")}
                    alt="Something"
                    layout="fill"
                    // height={200}
                    // width={500}
                    objectFit="cover"
                    quality={100}
                    priority={true}
                    className="banner-image"
                />
                <div className="banner-content">
                    <div className="banner--logo-wrapper">
                        <Logo />
                    </div>
                        <h2 className="banner-text">
                            {resBanner[0].fields.bannerDescription}
                            <span className="banner-text-author"><br/>- {resBanner[0].fields.bannerTextAuthor} -</span>
                        </h2>
                    </div>
                </div>
                    
            
        </>
        
    )
}