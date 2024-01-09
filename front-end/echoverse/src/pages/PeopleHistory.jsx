import { useState } from "react";

import HistoryUsers from "../features/PeopleHistory/components/HistoryUsers";

import person from "../assets/img/person.jpg";

const person1 = {
    id: 0,
    personImg: person,
    commonTime: 50,
    similarGames: 15,
    username: "ManOfPoco",
    platforms: ["PC", "Xbox", "PS"],
};
const initialPeople = [
    person1,
    { ...person1, id: 1, username: "ManOfPoco1" },
    { ...person1, id: 2, username: "ManOfPoco2" },
    { ...person1, id: 3, username: "ManOfPoco3" },
    { ...person1, id: 4, username: "ManOfPoco4" },
    { ...person1, id: 5, username: "ManOfPoco5" },
    { ...person1, id: 6, username: "ManOfPoco6" },
    { ...person1, id: 7, username: "ManOfPoco7" },
    { ...person1, id: 8, username: "ManOfPoco8" },
    { ...person1, id: 9, username: "ManOfPoco9" },
    { ...person1, id: 10, username: "ManOfPoco10" },
    { ...person1, id: 11, username: "ManOfPoco11" },
    { ...person1, id: 12, username: "ManOfPoco12" },
    { ...person1, id: 13, username: "ManOfPoco13" },
    { ...person1, id: 14, username: "ManOfPoco14" },
    { ...person1, id: 15, username: "ManOfPoco15" },
    { ...person1, id: 16, username: "ManOfPoco16" },
];

function PeopleHistory() {
    const [historyUsers, setHistoryUsers] = useState(initialPeople);
    return (
        <div className="grid grid-cols-1 gap-5 pb-10 sm:grid-cols-2 lg:grid-cols-3">
            <HistoryUsers historyUsers={historyUsers} />
        </div>
    );
}

export default PeopleHistory;
