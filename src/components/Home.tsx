import profile from "@src/assets/profile_pic.png"

function Home() {
  return (
	<div className="w-full h-screen flex flex-row justify-around content-around items-center" id="Home">
		<div className="h-[65vh] w-auto flex flex-col justify-end self-start">
			<h1 className="font-doto font-extrabold text-5xl leading-relaxed text-black mb-8 tracking-widest">Hi There, <br/>I'm <span className="px-4 bg-blue text-white">Brahim Amrouch</span></h1>
			<h2 className="w-fit font-exo font-medium text-xl text-black tracking-widest">Software Engineer <hr className="mt-1 h-[2px] bg-gray"/></h2>
		</div>
		<div className="w-auto h-[75vh] bg-blue rounded flex flex-col justify-end self-start">
			<img className="h-64 w-auto" src={profile}></img>
		</div>
	</div>
  )
}

export default Home