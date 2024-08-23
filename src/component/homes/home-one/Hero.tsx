import Image from "next/image"
import Link from "next/link"

import hero_thumb from "@/assets/img/update/hero/hero-1-1.jpg"
import CountdownClock from "@/ui/CountDownClock"
// import { useTranslation } from 'next-i18next';

const Hero = () => {
// const { t } = useTranslation('common');

   return (
      <div className="hero-wrapper hero-1">
         <div className="hero-bg-gradient">
         </div>
         <div className="ripple-shape">
            <span className="ripple-1"></span>
            <span className="ripple-2"></span>
            <span className="ripple-3"></span>
            <span className="ripple-4"></span>
            <span className="ripple-5"></span>
         </div>

         <div className="container">
            <div className="hero-style1">
               <div className="row flex-row-reverse">
                  <div className="col-lg-3">
                     <div className="hero-thumb alltuchtopdown">
                        <Image src={hero_thumb} alt="img" />
                     </div>
                  </div>
                  <div className="col-lg-9">
                     <h1 className="hero-title">FLY ICO de FlowNFT el futuro del arte</h1>
                     <div className="btn-wrap">
                        <Link href="/#BuywithBnborCreditCard" className="btn btn2" >
                           Comprar tokens
                        </Link>
                        <Link href="/#gitbook" className="btn btn-two" >
                          White Paper
                        </Link>
                     </div>
                  </div>

               </div>
            </div>
            <div className="hero-countdown-wrap">
               <h2 className="hero-countdown-wrap-title">ICO empezará</h2>
               <ul className="skill-feature_list">
                  <li><span>Valor</span> de la tecnología invertida</li>
                  <li><span>Venta</span> privada</li>
                  <li><h4>ICO</h4></li>
               </ul>
               <div className="skill-feature">
                  <div className="progress">
                     <div className="progress-bar" style={{ width: "80%" }}>
                     </div>
                  </div>
                  <div className="progress-value-max">100 Min $</div>
               </div>
               <ul className="skill-feature_list style2">
                  <li>7.75 Min</li>
                  <li>1.5 Min</li>
                  <li>140,000 $ chosen</li>
               </ul>
               <div className="banner-countdown-wrap">
                  <div className="coming-time" data-countdown="2024/8/29">
                  <CountdownClock />
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Hero
