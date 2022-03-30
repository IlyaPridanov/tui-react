import { useParams , Link} from "react-router-dom";


function CatalogId () {
  let {catalogName} = useParams();
  return (
    <div>
      <Link to="/catalog">Назад</Link>
      <h1>Каталог: {catalogName}</h1>
    </div>
  );
}

export default CatalogId;