import { NavLink } from "react-router";
import { ChevronRight, User } from "lucide-react";

const Header = () => {
  return ( 
    <header className="flex justify-between items-center py-4 px-10">
      <NavLink className="text-4xl font-bold bg-gradient-to-r from-[#ff0024] to-[#f8e800] bg-clip-text text-transparent" to={"/"} end>
        KiberBet
      </NavLink>
      <div className="flex gap-10 font-medium">
      <NavLink to={"/cases"} end>
          Кейсы
        </NavLink>
        <NavLink to={"/roulette"} end>
          Рулетка
        </NavLink>
        <NavLink to={"/"} end>
          Монетка
        </NavLink>
        <NavLink to={"/"} end>
          Ставки
        </NavLink>
        <NavLink to={"/"} end>
          Слоты
        </NavLink>
      </div>
      <NavLink className="flex items-center gap-2" to={"/profile"} end>
        <div className="flex justify-center items-center p-3 bg-zinc-700 rounded-full w-fit">
          <User />
        </div>
        <div>
          <div>Привет, <span className="font-bold">Кирилл</span></div>
          <div className="flex items-center justify-center gap-1 opacity-40">
            Перейти в профиль
            <ChevronRight width={16} height={16}/>
          </div>
        </div>
      </NavLink>
    </header>
   );
}
 
export default Header;