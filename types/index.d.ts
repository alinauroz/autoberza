import type * as Prisma from '@prisma/client';

export interface IGqlContext {
  user?: Prisma.User | null;
  isAdmin?: boolean;
}

export type DynamicSectionsResponse =
  | {
      type: 'checkbox';
      label: string;
      section: string;
    }
  | {
      type: 'text';
      label: string;
      section: string;
      addon?: string;
    }
  | {
      type: 'select';
      label: string;
      section: string;
      options: string[];
    };
