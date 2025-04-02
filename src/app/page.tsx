import Image from "next/image";
import mainImage from "../assets/images/main.jpg"

export default function Home() {
  return (
    <>
      <Image src={mainImage} alt="Main image" ></Image>
      <h1>Hello Nest.js!</h1>
    </>
  );
}
