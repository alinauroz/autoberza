import { DynamicSectionsResponse } from '@/types';

export default function separateSectionFields(
  fields: DynamicSectionsResponse[]
) {
  const sections: { [section: string]: DynamicSectionsResponse[] } = {};

  fields?.forEach((field) => {
    if (sections[field.section || 'Basic']) {
      sections[field.section || 'Basic'].push(field);
    } else {
      sections[field.section || 'Basic'] = [field];
    }
  });

  return sections;
}
