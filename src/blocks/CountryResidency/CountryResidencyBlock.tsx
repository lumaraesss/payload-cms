import { Block, Field } from 'payload';

const placeholderField: Field = {
 name: 'placeholder',
 type: 'text',
 label: 'Placeholder',
 defaultValue: '',
};

const requiredField: Field = {
 name: 'required',
 type: 'checkbox',
 label: 'Required?',
 defaultValue: true,
};

const inputLabelField: Field = {
 name: 'label',
 type: 'text',
 label: 'Input Label',
 required: true,
 defaultValue: 'Default Label',
};

const inputWidthField: Field = {
 name: 'width',
 type: 'select',
 label: 'Input Width',
 options: [
  { label: '100%', value: '100%' },
  { label: '50%', value: '50%' },
  { label: '33%', value: '33%' },
  { label: '25%', value: '25%' },
 ],
 defaultValue: '100%',
};

export const CountryResidencyBlock: Block = {
 slug: 'countryresidency',
 labels: {
  singular: 'Residency',
  plural: 'Residencies',
 },
 fields: [
  {
   name: 'country',
   type: 'group',
   fields: [
    { ...inputLabelField },
    { ...inputWidthField },
    {
     ...placeholderField,
     label: 'Country Placeholder',
    },
    {
     name: 'options',
     type: 'array',
     label: 'Country Options',
     fields: [
      {
       name: 'label',
       type: 'text',
       required: true,
      },
      {
       name: 'value',
       type: 'text',
       required: true,
      },
     ],
    },
    { ...requiredField },
   ],
  },
  {
   name: 'postalCode',
   type: 'group',
   fields: [
    { ...inputLabelField },
    { ...inputWidthField },
    { ...placeholderField, label: 'Postal Code Placeholder' },
    { ...requiredField },
   ],
  },
  {
   name: 'locality',
   type: 'group',
   fields: [
    { ...inputLabelField },
    { ...inputWidthField },
    { ...placeholderField, label: 'Locality Placeholder' },
    { ...requiredField },
   ],
  },
  {
   name: 'address',
   type: 'group',
   fields: [
    { ...inputLabelField, defaultValue: 'Address' },
    { ...inputWidthField },
    { ...placeholderField, label: 'Address Placeholder' },
    { ...requiredField },
   ],
  },
  {
   name: 'numberLot',
   type: 'group',
   fields: [
    { ...inputLabelField },
    { ...inputWidthField },
    { ...placeholderField, label: 'Number / Lot Placeholder' },
    {
     ...requiredField

    },
   ],
  },
  {
   name: 'floor',
   type: 'group',
   fields: [
    { ...inputLabelField, defaultValue: 'Floor' },
    { ...inputWidthField, defaultValue: '100%' },
    { ...placeholderField, label: 'Floor Placeholder' },
    { ...requiredField, defaultValue: false },
   ],
  },
  {
   name: 'door',
   type: 'group',
   fields: [
    { ...inputLabelField, defaultValue: 'Door' },
    { ...inputWidthField, defaultValue: '100%' },
    { ...placeholderField, label: 'Door Placeholder' },
    { ...requiredField, defaultValue: false },
   ],
  },
 ],
};