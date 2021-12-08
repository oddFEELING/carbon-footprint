import React from 'react';

const useConvert = (props) => {
  let CARBON_TOTAL = 0;
  let electric;
  let entertainment;
  let light;
  let personalVehicle;
  let publicVehicle;
  let flight;

  //-->  declare defaults
  const kwh = (data, param) => {
    return param * 0.23314 * 0.001 * data;
  };

  const UserInfo = props;
  //--------------------------------------->   electric handler
  function handleElectric() {
    const fridgeTon = kwh(UserInfo.fridge_usage, 0.5);
    const freezerTon = kwh(UserInfo.freezer_usage, 0.78);
    const ovenTon = kwh(UserInfo.oven_usage, 5);
    const washerTon = kwh(UserInfo.washer_usage, 1.8);
    const microTon = kwh(UserInfo.microwave_usage, 1.2);
    const coolingTon = kwh(UserInfo.cooling_usage, 0.9);

    //   get total
    electric =
      (fridgeTon + freezerTon + ovenTon + washerTon + microTon + coolingTon) /
      Number(UserInfo.house_hold_size);
  }

  //--------------------------------------->    entertainment handler
  function handleEntertainment() {
    const tvTon = kwh(UserInfo.tv_usage, 0.22);
    const consoleTon = kwh(UserInfo.console_usage, 0.22);
    const theatreTon = kwh(UserInfo.theatre_usage, 0.32);

    //   get total
    entertainment =
      (tvTon + consoleTon + theatreTon) / Number(UserInfo.house_hold_size);
  }

  //--------------------------------------->   lighting handler
  function handleLight() {
    const incanTon = kwh(1, 0.062) * UserInfo.incandescent_bulb;
    const ledTon = kwh(1, 0.01) * UserInfo.led_bulb;

    //   get total
    light = ledTon + incanTon;
  }

  //--------------------------------------->   personla transport handler
  function handlePer() {
    const petTon = 0.1743 * 0.001 * UserInfo.petrol_car;
    const delTon = 0.16844 * 0.001 * UserInfo.diesel_car;

    //   get total
    personalVehicle = petTon + delTon;
  }

  //--------------------------------------->   public transport handler
  function handlePub() {
    const taxiTon = 0.14549 * 0.001 * UserInfo.taxi;
    const natRailTon = 0.03694 * 0.001 * UserInfo.national_rail;
    const underTon = 0.0275 * 0.001 * UserInfo.underground;

    //   get total
    publicVehicle = taxiTon + natRailTon + underTon;
  }

  //--------------------------------------->    flight handler
  function handleFlight() {
    const intTon = 0.18181 * 0.001 * UserInfo.flight_intl;
    const domTon = 0.2443 * 0.001 * UserInfo.flight_dmst;

    //   get total
    flight = (intTon + domTon) / 365;
  }

  //--------------------------------------->   main function

  (function handleAll() {
    handleElectric();
    handleEntertainment();
    handleLight();
    handlePer();
    handlePub();
    handleFlight();

    //   add all
    CARBON_TOTAL =
      electric +
      entertainment +
      light +
      personalVehicle +
      publicVehicle +
      flight;
  })();

  return Math.floor(CARBON_TOTAL * 365);
};

export default useConvert;
