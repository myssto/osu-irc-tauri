export default function Login() {
  return (
    <div className="bg-white/30 w-2/5 h-2/3 md:w-[300px] md:h-[450px] flex flex-col items-center justify-center rounded-sm">
      <div className="text-2xl size-32 text-center m-4">osu-irc-tauri</div>
      <form className="flex flex-1 w-full flex-col space-y-2 p-4 justify-end">
        <input
          className="border border-black rounded-md"
          placeholder="Username"
        />
        <input
          className="border border-black rounded-md"
          placeholder="Password"
        />
        <button className="border border-black rounded-md">Login</button>
        <label className="inline-flex items-center gap-2">
          <input className="size-3" type="checkbox" />
          <span className="select-none">Remember credentials</span>
        </label>
      </form>
    </div>
  );
}
