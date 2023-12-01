export default function translateFields(fields: any) {
  fields.forEach((field: any) => {
    if (field.label && field.labelMn) {
      field.label = field.labelMn;
    }
    if (field.label && field.labelMn1) {
      field.label = field.labelMn1;
    }
    if (field.label2 && field.labelMn2) {
      field.label2 = field.labelMn2;
    }
    if (field.placeholder && field.placeholderMn) {
      field.placeholder = field.placeholderMn;
    }
  });
  return fields;
}
