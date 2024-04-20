import Side from "./ui/side";
import To from "./ui/to";
import Content from "./ui/content";

export default function Home() {
    return (
        <main>
            {/* <div className=" bg-black"> */}
            {/* <Sidenav />
                <Top />
                <Tile /> */}
            <Side />
            <To />
            <Content />
            {/* </div> */}
        </main>
    );
}
