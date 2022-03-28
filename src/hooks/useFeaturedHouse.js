import { useMemo } from "react";

const useFeaturedHouse = (allHouses) =>{
    const featuredHouse = useMemo(() => {
        if (allHouses.length) {
          //check if it contains any item to determine the featuredHouse
          const randomIndex = Math.floor(Math.random() * allHouses.length);
          return allHouses[randomIndex];
        }
      }, [allHouses]);
      return featuredHouse;
};

export default useFeaturedHouse;