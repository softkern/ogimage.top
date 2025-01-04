"use client";

import Script from "next/script";

const Umami = () => {
  return (
    <>
      {process.env.NEXT_PUBLIC_UMAMI_URL && process.env.NEXT_PUBLIC_UMAMI_ID ? (
        <>
          <Script
            defer
            src={process.env.NEXT_PUBLIC_UMAMI_URL}
            data-website-id={process.env.NEXT_PUBLIC_UMAMI_ID}
          />
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Umami;
