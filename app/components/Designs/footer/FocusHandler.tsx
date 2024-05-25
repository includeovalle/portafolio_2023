"use client"
import React, { useRef, useState, useEffect } from "react";
import { Dialog } from '../../';

interface IndexProps {
  placeholder: string;
  textButton: string;
}

const Index = ({placeholder, textButton}) => {

  const modalRef = useRef<HTMLDialogElement>(null);

  const onFocusHandler = () => {
    modalRef.current?.show();
  }

const closeHandler = () => {
    modalRef.current?.close();
};

  const [isClient, setIsClient] = useState(false);
  const [deviceWidth, setDeviceWidth] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth;
    } else {
      return 0;
    }
  });

  useEffect(() => {
    setIsClient(true);
  }, [deviceWidth]);


  return (

    <>
      <textarea cols={30} rows={6}
        placeholder={placeholder}
      />

      <button onClick={onFocusHandler}>{textButton}</button>
      <Dialog onClick={()=>closeHandler()} ref={modalRef} className="input__primary">
        {
          isClient ? <a href="https://mail.google.com/mail/?view=cm&fs=1&to=carlosovalle@soultech.studio&subject&body=Hi there, I'm contacting you from your website about...">Contact Us</a>
            :
            (<div>option2</div>)
        }
      </Dialog>
    </>
  );
};

export default Index;

