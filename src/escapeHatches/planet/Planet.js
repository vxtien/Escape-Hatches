import { useState, useEffect } from 'react';
import { fetchData } from './api.js';

const Planets=()=>{
  const [planetList, setPlanetList] = useState([])
  const [planetId, setPlanetId] = useState('');

  const [placeList, setPlaceList] = useState([]);
  const [placeId, setPlaceId] = useState('');

  useEffect(() => {
    let ignore = false;
    fetchData('/planets').then(result => {
      if (!ignore) {
        console.log('Fetched a list of planets.');
        setPlanetList(result);
        setPlanetId(result[0].id); 
      }
    });
    return () => {
      ignore = true;
    }
  }, []);
  useEffect(() => {
    if (planetId === '') {
      return;
    }

    let ignore = false;
    fetchData('/planets/' + planetId + '/places').then(result => {
      if (!ignore) {
        console.log('Fetched a list of places on "' + planetId + '".');
        setPlaceList(result);
        setPlaceId(result[0].id);
      }
    });
    return () => {
      ignore = true;
    }
  }, [planetId]);
  const handleChangePlanet=(e)=>{
    setPlanetId(e.target.value)
  }
  const handleChangePlace=(e)=>{
    setPlaceId(e.target.value)
  }
  return (
    <>
      <label>
        Pick a planet:
        <select value={planetId} onChange={handleChangePlanet}>
          {planetList.map(planet =>
            <option key={planet.id} value={planet.id}>{planet.name}</option>
          )}
        </select>
      </label>
      <label>
        Pick a place:
        <select value={placeId} onChange={handleChangePlace}>
          {placeList.map(place =>
            <option key={place.id} value={place.id}>{place.name}</option>
          )}
        </select>
      </label>
      <hr />
      <p>You are going to: {placeId || '???'} on {planetId || '???'} </p>
    </>
  );
}
export default Planets;