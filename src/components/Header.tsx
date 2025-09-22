import SearchBar from "./SearchBar";

const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-[100] py-5 ">
            <div className="max-w-6xl mx-auto px-6 md:px-6 flex justify-between items-center">
                <div className="flex-shrink-0">
                    <h1 className="text-2xl lg:text-4xl font-bold text-red-600">REACTFLIX</h1>
                </div>

                <SearchBar />
            </div>
        </header>
    )
}

export default Header;