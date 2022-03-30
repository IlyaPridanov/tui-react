import { Link } from 'react-router-dom';

function Catalog () {
  return (
    <>
      <h1>Каталог</h1>
      <ul>
        <li>
          <Link to="big-tui">Большие туи</Link>
        </li>
        <li>
          <Link to="min-tui">Маленькие туи</Link>
        </li>
      </ul>
    </>
  )
}

export default Catalog;