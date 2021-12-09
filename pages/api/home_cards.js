export default function handler(req, res) {
  const data = [
    {
      key: 1,
      title: `BURN FOSSIL FUELS`,
      desc: `Well not every one goes camping but...`,
      content: `A vast majority of the population (except Vegans) consume products manufactured by companies whose industrious activities and transportation involve burning of these fossil fuels. This therefore makes us indirectly responsible for the GHG emitted by these processes as consumers.`,
      align: `left`,
      button: false,
      accent: `FUELS`,
      bgColor: `#7E4016`,
    },
    {
      key: 2,
      title: `REFUSE/WASTE DISPOSAL`,
      desc: `Now this is something we all do...`,
      content: `Garbage bins, plastic bags, waste sewers, pits, and every other form of waste disposal methods lead to decomposition of organnic waste content. This actively releases Methane (CH4) which comes in second in  to carbon with about 16% prominence in total GHG.`,
      align: `right`,
      button: false,
      accent: `WASTE`,
      bgColor: `#422E19`,
    },
    {
      key: 3,
      title: `TRANSPORTATION`,
      desc: `We drive, we fly, we sail, we rail... 
       if that's a thing`,
      content: `Yeah, i think you get the point, we move from one location to another in vehicles as our daily activities call for transportation, these vehicles have combustion engines that release gases from their exhausts. And sometimes tyres.`,
      align: `left`,
      button: false,
      accent: `CARS`,
      bgColor: `#176676`,
    },
    {
      key: 4,
      title: `CONSUME ENERGY`,
      desc: `The biggest contributing factor to GHG...`,
      content: `Power grids, home appliances, light bulbs, the list goes on. These are major energy consumers and they all draw their power from a power grid or a form of power generator which is actively contributing to GHG emissions.`,
      align: `right`,
      button: true,
      accent: `ENERGY`,
      bgColor: `#143468`,
    },
  ];
  res.status(200).json(data);
}
