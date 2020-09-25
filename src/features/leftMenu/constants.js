import keymirror from 'keymirror';

export const MenuTypes = keymirror({
  MAIN: null,
  SUB: null,
  SECTION: null
});

export const MenuItems = [
  {
    name: `Dashboard`,
    type: MenuTypes.MAIN,
    icon: `flaticon-home`,
    link: `/`
  },
  {
    name: `Summaries`,
    type: MenuTypes.SECTION
  },
  {
    name: `Create Summary`,
    type: MenuTypes.MAIN,
    icon: `flaticon2-plus`,
    link: `/summary/add`
  },
  {
    name: `Generated in PDF`,
    type: MenuTypes.MAIN,
    icon: `fas fa-file-pdf`,
    link: `/`
  },
  {
    name: `In progress`,
    type: MenuTypes.MAIN,
    icon: `flaticon2-circular-arrow`,
    link: `/`
  },
  {
    name: `Workflow`,
    type: MenuTypes.SECTION
  },
  {
    name: `Tasks`,
    type: MenuTypes.SUB,
    subItems: [
      {
        name: `All tasks`,
        type: MenuTypes.SUB,
        icon: `doc`
      },
      {
        name: `In progress`,
        type: MenuTypes.SUB,
        icon: `doc`
      },
      {
        name: `In review`,
        type: MenuTypes.SUB,
        icon: `doc`
      }
    ]
  }
];

export default MenuItems;
