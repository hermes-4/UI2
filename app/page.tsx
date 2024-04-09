import Sidenav from "./ui/side-nav";
import Top from "./ui/top";
import Tile from "./ui/tiles";

export default function Home() {
    return (
        <main className="h-screen bg-gray-200">
            <div>
                <Sidenav />
                <Top />
                <Tile />
            </div>
        </main>
    );
}
