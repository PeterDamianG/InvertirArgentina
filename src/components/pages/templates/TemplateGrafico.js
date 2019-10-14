//Importacion de React.
import React from 'react';
//Importacion de Victory y sus componentes para crear graficos.
import { VictoryBar, VictoryVoronoiContainer, VictoryChart, VictoryAxis, VictoryTheme, VictoryTooltip } from 'victory';

//Contenido del componente.
const TemplateGrafico = props => (
  <VictoryChart
    width={props.x}
    height={props.y}
    domainPadding={20}
    theme={VictoryTheme.material}
    containerComponent={
      <VictoryVoronoiContainer voronoiDimension="x"
        labels={({ datum }) => `${props.textbar}: ${props.simbol}${datum.y} \nFecha: ${datum.x}`}
        labelComponent={<VictoryTooltip flyoutStyle={{ fill: "white" }} />} />
    }
  >
    <VictoryAxis
      tickFormat={(t) => `${(t.slice(8) + t.slice(4, 7))}`}
    />
    <VictoryAxis
      label={props.sidelabel}
      style={{ axisLabel: { padding: 40 } }}
      dependentAxis
      tickFormat={(x) => (`${props.simbol} ${x}`)}
    />
    <VictoryBar
      animate={{
        duration: 2000,
        onLoad: { duration: 1000 }
      }}
      data={props.data}
      style={{
        data: { stroke: "black", strokeWidth: ({ active }) => active ? 1 : 0.5, fill: ({ active }) => active ? "#f44336" : "#3f51b5" },
        labels: { fill: "black" }
      }}
    />
  </VictoryChart>
);

export default TemplateGrafico;