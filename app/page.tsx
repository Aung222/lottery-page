import Main from "./ui/parts/main";
import NavSidebar from "./ui/parts/nav-sidebar";


export default function Home() {
  return (
    <div className="flex">
      <NavSidebar/>
      <Main/>
    </div>
  );
}
