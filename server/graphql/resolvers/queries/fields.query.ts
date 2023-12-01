import prisma from '@/prisma/prisma';
import translateFields from '@/server/utils/translateFields';
import { IGqlContext } from '@/types';

export const forms = async (
  _1: unknown,
  _2: unknown,
  { locale }: IGqlContext
) => {
  const forms = await prisma.formFields.findMany({});
  if (locale === 'mr') {
    forms.forEach((form) => {
      form.fields = translateFields(form.fields);
    });
  }
  return forms;
};
