import React from "react";
import MainCard from "./components/MainCard";
import ctfprivate from "./images/ctfprivate.gif";

function Ctfenterprise() {
  return (
    <div id="ctf-enterprise">
      <MainCard
        img={ctfprivate}
        mainheading1="Battle Stash"
        mainheading2="A Place where “Hackers” forks."
        subheading1="Be a CyberWarrior. "
        subheading2="Break, Defeat and Repeat "
        content="Practice the most fun and addictive vulnerably designed challenges from Kleen Security. Enhance your 
        Penetration testing skills by specific challenges around security area of your choice. Get your ranking and
        training progress of your learnings to develop more in your area of interests. For more details, Visit our
        Battlestash portal with the help of Play now button hanging below."
        link="https://battlestash.kleensecurity.com"
        flag={false}
      ></MainCard>
    </div>
  );
}

export default Ctfenterprise;
