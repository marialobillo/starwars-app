import Menu from "../components/Menu";
import { useState, useEffect } from "react";
import { getPeople, getIdFromUrl } from "./../api";
import { Link } from "react-router-dom";

const Home = () => {
    const [page, setPage] = useState<number>(1);
    const [people, setPeople] = useState([]);

    useEffect(() => {
        const fetchPeople = async () => {
            const party_people = await getPeople(page);
            console.log(party_people);
            setPeople(party_people);
        };
        fetchPeople();
    }, []);

    const handlePreviewPage = async () => {
        setPage(page - 1);
    };
    const handleNextPage = async () => {
        setPage(page + 1);
    };

    return (
        <div className="bg-black">
            <Menu />
            <div>
                <div className="flex flex-row m-4 mx-auto w-4/5">
                    <ul className="grid grid-cols-4">
                        {people &&
                            people.map((person: any, index: number) => {
                                return (
                                    <li className="m-2" key={index}>
                                        <Link
                                            to={
                                                "/profile/" +
                                                getIdFromUrl(person.url)
                                            }
                                        >
                                            <span className="text-2xl">
                                                {person.name}{" "}
                                            </span>
                                            <img
                                                className="opacity-50 transition duration-300 ease-in-out rounded-xl hover:opacity-100 shadow-cyan-400 shadow-lg hover:shadow-2lg"
                                                src={`https://starwars-visualguide.com/assets/img/characters/${getIdFromUrl(
                                                    person.url
                                                )}.jpg`}
                                                alt=""
                                            />
                                        </Link>
                                    </li>
                                );
                            })}
                    </ul>
                </div>
            </div>
            <div className="flex flex-row mx-auto items-center justify-center">
                <button
                    className="m-4 rounded-xl bg-cyan-400 hover:bg-cyan-500 transition duration-300 ease-in-out p-2 text-white hover:text-black"
                    onClick={handlePreviewPage}
                >
                    Previus Page
                </button>
                <span className="text-cyan-400">{page}</span>
                <button
                    className="m-4 rounded-xl bg-cyan-400 hover:bg-cyan-500 transition duration-300 ease-in-out p-2 text-white hover:text-black"
                    onClick={handleNextPage}
                >
                    Next Page
                </button>
            </div>
        </div>
    );
};

export default Home;
