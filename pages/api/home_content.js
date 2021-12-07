export default function handler(req, res) {
  res.status(200).json([
    {
      key: 1,
      content: `Coal trains and locomotives dragging on railways...`,
    },
    {
      key: 2,
      content: `Planes releasing as much GHG as they can afford...`,
    },
    {
      key: 3,
      content: `Cities generating a tremendous amount of power energy...`,
    },
    {
      key: 4,
      content: `Waste, roughly disposed without recycling...`,
    },
    {
      key: 5,
      content: `Large quantity of industrious gas waste...`,
    },
  ]);
}
