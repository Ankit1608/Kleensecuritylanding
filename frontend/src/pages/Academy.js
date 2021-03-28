import React from "react";
import MainCard from "./components/MainCard";
import academy from "./images/academy.gif";

function Academy() {
  return (
    <div id="academy">
      <MainCard
        img={academy}
        mainheading1="KLEEN ACADEMY"
        mainheading2="Place where “Hacking Ethically “ Starts"
        subheading1="Learn, Hack, and Repeat. "
        subheading2=" Figuring out is the key."
        content="Being vulnerable isn't comfortable, Learn how to Break in to security in a Cyberfied learning process.Kleen Security made it easier by providing a simplified platform to gain knowledge from Penetrating
        into a system to protecting your network on your own. For more details, visit our Kleen Academy Portal by hitting the learn more button to make your first step."
        link="https://academy.kleensecurity.com"
        flag={true}
      ></MainCard>
    </div>
  );
}

export default Academy;
