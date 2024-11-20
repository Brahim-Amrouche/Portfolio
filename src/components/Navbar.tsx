
function Navbar() {
  return (
	<nav className="w-full h-12 flex flex-row justify-center gap-12 p-4 font-doto font-extrabold text-xl text-black fixed">
		<a>Home <hr className="mt-1 h-[2px] bg-black"/></a>
		<a>About</a>
		<a>Skills</a>
		<a>Contact</a>
	</nav>
  )
}

export default Navbar