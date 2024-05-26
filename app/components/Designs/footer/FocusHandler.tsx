"use client"
import React, { useRef, useState, useEffect } from "react";
import { Dialog, CustomImage } from '../../';
import WHATSAPP from "/public/whatsapp.svg";
import EMAIL from "/public/email.svg";
import GMAIL from "/public/gmail.svg";

interface IndexProps {
  placeholder: string;
  textButton: string;
  theme: string;
}

const Index = ({ placeholder, textButton, theme }: IndexProps) => {

  const [isClient, setIsClient] = useState(false);
  const [message, setMessage] = useState('');
  const [encodedMessage, setEncodedMessage] = useState('');
  const [deviceWidth, setDeviceWidth] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth;
    } else {
      return 0;
    }
  });

  const modalRef = useRef<HTMLDialogElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const onFocusHandler = () => {
    modalRef.current?.show();
    setMessage(textAreaRef.current?.value || '');
  }

  const closeHandler = () => {
    modalRef.current?.close();
  };

  //change direction depending on the screen size
  const whatsappHref = deviceWidth > 768
    ? `https://web.whatsapp.com/send?phone=4441934444&text=${encodedMessage}`
    : `https://api.whatsapp.com/send?phone=4441934444&text=${encodedMessage}`;
  const deviceEmail = `mailto:carlosovalle@soultech.studio?body=${encodedMessage}`
  const gmailHref = deviceWidth > 768 ? `https://mail.google.com/mail/?view=cm&fs=1&to=carlosovalle@soultech.studio&body=${encodedMessage}` : ``

  useEffect(() => {
    setIsClient(true);
  }, [deviceWidth]);

  useEffect(() => {
    //set message to sent 
    const encodedMessage = encodeURIComponent(message)
    setEncodedMessage(encodedMessage)
  }, [message]);

  return (

    <>
      <textarea cols={30} rows={6}
        placeholder={placeholder}
        ref={textAreaRef}
      />

      <button onClick={onFocusHandler}>{textButton}</button>
      <Dialog onClick={() => closeHandler()} ref={modalRef} className={`input__${theme}`}>
        {
          isClient ? (
            <>
              <CustomImage src={WHATSAPP} links figcaption href={whatsappHref} alt="carlos raul amaro whatsapp" className="icon">
                use
                Whatsapp
              </CustomImage>
              <CustomImage src={EMAIL} links figcaption href={deviceEmail} alt="carlos raul amaro emaill" className="icon">
                use
                Email
              </CustomImage>
              {
                deviceWidth > 768 ? (
<CustomImage src={GMAIL} links figcaption href={gmailHref} alt="carlos raul amaro gmail" className="icon">
                    use Gmail
              </CustomImage>
                ) : (
                  <div></div>
                )
              }
            </>
          )
            :
            (<div></div>)
        }
      </Dialog>
    </>
  );
};

export default Index;
