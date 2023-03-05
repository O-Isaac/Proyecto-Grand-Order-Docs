import Image from "next/image";

export default function Logo() {
  return (
    <>
      <Image className="logo" width={40} height={40} src="/images/bg-logo.svg" alt="Logo" />
      <h1 style={{ marginLeft: "5px", fontWeight: 600 }}>
        Proyecto Grand Order
      </h1>
    </>
  );
}
