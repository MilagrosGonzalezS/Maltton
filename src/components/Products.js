import styles from "../styles/Products.module.scss";
import data from "../data";

function Product({ item }) {
  return (
    <div className={styles.item}>
      <img className={styles.imgItem} src={item.image} alt={item.alt} />
      <h4 className={styles.productName}>{item.title}</h4>
      <p className={styles.productPrice}>${item.price}</p>
    </div>
  );
}

function Products() {
  return (
    <div className={styles.container}>
      <h3 className={styles.seccionProductos} id={"products"}>
        Productos
      </h3>
      <div className={styles.allItems}>
        {data.map((item) => (
          <Product item={item} />
        ))}
      </div>
    </div>
  );
}

export default Products;
