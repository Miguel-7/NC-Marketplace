function SellItemPage(){

return (
    <div>
        <h2>Sell Item</h2>
        <form>
            <label for="name"> Name </label>

            <input type="text" id="name" name="name"/><br/>
            
            <label for="image"> Picture </label>

            <input type="url" id="image" name="image"/><br/>
            
            <label for="price">  Price  </label>

            <input type="number" id="price" name="price"/><br/>
            
            <label for="description">  Description  </label>

            <input type="text" id="description" name="description"/><br/>
            
            <label for="category"> Select category </label>
            
            <select name="category" id="category">
                <option value="electronics"> Electronics </option>
                <option value="relics"> Relics </option>
                <option value="household"> Household </option>
            </select>
        </form>
    </div>
);
}

export default SellItemPage;