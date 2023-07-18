export interface IItem {
  id: number;
  icon: string;
  text: string;
}

const items: IItem[] = [
  {
    id: 1,
    icon: 'list',
    text: 'outline for a...',
  },
  {
    id: 2,
    icon: 'list-02',
    text: 'bullet list of...',
  },
  {
    id: 3,
    icon: 'heading-square',
    text: 'headline for a...',
  },
  {
    id: 4,
    icon: 'paragraph-square',
    text: 'paragraph about...',
  },
  {
    id: 5,
    icon: 'multi-paragraph-square',
    text: 'couple paragraphs about...',
  },
  {
    id: 6,
    icon: 'menu-05',
    text: 'sentence about...',
  },
  {
    id: 7,
    icon: 'lightbulb-02',
    text: 'few ideas for...',
  },
  {
    id: 8,
    icon: 'info-circle',
    text: 'bit of information about...',
  },
  {
    id: 9,
    icon: 'mail-02',
    text: 'email to...',
  },
];

export default items;
