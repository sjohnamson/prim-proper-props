import SilverWare from "../SilverWare/SilverWare";

function DinnerSupplies({ guestList }) {
    let count = guestList.length * 2;
    <>
        <SilverWare name="Spoons" count={count} />
        <SilverWare name="Forks" count={count} />
        <SilverWare name="Knives" count={count} />
    </>
}
export default DinnerSupplies


