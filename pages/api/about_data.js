export default function handler(req, res) {
  const data = [
    {
      title: `ARE`,
      tagline: `We all want to be seen not for the choices we made ten years ago, but for who we are today.`,
      accent: `ARE`,
    },
    {
      title: `ALL`,
      tagline: `Earth is all we have in common.`,
      accent: `ALL`,
    },
    {
      title: `ABOUT`,
      tagline: `We have forgotten how to be good guests, how to walk lightly on the earth as its other creatures do.The proper use of science is not to conquer nature but to live in it`,
      accent: `TO`,
    },
    {
      title: `CHANGE`,
      tagline: `Just as Buildings are built ground up, Changes are to be made from ground up.`,
      accent: `CHANGE`,
    },
    {
      title: `HEROES`,
      tagline: `Not everyone is born a hero but everyone can become one.`,
      accent: `WE`,
    },
  ];
  res.status(200).json(data);
}
