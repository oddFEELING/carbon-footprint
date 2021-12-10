export default function handler(req, res) {
  const data = [
    {
      link: `/list`,
      title: `CHECK RANKING`,
      desc: `View where you stand in comparison to other Users of the system`,
      bg: `bg_1`,
      btn: 'View list',
    },
    {
      link: `/track`,
      title: `TRACK FOOT-PRINT`,
      desc: `Track your current carbon footprint`,
      bg: `bg_2`,
      btn: 'Fill form',
    },
    {
      link: `/`,
      title: `LEARN MORE`,
      desc: `Learn more about carbon dioxide and its effects as well as other GHG, their CO2e and GWP`,
      bg: `bg_3`,
      btn: 'Visit links',
    },
  ];
  res.status(200).json(data);
}
