import React, { useState } from 'react';

import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';

const BillingDetails = () => {
  const [state, setState] = useState({
    country: 'Canada',
    region: '',
  });

  const [name, setName] = useState();
  const [card, setCard] = useState();

  const selectCountry = (val) => {
    setState({
      ...state,
      country: val,
    });
  };

  const selectRegion = (val) => {
    setState({ ...state, region: val });
  };

  return (
    <div className="section billing-details">
      <h3 className="bold my-5">Billing Details</h3>
      <div className="d-flex ml-3">
        <h4 className="col-6 label">Country*</h4>
        <h4 className="col-6 label">Province*</h4>
      </div>
      <div className="d-flex flex-wrap justify-content-around select-country">
        <div className="col-5 option">
          <CountryDropdown value={state.country} onChange={(val) => selectCountry(val)} />
        </div>
        <div className="col-5 option">
          <RegionDropdown
            country={state.country}
            value={state.region}
            onChange={(val) => selectRegion(val)}
          />
        </div>
      </div>

      <div className="form p-5  my-5">
        <input
          className="input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name on Card"
        />
        <input
          className="input"
          value={card}
          onChange={(e) => setName(e.target.value)}
          placeholder="Card Number"
        />
        <div className="d-flex ">
          <input
            className="input mr-5"
            value={card}
            onChange={(e) => setName(e.target.value)}
            placeholder="MM / YY"
          />
          <input
            className="input w-50"
            value={card}
            onChange={(e) => setName(e.target.value)}
            placeholder="CVV"
          />
        </div>
        <input
          className="input"
          value={card}
          onChange={(e) => setName(e.target.value)}
          placeholder="Zip / Postal Code"
        />

        <div className="secure-connection m-4 d-flex justify-content-center align-items-end">
          <i className="bi bi-shield-lock-fill icon" />
          <h5 className="ml-2">Secure Connection</h5>
        </div>
      </div>

      <div className="test-card color">
        <span className="">
          *Please use the following mock credit card for testing payments*
        </span>
        <div className="pl-5 mt-3">
          Address: any place
          <br />
          Name on Card: any name
          <br />
          Card Number: 4242 4242 4242 4242
          <br />
          MM / YY: 01/23
          <br />
          CVV: 123
          <br />
          Zip: 10000
        </div>
      </div>
    </div>
  );
};

export default BillingDetails;
