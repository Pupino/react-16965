import React, { useState } from 'react';

function ItemCount() {
  const [count, setStock] = useState(0);

  const removeStock = () => {
    setStock(count - 1);
  };

  const addStock = () => {
    setStock(count + 1);
  };

  const addToCart = () => {
    console.log(
      'Acá se agregará el item al local storage y se reiniciará el valor del count'
    );
    localStorage.setItem('Producto Seleccionado', count);
    setStock(0);
  };

  return (
    <div className="btn-group" role="group" aria-label="Basic outlined example">
      <button
        type="button"
        className="btn btn-primary"
        onClick={removeStock}
        disabled={count < 1}
      >
        -
      </button>
      <button type="button" class="btn btn-info" onClick={addToCart}>
        Agregar al Carrito <span class="badge bg-secondary">{count}</span>
      </button>
      <button
        type="button"
        className="btn btn-primary"
        onClick={addStock}
        disabled={count > 4}
      >
        +
      </button>
    </div>
  );
}

export default ItemCount;
