import React, { useEffect, useRef } from 'react';
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { Icon, Style } from 'ol/style';
import { fromLonLat } from 'ol/proj';

const OpenLayersMap = () => {
  const mapRef = useRef(null);
  const popupRef = useRef(null);

  useEffect(() => {
    const map = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new XYZ({
            url: 'https://cartodb-basemaps-{a-d}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png',
            attributions: '© CARTO'
          })
        })
      ],
      view: new View({
        center: fromLonLat([-71.2250, -34.9829]), // Coordenadas de Curicó, Chile
        zoom: 10 // Zoom inicial
      })
    });

    const marker = new Feature({
      geometry: new Point(fromLonLat([-71.2250, -34.9829])) // Coordenadas del marcador
    });

    const markerStyle = new Style({
      image: new Icon({
        anchor: [0.5, 1],
        src: 'https://openlayers.org/en/latest/examples/data/icon.png' // Icono del marcador
      })
    });

    marker.setStyle(markerStyle);

    const markerLayer = new TileLayer({
      source: new XYZ({
        attributions: '© CARTO',
        url: 'https://cartodb-basemaps-{a-d}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png',
        features: [marker]
      })
    });

    map.addLayer(markerLayer);

    map.on('click', (event) => {
      const feature = map.forEachFeatureAtPixel(event.pixel, (feature) => feature);
      if (feature === marker) {
        const coordinate = event.coordinate;
        const [x, y] = map.getPixelFromCoordinate(coordinate);
        const popupElement = popupRef.current;
        popupElement.style.display = 'block';
        popupElement.style.left = `${x}px`;
        popupElement.style.top = `${y - 40}px`; // Ajusta la posición vertical
      } else {
        popupRef.current.style.display = 'none';
      }
    });

    return () => map.dispose();
  }, []);

  return (
    <>
      <div ref={mapRef} style={{ width: '100%', height: '100vh', position: 'relative' }}></div>
      <div ref={popupRef} className="ol-popup" style={{ display: 'none', position: 'absolute', backgroundColor: '#fff', padding: '15px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', borderRadius: '4px', zIndex: 1000 }}>
        <p>Marcador en Curicó, Chile</p>
        <button className="ol-popup-closer" onClick={() => popupRef.current.style.display = 'none'} style={{ position: 'absolute', top: '5px', right: '5px', backgroundColor: '#fff', border: 'none', cursor: 'pointer' }}>Cerrar</button>
      </div>
    </>
  );
};

export default OpenLayersMap;
