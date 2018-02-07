import $ from 'jquery';
import { geolocate, initAutocomplete, initMap } from './places';

export const mapContainer = () => {
  var div = document.createElement('div');
  div.id = 'map';

  $(div).ready(function (e) {
    console.log('loaded map');
    initMap();
  });

  return div;
}

export const inputContainer = () => {
  var div = document.createElement('div');
  var input = document.createElement('input');

  div.id = 'locationField';
  input.id = 'autocomplete';
  input.type = 'text';
  input.placeholder = 'Enter your address';
  input.onfocus = function () {
    geolocate();
  };
  $(input).ready(function () {
    console.log('loaded input');
    initAutocomplete();
  })
  div.appendChild(input);

  return div;
}

export const formContainer = () => {
  let div = document.createElement('div');
  div.id = 'address';

  $(div).ready(function (e) {
    console.log('loaded form');
  });

  div.innerHTML = `
    <table id="address">
      <tr>
        <td class="label">Street address</td>
        <td class="slimField"><input class="field" id="street_number"
              disabled="true"></input></td>
        <td class="wideField" colspan="2"><input class="field" id="route"
              disabled="true"></input></td>
      </tr>
      <tr>
        <td class="label">City</td>
        <td class="wideField" colspan="3"><input class="field" id="locality"
              disabled="true"></input></td>
      </tr>
      <tr>
        <td class="label">State</td>
        <td class="slimField"><input class="field"
              id="administrative_area_level_1" disabled="true"></input></td>
        <td class="label">Zip code</td>
        <td class="wideField"><input class="field" id="postal_code"
              disabled="true"></input></td>
      </tr>
      <tr>
        <td class="label">Country</td>
        <td class="wideField" colspan="3"><input class="field"
              id="country" disabled="true"></input></td>
      </tr>
    </table>`

  return div;
}