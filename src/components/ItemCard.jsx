export default function ItemCard({item_name, price, img_url}) {
    return (
      <article>
        <h3>{item_name}</h3>
        <p>{price}</p>
        <img src={img_url}/>
      </article>
    );
  }
  