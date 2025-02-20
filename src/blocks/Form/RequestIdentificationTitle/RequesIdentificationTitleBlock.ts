
import { Block } from "payload";

const RequestIdentificationTitleBlock: Block = {
 slug: 'requestidentificationtitle',
 labels: {
  plural: "Form title",
  singular: "Form Title"
 },
 fields: [
  {
   name: 'maintitle',
   type: 'text',
   label: 'Main Title',
  },
  {
   name: 'subtitle',
   type: 'text',
   label: 'Subtitle',
  },
 ],
};

export default RequestIdentificationTitleBlock;