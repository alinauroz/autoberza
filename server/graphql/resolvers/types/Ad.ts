import prisma from '@/prisma/prisma';

export const submittedByUser = async ({
  submittedBy,
}: {
  submittedBy: string;
}) => {
  return prisma.user.findFirst({ where: { id: submittedBy } });
};
