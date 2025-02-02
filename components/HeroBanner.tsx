import Image from "next/image";

export default function HeroBanner() {
  return (
    <div className="flex flex-row md:flex-row justify-around">
      {/* Photo and About */}
      <section
        id="about"
        className="flex flex-col gap-2 w-[400px] items-center justify-center"
      >
        <h1 className="text-4xl text-center">Rajneesh Mishra</h1>
        <p className="text-center">
          Hey! I am Rajneesh Mishra. Currently a student at IIIT Kota in
          Electronics and Communications Engineering. Have a passion for
          Computer Science and love Web Development.
        </p>
      </section>
      <section id="image" className="w-[1/2]">
        <Image
          src={"/IMG_20240407_203234045_Cropped.jpg"}
          width={300}
          height={300}
          alt="Rajneesh's Image"
          draggable={false}
          contentEditable={false}
          className="h-[320px] border-2 border-gray-500 rounded-[50%]"
        />
      </section>
    </div>
  );
}
