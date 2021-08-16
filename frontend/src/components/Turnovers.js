import { useState } from "react";

const Turnovers = () => {
    const [options] = useState([
        "Einkommen",
        "Lebensmittel",
        "Shopping",
        "Wohnung",
        "Restaurant",
        "..."
    ])

    const Option = options.map(Option => Option)
    const handleOptions = (e) => { console.log((options[e.target.value])) }

    return (
        <>
            <h1>Umsätze</h1>
            <form>
                <select onChange={e => handleOptions(e)}>
                    {Option.map((select, key) =>
                        <option key={key} value={key}>
                            {select}
                        </option>)}
                </select>
                <input type="text" value="" placeholder="Beschreibung" />
                <input type="number" value="" placeholder="Geldbetrag" />
                inp
                <input type="date" name="" id="" placeholder="Datum" />
                <input type="submit" value="Abschicken" />
            </form>
        </>);
}

export default Turnovers;