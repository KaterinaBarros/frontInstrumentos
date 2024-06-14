import { useEffect, useState } from "react";
import Chart from "react-google-charts";
import MenuOpciones from "./MenuOpciones";
import { getDatosChartLineFetch, getDatosChartPieFetch } from "../servicios/FuncionesApi";

export const optionsLine = {
    title: "Compras Vs Ventas",
    curveType: "function",
    legend: { position: "bottom" },
};

export const optionsPie = {
    title: "Pie Chart",
};

function ChartsGoogle() {
    const [datosChartLine, setDatosChartLine] = useState<any>([["Fecha", "Valor"]]);
    const [datosChartPie, setDatosChartPie] = useState<any>([["Instrumento", "Cantidad"]]);

    const getLineChart = async () => {
        try {
            const datosChartLine = await getDatosChartLineFetch();
            const datosConvertidos = datosChartLine.map((row: any) => [new Date(row[0]), row[1]]);
            setDatosChartLine(datosConvertidos);
            console.log(datosChartLine + "line");
        } catch (error) {
            console.error('Error fetching line chart data:', error);
        }
    }

    const getPieChart = async () => {
        try {
            const datosChartPie = await getDatosChartPieFetch();
            setDatosChartPie(datosChartPie);
            console.log(datosChartPie + "torta");
        } catch (error) {
            console.error('Error fetching pie chart data:', error);
        }
    }

    useEffect(() => {
        getLineChart();
        getPieChart();
    }, []);

    return (
        <>
            <MenuOpciones />

            <Chart
                chartType="PieChart"
                data={datosChartPie}
                options={optionsPie}
                width={"100%"}
                height={"400px"}
            />
        </>
    );
}

export default ChartsGoogle;



