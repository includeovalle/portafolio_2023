import React from "react";
import Link from "next/link";
import { Footer, Ul } from "../../";
import Input from "./FocusHandler";

interface IndexProps {
  theme: "primary" | "secondary" | "tertiary";
}

const Index = ({ theme }: IndexProps) => {
  // <Link href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCKHQdLbxgWJLPSKVBsWGVgSDTmMXHzlGMGxSmJNPhMBwWVFmHKxZMHJPQMGcvwwfRDWXTML"
  //   target="_blank"
  // />


  const thisRepo = [
    "github repo", "storybook"
  ]

  const contactMe = [
    "github repo", "storybook"
  ]

  return (
    <Footer className={theme}>
      <div>

        <h3>contact</h3>
        <Input/>

      </div>

      <section>
        <div>
          <h3>about this project</h3>
          <Ul  lis={thisRepo} links={true} />
        </div >

        <div>
          <h3>about me</h3>
          <Ul>
            <Link href="/"><li></li></Link>
            <li></li>
          </Ul>
        </div >
      </section>

      <Link href='https://www.soultech.studio' target="_blank">
        <p> Soultech studio... 🚀</p>
      </Link>
    </Footer>
  );
};

export default Index;
