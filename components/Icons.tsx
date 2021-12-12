import type {FC} from "react";

interface IconProps{
    width:string|number;
    height:string|number;
}

const FacebookIcon:FC<IconProps> = ({width,height})=>{
    return(
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={width} height={height} viewBox="0 0 172 172" style={{fill: '#000000'}}><g fill="none" fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} strokeDasharray strokeDashoffset={0} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: 'normal'}}><path d="M0,172v-172h172v172z" fill="none" /><g fill="#ffffff"><path d="M125.59583,64.5h-25.2625v-14.33333c0,-7.396 0.602,-12.05433 11.2015,-12.05433h13.38733v-22.79c-6.5145,-0.67367 -13.06483,-1.00333 -19.62233,-0.989c-19.44317,0 -33.63317,11.87517 -33.63317,33.67617v16.4905h-21.5v28.66667l21.5,-0.00717v64.50717h28.66667v-64.5215l21.973,-0.00717z" /></g></g></svg>
    )
}

const TwitterIcon:FC<IconProps> = ({width,height})=>{
    return(
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={width} height={height} viewBox="0 0 172 172" style={{fill: '#000000'}}><g fill="none" fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} strokeDasharray strokeDashoffset={0} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: 'normal'}}><path d="M0,172v-172h172v172z" fill="none" /><g fill="#ffffff"><path d="M160.53333,39.77213c-5.4868,2.43667 -11.38067,4.0764 -17.56693,4.816c6.31813,-3.784 11.1628,-9.77533 13.44467,-16.91907c-5.90533,3.50307 -12.4528,6.04867 -19.42453,7.42467c-5.57853,-5.94547 -13.52493,-9.66067 -22.31987,-9.66067c-16.8904,0 -30.5816,13.69693 -30.5816,30.5816c0,2.39653 0.2752,4.73573 0.7912,6.966c-25.41587,-1.2728 -47.94787,-13.4504 -63.038,-31.9576c-2.62587,4.51787 -4.13373,9.7696 -4.13373,15.38253c0,10.60667 5.39507,19.9692 13.59947,25.45027c-5.01093,-0.16053 -9.72947,-1.53653 -13.85173,-3.82413c0,0.13187 0,0.25227 0,0.38413c0,14.82067 10.53787,27.18173 24.53293,29.98533c-2.5628,0.69947 -5.26893,1.07213 -8.06107,1.07213c-1.96653,0 -3.8872,-0.19493 -5.75053,-0.54467c3.89293,12.14893 15.1876,20.99547 28.5692,21.242c-10.46333,8.2044 -23.65,13.09493 -37.98333,13.09493c-2.46533,0 -4.902,-0.14333 -7.29853,-0.43c13.5364,8.67453 29.60693,13.73707 46.88147,13.73707c56.25547,0 87.00907,-46.60053 87.00907,-87.0148c0,-1.3244 -0.02867,-2.64307 -0.086,-3.956c5.97987,-4.3172 11.16853,-9.7008 15.26787,-15.82973z" /></g></g></svg>
    )
}


const InstagramIcon:FC<IconProps> = ({width,height})=>{
    return(
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={width} height={height} viewBox="0 0 172 172" style={{fill: '#000000'}}><g fill="none" fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} strokeDasharray strokeDashoffset={0} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: 'normal'}}><path d="M0,172v-172h172v172z" fill="none" /><g fill="#ffffff"><path d="M57.33333,21.5c-19.7585,0 -35.83333,16.07483 -35.83333,35.83333v57.33333c0,19.7585 16.07483,35.83333 35.83333,35.83333h57.33333c19.7585,0 35.83333,-16.07483 35.83333,-35.83333v-57.33333c0,-19.7585 -16.07483,-35.83333 -35.83333,-35.83333zM57.33333,35.83333h57.33333c11.85367,0 21.5,9.64633 21.5,21.5v57.33333c0,11.85367 -9.64633,21.5 -21.5,21.5h-57.33333c-11.85367,0 -21.5,-9.64633 -21.5,-21.5v-57.33333c0,-11.85367 9.64633,-21.5 21.5,-21.5zM121.83333,43c-3.95804,0 -7.16667,3.20863 -7.16667,7.16667c0,3.95804 3.20863,7.16667 7.16667,7.16667c3.95804,0 7.16667,-3.20863 7.16667,-7.16667c0,-3.95804 -3.20863,-7.16667 -7.16667,-7.16667zM86,50.16667c-19.7585,0 -35.83333,16.07483 -35.83333,35.83333c0,19.7585 16.07483,35.83333 35.83333,35.83333c19.7585,0 35.83333,-16.07483 35.83333,-35.83333c0,-19.7585 -16.07483,-35.83333 -35.83333,-35.83333zM86,64.5c11.85367,0 21.5,9.64633 21.5,21.5c0,11.85367 -9.64633,21.5 -21.5,21.5c-11.85367,0 -21.5,-9.64633 -21.5,-21.5c0,-11.85367 9.64633,-21.5 21.5,-21.5z" /></g></g></svg>
    )
}

const GithubIcon:FC<IconProps> = ({width,height})=>{
    return(
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={width} height={height} viewBox="0 0 172 172" style={{fill: '#000000'}}><g fill="none" fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} strokeDasharray strokeDashoffset={0} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: 'normal'}}><path d="M0,172v-172h172v172z" fill="none" /><g fill="#ffffff"><path d="M86,6.88c-43.64901,0 -79.12,35.47099 -79.12,79.12c0,43.64901 35.47099,79.12 79.12,79.12c43.64901,0 79.12,-35.47099 79.12,-79.12c0,-43.64901 -35.47099,-79.12 -79.12,-79.12zM86,13.76c39.92923,0 72.24,32.31077 72.24,72.24c0,0.24552 -0.01772,0.48741 -0.02015,0.73235c-2.20027,-0.20309 -4.7425,-0.396 -7.97516,-0.51063c-4.57079,-0.16208 -10.33212,-0.11512 -16.86406,0.20828c0.24222,-1.6868 0.412,-3.39742 0.41656,-5.15328c0.3331,-6.44182 -1.83011,-12.46824 -5.34812,-17.79125c0.84992,-2.93682 1.84695,-6.67312 2.09625,-10.91125c0.28414,-4.83072 -0.13285,-10.18735 -4.0111,-13.80703l-0.99437,-0.92719h-1.35719c-9.22976,0 -15.54738,3.86384 -19.41047,6.92703c-5.57797,-2.15912 -11.85015,-3.48703 -18.77219,-3.48703c-6.9613,0 -13.29379,1.34647 -19.1014,3.50047c-3.8609,-3.06465 -10.18405,-6.94047 -19.42391,-6.94047h-1.35047l-0.99437,0.92047c-3.77776,3.50792 -4.12581,8.71758 -3.89016,13.52485c0.20781,4.23907 1.14707,8.09406 1.98203,11.17328c-3.57748,5.42692 -5.72437,11.60915 -5.72437,17.72406c0,1.76 0.16367,3.47599 0.40312,5.16672c-6.21182,-0.28811 -11.74925,-0.34364 -16.14516,-0.18812c-3.23258,0.11436 -5.77499,0.3056 -7.97516,0.51062c-0.00205,-0.22477 -0.02016,-0.44662 -0.02016,-0.67187c0,-39.92923 32.31077,-72.24 72.24,-72.24zM49.5239,45.17015c6.94049,0.65767 12.16216,3.75687 14.57969,5.90578l1.6125,1.42438l1.98875,-0.81297c5.44019,-2.24008 11.50798,-3.52735 18.29515,-3.52735c6.78718,0 12.85663,1.2937 17.88531,3.49375l2.01562,0.88688l1.6461,-1.46469c2.41836,-2.14965 7.64888,-5.24979 14.59312,-5.90578c0.92329,1.53074 1.7256,3.70766 1.53188,7.00094c-0.23186,3.94128 -1.28611,8.23413 -2.08281,10.78359l-0.51735,1.65953l1.02797,1.40422c3.40379,4.64154 5.13929,9.66479 4.84422,14.9761l-0.00672,0.09406v0.09406c0,8.58437 -3.09122,15.45499 -9.675,20.54594c-6.58362,5.09097 -16.97718,8.3514 -31.605,8.3514c-14.62782,0 -25.02794,-3.26046 -31.61172,-8.3514c-6.58379,-5.09095 -9.66828,-11.96157 -9.66828,-20.54594c0,-5.03859 1.81947,-10.58147 5.18015,-15.16422l1.00781,-1.37062l-0.48375,-1.63266c-0.79714,-2.71029 -1.77425,-7.10104 -1.9686,-11.06578c-0.16165,-3.29766 0.61883,-5.382 1.41094,-6.77922zM30.56359,89.5139c2.43102,0.03105 5.21743,0.16227 8.00875,0.30235c0.2667,1.07258 0.5708,2.12772 0.94062,3.15781c-11.3773,0.23993 -19.88869,1.38402 -25.13484,2.365c-0.22181,-1.7212 -0.39849,-3.45659 -0.49719,-5.21375c3.87705,-0.36793 9.34249,-0.70515 16.68266,-0.61141zM141.4364,89.56765c7.33509,-0.09314 12.7985,0.2444 16.67594,0.61141c-0.09858,1.73198 -0.27225,3.44282 -0.49047,5.13984c-5.43362,-0.99682 -14.17499,-2.1407 -25.84703,-2.32469c0.36225,-1.00973 0.66387,-2.04674 0.92719,-3.09735c3.07921,-0.16505 6.08327,-0.29555 8.73437,-0.32922zM40.97765,96.38719c2.05279,4.11354 4.98596,7.7864 8.86203,10.7836c5.29947,4.09784 12.1891,6.96098 20.59969,8.4925c-1.10033,1.13056 -2.10109,2.37205 -2.98984,3.68187l-0.20828,-0.1814c0.01892,-0.02167 -1.71011,0.84367 -4.29328,1.075c-2.58317,0.23134 -5.76961,0.16125 -8.59328,0.16125c-4.214,0 -6.07012,-1.99104 -9.03672,-5.61687c-1.64275,-2.21408 -3.64546,-4.00711 -5.59,-5.36828c-1.9911,-1.39377 -3.68964,-2.37749 -5.79156,-2.72781l-0.28219,-0.04703h-0.28891c-1.60533,0 -3.15873,0.11624 -4.60906,1.77375c-0.72517,0.82876 -1.22498,2.36306 -0.90031,3.66172c0.32466,1.29866 1.14621,2.09669 1.88125,2.58672c4.70153,3.13435 5.53243,9.33781 8.47906,14.85516c2.75174,5.4831 8.69043,8.08265 14.7611,8.08265h8.94265v16.5214c-24.19073,-8.53876 -42.4335,-29.57754 -47.01781,-55.38265c5.2663,-0.99192 14.08511,-2.18446 26.07547,-2.35156zM130.31687,96.41406c12.25578,0.10491 21.32194,1.29591 26.78766,2.30453c-4.57821,25.81458 -22.82732,46.86176 -47.02453,55.40281v-17.89875c0,-5.45091 -1.79003,-11.46173 -4.90469,-16.47437c-0.94565,-1.5219 -2.05806,-2.96119 -3.29891,-4.25297c7.96435,-1.57338 14.50693,-4.38737 19.5986,-8.32453c3.86767,-2.9907 6.7943,-6.65252 8.84187,-10.75672zM81.52531,117.30265h9.63469c2.7961,0 5.78066,2.2284 8.17,6.07375c2.38934,3.84535 3.87,9.00916 3.87,12.84625v19.94797c-5.51292,1.34434 -11.27016,2.06937 -17.2,2.06937c-5.92984,0 -11.68708,-0.72504 -17.2,-2.06937v-19.94797c0,-3.75215 1.60933,-8.90376 4.1589,-12.76562c2.54958,-3.86186 5.7703,-6.15438 8.56641,-6.15438zM42.34156,121.3675c2.97826,3.08915 6.58392,5.9125 12.01312,5.9125c2.68033,0 6.02586,0.09657 9.20469,-0.18813c0.0113,-0.00101 0.02229,-0.0057 0.0336,-0.00672c-0.41881,1.20401 -0.73129,2.41546 -0.99437,3.63485h-9.62125c-4.24267,0 -7.2399,-1.53276 -8.62016,-4.29328l-0.02687,-0.04703l-0.02016,-0.04031c-0.56554,-1.05048 -1.30794,-3.15094 -1.96859,-4.97187z" /></g></g></svg>
    )
}

const LinkedinIcon:FC<IconProps> = ({width,height})=>{
    return(
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={width} height={height} viewBox="0 0 172 172" style={{fill: '#000000'}}><g fill="none" fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} strokeDasharray strokeDashoffset={0} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: 'normal'}}><path d="M0,172v-172h172v172z" fill="none" /><g fill="#ffffff"><path d="M46.45386,21.5c-7.84213,0 -14.20386,6.35123 -14.20386,14.19336c0,7.84212 6.35661,14.34033 14.19336,14.34033c7.83675,0 14.20386,-6.49821 14.20386,-14.34033c0,-7.83675 -6.35123,-14.19336 -14.19336,-14.19336zM115.75146,59.125c-11.92713,0 -18.75153,6.23743 -22.0249,12.44018h-0.34643v-10.77099h-23.50513v78.95581h24.49195v-39.08423c0,-10.2985 0.77736,-20.25073 13.52148,-20.25073c12.56137,-0.00001 12.74462,11.74261 12.74462,20.90161v38.43335h24.46045h0.03149v-43.36743c0,-21.2205 -4.56254,-37.25757 -29.37354,-37.25757zM34.20264,60.79419v78.95581h24.51294v-78.95581z" /></g></g></svg>
    )
}


export {FacebookIcon,TwitterIcon,InstagramIcon,GithubIcon,LinkedinIcon};