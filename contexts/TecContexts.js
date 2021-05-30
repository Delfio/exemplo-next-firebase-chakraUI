import React, { createContext } from 'react';

import firebase from '../lib/firebase';

const TecContext = createContext();

const TecProvider = ({ children }) => {
  const [techs, setTechs] = React.useState([]);

  React.useEffect(() => {
    firebase
      .firestore()
      .collection('tech')
      .get()
      .then((ref) => {
        const allTechs = ref.docs.map((el) => el.data());

        console.log(allTechs);
      });
  }, []);

  return (
    <TecContext.Provider
      value={{
        techs,
      }}
    >
      {children}
    </TecContext.Provider>
  );
};

export default TecProvider;
