import { Fragment } from "react";

export default function Logo() {
  return (
    <Fragment>
      <img
        src="/images/bg-logo.svg"
        fetchpriority="high"
        loading="lazy"
        className="logo size-10"
        alt="Logo"
      />
      <h1 style={{ marginLeft: "5px", fontWeight: 600 }}>
        Proyecto Grand Order
      </h1>
    </Fragment>
  );
}
