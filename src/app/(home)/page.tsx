export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      <video
        className="aspect-video h-screen object-cover -mt-14 mask-b-from-50% mask-radial-[50%_90%] mask-radial-from-80%"
        playsInline
        muted
        loop
        src="/musashi.webm"
        autoPlay
      />
    </main>
  );
}
