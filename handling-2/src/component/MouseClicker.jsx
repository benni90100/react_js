import "./MouseClicker.css"
export function MouseClicker() {
    function handleClick(e) {
        console.log(e.target.baseURI);
        console.log(e.target.name);
    }
  return (
    <>
      
        <button onClick={handleClick} name="one">
            cliccami
          <img
            src="https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRRv9ICxXjK-LVFv-lKRId6gB45BFoNCLsZ4dk7bZpYGblPLPG-9aYss0Z0wt2PmWDb"
            alt="cat"
          />
        </button>
      
    </>
  );
}
//nb ho messo un pò di css perché l'img era troppo grande
