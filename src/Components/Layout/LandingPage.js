import React from 'react'
import classes from "./LandingPage.module.css"
import Navbar from './Navbar';
import HealthImg from "../../Assets/Healthprofessional .png"
import Support from "../../Assets/support1.png"
export default function LandingPage() {
  return (
    <div>
    <Navbar />
    <header className={classes.Header}>Make a difference in the lives of others</header>
    <img  className={classes.SupportImg} src={Support} alt="invalid_img" />
    <img  className={classes.mainImg} src={HealthImg} alt="invalid_img" />

    <div>
    <p className={classes.Text}>loremdfjggfcgjchvj,hbkj.adscasdv svasc l;,ml;yjnhdsfvsd fvds</p>
    </div>

    <div className={classes.Btn}>
    <p className={classes.Btntext}>Get Appointment</p>
    </div>
    </div>
  );
}
