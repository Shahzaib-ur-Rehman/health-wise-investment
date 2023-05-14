import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`


img {
  max-width: 100%;
  height: auto;
  vertical-align: bottom;
}

a {
  color: #666;
}

a,
a:hover,
a:focus {
  text-decoration: none;
  display: inline-block;
}
:root {
  --black:#0F171C;
  --sharpblack:#000;
  --white: #ffffff;
  --green: #0B8141;
  --gray:#8D9194;
  --darkgray:#363D42;
  --lightgray: #F4F5F6;
  --lightgray1:#BCBEC0;
  --mediumgray: #E3E4E5;
  --olive:#88a532;
  --blue:#0c63e4;
  
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 400;
  color: var(--white);
}

h2 {
  font-size: 20px;
  margin-bottom: 30px;
}

h3 {
  font-size: 20px;
  margin-bottom: 10px;
  font-weight: 600;
}

h4 {
  font-size: 16px;
  margin-bottom: 10px;
  font-weight: 600;
}

h5 {
  font-size: 14px;
  font-weight: 700;
  color: var(--sharpblack);
}

h6 {
  font-size: 10px;
}

p {
  margin-bottom: 15px;
}

ul {
  padding: 0;
  margin: 0;
  list-style: none;
}
.text-left{text-align: left;}
.text-right{text-align: right;}
/* Home Banner Css start here  */
.homeBanner{overflow: hidden; }
.homeBanner img{margin-top: -1px;margin-bottom: -1px;}
.bannerText{position: absolute;left: 0;top: 50%; width: 100%; transform:translateY(-50%);-ms-transform:translateY(-50%);-webkit-transform:translateY(-50%); }
.BannerCaption {max-width: 456px;}
.BannerCaption h1{font-size: 18px; line-height: 1; font-weight: 400;color: var(--white);}
/* Home Banner Css end here  */

/* Home Page Css */
.pageHead{position: relative; padding: 80px 0; color: var(--sharpblack);font-size: 16px;}
.pageHead h1{color: var(--sharpblack); font-size: 25px;font-weight: 600;}
.pageHead .container{position: relative; z-index: 99;}
.pageInfo{max-width: 715px;}
.pageHead:after{content: ""; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.5); position: absolute;left: 0; top: 0;}
.liveChat{position: absolute;right: 15px; bottom: 15px; z-index: 99;}

.instantWtihdrawals{background-color: var(--darkgray); padding: 30px 0 0 0; overflow: hidden;color: var(--white);}
.instantWtihdrawals br{display: none;}
.instantWtihdrawals a{color: var(--white); text-decoration: underline;}
.instantWtihdrawals a:hover{color: var(--green);}
.iwTexBox {color: var(--white);padding: 20px 25px;}
.iwTexBox .InnerBox{max-width: 400px;}
.iwTexBox.bxLeft .InnerBox{ text-align:left; }
.iwTexBox.bxRight{background-color: var(--gray);}
.tradingStrategy{padding: 30px 0;}
.tradingStrategy h2{margin-bottom: 30px;color: var(--sharpblack); font-weight: 600; margin-bottom: 60px;}
.accountBox{padding: 32px; position: relative;}
.accountBox .btn{position: absolute; right: 15px; bottom:7px;}
.accountBox.standard{ background-color:var(--black);  color:var(--white); }
.accountBox.professional{background-color: var(--lightgray); color:var(--sharpblack);}
.accountBox.professional h3,
.accountBox.professional h4{ color:var(--sharpblack); }
.accountBox.professional .btn{background-color: transparent; color: var(--sharpblack);}
.accountBox h3{margin-bottom: 30px;}
.accountBox .smallDesc{ margin-bottom:60px; font-size:20px; }
.accountBox p{font-size: 17px;}
.numbers{color: var(--sharpblack); padding: 30px 0; background-color: var(--lightgray);}
.numbers h3, .numbers h2{color: var(--sharpblack);}
.numberTxt{max-width: 500px;}
.numberStats p{margin-bottom: 40px;}
.getStarted{ color: var(--white); padding: 115px 0; background: url(../image/getstarted.png) no-repeat center center / cover;}
.getStarted h2{margin-bottom: 30px;}
.accordionSection{padding: 60px 0; background-color: var(--lightgray);}
.accordionSection .h2{color: var(--sharpblack);}
.accordionSection .accordion-button{background-color: var(--mediumgray);}
.accordionSection .accordion-button:not(.collapsed) {
    color: var(--blue);
    background-color: #e7f1ff;
    box-shadow: inset 0 -1px 0 rgba(0,0,0,.125);
}
.accordionSection .accordion-body{text-align: left;}
.accordion-item{border:3px solid var(--white);}
.accordionSection .col-md-6{margin-bottom: 3px;}

@media (min-width: 576px) {
  .iwTexBox {padding: 50px 25px;}
  .pageHead h1{font-size: 30px}
}
@media (min-width: 768px) {
  .pageHead h1{font-size: 47px}
 
}
@media (min-width: 992px) {
  h2 {font-size: 42px;margin-bottom: 15px;}
  h3 {font-size: 32px;}
  /* Home Banner Css start here  */
  .BannerCaption h1{font-size: 23px; line-height: 1.5; margin-bottom: 80px;}
  /* Home Banner Css end here  */

  /* Home Page Css */
.instantWtihdrawals{ padding: 80px 0 0 0;}
.instantWtihdrawals br{display: block;}
.iwTexBox {padding: 80px 40px;}
.iwTexBox.bxLeft{background-color: var(--black); padding-left: 9%;}
.tradingStrategy, .numbers{padding: 80px 0;}
.pageHead{font-size: 23px; padding-bottom: 25%;}
.pageHead.default-pb{padding-bottom: 30px}
.pageHead h1{font-size: 57px}

}
@media (min-width: 1200px) {
  
  .pageHead h1{font-size: 68px}
}


`;
