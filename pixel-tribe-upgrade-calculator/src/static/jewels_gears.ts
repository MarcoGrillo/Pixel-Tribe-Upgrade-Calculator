import { StatName } from "src/app/models/enums/stat-name";
import { Gear } from "src/app/models/gear";


export const JEWELS_GEARS: Gear[] = [
  {
    name: "Divine Ring of Wulf Tamer",
    stats: [
      {
        name: StatName.HP,
        maxValue: 1935
      },
      {
        name: StatName.AGI,
        maxValue: 387
      },
    ]
  },
  {
    name: "Legendary Ring of Wulf Tamer",
    stats: [
      {
        name: StatName.HP,
        maxValue: 1486
      },
      {
        name: StatName.AGI,
        maxValue: 297
      },
    ]
  },
  {
    name: "Strong Ring of Life",
    stats: [
      {
        name: StatName.HP,
        maxValue: 1728
      },
    ]
  },
  {
    name: "Strong Amulet of Life",
    stats: [
      {
        name: StatName.HP,
        maxValue: 2340
      },
    ]
  },
];



