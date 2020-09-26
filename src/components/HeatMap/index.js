import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4maps from '@amcharts/amcharts4/maps';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import am4geodata_usaLow from '@amcharts/amcharts4-geodata/usaLow';
import { useSelector } from 'react-redux';

import { X } from 'react-bootstrap-icons';

import { Modal, Container } from './styles';

am4core.useTheme(am4themes_animated);
export default function HeatMap(props) {
  const residences = useSelector((state) => state.residences);

  useEffect(() => {
    var chart = am4core.create('chartdiv', am4maps.MapChart);

    chart.geodata = am4geodata_usaLow;

    chart.projection = new am4maps.projections.AlbersUsa();

    var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

    polygonSeries.heatRules.push({
      property: 'fill',
      target: polygonSeries.mapPolygons.template,
      min: chart.colors.getIndex(1).brighten(1),
      max: chart.colors.getIndex(1).brighten(-0.3),
      logarithmic: true,
    });

    polygonSeries.useGeodata = true;

    const data = {};

    residences.map((item) => {
      item.id = item.state;

      if (!data[item.state]) {
        data[item.state] = item;
      } else {
        data[item.state].value += item.value;
      }
    });

    polygonSeries.data = Object.values(data);

    const heatLegend = chart.createChild(am4maps.HeatLegend);
    heatLegend.series = polygonSeries;
    heatLegend.align = 'right';
    heatLegend.valign = 'bottom';
    heatLegend.height = am4core.percent(80);
    heatLegend.orientation = 'vertical';
    heatLegend.valign = 'middle';
    heatLegend.marginRight = am4core.percent(4);
    heatLegend.valueAxis.renderer.opposite = true;
    heatLegend.valueAxis.renderer.dx = -25;
    heatLegend.valueAxis.strictMinMax = false;
    heatLegend.valueAxis.fontSize = 9;
    heatLegend.valueAxis.logarithmic = true;

    var polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText = '{name}: {value}';
    polygonTemplate.nonScalingStroke = true;
    polygonTemplate.strokeWidth = 0.5;

    var hs = polygonTemplate.states.create('hover');
    hs.properties.fill = am4core.color('#3c5bdc');

    function handleHover(column) {
      if (!isNaN(column.dataItem.value)) {
        heatLegend.valueAxis.showTooltipAt(column.dataItem.value);
      } else {
        heatLegend.valueAxis.hideTooltip();
      }
    }

    polygonSeries.mapPolygons.template.events.on('out', () => {
      heatLegend.valueAxis.hideTooltip();
    });

    polygonSeries.mapPolygons.template.events.on('over', (event) => {
      handleHover(event.target);
    });

    polygonSeries.mapPolygons.template.events.on('hit', (event) => {
      handleHover(event.target);
    });
  }, []);

  return (
    <Container show={props.show}>
      <Modal>
        <X onClick={props.close} className="close-icon" size={25} />
        <div id="chartdiv" style={{ width: '100%', height: '500px' }} />
      </Modal>
    </Container>
  );
}

HeatMap.propTypes = {
  show: PropTypes.bool,
  close: PropTypes.func,
};
