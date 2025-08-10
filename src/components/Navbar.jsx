import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Lucas Patrício</h1>
      <ul className="flex space-x-4">
        <li><Link to="/">Início</Link></li>
        <li><Link to="/about">Sobre</Link></li>
        <li><Link to="/projects">Projetos</Link></li>
        <li><Link to="/resume">Currículo</Link></li>
        <li><Link to="/contact">Contato</Link></li>
      </ul>
    </nav>
  );
}
