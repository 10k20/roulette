import { NavLink } from "react-router";

const Header = () => {
  return ( 
    <header className="flex justify-between items-center p-4">
      <NavLink className="text-2xl font-bold" to={"/"} end>
        KiberBet
      </NavLink>
      <div className="flex gap-10 font-medium">
        <NavLink to={"/"} end>
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
      <NavLink to={"/"} end>

        <div>Привет, Кирилл</div>
        
      </NavLink>
    </header>
   );
}
 
export default Header;