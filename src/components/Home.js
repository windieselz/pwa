import React, { Component } from 'react'
import { withGoogleMap, GoogleMap, Marker } from 'google-map-react';




export default class Home extends Component {

  constructor(props) {
    super(props);

  }

  onMapLoad(){

  }

  onMapClick(){

  }


  render () {
    const mapKey = "AIzaSyAX8ymm2PisBtC66D8hKL66NRvk-yQb4gs"
    const props = this.props
    const GettingStartedGoogleMap = withGoogleMap(props => (
      <GoogleMap
        apiKey={mapKey}
        ref={props.onMapLoad}
        defaultZoom={3}
        defaultCenter={{ lat: -25.363882, lng: 131.044922 }}
        onClick={props.onMapClick}
        >
        /*{props.markers.map((marker, index) => (
          <Marker
            {...marker}
            onRightClick={() => props.onMarkerRightClick(index)}
          />
        ))}*/
      </GoogleMap>
    ));

    return (
      <div>
        Home. Show map here
        <div className="map">
           <GettingStartedGoogleMap
              containerElement={
                <div style={{ height: `100%` }} />
              }
              mapElement={
                <div style={{ height: `100%` }} />
              }
              />
           ddwadwdwd
        </div>
      </div>
    )
  }
}
