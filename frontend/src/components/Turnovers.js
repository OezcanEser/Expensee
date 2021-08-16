import { useState } from 'react';

const optionData = [
  'kategorie',
  'einkommen',
  'lebensmittel',
  'shopping',
  'wohnung',
  'restaurant',
];

const Turnovers = () => {
  //   const [options, setOptions] = useState({
  //     kategorie: 'kategorie',
  //     einkommen: 'einkommen',
  //     lebensmittel: 'lebensmittel',
  //     shopping: 'shopping',
  //     wohnung: 'wohnung',
  //     restaurant: 'restaurant',
  //   });
  const [data, setData] = useState('');
  //   console.log(options, setOptions, data);

  console.log(data);

  let valueChoice = optionData.map((el) => {
    return (
      <option key={el} value={el}>
        {el}
      </option>
    );
  });

  return (
    <>
      <h1>Umsätze</h1>
      <form>
        <select onChange={(event) => setData(event.target.value)}>
          {valueChoice}
          {/* <option value='kategorie'>Kategorie</option>
          <option value='einkommen'>Einkommen</option>
          <option value='lebensmittel'>Lebensmittel</option>
          <option value='shopping'>Shopping</option>
          <option value='wohnung'>Wohnung</option>
          <option value='restaurant'>Restaurant</option> */}
        </select>
        <input type='text' value='' placeholder='Beschreibung' />
        <input type='number' value='' placeholder='Geldbetrag' />
        <input type='date' name='' id='' placeholder='Datum' />
        <input type='submit' value='Abschicken' />
      </form>
    </>
  );
};

export default Turnovers;
