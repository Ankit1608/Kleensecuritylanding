import React from "react";
import MainCard from "./components/MainCard";
import ctfpublic from "./images/hackarena.gif";

function Ctfpublic() {
  return (
    <div id="ctf-public">
      <MainCard
        img={ctfpublic}
        mainheading1="Hackarena"
        mainheading2="Pat on the back for breaking the doors."
        subheading1="Hackers, gets featured."
        subheading2=" Host, Validate and Repeat "
        content="A dedicated capture the flag platform to make your ideas work by deploying and conducting various types of
        Cyberfied Competitions. Platform built ready for Enterprises to evaluate employee knowledge on security skills
        in a single click. Hosting customized labs and tasks that aligns and monitor user progress to a further step.
        For more details, visit Hackarena through the Host now button below."
        link="https://hackarena.kleensecurity.com"
        flag={true}
      ></MainCard>
    </div>
  );
}

export default Ctfpublic;
