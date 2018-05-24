/* global google */
import React from 'react';
import { compose, withProps, lifecycle } from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer,
} from 'react-google-maps';


const MapWithADirectionsRenderer = compose(
  withProps({
    googleMapURL: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: '100%' }} />,
    containerElement: <div style={{ height: '400px' }} />,
    mapElement: <div style={{ height: '100%' }} />,
  }),
  withScriptjs,
  withGoogleMap,
  lifecycle({
    componentDidMount() {
      getDirections = getDirections.bind(this);
      getDirections('25.204849,55.270783', '25.125386, 55.227821');
    },
    componentWillReceiveProps(nextProps) {
      getDirections = getDirections.bind(this);
      if (nextProps.fromLocation && nextProps.toLocation);
      getDirections(nextProps.fromLocation, nextProps.toLocation);
    },
  }),
)(props =>
  <GoogleMap
    defaultZoom={7}
    defaultCenter={new google.maps.LatLng(41.8507300, -87.6512600)}
  >
    {props.directions && <DirectionsRenderer directions={props.directions} />}
  </GoogleMap>);

export default MapWithADirectionsRenderer;

function getDirections(fromLocation, toLocation) {
  const DirectionsService = new google.maps.DirectionsService();
  const {fromLocationPoints, toLocationPoints} = formatPoints(fromLocation, toLocation);

  DirectionsService.route({
    origin: new google.maps.LatLng(fromLocationPoints[0], fromLocationPoints[1]),
    destination: new google.maps.LatLng(toLocationPoints[0], toLocationPoints[1]),
    travelMode: google.maps.TravelMode.DRIVING,
  }, (result, status) => {
    if (status === google.maps.DirectionsStatus.OK) {
      this.setState({
        directions: result,
      });
    } else {
      console.error(`error fetching directions ${result}`);
    }
  });
}

function formatPoints(fromLocation, toLocation){
  const fromLocationPoints = fromLocation.split(',').map(Number)
  const toLocationPoints = toLocation.split(',').map(Number)
  return {fromLocationPoints, toLocationPoints};
}