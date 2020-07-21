import React, { useState } from 'react';
import Chart from 'react-google-charts';

import { Title, Repositories } from './styles';

const Dashbord: React.FC = () => {
  const title = "Quantidade de cadastros primeiro semestre";
  const [repositories, setRepositories] = useState([
    ['Mês', 'Quantidade'],
    ['Janeiro', 33],
    ['Feverreiro', 68],
    ['Marco', 49],
    ['Abril', 15],
    ['Maio', 80],
    ['Junho', 27]
  ]);
  
  return (
    <>
      <Title>Dashbord</Title>
      <Repositories>
        <Chart 
          chartType={"PieChart"} 
          data={repositories}
          options={{ title: title }}
        />
      </Repositories>
    </>
  );
};

export default Dashbord;