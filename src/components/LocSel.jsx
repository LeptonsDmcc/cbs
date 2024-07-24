import { GeoapifyGeocoderAutocomplete, GeoapifyContext } from '@geoapify/react-geocoder-autocomplete'
import '@geoapify/geocoder-autocomplete/styles/minimal.css'

const LocSel = () => {

  function onPlaceSelect(value) {
    console.log(value);
  }

  function onSuggectionChange(value) {
    console.log(value);
  }

  return <GeoapifyContext apiKey="77a6a0616fbd4d22ae652b352b03f67b">
    <GeoapifyGeocoderAutocomplete
      placeSelect={onPlaceSelect}
      suggestionsChange={onSuggectionChange}
    />
  </GeoapifyContext>
}

export default LocSel