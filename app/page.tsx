export default function Home() {
  return (
    <main className="w-full min-h-screen flex items-center justify-center font-[family-name:var(--font-space-mono)] relative">
      <div className="relative flex items-center justify-center z-10 transition-all">
        <p className="peer cursor-default">NullPoint</p>
        <div className="duration-500 lg:peer-hover:opacity-100 lg:opacity-0 [clip-path:polygon(0%_0%,_38.25%_0%,_0%_38.25%,_0%_0%)] rotate-45 absolute -bottom-5 size-4 bg-white rounded-xs"></div>
        <div className="duration-500 lg:peer-hover:opacity-100 lg:opacity-0 bg-white text-black text-xs rounded pb-1 pt-0.75 px-1.5 flex items-center justify-center w-fit absolute -bottom-7">
          <p>soon</p>
        </div>
      </div>
      <div className="size-60 outline-1 rounded-full outline-white/5 absolute"></div>
    </main>
  );
}
