import prisma from '@/prisma/prisma';
import type * as Prisma from '@prisma/client';

export const createFieldForm = async (
  _: unknown,
  { category, fields }: Prisma.FormFields
) => {
  if (!fields) {
    throw new Error('fields are required');
  }
  const form = await prisma.formFields.create({
    data: {
      category,
      fields,
    },
  });
  return form;
};

export const updateFieldForm = async (
  _: unknown,
  { id, category, fields }: Prisma.FormFields
) => {
  if (fields === null) {
    throw new Error('Fields are required');
  }
  const updatedForm = await prisma.formFields.update({
    where: { id },
    data: { category, fields },
  });
  return updatedForm;
};

export const deleteFieldForm = async (
  _: unknown,
  { id }: Prisma.FormFields
) => {
  const deletedForm = await prisma.formFields.delete({
    where: { id },
  });
  return deletedForm;
};
