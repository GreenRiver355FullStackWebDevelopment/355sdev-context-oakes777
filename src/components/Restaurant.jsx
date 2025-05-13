function Restaurant({ restaurant: { name, address, phone, cuisine, rating } }) {
  return (
    <div className="restaurant">
      <h2>{name}</h2>
      <ul>
        <li>{address}</li>
        <li>{phone}</li>
        <li>{cuisine}</li>
        <li>{rating}</li>
      </ul>
    </div>
  );
}
//added export line - was getting blank screen without this!
export default Restaurant;