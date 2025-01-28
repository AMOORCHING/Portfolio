// make a navbar using header. It shoudl be centered with margins on the left and right with 3 buttons (1) 'home' on the left (2)email on the right (3)github on the right

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="flex justify-between items-center p-4">
      <div>
        <Link href="/">Home</Link>
      </div>
      <div className="flex gap-4">
        <Link href="https://www.linkedin.com/in/akash-moorching">LinkedIn</Link>
        <Link href="https://github.com/amoorching">Github</Link>
      </div>
    </header>
  );
}