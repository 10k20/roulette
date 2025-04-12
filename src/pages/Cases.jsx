import Case1 from "./../assets/img/cases/case-1.png";
import Case2 from "./../assets/img/cases/case-2.png";
import Case3 from "./../assets/img/cases/case-3.png";
import Case4 from "./../assets/img/cases/case-4.png";
import Gun1 from "./../assets/img/guns/gun-1.png";
import Gun2 from "./../assets/img/guns/gun-2.png";
import Gun3 from "./../assets/img/guns/gun-3.png";
import Gun4 from "./../assets/img/guns/gun-4.png";
import { NavLink } from "react-router";

const Cases = () => {
  const cases = [
    {
      id: 0,
      name: "Кейс 1",
      price: 120,
      image: Case1,
      gun: Gun1
    },
    {
      id: 1,
      name: "Кейс 2",
      price: 120,
      image: Case2,
      gun: Gun2
    },
    {
      id: 2,
      name: "Кейс 3",
      price: 120,
      image: Case3,
      gun: Gun3
    },
    {
      id: 3,
      name: "Кейс 4",
      price: 120,
      image: Case4,
      gun: Gun4
    }
  ]
  return ( 
    <>
      <div className="py-4 px-10 flex flex-wrap justify-between">
        { cases.map((item) => (
          <NavLink className="p-4 hover:bg-zinc-800 transition diration-300 rounded-2xl flex flex-col w-fit h-fit outline-none hover:outline-zinc-700 relative" to={`${item.id}`} end>
            <p className="text-center text-2xl font-black mb-2">{item.name}</p>
            <img src={item.image} alt="case" />
            <div className="absolute flex justify-center items-center w-full h-full hover:-translate-y-4 transition duration-200">
              <img src={item.gun} alt="gun" />
            </div>
            <p className="text-right text-xl font-bold text-orange-300 border border-orange-300 w-fit px-4 py-2 self-end">{item.price}р.</p>
          </NavLink>
        )) }
      </div>
    </>
   );
}
 
export default Cases;