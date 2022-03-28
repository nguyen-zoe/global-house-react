import { useState, useEffect } from "react";

const useHouses =() => {
 //to store and access the house/use component state - private to the component
 const [allHouses, setAllHouses] = useState([]);
 useEffect(() => {  //only call one time
   const fetchHouses = async () => {
     const rsp = await fetch("/houses.json");
     const houses = await rsp.json();
     setAllHouses(houses);
     }
     fetchHouses();
 }, []); // everytime the value in the array[] changes the function will fire

 //return not JSX
 return allHouses;

};

export default useHouses;