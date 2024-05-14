import reactlogo from "../../public/logo512.png";
export default function Header() {
  return (
    <header className="app-header">
      <img src={reactlogo} alt="React logo" />
      <h1 className="">The React Quiz</h1>
    </header>
  );
}
